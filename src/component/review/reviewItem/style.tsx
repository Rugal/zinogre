import {
  createStyles,
  makeStyles,
  Theme,
} from "@material-ui/core";

export const style = makeStyles((theme: Theme) =>
  createStyles({
    heading: {
      flexBasis: "33.33%",
      flexShrink: 0,
      fontSize: theme.typography.pxToRem(15),
    },
    secondaryHeading: {
      color: theme.palette.text.secondary,
      fontSize: theme.typography.pxToRem(15),
    },
  }),
);
