import {
  Box,
  Button,
  TextField,
} from "@material-ui/core";
import React from "react";

import { style } from "./style";

interface IProps {
  pid: number;
}

const Comment: React.FC<IProps> = (p) => {
  const classes = style();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        autoFocus={true}
        fullWidth={true}
        label="Share your thought"
        multiline={true}
        placeholder="Markdown"
        rowsMax={16}
        variant="outlined"
      />
      <Box className={classes.button}>
        <Button variant="contained">Preview</Button>
        <Button variant="contained" color="primary">Confirm</Button>
        <Button variant="outlined" color="secondary">Cancel</Button>
      </Box>
    </form>
  );
};

export default Comment;
