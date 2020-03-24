import { useMutation, useQuery } from "@apollo/react-hooks";
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
import React, { useState } from "react";

import {
  POST_CONSUME,
  GET_STORAGES,
  IConsumeVars,
  IStorageResult,
  IStoragesResult
} from "./request";
import { style } from "./style";

const date = (input: number) => {
  const d = new Date(input * 1000);
  return `${d.getFullYear()}-${d.getMonth()}-${d.getDate()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
};

/*
  Consumption page.
 */
const Consumption: React.FC = () => {
  const classes = style();

  const [map, setMap] = useState(new Map<number, number>());
  const onChangeCommittedHandler = (e: React.ChangeEvent<{}>, sid: number, quantity: number | number[]) => {
    if (typeof (quantity) !== "number") {
      return;
    }
    if (quantity === 0) {
      map.delete(sid);
    }
    else {
      map.set(sid, quantity);
    }
    setMap(map);
  };

  const [submitConsumption] = useMutation<IStorageResult, IConsumeVars>(POST_CONSUME);

  const { data, refetch } = useQuery<IStoragesResult>(GET_STORAGES);
  if (!data) {
    return null;
  }
  const { storages } = data;

  const onClickHandler = () => {
    map.forEach((value, key) => submitConsumption({ variables: { sid: key, quantity: value } }));
    refetch();
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
          max={s.quantity}
          min={0}
          onChangeCommitted={(e: React.ChangeEvent<{}>, v: number | number[]) => onChangeCommittedHandler(e, s.sid, v)}
          step={1}
          valueLabelDisplay="auto"
        />
      </TableCell>
    </TableRow>
  );

  return (
    <Paper className={classes.root}>
      <TableContainer >
        <Table className={classes.table} aria-label="simple table">
          <caption>
            <Button variant="contained" color="primary" onClick={onClickHandler}>submit</Button>
          </caption>
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
