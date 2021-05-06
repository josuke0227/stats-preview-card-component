import HeroImage from "./HeroImage";
import Article from "./Article";
import Footer from "./Footer";

import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(({ palette, breakpoints }) => ({
  contentsWrapper: {
    maxWidth: "350px",
    backgroundColor: palette.colorPrimary,
    padding: "3.2rem 3rem",
    borderRadius: "0 0 8px 8px",

    [breakpoints.up("md")]: {
      maxWidth: "555px",
      maxHeight: "446px",
      borderRadius: "8px 0 0 8px",
      padding: "6.5rem 3rem",
    },

    [breakpoints.up("lg")]: {
      padding: "6.5rem",
    },
  },
  container: {
    [breakpoints.up("md")]: {
      display: "flex",
      flexDirection: "row-reverse",
    },
  },
}));

const Contents = () => {
  const { contentsWrapper, container, layout } = useStyles();

  return (
    <div className={container}>
      <HeroImage />
      <section className={contentsWrapper}>
        <Article />
        <Footer />
      </section>
    </div>
  );
};

export default Contents;
