import { makeStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(({ palette, breakpoints }) => ({
  container: {
    marginBottom: "4rem",
  },
  headerHighlighted: {
    color: palette.colorAccent,
  },
  headerWrapper: {
    marginBottom: "1.6rem",
    [breakpoints.up("mg")]: {
      marginBottom: "2.5rem",
      textAlign: "left",
    },
  },
  bodyWrapper: {
    [breakpoints.up("mg")]: {
      textAlign: "left",
    },
  },
}));

const Playground = () => {
  const {
    headerWrapper,
    headerHighlighted,
    bodyWrapper,
    container,
  } = useStyles();

  return (
    <article className={container}>
      <Typography variant="h1" className={headerWrapper}>
        Get <span className={headerHighlighted}>insights</span> that help your
        business grow.
      </Typography>
      <Typography variant="body1" className={bodyWrapper}>
        Discover the benefits of data analytics and make better decisions
        regarding revenue, customer experience, and overall efficiency.
      </Typography>
    </article>
  );
};

export default Playground;
