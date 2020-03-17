import {
  createStyles,
  makeStyles,
  Theme,
} from "@material-ui/core";

export const style = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    button: {
      alignItems: "center",
      display: "flex",
      flex: "0 0 auto",
      justifyContent: "flex-end",
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    rate: {
      flexGrow: 1
    }
  }),
);
