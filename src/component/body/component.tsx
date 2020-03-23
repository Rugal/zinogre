import {
  Container,
} from "@material-ui/core";
import React from "react";

import { ScreenBody } from "./style";

interface IProps {
  children: React.ReactNode;
}

const Body: React.FC<IProps> = (p) => {
  return (
    <ScreenBody>
      <Container maxWidth="lg">
        {p.children}
      </Container>
    </ScreenBody >
  );
};

export default Body;
