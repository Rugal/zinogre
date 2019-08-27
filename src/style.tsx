import { createMuiTheme } from "@material-ui/core";
import { blue, pink } from "@material-ui/core/colors";
import React from "react";

export const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: pink,
  },
});
