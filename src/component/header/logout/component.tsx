import {
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogTitle,
} from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";

import { transparency } from "../common";

interface IProps {
  handleClose: () => any;
  hide: () => any;
  logout: () => any;
  open: boolean;
  show: () => any;
  showProgressBar: boolean;
}

const Logout: React.FC<IProps> = (p) => {

  const history = useHistory();
  const backToIndex = () => history.push("/");

  const logout = () => {
    // 1. show progress bar
    p.show();
    setTimeout(() => {
      // 2. go back to history
      backToIndex();
      // 3. logout & clean
      p.logout();
      // 4. clean & close
      p.handleClose();
      setTimeout(() => {
        p.hide();
      }, 200);
    }, 1000);
  };

  const content = p.showProgressBar
    ? <CircularProgress />
    : <React.Fragment>
      <DialogTitle id="form-dialog-title">Confirmation</DialogTitle>
      <DialogActions>
        <Button color="primary" onClick={p.handleClose}>Cancel</Button>
        <Button color="secondary" onClick={logout}>Confirm</Button>
      </DialogActions>
    </React.Fragment>
    ;

  return (
    <Dialog
      aria-labelledby="form-dialog-title"
      onClose={p.handleClose}
      open={p.open}
      PaperProps={transparency(p.showProgressBar)}
    >
      {content}
    </Dialog >
  );
};
export default Logout;
