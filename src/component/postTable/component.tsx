import { useQuery } from "@apollo/react-hooks";
import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@material-ui/core";
import CloudDownloadIcon from "@material-ui/icons/CloudDownload";
import gql from "graphql-tag";
import React from "react";
import { Link } from "react-router-dom";

import { downloadFile } from "../../app/download";
import { Maybe, Post, PostPage } from "../../generated/graphql";
import { TorrentApi } from "../../generated/openapi";
import { style } from "./style";

interface IColumn {
  id: "pid" | "title";
  label: string;
  minWidth?: number;
  align?: "right";
  link: boolean;
}

const columns: IColumn[] = [
  { id: "pid", label: "id", minWidth: 50, link: true },
  { id: "title", label: "title", minWidth: 100, link: false },
  // { id: "author", label: "author", minWidth: 170, align: "right" },
  // { id: "tag", label: "tag", minWidth: 170, align: "right" },
  // { id: "torrent", label: "torrent", minWidth: 170, align: "right" },
];

interface IProps {
  token: string;
}

interface IPostPageResult {
  postPage: PostPage;
}

interface IPostPageVars {
  index: number;
  size: number;
}

const GET_POST = gql`
  query getPostPage($index: Int!, $size: Int!) {
    postPage(index: $index, size: $size) {
      size
      total
      index
      items {
        title
        content
        enable
        hash
        size
      }
    }
  }
`;

const PostTable: React.FC<IProps> = (p: IProps) => {
  const classes = style();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const { data } = useQuery<IPostPageResult, IPostPageVars>(GET_POST, { variables: { index: 0, size: 20 } });
  if (!data) {
    return null;
  }

  const { postPage } = data;

  const download = (post: Post) => new TorrentApi().download(post.pid, {
    headers: { Authorization: p.token },
    responseType: "arraybuffer", // this is very important
  })
    .then((response) => downloadFile(`${post.hash}.torrent`, new Blob([response.data])));

  const tableHeader = columns.map((column) => (
    <TableCell
      key={column.id}
      align={column.align}
      style={{ minWidth: column.minWidth }}
    >
      {column.label}
    </TableCell>
  ));
  const t = (row: Post, column: IColumn) => column.link
    ? <Link to={`/post/${row[column.id]}`} >{row[column.id]}</Link>
    : row[column.id];
  const tableCell = (row: Maybe<Post>, column: IColumn) => (
    <TableCell key={column.id} align={column.align}>
      {row && t(row, column)}
    </TableCell>
  );
  /* tslint:disable:jsx-no-lambda */
  const tableBody = postPage && postPage.items.map((row: Maybe<Post>, i) =>
    <TableRow hover={true} role="checkbox" tabIndex={-1} key={i}>
      {columns.map((column) => tableCell(row, column))}
      <TableCell>
        <Button onClick={() => row && download(row)}><CloudDownloadIcon /></Button>
      </TableCell>
    </TableRow>,
  );
  /* tslint:enable:jsx-no-lambda */

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader={true} aria-label="sticky table">
          <TableHead>
            <TableRow>
              {tableHeader}
              <TableCell>torrent</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableBody}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 20]} // TODO: Need discussion
        component="div"
        count={postPage.total * postPage.size} // TODO: Need improvement
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default PostTable;
