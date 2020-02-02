import {
  Box,
  Button,
  Paper,
  Typography,
} from "@material-ui/core";
import CloudDownloadIcon from "@material-ui/icons/CloudDownload";
import React from "react";

import { downloadFile } from "../../app/download";
import { Post as PostDto } from "../../generated/graphql";
import { TorrentApi } from "../../generated/openapi";
import Rate from "../rating";
import { style } from "./style";

interface IProps {
  post: PostDto;
  token: string;
}

const CardItem: React.FC<IProps> = (p) => {
  const [value, setValue] = React.useState<number | null>(2);

  const classes = style();

  const download = (post: PostDto) => new TorrentApi().download(post.pid, {
    headers: { Authorization: p.token },
    responseType: "arraybuffer", // this is very important
  }).then((response) => downloadFile(`${post.hash}.torrent`, new Blob([response.data])));

  const onClick = () => download(p.post);

  const uppercase: any = { textTransform: "uppercase" };

  return (
    <div>
      <Paper className={classes.paper}>
        <div className={classes.itemContainer}>
          <div onClick={onClick} className={classes.avatarContainer}>
            <Button className={classes.avatar}>
              <CloudDownloadIcon />
            </Button>
          </div>
          <div className={classes.baseline}>
            <div className={classes.inline}>
              <Typography style={uppercase} color="primary" gutterBottom={true}>
                title
                </Typography>
              <Typography variant="h6" gutterBottom={true}>
                {p.post.title}
              </Typography>
            </div>
            <div className={classes.inline}>
              <Typography style={uppercase} color="primary" gutterBottom={true}>
                author
                </Typography>
              <Typography variant="h6" gutterBottom={true}>
                {p.post.author.username}
              </Typography>
            </div>
            <div className={classes.inline}>
              <Typography style={uppercase} color="primary" gutterBottom={true}>
                create date
                </Typography>
              <Typography variant="h6" gutterBottom={true}>
                {p.post.createAt}
              </Typography>
            </div>
          </div>
          <div className={classes.inlineRight}>
            <Typography style={uppercase} color="primary" gutterBottom={true}>
              Rate
              </Typography>
            <Typography variant="h4" gutterBottom={true}>
              <Box component="fieldset" mb={3} borderColor="transparent">
                <Rate value={p.post.rate} />
              </Box>
            </Typography>
          </div>
        </div>
      </Paper>
    </div>
  );
};

export default CardItem;
