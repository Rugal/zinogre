import { ThemeProvider } from "@material-ui/styles";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Body from "../component/body";
import Header from "../component/header";
import S from "../router";
import { theme } from "../style";
import { GlobalStyle, style } from "./style";

const App: React.FC = () => {
  const classes = style();
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <div className={classes.root}>
          <GlobalStyle />
          <Header />
          <Body>
            <S />
          </Body>
        </div>
      </ThemeProvider>
    </Router>
  );
};
export default App;
