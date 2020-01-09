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
    menu: {
      paper: {
        border: "1px solid #d3d4d5",
      },
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up("sm")]: {
        display: "none",
      },
    },
    menuItem: {
      "&:focus": {
        "& .MuiListItemText-primary, & .MuiListItemIcon-root": {
          color: theme.palette.common.white,
        },
        "backgroundColor": theme.palette.primary.main,
      },
    },
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: 200,
      },
    },
    title: {
      flexGrow: 1,
    },
  }),
);
