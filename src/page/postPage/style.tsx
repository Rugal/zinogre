import {
  createStyles,
  makeStyles,
  Theme,
} from "@material-ui/core";
// eslint-disable-next-line
import React from "react";

export const style = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      maxHeight: 840,
    },
    root: {
      marginTop: 64,
      width: "100%",
    },
  }),
);
