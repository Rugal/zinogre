import { useQuery } from "@apollo/react-hooks";
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
import gql from "graphql-tag";
import React, { useState } from "react";
import { Link } from "react-router-dom";

import { PostPage } from "../../generated/graphql";
import Login from "./login";
import Logout from "./logout";
import { style } from "./style";

interface IProps {
  logout: () => any;
  token: string;
  setPostPage: (d: any) => any;
  showProgressBar: boolean;
}

interface IPostPageResult {
  postPage: PostPage;
}

interface IPostPageVars {
  index: number;
  size: number;
}

const GET_POST_PAGE = gql`
  query getPostPage($index: Int!, $size: Int!) {
    postPage(index: $index, size: $size) {
      size
      total
      index
      items {
        title
        content
        enable
        hash
        size
      }
    }
  }
`;

const Header: React.FC<IProps> = (props) => {
  const classes = style();

  const [openLogin, setOpenLogin] = useState(false);
  const [openLogout, setOpenLogout] = useState(false);

  const { data, refetch } = useQuery<IPostPageResult, IPostPageVars>(GET_POST_PAGE,
    { variables: { index: 0, size: 20 } });
  if (!data) {
    return null;
  }
  const { postPage } = data;
  props.setPostPage(postPage);

  const reload = () => refetch();
  const onClickOpenLogout = () => setOpenLogout(true);
  const onClickOpenLogin = () => setOpenLogin(true);
  const onClickCloseLogout = () => setOpenLogout(false);
  const onClickCloseLogin = () => setOpenLogin(false);
  const content = props.token
    ? <React.Fragment>
      <Link to="/post" className={classes.link}>
        <IconButton onClick={reload} color="inherit" ><AllInboxIcon className={classes.icon} /></IconButton>
      </Link>
      <Link to="/user" className={classes.link}>
        <IconButton color="inherit"><FaceIcon className={classes.icon} /></IconButton>
      </Link>
      <IconButton color="inherit" onClick={onClickOpenLogout}>
        <PowerSettingsNewIcon className={classes.icon} />
      </IconButton>
    </React.Fragment>
    : <IconButton color="inherit" onClick={onClickOpenLogin}><ExitToAppIcon className={classes.icon} /></IconButton>
    ;
  return (
    <AppBar position="static" >
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          <Link to="/" className={classes.link}>
            <IconButton color="inherit"><HomeIcon className={classes.icon} /></IconButton>
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
