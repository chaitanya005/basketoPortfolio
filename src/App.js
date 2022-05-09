import { Container, Typography, Grid, Button } from "@mui/material";
import { ReactComponent as GroupImage } from "./assets/GroupImage.svg";
import BackgroundVector from "./assets/Vector.png";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Faq from "./components/Faq";
import Main1 from "./components/Main1";
import Main2 from "./components/Main2";
import Main3 from "./components/Main3";
import Achievements from "./components/Achievements";

function App() {
  return (
    <div className="App">
      <Container>
        <Grid>
          <Nav />
          <Main1 />
        </Grid>
        <Grid>
          <Main2 />
          <Main3 />
          <Achievements />
          {/* <Faq /> */}
          <Footer />
        </Grid>
      </Container>
    </div>
  );
}

export default App;
