import gql from "graphql-tag";

import { Storage } from "../../generated/graphql";

export interface IStoragesResult {
  storages: [Storage];
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