/* tslint:disable */
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
import React from "react";

import { PostDto, PostPageDto, TorrentApi } from "../../openapi/api";
import { style } from "./style";

interface IColumn {
  id: "pid" | "title";
  label: string;
  minWidth?: number;
  align?: "right";
}

const columns: IColumn[] = [
  { id: "pid", label: "id", minWidth: 50 },
  { id: "title", label: "title", minWidth: 100 },
  // { id: "author", label: "author", minWidth: 170, align: "right" },
  // { id: "tag", label: "tag", minWidth: 170, align: "right" },
  // { id: "torrent", label: "torrent", minWidth: 170, align: "right" },
];

interface IProps {
  postPage: PostPageDto;
  token: string;
}

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

  const { postPage } = p;

  const download = (post: PostDto) => new TorrentApi().download(post.pid, {
    headers: { Authorization: p.token },
    responseType: "arraybuffer", // this is very important
  })
    .then(({ data }) => {
      const link = document.createElement("a");
      link.href = window.URL.createObjectURL(new Blob([data]));
      link.download = `${post.hash}.torrent`; // any other extension
      document.body.appendChild(link);
      link.click();
      link.remove();
    });

  const tableHeader = columns.map((column) => (
    <TableCell
      key={column.id}
      align={column.align}
      style={{ minWidth: column.minWidth }}
    >
      {column.label}
    </TableCell>
  ));
  const tableRow = (row: PostDto, column: IColumn) => (
    <TableCell key={column.id} align={column.align}>
      {row[column.id]}
    </TableCell>
  );
  const tableBody = p.postPage.items.map((row: PostDto, i) =>
    <TableRow hover={true} role="checkbox" tabIndex={-1} key={i}>
      {columns.map((column) => tableRow(row, column))}
      <TableCell>
        <Button onClick={() => download(row)}><CloudDownloadIcon /></Button>
      </TableCell>
    </TableRow>,
  );

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
