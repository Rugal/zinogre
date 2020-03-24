import gql from "graphql-tag";

import { Item, Tag, TagInput } from "../../generated/graphql";

export interface ITagsResult {
  tags: [Tag];
}

export const GET_TAGS = gql`
{
  tags {
    tid
    name
  }
}
`;

export interface IItemResult {
  item: Item;
}

export interface IItemVars {
  name: string;
  tags: TagInput[];
}

export const ADD_ITEM = gql`
mutation ADD_ITEM($name: String!, $tags: [TagInput!]) {
  addItem(input: {name: $name, tags: $tags}) {
    iid
    name
    createAt
  }
}
`;
