import {
  AppBar,
  Button,
  Toolbar,
  Typography,
} from "@material-ui/core";
import CategoryIcon from "@material-ui/icons/Category";
import ContactsIcon from "@material-ui/icons/Contacts";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import LabelIcon from "@material-ui/icons/Label";
import React from "react";

import Constant from "../constant";
import { PostApi } from "../openapi";
import MenuButton from "./menuButton";
import { style } from "./style";

interface IProps {
  setPostPage: (d: any) => any;
}

const Header: React.FC<IProps> = (props) => {
  const classes = style();

  const loadPostPage = () => new PostApi().getByPage(undefined, undefined, {
    headers: {
      Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhdXRoZW50aWNhdGlvbiIsImlzcyI6InB0IiwiZXhwIjoxNTc4NjYzODM5LCJ1aWQiOjF9.qTqmXI5m2EJ-aacEd_m9LiEFLor_pAxUwbA1Bg3ypCM"
    }
  })
    .then(response => props.setPostPage(response));


  const m = localStorage.getItem(Constant.AUTHORIZATION)
    ? <div>
      <Button color="inherit" onClick={loadPostPage}><ContactsIcon className={classes.icon} /></Button>
      <Button color="inherit"><CategoryIcon className={classes.icon} /></Button>
      <Button color="inherit"><LabelIcon className={classes.icon} /></Button>
      <Button color="inherit"><FormatListBulletedIcon className={classes.icon} /></Button>
    </div>
    : <Button color="inherit"><ExitToAppIcon className={classes.icon} /></Button>
    ;
  return (
    <AppBar position="static" >
      <Toolbar>
        <Typography variant="h6" className={classes.title}>Rugal</Typography>
        {m}
        <MenuButton />
      </Toolbar>
    </AppBar >
  );
};
export default Header;
