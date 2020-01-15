import Avatar from "@material-ui/core/Avatar";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import DescriptionIcon from "@material-ui/icons/Description";
import React, { Component } from "react";

import { style } from "./style";

const CardItem: React.FC = () => {
  const classes = style();
  return (
    <div>
      <Paper className={classes.paper}>
        <div className={classes.itemContainer}>
          <div className={classes.avatarContainer}>
            <Avatar className={classes.avatar}>
              <DescriptionIcon />
            </Avatar>
          </div>
          <div className={classes.baseline}>
            <div className={classes.inline}>
              <Typography style={{ textTransform: "uppercase" }} color="primary" gutterBottom={true}>
                title
                </Typography>
              <Typography variant="h6" gutterBottom={true}>
                This is title
                </Typography>
            </div>
            <div className={classes.inline}>
              <Typography style={{ textTransform: "uppercase" }} color="primary" gutterBottom={true}>
                author
                </Typography>
              <Typography variant="h6" gutterBottom={true}>
                Rugal
                </Typography>
            </div>
            <div className={classes.inline}>
              <Typography style={{ textTransform: "uppercase" }} color="primary" gutterBottom={true}>
                create date
                </Typography>
              <Typography variant="h6" gutterBottom={true}>
                today
                </Typography>
            </div>
          </div>
          <div className={classes.inlineRight}>
            <Typography style={{ textTransform: "uppercase" }} color="primary" gutterBottom={true}>
              Rate
              </Typography>
            <Typography variant="h4" gutterBottom={true}>
              STAR
              </Typography>
          </div>
        </div>
      </Paper>
    </div>
  );
};

export default CardItem;
