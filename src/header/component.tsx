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

import { PostApi } from "../openapi";
import MenuButton from "./menuButton";
import { style } from "./style";

interface IProps {
  setPostPage: (d: any) => any;
}

const Header: React.FC<IProps> = (props) => {
  const classes = style();

  const loadPostPage = () => new PostApi().getByPage(1, "1")
    .then((a) => props.setPostPage(a));

  return (
    <AppBar position="static" >
      <Toolbar>
        <Typography variant="h6" className={classes.title}>Rugal</Typography>
        <Button color="inherit" onClick={loadPostPage}><ContactsIcon className={classes.icon} /></Button>
        <Button color="inherit"><CategoryIcon className={classes.icon} /></Button>
        <Button color="inherit"><LabelIcon className={classes.icon} /></Button>
        <Button color="inherit"><FormatListBulletedIcon className={classes.icon} /></Button>
        <MenuButton />
      </Toolbar>
    </AppBar >
  );
};
export default Header;
