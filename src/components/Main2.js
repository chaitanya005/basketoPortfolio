import { Container, Grid, Paper, Typography } from "@mui/material";
import cryptoImage from "../assets/topCrypto.jpeg";

const Main2 = () => {
  return (
    <Grid mt={5} mb={5}>
      <Container>
        <Grid textAlign={"center"}>
          <Typography
            variant="h4"
            style={{ fontFamily: "Work Sans", fontWeight: 700 }}
          >
            Get the Most Out of your investments
          </Typography>
          <Grid
            display={"flex"}
            justifyContent={"space-around"}
            alignItems={"center"}
            mt={10}
          >
            <Grid>
              <Paper style={{ width: 400, height: 300 }}>
                <img height={300} src={cryptoImage} alt="cryptoimage" />
              </Paper>
            </Grid>
            <Grid
              style={{
                backgroundColor: "#E5E5E530",
                width: "40%",
                padding: 30,
                borderRadius: 10,
              }}
              textAlign={"left"}
            >
              <Typography
                style={{ fontFamily: "Mulish", fontWeight: 700, fontSize: 22 }}
              >
                Invest in best performing Baskets
              </Typography>
              <Typography
                style={{ fontFamily: "Mulish", fontWeight: 500, marginTop: 10 }}
              >
                Explore the wide range of crypto baskets and choose the one that
                suits you the best, invest in it with just a single click.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
};
export default Main2;
