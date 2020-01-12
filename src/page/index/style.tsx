import {
  createStyles,
  makeStyles,
  Theme,
} from "@material-ui/core";
// eslint-disable-next-line
import React from "react";

export const style = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      marginTop: 64,
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  }),
);
