import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  TextField,
} from "@material-ui/core";
import React from "react";

import { style } from "./style";

interface IProps {
  handleClose: () => any;
  open: boolean;
}

const Login: React.FC<IProps> = (p) => {
  const classes = style();

  return (
    <Dialog open={p.open} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Login with your credential</DialogTitle>
      <DialogContent>
        <FormControl className={classes.root}>
          <TextField id="email" label="EMAIL" color="primary" />
          <TextField id="password" label="PASSWORD" color="secondary" />
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button onClick={p.handleClose} color="primary">
          Login
          </Button>
        <Button onClick={p.handleClose} color="secondary">
          Cancel
          </Button>
      </DialogActions>
    </Dialog>
  );
};
export default Login;
