import {
  AppBar,
  IconButton,
  LinearProgress,
  Toolbar,
  Typography,
} from "@material-ui/core";
import AllInboxIcon from "@material-ui/icons/AllInbox";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import FaceIcon from "@material-ui/icons/Face";
import HomeIcon from "@material-ui/icons/Home";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import React, { useState } from "react";
import { Link } from "react-router-dom";

import { PostApi } from "../../generated/openapi";
import Login from "./login";
import Logout from "./logout";
import { style } from "./style";

interface IProps {
  logout: () => any;
  token: string;
  setPostPage: (d: any) => any;
  showProgressBar: boolean;
}

const Header: React.FC<IProps> = (props) => {
  const classes = style();

  const [openLogin, setOpenLogin] = useState(false);
  const [openLogout, setOpenLogout] = useState(false);

  const loadPostPage = () => new PostApi().getByPage(undefined, undefined, {
    headers: { Authorization: props.token },
  })
    .then((response) => props.setPostPage(response));

  const onClickOpenLogout = () => setOpenLogout(true);
  const onClickOpenLogin = () => setOpenLogin(true);
  const onClickCloseLogout = () => setOpenLogout(false);
  const onClickCloseLogin = () => setOpenLogin(false);
  const content = props.token
    ? <div>
      <Link to="/post" className={classes.link}>
        <IconButton color="inherit" onClick={loadPostPage}><AllInboxIcon className={classes.icon} /></IconButton>
      </Link>
      <Link to="/user" className={classes.link}>
        <IconButton color="inherit"><FaceIcon className={classes.icon} /></IconButton>
      </Link>
      <IconButton color="inherit" onClick={onClickOpenLogout}>
        <PowerSettingsNewIcon className={classes.icon} />
      </IconButton>
    </div>
    : <IconButton color="inherit" onClick={onClickOpenLogin}><ExitToAppIcon className={classes.icon} /></IconButton>
    ;
  return (
    <AppBar position="static" >
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          <Link to="/" className={classes.link}>
            <IconButton color="inherit" onClick={loadPostPage}><HomeIcon className={classes.icon} /></IconButton>
          </Link>
        </Typography>
        {content}
      </Toolbar>
      <Login open={openLogin} handleClose={onClickCloseLogin} />
      <Logout open={openLogout} handleClose={onClickCloseLogout} />
      {props.showProgressBar ? <LinearProgress color="secondary" /> : null}
    </AppBar>
  );
};
export default Header;
