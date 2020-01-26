import { useQuery } from "@apollo/react-hooks";
import { CssBaseline, Grid } from "@material-ui/core";
import gql from "graphql-tag";
import React from "react";
import { useParams } from "react-router-dom";

import CardItem from "../../component/cardItem";
import ChipList from "../../component/chip";
import PostContent from "../../component/postContent";
import { Post as PostDto } from "../../generated/graphql";
import { style } from "./style";

interface IPost {
  post: PostDto;
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
      tags {
        tid
        name
      }
    }
  }
`;

/*
  User page, profile information.
 */
const Post: React.FC = () => {
  const { pid } = useParams();
  const classes = style();

  const { data } = useQuery<IPost, IPostVars>(GET_POST, { variables: { pid: pid ? +pid : 0 } });
  if (!data) {
    return null;
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <Grid container={true} justify="center" className={classes.root}>
        <Grid spacing={10} alignItems="center" justify="center" container={true} className={classes.grid}>
          <Grid item={true} xs={12}>
            <CardItem post={data.post} />
          </Grid>
          <Grid item={false}>
            <ChipList tags={data.post.tags} />
          </Grid>
          <Grid item={true} xs={12}>
            <PostContent post={data.post} />
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment >
  );
};
export default Post;
