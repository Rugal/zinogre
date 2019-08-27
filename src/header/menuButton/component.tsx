import {
  Menu,
  MenuItem,
} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { PopoverOrigin } from "@material-ui/core/Popover";
import CategoryIcon from "@material-ui/icons/Category";
import ContactsIcon from "@material-ui/icons/Contacts";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import LabelIcon from "@material-ui/icons/Label";
import MenuIcon from "@material-ui/icons/Menu";
import React from "react";

import { style } from "./style";

const MenuButton: React.FC = () => {
  const classes = style();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const a: PopoverOrigin = {
    horizontal: "center",
    vertical: "bottom",
  };

  const b: PopoverOrigin = {
    horizontal: "center",
    vertical: "top",
  };

  return (
    <div>
      <IconButton
        className={classes.menuButton}
        color="inherit"
        aria-haspopup="true"
        aria-controls="customized-menu"
        onClick={handleClick}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        className={classes.menu}
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={a}
        transformOrigin={b}
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted={true}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem className={classes.menuItem}>
          <ListItemIcon>
            <ContactsIcon />
          </ListItemIcon>
          <ListItemText primary="About Me" />
        </MenuItem>
        <MenuItem className={classes.menuItem}>
          <ListItemIcon>
            <CategoryIcon />
          </ListItemIcon>
          <ListItemText primary="Category" />
        </MenuItem>
        <MenuItem className={classes.menuItem}>
          <ListItemIcon>
            <LabelIcon />
          </ListItemIcon>
          <ListItemText primary="Tag" />
        </MenuItem>
        <MenuItem className={classes.menuItem}>
          <ListItemIcon>
            <FormatListBulletedIcon />
          </ListItemIcon>
          <ListItemText primary="List" />
        </MenuItem>
      </Menu>
    </div>
  );
};
export default MenuButton;
