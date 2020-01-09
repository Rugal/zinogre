import {
  AppBar,
  Button,
  Toolbar,
  Typography,
} from "@material-ui/core";
import CategoryIcon from "@material-ui/icons/Category";
import ContactsIcon from "@material-ui/icons/Contacts";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import LabelIcon from "@material-ui/icons/Label";
import React, { useState } from "react";

import Constant from "../constant";
import { PostApi } from "../openapi";
import Login from "./login";
import MenuButton from "./menuButton";
import { style } from "./style";

interface IProps {
  setPostPage: (d: any) => any;
}

const Header: React.FC<IProps> = (props) => {
  const classes = style();

  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    // 1. submit login request
    // 2. show progress circle in login screen
    // 3. set corresponding result
    setOpen(false);
  };

  const loadPostPage = () => new PostApi().getByPage(undefined, undefined, {
    headers: {
      Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhdXRoZW50aWNhdGlvbiIsImlzcyI6InB0IiwiZXhwIjoxNTc4NjYzODM5LCJ1aWQiOjF9.qTqmXI5m2EJ-aacEd_m9LiEFLor_pAxUwbA1Bg3ypCM",
    },
  })
    .then((response) => props.setPostPage(response));

  const content = localStorage.getItem(Constant.AUTHORIZATION)
    ? <div>
      <Button color="inherit" onClick={loadPostPage}><ContactsIcon className={classes.icon} /></Button>
      <Button color="inherit"><CategoryIcon className={classes.icon} /></Button>
      <Button color="inherit"><LabelIcon className={classes.icon} /></Button>
      <Button color="inherit"><FormatListBulletedIcon className={classes.icon} /></Button>
    </div>
    : <Button color="inherit" onClick={handleClickOpen}><ExitToAppIcon className={classes.icon} /></Button>
    ;
  return (
    <AppBar position="static" >
      <Toolbar>
        <Typography variant="h6" className={classes.title}>Private Torrent</Typography>
        {content}
        <MenuButton />
      </Toolbar>
      <Login open={open} handleClose={handleClose} />
    </AppBar >
  );
};
export default Header;
