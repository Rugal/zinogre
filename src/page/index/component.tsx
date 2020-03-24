import { useQuery } from "@apollo/react-hooks";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from "@material-ui/core";
import React from "react";

import { date } from "../common";
import { IStoragesResult, GET_STORAGES } from "./request";
import { style } from "./style";

/*
  Index page, storage list
 */
const Index: React.FC = () => {
  const classes = style();

  const { data } = useQuery<IStoragesResult>(GET_STORAGES);
  if (!data) {
    return null;
  }
  const { storages } = data;
  console.log(storages);

  const rows = storages.map(s =>
    <TableRow key={s.sid}>
      <TableCell component="th" scope="row">
        {s.item.name}
      </TableCell>
      <TableCell component="th" scope="row">
        {s.quantity}
      </TableCell>
      <TableCell component="th" scope="row">
        {date(s.createAt)}
      </TableCell>
    </TableRow>
  );

  return (
    <TableContainer component={Paper} className={classes.root}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Item</TableCell>
            <TableCell>Quantity</TableCell>
            <TableCell>Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Index;
