import React from "react";

import { Review as ReviewDto, User as UserDto } from "../../generated/graphql";
import ReviewItem from "./reviewItem";
import { style } from "./style";

interface IProps {
  reviews?: ReviewDto[];
}

const user: UserDto = {
  credit: 1,
  download: 1,
  email: "test@mail.com",
  status: "enable",
  uid: 1,
  upload: 1,
  username: "Rugal",
};

const data: ReviewDto[] = [
  {
    author: user,
    content: "Content",
    rate: 5,
    rid: 1,
  },
  {
    author: user,
    content: "Content",
    rate: 5,
    rid: 2,
  },
  {
    author: user,
    content: "Content",
    rate: 5,
    rid: 3,
  },
];

const Review: React.FC<IProps> = (p) => {
  const classes = style();
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange = (panel: string) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  const reviewList = data.map((item, i) =>
    <ReviewItem expanded={expanded} handler={handleChange} review={item} key={i} />,
  );

  return (
    <div className={classes.root}>
      {reviewList}
    </div>
  );
};

export default Review;
