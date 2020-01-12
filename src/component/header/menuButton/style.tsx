import {
  createStyles,
  makeStyles,
  Theme,
} from "@material-ui/core";
// eslint-disable-next-line
import React from "react";

export const style = makeStyles((theme: Theme) =>
  createStyles({
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
  }),
);
