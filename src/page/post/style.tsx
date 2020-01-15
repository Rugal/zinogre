import {
  createStyles,
  makeStyles,
  Theme,
} from "@material-ui/core";

export const style = makeStyles((theme: Theme) =>
  createStyles({
    grid: {
      width: 1000,
    },
    root: {
      backgroundPosition: "0 400px",
      backgroundSize: "cover",
      flexGrow: 1,
      marginTop: 20,
      overflow: "hidden",
      padding: 20,
      paddingBottom: 200,
    },
  }),
);
