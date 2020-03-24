import { useMutation, useQuery } from "@apollo/react-hooks";
import {
  Button,
  Chip,
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

import { Tag } from "../../generated/graphql";
import {
  GET_ITEMS,
  POST_FILL,
  IItemsResult,
  IFillVars,
  IStorageResult,
} from "./request";
import { style } from "./style";

/*
  Fill page.
 */
const Fill: React.FC = () => {
  const classes = style();

  const [map, setMap] = useState(new Map<number, number>());
  const onChangeCommittedHandler = (e: React.ChangeEvent<{}>, iid: number, quantity: number | number[]) => {
    if (typeof (quantity) !== "number") {
      return;
    }
    if (quantity === 0) {
      map.delete(iid);
    }
    else {
      map.set(iid, quantity);
    }
    setMap(map);
  };

  const [submitFill] = useMutation<IStorageResult, IFillVars>(POST_FILL);

  const { data, refetch } = useQuery<IItemsResult>(GET_ITEMS);
  if (!data) {
    return null;
  }
  const { items } = data;

  const onClickHandler = () => {
    map.forEach((value, key) => submitFill({ variables: { iid: key, quantity: value } }));
    refetch();
  };

  const tags = (t: Tag[]) => {
    return t && t.map((v: Tag, i: number) => <Chip key={i} label={v.name} clickable color={i % 2 === 1 ? "primary" : "default"} />);
  };

  const rows = items.map(s =>
    <TableRow key={s.iid}>
      <TableCell component="th" scope="row">
        {s.name}
      </TableCell>
      <TableCell component="th" scope="row">
        {tags(s.tags)}
      </TableCell>
      <TableCell component="th" scope="row">
        <Slider
          aria-labelledby="discrete-slider-always"
          defaultValue={0}
          max={10}
          min={0}
          onChangeCommitted={(e: React.ChangeEvent<{}>, v: number | number[]) => onChangeCommittedHandler(e, s.iid, v)}
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
              <TableCell>Tag</TableCell>
              <TableCell>Fill</TableCell>
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

export default Fill;
