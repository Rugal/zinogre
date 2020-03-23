import { useQuery } from "@apollo/react-hooks";
import {
  Button,
  Paper,
  Slider,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from "@material-ui/core";
import gql from "graphql-tag";
import React from "react";

import { Storage } from "../../generated/graphql";
import { style } from "./style";

interface IStoragesResult {
  storages: [Storage];
}

const GET_STORAGES = gql`
{
  storages {
    sid
    quantity
    createAt
    item {
      iid
      name
      tags {
        tid
        name
      }
    }
  }
}
`;

/*
  Consumption page.
 */
const Consumption: React.FC = () => {
  const classes = style();

  const { data } = useQuery<IStoragesResult>(GET_STORAGES);
  if (!data) {
    return null;
  }
  const { storages } = data;

  const date = (input: number) => {
    const d = new Date(input * 1000);
    return `${d.getFullYear()}-${d.getMonth()}-${d.getDate()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
  };

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
      <TableCell>
        <Slider
          aria-labelledby="discrete-slider-always"
          defaultValue={0}
          valueLabelDisplay="auto"
          step={1}
          min={0}
          max={s.quantity}
        />
      </TableCell>
    </TableRow>
  );

  return (
    <Paper className={classes.root}>
      <TableContainer >
        <Table className={classes.table} aria-label="simple table">
          <caption><Button variant="contained" color="primary">submit</Button></caption>
          <TableHead>
            <TableRow>
              <TableCell>Item</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Consume</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default Consumption;
