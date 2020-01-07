import { ThemeProvider } from "@material-ui/styles";
import React from "react";

import Body from "../body";
import Header from "../header";
import {PostApi} from "../openapi";
import { theme } from "../style";
import { GlobalStyle, style } from "./style";

const App: React.FC = () => {
  const p = new PostApi();
  p.getByPage(1, "1");
  const classes = style();
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <GlobalStyle />
        <Header />
        <Body />
      </div>
    </ThemeProvider>
  );
};
export default App;
