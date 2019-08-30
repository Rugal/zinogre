import React from "react";
import ReactDOM from "react-dom";
import Panel from "./component";

it("renders without crashing", () => {
  const div = document.createElement("div");
  const handleChange = (panel: string) => () => "";

  ReactDOM.render(<Panel expanded="" handler={handleChange} name="panel1" />, div);
  ReactDOM.unmountComponentAtNode(div);
});
