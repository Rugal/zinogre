import {
  createStyles,
  makeStyles,
  Theme,
} from "@material-ui/core";

export const style = makeStyles((theme: Theme) =>
  createStyles({
    avatar: {
      backgroundColor: theme.palette.grey["200"],
      color: theme.palette.text.primary,
      margin: 10,
    },
    avatarContainer: {
      [theme.breakpoints.down("sm")]: {
        marginBottom: theme.spacing(4),
        marginLeft: 0,
      },
    },
    backButton: {
      marginRight: theme.spacing(2),
    },
    baseline: {
      alignSelf: "baseline",
      marginLeft: theme.spacing(4),
      [theme.breakpoints.down("sm")]: {
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        marginBottom: theme.spacing(2),
        marginLeft: 0,
        marginTop: theme.spacing(2),
        textAlign: "center",
        width: "100%",
      },
    },
    inline: {
      display: "inline-block",
      marginLeft: theme.spacing(4),
      [theme.breakpoints.down("sm")]: {
        marginLeft: 0,
      },
    },
    inlineRight: {
      alignSelf: "flex-end",
      height: 110,
      marginLeft: 50,
      paddingLeft: 100,
      textAlign: "right",
      width: "30%",
      [theme.breakpoints.down("sm")]: {
        margin: 0,
        textAlign: "center",
        width: "100%",
      },
    },
    itemContainer: {
      alignItems: "center",
      display: "flex",
      justifyContent: "flex-start",
      [theme.breakpoints.down("sm")]: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      },
    },
    paper: {
      color: theme.palette.text.secondary,
      padding: theme.spacing(3),
      textAlign: "left",
    },
  }),
);
