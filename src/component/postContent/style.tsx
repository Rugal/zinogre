import {
  createStyles,
  makeStyles,
  Theme,
} from "@material-ui/core";

export const style = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      backgroundColor: theme.palette.background.paper,
    },
    root: {
      backgroundColor: "transparent",
      flexGrow: 1,
    },
  }),
);
