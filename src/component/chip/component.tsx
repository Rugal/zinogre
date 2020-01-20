import Chip from "@material-ui/core/Chip";
import Paper from "@material-ui/core/Paper";
import React from "react";

import { IChip } from "../../store/post";
import { style } from "./style";

interface IProps {
  chips: IChip[];
}

const ChipList: React.FC<IProps> = (p) => {
  const classes = style();

  const tags = p.chips.map((data, i) =>
    <Chip
      key={i}
      label={data.label}
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
