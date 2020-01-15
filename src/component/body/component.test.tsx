import React from "react";
import ReactDOM from "react-dom";
import Body from "./index";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Body />, div);
  ReactDOM.unmountComponentAtNode(div);
});
