import { useMutation, useQuery } from "@apollo/react-hooks";
import {
  Button,
  Paper,
  TextField
} from '@material-ui/core';
import React, { useState } from "react";
import ChipInput from 'material-ui-chip-input'

import {
  GET_TAGS,
  ADD_ITEM,
  ITagsResult,
  IItemResult,
  IItemVars,
} from "./request";
import { style } from "./style";

import { TagInput } from "../../generated/graphql";

/*
  Item
 */
const Item: React.FC = () => {
  const classes = style();

  const [name, setName] = useState("");
  // tag candidate to be associated with this item
  const [candidate, setCandidate] = useState(new Array<TagInput>());

  const [addItem] = useMutation<IItemResult, IItemVars>(ADD_ITEM);
  const { data } = useQuery<ITagsResult>(GET_TAGS);
  if (!data) {
    return null;
  }

  const onClickHandler = () => {
    console.log(name);
    console.log(candidate);
    addItem({ variables: { name: name, tags: candidate } });
  };

  const itemOnChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value);
  const chipOnChangeHandler = (chips: any[]) => setCandidate(chips.map(c => ({ name: c.trim() })));

  return (
    <Paper>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="name"
          label="Item Name"
          onChange={itemOnChangeHandler}
          value={name}
        />
        <ChipInput
          defaultValue={[]}
          classes={{ root: classes.chipInput }}
          onChange={chipOnChangeHandler}
          placeholder="Tags"
        />
        <Button
          classes={{ root: classes.button }}
          color="primary"
          onClick={onClickHandler}
          variant="contained"
        >
          Submit
        </Button>
      </form>
    </Paper>
  );
};

export default Item;
