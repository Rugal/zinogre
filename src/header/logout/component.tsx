import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
} from "@material-ui/core";
import React from "react";

interface IProps {
  handleClose: () => any;
  logout: () => any;
  open: boolean;
}

const Logout: React.FC<IProps> = (p) => {

  return (
    <Dialog
      aria-labelledby="form-dialog-title"
      onClose={p.handleClose}
      open={p.open}
    >
      <DialogTitle id="form-dialog-title">Confirmation</DialogTitle>
      <DialogActions>
        <Button color="primary" onClick={p.handleClose}>
          Cancel
          </Button>
        <Button color="secondary" onClick={() => { p.logout(); p.handleClose(); }}>
          Confirm
          </Button>
      </DialogActions>
    </Dialog >
  );
};
export default Logout;
