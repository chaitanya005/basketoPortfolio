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
    </Container>
  );
};

export default Faq;
