import { Container, Typography } from "@material-ui/core";
import React from "react";

import { style } from "./style";

const Body: React.FC = () => {
  const classes = style();
  return (
    <Container maxWidth="md">
      <Typography
        variant="h3"
        align="center"
        component="h1"
        color="inherit"
        className={classes.title}
      >
        REACT MOST WANTED
      </Typography>
    </Container>
  );
};
export default Body;
