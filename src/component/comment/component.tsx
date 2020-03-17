import {
  Box,
  Button,
  TextField,
} from "@material-ui/core";
import React from "react";
import ReactMarkdown from "react-markdown";

import Rate from "../rating";
import { style } from "./style";

interface IProps {
  comment: string;
  pid: number;
  saveComment: (comment: string) => any;
}

const Comment: React.FC<IProps> = (p) => {
  const classes = style();

  const [value, setValue] = React.useState<number | null>(0);
  const [preview, setPreview] = React.useState<boolean>(false);

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => p.saveComment(event.target.value);
  const previewHandler = () => setPreview(!preview);

  const show = preview
    ? <ReactMarkdown source={p.comment} />
    : <TextField
      autoFocus={true}
      fullWidth={true}
      label="Share your thought"
      multiline={true}
      onChange={changeHandler}
      placeholder="# Markdown"
      rowsMax={16}
      variant="outlined"
      value={p.comment}
    />;

  return (
    <form className={classes.root} noValidate={true} autoComplete="off">
      {show}
      <Box className={classes.button}>
        <Rate value={value} setValue={setValue} className={classes.rate} readonly={false} />
        <Button variant="contained" onClick={previewHandler}>Preview</Button>
        <Button variant="contained" color="primary">Confirm</Button>
        <Button variant="outlined" color="secondary">Cancel</Button>
      </Box>
    </form>
  );
};

export default Comment;
