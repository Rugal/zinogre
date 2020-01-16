import Chip from "@material-ui/core/Chip";
import Paper from "@material-ui/core/Paper";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TagFacesIcon from "@material-ui/icons/TagFaces";
import React from "react";

import { style } from "./style";

interface IChipData {
  key: number;
  label: string;
}

const ChipList: React.FC = () => {
  const classes = style();

  const [chipData, setChipData] = React.useState<IChipData[]>([
    { key: 0, label: "Angular" },
    { key: 1, label: "jQuery" },
    { key: 2, label: "Polymer" },
    { key: 3, label: "React" },
    { key: 4, label: "Vue.js" },
  ]);

  const handleDelete = (chipToDelete: IChipData) => () => {
    setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
  };

  const tags = chipData.map((data, i) =>
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
