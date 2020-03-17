import Chip from "@material-ui/core/Chip";
import Paper from "@material-ui/core/Paper";
import React from "react";

import { Tag } from "../../generated/graphql";
import { style } from "./style";

interface IProps {
  tags: Tag[];
}

const ChipList: React.FC<IProps> = (p) => {
  const classes = style();

  const tags = p.tags.map((data, i) =>
    <Chip
      key={i}
      label={data.name}
      className={classes.chip}
    />,
  );

  return (
    <Paper className={classes.root} elevation={0}>
      {tags}
    </Paper>
  );
};

export default ChipList;
