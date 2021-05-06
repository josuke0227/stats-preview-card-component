import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(({ palette, breakpoints }) => ({
  layout: {
    backgroundColor: palette.colorPrimaryDark,
    padding: "2.4rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    [breakpoints.up("md")]: {
      maxWidth: "100vw",
      minHeight: "100vh",
      overflowX: "hidden",
      paddingRight: "1rem",
      paddingLeft: "1rem",
    },
  },
}));

const Layout = ({ children }) => {
  const { layout } = useStyles();

  return <div className={layout}>{children}</div>;
};

export default Layout;
