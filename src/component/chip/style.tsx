import {
  createStyles,
  makeStyles,
  Theme,
} from "@material-ui/core";

export const style = makeStyles((theme: Theme) =>
  createStyles({
    chip: {
      margin: theme.spacing(0.5),
    },
    root: {
      backgroundColor: "transparent",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
    },
  }),
);
