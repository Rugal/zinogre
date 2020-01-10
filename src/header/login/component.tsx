import {
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  TextField,
} from "@material-ui/core";
import React, { useState } from "react";

import { style } from "./style";
import { UserApi } from "../../openapi";
import Constant from "../../constant";

interface IProps {
  handleClose: () => any;
  hide: () => any;
  open: boolean;
  show: () => any;
  showProgressBar: boolean;
}

const transparency = (showProgressBar: boolean = false) => showProgressBar
  ? { style: { backgroundColor: 'transparent', boxShadow: 'none', } }
  : undefined;

const Login: React.FC<IProps> = (p) => {
  const classes = style();

  const [errorMessage, setErrorMessage] = useState("Login with your credential");

  // 1. submit login request
  const submit = () => new UserApi().login(1, "0")
    .then(response => {
      // 2. show progress circle in login screen
      p.show();
      // 3. set corresponding result
      setTimeout(() => {
        localStorage.setItem(Constant.AUTHORIZATION, `Bearer ${response.data}`);
        p.handleClose();
        setTimeout(() => {
          p.hide();
        }, 200);
      }, 2000);
    }).catch(error => {
      // prompt error message in login dialog
      if (error.response.status === 401) {
        setErrorMessage("User Credential Mismatch");
      }
    });

  const content = p.showProgressBar
    ? <CircularProgress />
    : <div>
      <DialogTitle id="form-dialog-title">{errorMessage}</DialogTitle>
      <DialogContent>
        <form className={classes.root} autoComplete="off">
          <FormControl>
            <TextField id="email" label="EMAIL" color="primary" required={true} />
          </FormControl>
          <FormControl>
            <TextField id="password" label="PASSWORD" color="secondary" required={true} />
          </FormControl>
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={submit} color="primary">
          Login
          </Button>
        <Button onClick={p.handleClose} color="secondary">
          Cancel
          </Button>
      </DialogActions>
    </div>
    ;

  return (
    <Dialog open={p.open} aria-labelledby="form-dialog-title" PaperProps={transparency(p.showProgressBar)}>
      {content}
    </Dialog >
  );
};
export default Login;
