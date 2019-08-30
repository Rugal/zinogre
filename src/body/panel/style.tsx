import {
  createStyles,
  makeStyles,
  Theme,
} from "@material-ui/core";
// eslint-disable-next-line
import React from "react";

export const style = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      flexBasis: "33.33%",
      flexShrink: 0,
      fontSize: theme.typography.pxToRem(15),
    },
    subtitle: {
      color: theme.palette.text.secondary,
      fontSize: theme.typography.pxToRem(15),
    },
  }),
);
