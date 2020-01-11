import { Button, Typography } from "@material-ui/core";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import GetAppIcon from "@material-ui/icons/GetApp";
import React from "react";
import ReactMarkdown from "react-markdown";

import { TorrentApi } from "../../openapi";
import { IPanel } from "./model";
import { style } from "./style";

interface IProps {
  expanded: string | false;
  handler: (panel: string) => any;
  name: string;
  panel: IPanel;
  pid: number;
  token: string;
}

const Panel: React.FC<IProps> = (p: IProps) => {
  const classes = style();
  const { panel } = p;

  const download = () => new TorrentApi().download(p.pid, {
    headers: { Authorization: p.token },
    responseType: "arraybuffer", // this is very important
  })
    .then(({ data }) => {
      const link = document.createElement("a");
      link.href = window.URL.createObjectURL(new Blob([data]));
      link.download = `${panel.subtitle}.torrent`; // any other extension
      document.body.appendChild(link);
      link.click();
      link.remove();
    });

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
        <Button color="inherit" onClick={download}><GetAppIcon /></Button>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};
export default Panel;
