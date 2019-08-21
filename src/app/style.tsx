import {
  createStyles,
  makeStyles,
  Theme,
} from "@material-ui/core";
// eslint-disable-next-line
import React from "react";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }
`;

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
