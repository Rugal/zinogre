import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import React from "react";
import { useParams } from "react-router-dom";

import { Post as IPost } from "../../generated/graphql";

interface IProps {
  post: any;
}

interface IPostVars {
  pid: number;
}

const GET_POST = gql`
  query getPost($pid: Int!) {
    post(pid: $pid) {
      pid
      hash
      title
      content
      author {
        uid
        username
        email
      }
    }
  }
`;

/*
  User page, profile information.
 */
const Post: React.FC<IProps> = (p: IProps) => {
  const { pid } = useParams();

  const { data } = useQuery<IPost, IPostVars>(GET_POST, { variables: { pid: pid ? +pid : 0 } });

  return (
    <div>
      Post {pid}
    </div>
  );
};
export default Post;
