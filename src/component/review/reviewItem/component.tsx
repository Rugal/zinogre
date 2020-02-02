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
        <Typography className={classes.heading}>General settings</Typography>
        <Typography className={classes.secondaryHeading}>I am an expansion panel</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Typography>
          Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
          maximus est, id dignissim quam.
          </Typography>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};

export default ReviewItem;
