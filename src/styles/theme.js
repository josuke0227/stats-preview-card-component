import { createMuiTheme } from "@material-ui/core/styles";

const colorAccent = "hsl(277, 64%, 61%)";
const colorPrimary = "hsl(244, 38%, 16%)";
const colorPrimaryDark = "hsl(233, 47%, 7%)";
const textColor = "#fff";

const fontFamily = "Inter";
const fontWeight = 700;
const textAlign = "center";

export default createMuiTheme({
  palette: {
    colorAccent,
    colorPrimary,
    colorPrimaryDark,
    textColor,
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        html: {
          fontSize: "62.5%",
        },
      },
    },
  },
  typography: {
    h1: {
      fontFamily,
      fontWeight,
      fontSize: "2.8rem",
      lineHeight: "3.2rem",
      textAlign,
      color: textColor,
    },
    h2: {
      fontFamily,
      fontWeight,
      fontSize: "2.4rem",
      lineHeight: "2.905rem",
      textAlign,
      color: textColor,
    },
    body1: {
      fontFamily,
      fontWeight: 400,
      fontSize: "1.5rem",
      lineHeight: "2.5rem",
      textAlign,
      color: textColor,
      opacity: "0.75",
    },
  },
});
