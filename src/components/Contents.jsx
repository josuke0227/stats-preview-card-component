import HeroImage from "./HeroImage";
import Article from "./Article";
import Footer from "./Footer";

import { Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(({ palette, breakpoints }) => ({
  container: {
    padding: "2.4rem",
    backgroundColor: palette.colorPrimaryDark,

    [breakpoints.up("md")]: {
      display: "grid",
      gridTemplateAreas: "'contents image'",
      gridTemplateColumns: "1fr 1fr",
      padding: "17.7rem 2.4rem",
      minWidth: "100vw",
      minHeight: "100vh",
    },

    [breakpoints.up("lg")]: {
      padding: "17.7rem 16.5rem",
    },
  },
  imageWrapper: {
    [breakpoints.up("md")]: {
      gridArea: "image",
    },
  },
  contentsWrapper: {
    backgroundColor: palette.colorPrimary,
    padding: "3.2rem 2rem",
    borderRadius: "0 0 8px 8px",

    [breakpoints.up("md")]: {
      gridArea: "contents",
      minWidth: "40rem",
      padding: "3.2rem 9rem 2rem 3.2rem",
      borderRadius: "8px 0 0 8px",
      alignSelf: "stretch",
      display: "flex",
      alignItems: "center",
    },
  },
}));

const Contents = () => {
  const { contentsWrapper, container } = useStyles();

  return (
    <Grid container className={container}>
      <Grid xs={12}>
        <HeroImage />
      </Grid>
      <Grid xs={12} className={contentsWrapper}>
        <div>
          <Article />
          <Footer />
        </div>
      </Grid>
    </Grid>
  );
};

export default Contents;
