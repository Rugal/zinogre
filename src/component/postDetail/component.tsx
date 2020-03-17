import {
  Box,
  Paper,
  Tab,
  Tabs,
  Typography,
} from "@material-ui/core";
import AddCommentIcon from "@material-ui/icons/AddComment";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import RateReviewIcon from "@material-ui/icons/RateReview";
import TocIcon from "@material-ui/icons/Toc";
import React from "react";
import ReactMarkdown from "react-markdown";

import { Post as PostDto } from "../../generated/graphql";
import Comment from "../comment";
import Diagram from "../diagram";
import Review from "../review";
import { style } from "./style";

interface ITabPanelProps {
  children?: React.ReactNode;
  clazz?: string;
  index: any;
  value: any;
}

const TabPanel = (props: ITabPanelProps) => {
  const { clazz, children, value, index, ...other } = props;

  return (
    <Typography
      className={clazz}
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
};

interface IProps {
  post: PostDto;
}

const PostDetail: React.FC<IProps> = (p) => {
  const classes = style();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Paper className={classes.root}>
      <Tabs
        className={classes.paper}
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered={true}
      >
        <Tab label="introduction" icon={<TocIcon />} />
        <Tab label="statistics" icon={<EqualizerIcon />} />
        <Tab label="review" icon={<RateReviewIcon />} />
        <Tab label="comment" icon={<AddCommentIcon />} />
      </Tabs>
      <TabPanel value={value} index={0} clazz={classes.paper}>
        <ReactMarkdown source={p.post.content} />
      </TabPanel>
      <TabPanel value={value} index={1} clazz={classes.paper}>
        <Diagram />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Review reviews={p.post.reviews} />
      </TabPanel>
      <TabPanel value={value} index={3} clazz={classes.paper}>
        <Comment pid={p.post.pid}/>
      </TabPanel>
    </Paper>
  );
};

export default PostDetail;
