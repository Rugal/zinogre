import React from "react";

import { Review as ReviewDto } from "../../generated/graphql";
import ReviewItem from "./reviewItem";
import { style } from "./style";

interface IProps {
  reviews: ReviewDto[];
}

const Review: React.FC<IProps> = (p) => {
  const classes = style();
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange = (panel: string) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  const reviewList = p.reviews.map((item, i) =>
    <ReviewItem expanded={expanded} handler={handleChange} review={item} key={i} />,
  );

  return (
    <div className={classes.root}>
      {reviewList}
    </div>
  );
};

export default Review;
