import React from "react";
import Style from "styled-components";

import img from "./image/eva.jpg";

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
