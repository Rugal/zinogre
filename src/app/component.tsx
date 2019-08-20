import React from "react";

import { ArcherContainer, ArcherElement, Relation } from "react-archer";

const rootStyle = { display: "flex", justifyContent: "center" };
const rowStyle = { margin: "200px 0", display: "flex", justifyContent: "space-between" };
const boxStyle = { padding: "10px", border: "1px solid black" };
const relationships: Relation[] = [{
  sourceAnchor: "bottom",
  targetAnchor: "top",
  targetId: "element2",
}, {
  sourceAnchor: "bottom",
  targetAnchor: "top",
  targetId: "element3",
}, {
  sourceAnchor: "bottom",
  targetAnchor: "top",
  targetId: "element4",
}, {
  sourceAnchor: "bottom",
  targetAnchor: "top",
  targetId: "element5",
}, {
  sourceAnchor: "bottom",
  targetAnchor: "top",
  targetId: "element6",
}];

const App = () => {
  return (
    <div>

      <ArcherContainer strokeColor="red" >
        <div style={rootStyle}>
          <ArcherElement id="root" relations={relationships}>
            <div style={boxStyle}>Root</div>
          </ArcherElement>
        </div>

        <div style={rowStyle}>
          <ArcherElement id="element2">
            <div style={boxStyle}>Element 2</div>
          </ArcherElement>

          <ArcherElement id="element3">
            <div style={boxStyle}>Element 3</div>
          </ArcherElement>

          <ArcherElement id="element4">
            <div style={boxStyle}>Element 4</div>
          </ArcherElement>

          <ArcherElement id="element5">
            <div style={boxStyle}>Element 5</div>
          </ArcherElement>

          <ArcherElement id="element6">
            <div style={boxStyle}>Element 6</div>
          </ArcherElement>
        </div>
      </ArcherContainer>

    </div>
  );
};

export default App;
