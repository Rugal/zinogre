import { Typography } from "@material-ui/core";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import React from "react";
import ReactMarkdown from "react-markdown";

import { IPanel } from "./model";
import { style } from "./style";

interface IProps {
  expanded: string | false;
  handler: (panel: string) => any;
  name: string;
  panel: IPanel;
}

const Panel: React.FC<IProps> = (p: IProps) => {
  const classes = style();
  const { panel } = p;

  return (
    <ExpansionPanel expanded={p.expanded === p.name} onChange={p.handler(p.name)}>
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={`${p.name}bh-content`}
        id={`${p.name}bh-header`}
      >
        <Typography className={classes.title}>{panel.title}</Typography>
        <Typography className={classes.subtitle}>{panel.subtitle}</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Typography><ReactMarkdown source={panel.content} /></Typography>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};
export default Panel;
