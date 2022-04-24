import { Grid, Container, Typography } from "@mui/material";
import { ReactComponent as Linkedin } from "../assets/footerIcons/linkedin.svg";
import { ReactComponent as Facebook } from "../assets/footerIcons/facebook.svg";
import { ReactComponent as Github } from "../assets/footerIcons/github.svg";
import { ReactComponent as Instagram } from "../assets/footerIcons/instagram.svg";
import { ReactComponent as Twitter } from "../assets/footerIcons/twitter.svg";
import Tooltip from "@mui/material/Tooltip";

const productNames = [
  "Landing Page",
  "Popup Builder",
  "Web-design",
  "Content",
  "Integrations",
];

const useCasesNames = [
  "Web-designers",
  "Marketers",
  "Small Business",
  "Website Builder",
];

const companyNames = ["About Us", "Careers", "Blog", "Teams", "Contact Us"];

const FooterTitles = ({ title }) => {
  return (
    <Typography
      style={{
        fontFamily: "Roboto",
        fontWeight: 400,
        fontSize: "14px",
        marginTop: "12px",
        cursor: "pointer",
      }}
      variant="body2"
    >
      {title}
    </Typography>
  );
};

const Footer = () => {
  return (
    <Grid>
      <Container>
        <Grid style={{ marginTop: 20 }}>
          <Grid
            display={"flex"}
            justifyContent="space-between"
            alignItems={"center"}
          >
            <Grid>
              <Typography
                style={{
                  fontFamily: "Roboto",
                  fontSize: "22px",
                  fontWeight: 700,
                }}
              >
                Follow us
              </Typography>
            </Grid>
            <Grid display={"flex"} gap={2} alignItems="center">
              {/* <a href="https://www.google.com">
                <Facebook />
              </a> */}
              {/* <Github /> */}
              {/* <Twitter /> */}
              {/* <Instagram /> */}
              <a href="https://www.linkedin.com/company/basketo-finance/">
                <Linkedin />
              </a>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <Grid
        style={{
          display: "block",
          height: "1px",
          color: "#D6D8DE",
          paddingLeft: "8rem",
          paddingRight: "8rem",
          opacity: 0.5,
        }}
      >
        <hr />
      </Grid>
      <Grid mt={2} mb={2}>
        <Container>
          <Grid display={"flex"} gap={"20rem"}>
            <Grid>
              <Typography
                style={{
                  fontFamily: "Roboto",
                  fontWeight: 700,
                  fontSize: "16px",
                }}
              >
                Product
              </Typography>
              <Grid mt={2}>
                {productNames.map((name) => (
                  <Tooltip title="Comming Soon">
                    <FooterTitles title={name} />
                  </Tooltip>
                ))}
              </Grid>
            </Grid>
            <Grid>
              <Typography
                style={{
                  fontFamily: "Roboto",
                  fontWeight: 700,
                  fontSize: "16px",
                }}
              >
                Use Cases
              </Typography>
              <Grid mt={2}>
                {useCasesNames.map((name) => (
                  <FooterTitles title={name} />
                ))}
              </Grid>
            </Grid>
            <Grid>
              <Typography
                style={{
                  fontFamily: "Roboto",
                  fontWeight: 700,
                  fontSize: "16px",
                }}
              >
                Company
              </Typography>
              <Grid mt={2}>
                {companyNames.map(
                  (name) =>
                    (name === "Careers" && (
                      <a
                        style={{ textDecoration: "none", color: "black" }}
                        href="https://www.linkedin.com/jobs/view/blockchain-developer-at-basketo-finance-2909155901/?originalSubdomain=in"
                      >
                        <FooterTitles title={name} />
                      </a>
                    )) ||
                    (name === "About Us" && (
                      <a
                        style={{ textDecoration: "none", color: "black" }}
                        href="https://www.linkedin.com/company/basketo-finance/"
                      >
                        <FooterTitles title={name} />
                      </a>
                    )) ||
                    (name === "Blog" && (
                      <a
                        style={{ textDecoration: "none", color: "black" }}
                        href="https://medium.com/@bhavishramaswamy/before-starting-a-blockchain-startup-e7482c6f1fae"
                      >
                        <FooterTitles title={name} />
                      </a>
                    )) ||
                    (name === "Teams" && (
                      <a
                        style={{ textDecoration: "none", color: "black" }}
                        href="https://www.linkedin.com/search/results/people/?currentCompany=%5B%2278814525%22%5D&origin=COMPANY_PAGE_CANNED_SEARCH&sid=R67"
                      >
                        <FooterTitles title={name} />
                      </a>
                    )) || (
                      <Tooltip title="Comming Soon">
                        <FooterTitles title={name} />
                      </Tooltip>
                    )
                )}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Grid>
      <Grid
        style={{
          display: "block",
          height: "1px",
          color: "#D6D8DE",
          paddingLeft: "8rem",
          paddingRight: "8rem",
          marginTop: "20px",
          opacity: 0.5,
        }}
      >
        <hr />
      </Grid>
      <Grid mt={1} mb={4}>
        <Container>
          <Typography variant="caption">© 2022 All Rights Reserved</Typography>
        </Container>
      </Grid>
    </Grid>
  );
};

export default Footer;
