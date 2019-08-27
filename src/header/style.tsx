import {
  createStyles,
  makeStyles,
  Theme,
} from "@material-ui/core";
// eslint-disable-next-line
import React from "react";

export const style = makeStyles((theme: Theme) =>
  createStyles({
    icon: {
      fontSize: 32,
      margin: theme.spacing(1),
      [theme.breakpoints.down("xs")]: {
        display: "none",
      },
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up("sm")]: {
        display: "none",
      },
    },
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
    },
  }),
);
