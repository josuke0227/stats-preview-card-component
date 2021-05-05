import { makeStyles } from "@material-ui/core";
import mobileImageUrl from "../images/image-header-mobile.jpg";
import desktopImageUrl from "../images/image-header-desktop.jpg";

const useStyles = makeStyles(({ breakpoints, palette }) => ({
  heroImage: {
    width: "100%",
    mixBlendMode: "multiply",
    opacity: 0.76,
    display: "block",
    [breakpoints.up("md")]: {
      width: "initial",
    },
  },
  imageWrapper: {
    borderRadius: "8px 8px 0 0",
    backgroundColor: palette.colorAccent,
    [breakpoints.up("md")]: {
      width: "fit-content",
      marginRight: "auto",
      borderRadius: "0 8px 8px 0",
    },
  },
}));

const Playground = () => {
  const { heroImage, imageWrapper } = useStyles();

  return (
    <div className={imageWrapper}>
      <picture>
        <source
          media="(min-width:960px)"
          type="image/jpg"
          srcset={desktopImageUrl}
        />
        <img
          className={heroImage}
          src={mobileImageUrl}
          alt="Image of happy customer"
        />
      </picture>
    </div>
  );
};

export default Playground;
