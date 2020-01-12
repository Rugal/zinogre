import React from "react";

import Panel from "../../component/panel";
import { PostPage } from "../../openapi";
import { style } from "./style";

interface IProps {
  postPage: PostPage;
  token: string;
}

const Post: React.FC<IProps> = (props) => {

  const classes = style();
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange = (panel: string) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  const { items } = props.postPage;

  const panelsData = (props.token && items) ? items.map((p, i) =>
    <Panel
      expanded={expanded}
      handler={handleChange}
      key={i}
      pid={p.pid}
      name={`panel${i}`}
      panel={{ title: p.title, content: p.content, subtitle: p.hash }}
    />)
    : <div />
    ;

  return (
    <div className={classes.root}>
      {panelsData}
    </div>
  );
};
export default Post;
