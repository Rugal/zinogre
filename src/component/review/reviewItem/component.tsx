import {
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  Typography,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import React from "react";

import { Review } from "../../../generated/graphql";
import { style } from "./style";

interface IProps {
  expanded: string | false;
  handler: (panel: string) => any;
  review: Review;
}

const ReviewItem: React.FC<IProps> = (p) => {
  const classes = style();
  const name = `panel${p.review.rid}`;

  return (
    <ExpansionPanel expanded={p.expanded === name} onChange={p.handler(name)}>
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={`${name}bh-content`}
        id={`${name}bh-header`}
      >
        <Typography className={classes.heading}>{p.review.author.username}</Typography>
        <Typography className={classes.secondaryHeading}>{p.review.rate}</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Typography>
          {p.review.content}
          </Typography>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};

export default ReviewItem;
