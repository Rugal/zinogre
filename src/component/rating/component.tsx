import { Box, Typography } from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Rating from "@material-ui/lab/Rating";
import React from "react";

import { style } from "./style";

interface IProps {
  value: number | null;
  setValue?: (value: number | null) => any;
}

const Rate: React.FC<IProps> = (p) => {
  const classes = style();

  const handler = (event: React.ChangeEvent<{}>, newValue: number | null) => p.setValue && p.setValue(newValue);

  const css = {
    iconFilled: classes.iconFilled,
    iconHover: classes.iconHover,
  };

  return (
    <Box className={classes.rating}>
      <Rating
        readOnly={true}
        classes={css}
        value={p.value}
        icon={<FavoriteIcon fontSize="inherit" />}
        onChange={handler}
        precision={1}
      />
      <Box ml={2}>
        <Typography variant="h4" color="secondary" gutterBottom={false}>
          {p.value}
        </Typography>
      </Box>
    </Box>
  );
};

export default Rate;
