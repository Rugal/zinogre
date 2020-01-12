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
    link: {
      color: "inherit",
      cursor: "auto",
      textDecoration: "inherit",
    },
    title: {
      flexGrow: 1,
    },
  }),
);
