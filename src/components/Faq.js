import {
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
  InputBase,
  Button,
} from "@mui/material";

const Faq = () => {
  return (
    <Container>
      <Grid
        textAlign={"center"}
        style={{ marginTop: "40px", marginBottom: "40px" }}
      >
        <Typography
          variant="h3"
          style={{ fontFamily: "Work Sans", fontWeight: 700 }}
        >
          Frequently Asked Questions
        </Typography>
        <Paper
          fullWidth
          style={{ height: 400, marginTop: 20, backgroundColor: "#E5E5E526" }}
        ></Paper>
      </Grid>
      <Grid mt={10} mb={10}>
        <Typography variant="caption">Stay up to date</Typography>
        <Grid
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Typography variant="h6" sx={{ width: "40%", fontFamily: "Mulish" }}>
            Youre’ probably thinking, “Another newsletter?” But we promise,
            youre going to love ours!
          </Typography>
          <Paper
            component="form"
            sx={{
              display: "flex",
              alignItems: "center",
              border: "2px solid #EFF0F6",
              width: "40%",
              borderTopRightRadius: 14,
              borderBottomRightRadius: 14,
            }}
            elevation={0}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Your Email"
              inputProps={{ "aria-label": "Your Email" }}
              backgroundColor="#E6E6E6"
            />
            <Button
              variant="filled"
              style={{
                backgroundColor: "#F7931A",
                color: "#fff",
                height: "50px",
                // borderRadius: ,
                width: "100px",
                fontFamily: "DM Sans",
                fontWeight: 500,
                fontStyle: "bold",
                borderTopRightRadius: 14,
                borderBottomRightRadius: 14,
              }}
              disabled
            >
              Subscribe
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Faq;
