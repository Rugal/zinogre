import { Container } from "@material-ui/core";
import React from "react";

import Panel from "./panel";
import { IPanel } from "./panel/model";
import { ScreenBody, style } from "./style";

const Body: React.SFC = () => {
  const classes = style();
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange = (panel: string) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  const panelsData: IPanel[] = [
    { title: "about", content: "HERE" },
    { title: "contact", content: "HERE" },
  ];
  const panels = panelsData.map((p, i) =>
    <Panel expanded={expanded} handler={handleChange} key={i} name={`panel${i}`} panel={p} />,
  );

  return (
    <ScreenBody>
      <Container maxWidth="md">
        <div className={classes.root}>
          {panels}
        </div>
      </Container>
    </ScreenBody >
  );
};
export default Body;
