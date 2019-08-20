import React from "react";

import { ArcherContainer, ArcherElement, Relation } from "react-archer";

const rootStyle = { display: "flex", justifyContent: "center", backgroundColor: "blue" };
const rowStyle = { margin: "200px 0", display: "flex", justifyContent: "space-between", backgroundColor: "red" };
const rowStyle1 = { margin: "200px 0", display: "flex", justifyContent: "space-between", backgroundColor: "yellow" };
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
}];

const relationships1: Relation[] = [{
  sourceAnchor: "bottom",
  targetAnchor: "top",
  targetId: "element5",
}, {
  sourceAnchor: "bottom",
  targetAnchor: "top",
  targetId: "element6",
}];

const relationships2: Relation[] = [{
  sourceAnchor: "bottom",
  targetAnchor: "top",
  targetId: "element7",
}, {
  sourceAnchor: "bottom",
  targetAnchor: "top",
  targetId: "element8",
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

          <ArcherElement id="element3" relations={relationships1}>
            <div style={boxStyle}>Element 3</div>
          </ArcherElement>

          <ArcherElement id="element4" relations={relationships2}>
            <div style={boxStyle}>Element 4</div>
          </ArcherElement>
        </div>

        <div style={rowStyle1}>
          <ArcherElement id="element5">
            <div style={boxStyle}>Element 5</div>
          </ArcherElement>

          <ArcherElement id="element6">
            <div style={boxStyle}>Element 6</div>
          </ArcherElement>

          <ArcherElement id="element7">
            <div style={boxStyle}>Element 7</div>
          </ArcherElement>

          <ArcherElement id="element8">
            <div style={boxStyle}>Element 8</div>
          </ArcherElement>

          <ArcherElement id="element8">
            <div style={boxStyle}>Element 8</div>
          </ArcherElement>

          <ArcherElement id="element9">
            <div style={boxStyle}>Element 8</div>
          </ArcherElement>

          <ArcherElement id="element10">
            <div style={boxStyle}>Element 8</div>
          </ArcherElement>

          <ArcherElement id="element11">
            <div style={boxStyle}>Element 8</div>
          </ArcherElement>

          <ArcherElement id="element12">
            <div style={boxStyle}>Element 8</div>
          </ArcherElement>
        </div>
      </ArcherContainer>

    </div>
  );
};

export default App;
