import { ThemeProvider } from "@material-ui/styles";
import React from "react";

import Body from "../body";
import Header from "../header";
import { theme } from "../style";
import { GlobalStyle, style } from "./style";

const App: React.FC = () => {
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
