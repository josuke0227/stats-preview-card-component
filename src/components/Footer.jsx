import FooterContent from "./FooterContent";

import { Grid } from "@material-ui/core";
const data = [
  { header: 10, suffix: "k+", body: "companies" },
  { header: 314, suffix: "", body: "templates" },
  { header: 12, suffix: "M+", body: "queries" },
];

const Footer = () => (
  <Grid container>
    {data.map(({ header, body, suffix }) => (
      <FooterContent header={header} body={body} suffix={suffix} />
    ))}
  </Grid>
);

export default Footer;
