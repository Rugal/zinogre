import { Container, Typography } from "@material-ui/core";
import React from "react";

import { ScreenBody, style } from "./style";

const Body: React.FC = () => {
  const classes = style();
  return (
    <ScreenBody>
      <Container maxWidth="md">
        <Typography
          variant="h3"
          align="center"
          component="h1"
          color="primary"
          className={classes.title}
        >
          REACT MOST WANTED
        </Typography>
      </Container>
    </ScreenBody>
  );
};
export default Body;
