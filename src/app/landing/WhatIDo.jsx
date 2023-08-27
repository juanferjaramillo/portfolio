import { Grid, Typography } from "@mui/material";
import Image from 'next/image'

export default function WhatIDo() {
  return (
    <>
      <Grid
        item
        //second row
        width={"100%"}
        sx={{ mt: 3, pr: 10, pl: 10 }}
      >
        <Typography fontSize={25} sx={{ mb: 3 }}>
          What I do
        </Typography>
        <Typography fontSize={15}>
          I build software for clients all over the world. Below is a quick
          overview of my main technical skill sets and technologies I use. Want
          to find out more about my experience? Check out my online resume and
          project portfolio.
        </Typography>
      </Grid>

      <Grid
        item
        //Third row with technologies
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        wrap={"wrap"}
        width={"80%"}
        padding={5}
      >
        <Grid
          item
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          width={150}
        >
          <Image
            // style={{ objectFit: "contain" }}
            height={40}
            width={40}
            src="JS.jpg"
          />
          <Typography fontSize={15} textAlign={"center"} marginTop={1}>
            Vanilla Javascript
          </Typography>
          <Typography fontSize={12} textAlign={"center"}>
            Simply Javascript for problem solving
          </Typography>
        </Grid>
        <Grid
          item
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          width={150}
        >
          <Image
            style={{ objectFit: "contain" }}
            height={40}
            width={40}
            src="react-1-logo.png"
          />
          <Typography fontSize={15} textAlign={"center"} marginTop={1}>
            React.js
          </Typography>
          <Typography fontSize={12} textAlign={"center"}>
            Simply React for problem solving
          </Typography>
        </Grid>
        <Grid
          item
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          width={150}
        >
          <Image
            style={{ objectFit: "contain" }}
            height={40}
            width={40}
            src="Next.jpg"
          />
          <Typography fontSize={15} textAlign={"center"} marginTop={1}>
            Next.js
          </Typography>
          <Typography fontSize={12} textAlign={"center"}>
            Simply Next for problem solving
          </Typography>
        </Grid>
        <Grid
          item
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          width={150}
        >
          <Image
            style={{ objectFit: "contain" }}
            height={40}
            width={40}
            src="MUI.jpg"
          />
          <Typography fontSize={15} textAlign={"center"} marginTop={1}>
            MUI
          </Typography>
          <Typography fontSize={12} textAlign={"center"}>
            Simply MUI for looking good
          </Typography>
        </Grid>
      </Grid>

      <Grid
        item
        //fourth row with technologies
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        wrap={"wrap"}
        width={"80%"}
        padding={5}
      >
        <Grid
          item
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          width={150}
        >
          <Image
            style={{ objectFit: "contain" }}
            height={40}
            width={40}
            src="Redux.jpg"
          />
          <Typography fontSize={15} textAlign={"center"} marginTop={1}>
            Redux.js
          </Typography>
          <Typography fontSize={12} textAlign={"center"}>
            Simply Redux as a container
          </Typography>
        </Grid>
        <Grid
          item
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          width={150}
        >
          <Image
            style={{ objectFit: "contain" }}
            height={40}
            width={40}
            src="Express.jpg"
          />
          <Typography fontSize={15} textAlign={"center"} marginTop={1}>
            Express.js
          </Typography>
          <Typography fontSize={12} textAlign={"center"}>
            Simply Express for backing you up
          </Typography>
        </Grid>
        <Grid
          item
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          width={150}
        >
          <Image
            style={{ objectFit: "contain" }}
            height={40}
            width={40}
            src="Sequelize.jpg"
          />
          <Typography fontSize={15} textAlign={"center"} marginTop={1}>
            Sequelize.js
          </Typography>
          <Typography fontSize={12} textAlign={"center"}>
            Simply Sequelize for databases
          </Typography>
        </Grid>
        <Grid
          item
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          width={150}
        >
          <Image
            style={{ objectFit: "contain" }}
            height={40}
            width={40}
            src="Node.jpg"
          />
          <Typography fontSize={15} textAlign={"center"} marginTop={1}>
            Node.js
          </Typography>
          <Typography fontSize={12} textAlign={"center"}>
            Simply Node for max power
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}
