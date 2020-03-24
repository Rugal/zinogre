import {
  createStyles,
  makeStyles,
  Theme,
} from "@material-ui/core";

export const style = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      marginTop: 16,
    },
    chipInput: {
      height: 48,
      width: 512,
    },
    root: {
      '& > *': {
        flexGrow: 1,
        margin: theme.spacing(2),
      },
      marginTop: 32,
      alignItems: "center",
      display: "flex",
      flex: "0 0 auto",
      justifyContent: "flex-end",
    },
  }),
);
