import gql from "graphql-tag";

import { Storage } from "../../generated/graphql";

export interface IStoragesResult {
  storages: [Storage];
}

export interface IStorageResult {
  storage?: Storage;
}

export interface IConsumeVars {
  quantity: number;
  sid: number;
}

export const GET_STORAGES = gql`
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

export const POST_CONSUME = gql`
mutation CONSUME($sid: Int!, $quantity: Int!) {
  consume(input: {sid: $sid, quantity: $quantity}) {
    sid
  }
}
`;
