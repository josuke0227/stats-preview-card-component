import { makeStyles } from "@material-ui/core";
import mobileImageUrl from "./images/image-header-mobile.jpg";
import desktopImageUrl from "./images/image-header-desktop.jpg";

const useStyles = makeStyles((theme) => ({
  heroImage: {
    width: "100%",
    mixBlendMode: "multiply",
    opacity: 0.76,
    borderRadius: "8px 8px 0 0",
    [theme.breakpoints.up("md")]: {
      borderRadius: "0 8px 8px 0",
    },
  },
}));

const Playground = () => {
  const { heroImage, heroBackground } = useStyles();

  return (
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
  );
};

export default Playground;
