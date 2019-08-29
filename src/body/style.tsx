import {
  createStyles,
  makeStyles,
  Theme,
} from "@material-ui/core";
// eslint-disable-next-line
import React from "react";
import Style from "styled-components";

import img from "./eva.jpg";

export const ScreenBody = Style.div`
  background: url(${img}) 50% 50% no-repeat;
  background-size: cover;
  position: fixed;
  height: 100%;
  width: 100%;
  min-height: 100%;
  top: 0px;
  left: 0;
  margin-top: 64px;
  z-index: -1;
`;

export const style = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      flexGrow: 1,
    },
  }),
);
