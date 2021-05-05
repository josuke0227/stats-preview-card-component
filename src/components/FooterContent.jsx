import { Grid, makeStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import CountUp from "react-countup";

const useStyles = makeStyles(({ breakpoints }) => ({
  container: {
    marginBottom: "2.4rem",
    [breakpoints.up("md")]: {
      marginBottom: 0,
    },
  },
  headerWrapper: {
    marginBottom: 0,
    letterSpacing: "1px",
    [breakpoints.up("md")]: {
      marginBottom: "2.5rem",
      textAlign: "center",
    },
  },
  bodyWrapper: {
    textTransform: "uppercase",
    opacity: 0.6,
    fontSize: "1.6rem",
    fontWeight: 500,
    [breakpoints.up("md")]: {
      textAlign: "center",
    },
  },
}));

const FooterContent = ({ header, body, suffix }) => {
  const { headerWrapper, bodyWrapper, container } = useStyles();

  return (
    <Grid item xs={12} md={4} className={container}>
      <CountUp start={0} end={header} delay={0} suffix={suffix}>
        {({ countUpRef }) => (
          <Typography variant="h2" className={headerWrapper} ref={countUpRef} />
        )}
      </CountUp>
      <Typography variant="h2" className={bodyWrapper}>
        {body}
      </Typography>
    </Grid>
  );
};

export default FooterContent;
