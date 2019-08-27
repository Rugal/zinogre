import { Container, Typography } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import React from "react";

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
        <Container maxWidth="md">
          <Typography
            variant="h3"
            align="center"
            component="h1"
            color="inherit"
            className={classes.title}
          >
            REACT MOST WANTED
          </Typography>
        </Container>
      </div>
    </ThemeProvider>
  );
};
export default App;
