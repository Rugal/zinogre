import { useQuery } from "@apollo/react-hooks";
import {
  CssBaseline,
  Grid,
  Paper,
} from "@material-ui/core";
import gql from "graphql-tag";
import React from "react";
import { useParams } from "react-router-dom";

import CardItem from "../../component/cardItem";
import ChipList from "../../component/chip";
import { Post as IPost } from "../../generated/graphql";
import { style } from "./style";

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
  // const { pid } = useParams();
  const classes = style();

  // const { data } = useQuery<IPost, IPostVars>(GET_POST, { variables: { pid: pid ? +pid : 0 } });

  return (
    <React.Fragment>
      <CssBaseline />
      <Grid container={true} justify="center" className={classes.root}>
        <Grid spacing={10} alignItems="center" justify="center" container={true} className={classes.grid}>
          <Grid item={true} xs={12}>
            <CardItem />
          </Grid>
          <Grid item={false}>
            <ChipList />
          </Grid>
          <Grid item={true} xs={12}>
            <Paper>
              Rugal
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment >
  );
};
export default Post;
