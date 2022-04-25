import { Container, Typography, Grid, Button } from "@mui/material";
import { ReactComponent as GroupImage } from "./assets/GroupImage.svg";
import BackgroundVector from "./assets/Vector.png";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Faq from "./components/Faq";
import Main1 from "./components/Main1";
import Main2 from "./components/Main2";
import Main3 from "./components/Main3";

function App() {
  return (
    <div className="App">
      <Grid
        style={{
          backgroundImage: `url(${BackgroundVector})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Nav />
        <Main1 />
      </Grid>
      <Grid>
        <Main2 />
        <Main3 />
        <Faq />
        <Footer />
      </Grid>
    </div>
  );
}

export default App;
