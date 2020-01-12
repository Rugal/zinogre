import {
  AppBar,
  Button,
  LinearProgress,
  Toolbar,
  Typography,
} from "@material-ui/core";
import AllInboxIcon from "@material-ui/icons/AllInbox";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import FaceIcon from "@material-ui/icons/Face";
import HomeIcon from '@material-ui/icons/Home';
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import React, { useState } from "react";
import { Link } from "react-router-dom";

import { PostApi } from "../../openapi";
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
        <Button color="inherit" onClick={loadPostPage}><AllInboxIcon className={classes.icon} /></Button>
      </Link>
      <Link to="/user" className={classes.link}>
        <Button color="inherit"><FaceIcon className={classes.icon} /></Button>
      </Link>
      <Button color="inherit" onClick={onClickOpenLogout}>
        <PowerSettingsNewIcon className={classes.icon} />
      </Button>
    </div>
    : <Button color="inherit" onClick={onClickOpenLogin}><ExitToAppIcon className={classes.icon} /></Button>
    ;
  return (
    <AppBar position="static" >
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          <Link to="/" className={classes.link}>
            <Button color="inherit" onClick={loadPostPage}><HomeIcon className={classes.icon} /></Button>
          </Link>
        </Typography>
        {content}
      </Toolbar>
      <Login open={openLogin} handleClose={onClickCloseLogin} />
      <Logout open={openLogout} handleClose={onClickCloseLogout} />
      {props.showProgressBar ? <LinearProgress color="secondary" /> : <div />}
    </AppBar>
  );
};
export default Header;
