import { useState } from "react";
import {
  Button,
  Container,
  Typography,
  Modal,
  Box,
  Paper,
  InputBase,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import Grid from "@mui/material/Grid";
import emailImage from "../assets/email.png";
import Tooltip from "@mui/material/Tooltip";
import { ReactComponent as BasketoLogo } from "../assets/basketoLogo.svg";

const navGridStyle = {
  display: "flex",
  justifyContent: "space-between",
  marginTop: "10px",
  alignItems: "center",
};

const navAppStyle = {
  color: "#FB5E05",
  border: "1px solid rgba(0, 0, 0, 0.3)",
  fontSize: 22,
  width: "90px",
  fontFamily: "Work Sans",
  fontWeight: 700,
};

const navDocsStyle = {
  fontSize: 20,
  fontFamily: "Mulish",
  cursor: "pointer",
};

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  height: 350,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: 7,
};

const Nav = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Container>
      <Grid style={navGridStyle}>
        <Grid display="flex" gap={4} alignContent="center" alignItems="center">
          {/* <BasketoLogo height={100} width={180} /> */}
          <Typography style={{ fontSize: 20 }} variant="h6">
            Basketo
          </Typography>
          {/* <BasketoLogo width={300} height={70} /> */}
          <Tooltip title="Comming Soon">
            <Typography style={navDocsStyle}>Docs</Typography>
          </Tooltip>
        </Grid>
        <Tooltip title="Comming Soon">
          <Button style={navAppStyle} onClick={handleOpen}>
            App
          </Button>
        </Tooltip>
      </Grid>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} textAlign="center">
          <iframe
            title="basketo"
            src="https://basketo.substack.com/embed"
            width="480"
            height="320"
            style={{ background: "white" }}
            frameborder="0"
            scrolling="no"
          ></iframe>
          {/*<>
            <Grid display={"flex"} justifyContent="flex-end">
              <CloseIcon onClick={handleClose} style={{ cursor: "pointer" }} />
            </Grid>
            <img src={emailImage} alt="email" />
            <Grid>
              <Typography
                variant="body1"
                fontSize={28}
                fontStyle={"Mulish"}
                fontWeight={500}
              >
                Get early access to our beta version
              </Typography>
            </Grid>
            <Grid alignItems={"center"} width={"90%"} margin="auto" mt={2}>
              <Paper
                component="form"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  border: "1px solid #EFF0F6",
                  borderRadius: 20,
                  padding: 2,
                }}
                elevation={0}
              >
                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Enter your email"
                  inputProps={{ "aria-label": "Enter your email" }}
                />
                <Button
                  variant="filled"
                  style={{
                    backgroundColor: "#F7931A",
                    color: "#fff",
                    height: "50px",
                    borderRadius: 30,
                    width: "150px",
                    fontFamily: "DM Sans",
                    fontWeight: 500,
                    fontStyle: "bold",
                  }}
                  disabled
                >
                  Subscribe
                </Button>
              </Paper>
            </Grid>
                </>*/}
        </Box>
      </Modal>
    </Container>
  );
};

export default Nav;
