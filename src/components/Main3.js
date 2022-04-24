import { Container, Grid, Paper, Typography } from "@mui/material";

const Main3 = () => {
  return (
    <Grid mt={10} mb={10}>
      <Container>
        <Grid textAlign={"center"}>
          <Typography
            variant="h4"
            style={{ fontFamily: "Work Sans", fontWeight: 700 }}
          >
            Advantages of <span style={{ color: "#FB5E05" }}>Basketo</span>
          </Typography>
          <Typography
            variant="caption"
            style={{
              fontFamily: "Mulish",
              fontWeight: "300",
            }}
          >
            Here in Basketo one can invest with ease and manage their portfolios
            with an effective tools.
          </Typography>
          <Grid
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            mt={10}
            mb={5}
          >
            <Grid>
              {/* <Paper style={{ width: 400, height: 300 }}></Paper> */}
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
                Invest any amount
              </Typography>
              <Typography
                style={{ fontFamily: "Mulish", fontWeight: 500, marginTop: 10 }}
              >
                You don’t have to have large sum to start investing,{" "}
                <b>Start Small.</b>
              </Typography>
            </Grid>
          </Grid>
          <hr width={"50%"} color={"#F7931A"} style={{ opacity: 0.5 }} />
          <Grid
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            mt={5}
          >
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
                Easy to use
              </Typography>
              <Typography
                style={{ fontFamily: "Mulish", fontWeight: 500, marginTop: 10 }}
              >
                Creating and managing your crypto portfolios are as easy as in{" "}
                <b>3 steps.</b>
              </Typography>
            </Grid>
            <Grid>
              {/* <Paper style={{ width: 400, height: 300 }}></Paper> */}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
};
export default Main3;
