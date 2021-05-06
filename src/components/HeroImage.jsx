import { makeStyles } from "@material-ui/core";
import mobileImageUrl from "../images/image-header-mobile.jpg";
import desktopImageUrl from "../images/image-header-desktop.jpg";

const useStyles = makeStyles(({ breakpoints, palette }) => ({
  heroImage: {
    width: "100%",
    maxWidth: "350px",
    mixBlendMode: "multiply",
    opacity: 0.76,
    display: "block",
    [breakpoints.up("md")]: {
      width: "initial",
      maxWidth: "555px",
      maxHeight: "446px",
    },
  },
  imageWrapper: {
    maxWidth: "350px",
    borderRadius: "8px 8px 0 0",
    backgroundColor: palette.colorAccent,
    [breakpoints.up("md")]: {
      maxWidth: "555px",
      maxHeight: "446px",
      width: "fit-content",
      marginRight: "auto",
      borderRadius: "0 8px 8px 0",
    },
  },

  backgroundColor: palette.colorPrimary,
  padding: "3.2rem 3rem",
  borderRadius: "0 0 8px 8px",
}));

const HeroImage = () => {
  const { heroImage, imageWrapper } = useStyles();

  return (
    <div className={imageWrapper}>
      <picture>
        <source
          media="(min-width:960px)"
          type="image/jpg"
          srcSet={desktopImageUrl}
        />
        <img
          className={heroImage}
          src={mobileImageUrl}
          alt="Passionate staffs"
        />
      </picture>
    </div>
  );
};

export default HeroImage;
