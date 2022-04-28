import { Container, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import cryptoImage from "../assets/topCrypto.jpeg";

const Achievements = () => {
  return (
    <Grid mt={10} mb={10}>
      <Container>
        <Grid textAlign={"center"}>
          <Typography
            variant="h4"
            style={{ fontFamily: "Work Sans", fontWeight: 700 }}
          >
            Achievements of <span style={{ color: "#FB5E05" }}>Basketo</span>
          </Typography>
        </Grid>
        <Grid
          display={"flex"}
          //   gap={"10rem"}
          justifyContent={"space-around"}
          alignItems={"center"}
          mt={10}
        >
          <Grid>
            <a href="https://yourstory.com/companies/basketo-finance/amp">
              <img
                height={100}
                src={
                  "https://images.yourstory.com/assets/logos/logo_yourstory_new.svg"
                }
                alt="yourstory"
              />
            </a>
          </Grid>
          <Grid>
            <a href="https://t-hub.co/t-hub-selects-13-startups-for-its-first-product-development-program-rubrix/">
              <img
                height={150}
                src={
                  "https://t-hub.co/wp-content/uploads/2020/04/cropped-Logo-01-330x275.jpg"
                }
                alt="t-hub"
              />
            </a>
          </Grid>
          <Grid>
            <a href="https://devpost.com/software/basketo">
              <img
                height={80}
                src={
                  "https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/challenge_photos/001/793/480/datas/full_width.png"
                }
                alt="t-hub"
              />
            </a>
          </Grid>
        </Grid>
        <Grid display={"flex"} justifyContent={"center"} mt={8}></Grid>
      </Container>
    </Grid>
  );
};

export default Achievements;
