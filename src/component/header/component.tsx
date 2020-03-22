import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import ArchiveIcon from '@material-ui/icons/Archive';
import UnarchiveIcon from '@material-ui/icons/Unarchive';
import DataUsageIcon from '@material-ui/icons/DataUsage';
import HomeIcon from "@material-ui/icons/Home";
import React from "react";
import { Link } from "react-router-dom";

import { style } from "./style";

interface IProps {
}

const Header: React.FC<IProps> = (props) => {
  const classes = style();

  return (
    <AppBar position="static" >
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          <Link to="/" className={classes.link}>
            <IconButton color="inherit"><HomeIcon className={classes.icon} /></IconButton>
          </Link>
        </Typography>
        <Link to="/item" className={classes.link}>
          <IconButton color="inherit"><AddIcon className={classes.icon} /></IconButton>
        </Link>
        <Link to="/fill" className={classes.link}>
          <IconButton color="inherit"><ArchiveIcon className={classes.icon} /></IconButton>
        </Link>
        <Link to="/consumption" className={classes.link}>
          <IconButton color="inherit"><UnarchiveIcon className={classes.icon} /></IconButton>
        </Link>
        <Link to="/statistics" className={classes.link}>
          <IconButton color="inherit"><DataUsageIcon className={classes.icon} /></IconButton>
        </Link>
      </Toolbar>
    </AppBar>
  );
};
export default Header;
