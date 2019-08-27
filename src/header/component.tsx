import {
  AppBar,
  Button,
  Toolbar,
  Typography,
} from "@material-ui/core";
import CategoryIcon from "@material-ui/icons/Category";
import ContactsIcon from "@material-ui/icons/Contacts";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import LabelIcon from "@material-ui/icons/Label";
import React from "react";

import MenuButton from "./menuButton";
import { style } from "./style";

const Header: React.FC = () => {
  const classes = style();

  return (
    <AppBar position="static" >
      <Toolbar>
        <Typography variant="h6" className={classes.title}>Rugal</Typography>
        <Button color="inherit"><ContactsIcon className={classes.icon} /></Button>
        <Button color="inherit"><CategoryIcon className={classes.icon} /></Button>
        <Button color="inherit"><LabelIcon className={classes.icon} /></Button>
        <Button color="inherit"><FormatListBulletedIcon className={classes.icon} /></Button>
        <MenuButton />
      </Toolbar>
    </AppBar >
  );
};
export default Header;
