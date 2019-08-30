import { Container } from "@material-ui/core";
import React from "react";

import Panel from "./panel";
import { ScreenBody, style } from "./style";

const Body: React.FC = () => {
  const classes = style();
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange = (panel: string) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <ScreenBody>
      <Container maxWidth="md">
        <div className={classes.root}>
          <Panel expanded={expanded} handler={handleChange} name="panel1" title="Rugal" />
          <Panel expanded={expanded} handler={handleChange} name="panel2" title="Bernstein" />
          <Panel expanded={expanded} handler={handleChange} name="panel3" title="Tenjin" />
          <Panel expanded={expanded} handler={handleChange} name="panel4" title="Descend" />
        </div>
      </Container>
    </ScreenBody >
  );
};
export default Body;
