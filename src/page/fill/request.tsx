import gql from "graphql-tag";

import { Item, Storage } from "../../generated/graphql";

export interface IItemsResult {
  items: [Item];
}

export interface IStorageResult {
  storage: Storage;
}

export interface IFillVars {
  iid: number;
  quantity: number;
}

export const GET_ITEMS = gql`
{
  items {
    iid
    name
    tags {
      tid
      name
    }
  }
}
`;

export const POST_FILL = gql`
mutation FILL($iid: Int!, $quantity: Int!) {
  fill(input: {iid: $iid, quantity: $quantity}) {
    sid
    quantity
    createAt
  }
}
`;
