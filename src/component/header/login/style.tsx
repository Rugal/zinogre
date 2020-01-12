import {
  createStyles,
  makeStyles,
  Theme,
} from "@material-ui/core";
// eslint-disable-next-line
import React from "react";

export const style = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: 200,
      },
    },
  }),
);
