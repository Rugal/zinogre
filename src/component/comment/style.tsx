import {
  createStyles,
  makeStyles,
  Theme,
} from "@material-ui/core";

export const style = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      "& > *": {
        margin: theme.spacing(1),
      },
      "alignItems": "center",
      "display": "flex",
      "flex": "0 0 auto",
      "justifyContent": "flex-end",
    },
    rate: {
      flexGrow: 1,
    },
    root: {
      "& > *": {
        margin: theme.spacing(1),
      },
    },
  }),
);
