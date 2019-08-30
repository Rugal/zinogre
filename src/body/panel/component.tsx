import { Typography } from "@material-ui/core";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import React from "react";

import { style } from "./style";

interface IProps {
  expanded: string | false;
  handler: (panel: string) => any;
  name: string;
  title?: string;
  subtitle?: string;
  content?: string;
}

const Panel: React.FC<IProps> = (p: IProps) => {
  const classes = style();

  return (
    <ExpansionPanel expanded={p.expanded === p.name} onChange={p.handler(p.name)}>
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={`${p.name}bh-content`}
        id={`${p.name}bh-header`}
      >
        <Typography className={classes.title}>{p.title}</Typography>
        <Typography className={classes.subtitle}>{p.subtitle}</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Typography>{p.content}</Typography>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};
export default Panel;
