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
  login: (token: string) => any;
  open: boolean;
  show: () => any;
  showProgressBar: boolean;
}

const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const transparency = (showProgressBar: boolean = false) => showProgressBar
  ? { style: { backgroundColor: 'transparent', boxShadow: 'none', } }
  : undefined;

const validateEmail = (email: string) => re.test(email);

const Login: React.FC<IProps> = (p) => {
  const classes = style();

  const [errorMessage, setErrorMessage] = useState("Login with your credential");
  const [invalidEmail, setInvalidEmail] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const resetForm = () => {
    setEmail("");
    setPassword("");
  };

  const validateInput = (input: string) => {
    setInvalidEmail(input ? !validateEmail(input) : false);
    setEmail(input);
  };

  // 1. submit login request
  const submit = () => email && password && !invalidEmail && new UserApi().login(1, password)
    .then(response => {
      // 2. Clean form value
      resetForm();
      // 3. show progress circle in login screen
      p.show();
      // 4. set corresponding result
      setTimeout(() => {
        // TODO: persist to localstorage
        const token = `Bearer ${response.data}`;
        p.login(token);
        localStorage.setItem(Constant.AUTHORIZATION, token);
        // TODO: Need a library
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
            <TextField
              color="primary"
              error={invalidEmail}
              id="email"
              helperText={invalidEmail ? "Invalid email" : undefined}
              label="EMAIL"
              onChange={({ target }) => validateInput(target.value)}
              required={true}
              value={email}
            />
          </FormControl>
          <FormControl>
            <TextField
              color="secondary"
              id="password"
              label="PASSWORD"
              onChange={({ target }) => setPassword(target.value)}
              required={true}
              type="password"
              value={password}
            />
          </FormControl>
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={submit} color="primary">
          Login
          </Button>
        <Button onClick={() => { p.handleClose(); resetForm(); }} color="secondary">
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
