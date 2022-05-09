import { Container, Typography, Grid, Button } from "@mui/material";
import { ReactComponent as GroupImage } from "../assets/GroupImg.svg";
import Tooltip from "@mui/material/Tooltip";

const titleStyle = {
  fontFamily: "Work Sans",
  fontWeight: 700,
  textAlign: "left",
  marginTop: "100px",
};

const titleGridStyle = {
  width: 400,
};

const Main1 = () => {
  return (
    <Container>
      <Grid display={"flex"} gap={2}>
        <Grid>
          <Grid style={titleGridStyle}>
            <Typography variant="h3" style={titleStyle}>
              Invest in crypto with baskets
            </Typography>
          </Grid>
          <Grid>
            <Typography
              style={{
                fontFamily: "Mulish",
                fontWeight: 400,
                fontStyle: "bold",
                marginTop: 8,
                width: 360,
              }}
            >
              Boost you investment strategies with all the essential data, and
              tools
            </Typography>
            <Tooltip title="Coming Soon">
              <Button
                style={{
                  fontFamily: "Work Sans",
                  fontStyle: "normal",
                  fontWeight: 700,
                  color: "#FB5E05",
                  border: "1px solid rgba(0, 0, 0, 0.3)",
                  fontSize: 22,
                  marginTop: 30,
                }}
              >
                Explore Baskets
              </Button>
            </Tooltip>
          </Grid>
        </Grid>
        <GroupImage width={800} height={650} />
        {/* <BackgroundVector /> */}
      </Grid>
    </Container>
  );
};

export default Main1;
