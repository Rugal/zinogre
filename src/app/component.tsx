import {
  AppBar,
  Button,
  Container,
  createMuiTheme,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { blue, pink } from "@material-ui/core/colors";
import IconButton from "@material-ui/core/IconButton";
import CategoryIcon from "@material-ui/icons/Category";
import ContactsIcon from "@material-ui/icons/Contacts";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import LabelIcon from "@material-ui/icons/Label";
import MenuIcon from "@material-ui/icons/Menu";
import { ThemeProvider } from "@material-ui/styles";
import React from "react";

import { GlobalStyle, style } from "./style";

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: pink,
  },
});

export default function App() {

  const classes = style();

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <GlobalStyle />
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>Rugal</Typography>
            <Button color="inherit"><ContactsIcon className={classes.icon} /></Button>
            <Button color="inherit"><CategoryIcon className={classes.icon} /></Button>
            <Button color="inherit"><LabelIcon className={classes.icon} /></Button>
            <Button color="inherit"><FormatListBulletedIcon className={classes.icon} /></Button>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
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
}
