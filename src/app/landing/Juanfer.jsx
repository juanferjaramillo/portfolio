import {
  Grid,
  Typography,
  Box,
  Switch,
  Avatar,
  Button,
  ListItemIcon,
  IconButton,
  Divider,
} from "@mui/material";
import WhatIDo from "./WhatIDo";
import Projects from "./Projects";
import Image from "next/image";

export default function Juanfer(props) {
  return (
    <Grid
      item
      //main container
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"flex-start"}
      alignItems={"center"}
      width={"100%"}
    >
      <Grid
        //description and image
        item
        display={"flex"}
        flexDirection={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        width={"100%"}
        marginTop={4}

        //second row, description an picture
      >
        <Grid
          item
          //name and description
          width={"50%"}
          marginLeft={10}
        >
          <Typography fontSize={40}>Juanfer Jaramillo</Typography>
          <Typography fontSize={20} marginTop={3}>
            Full Stack Javascript Developer
          </Typography>
          <Typography fontSize={15} marginTop={5}>
            I am a software engineer specialised in frontend and backend
            development for complex scalable web apps. I write about software
            development on my blog. Want to know how I may help your project?
            Check out my project portfolio and online resume.
          </Typography>
          <Button variant="outlined" sx={{ mr: 4, mt: 2 }}>
            View my portfolio
          </Button>
          <Button variant="outlined" sx={{ mt: 2 }}>
            View my resume
          </Button>
        </Grid>
        <Grid
          item
          //Picture
          width={"30%"}
          marginRight={12}
          boxShadow={3}
        >
          <Image
            alt="juanfer"
            src="https://res.cloudinary.com/sthemma/image/upload/v1693092924/PortfolioJFJ/Juanfer1.jpg"
            width={"100%"}
          />
        </Grid>
      </Grid>

      <Divider width={"90%"} color={"grey"} sx={{ mt: 3 }} />
      <WhatIDo />
      <Divider width={"90%"} color={"grey"} sx={{ mt: 3 }} />
      <Projects /> 
      <Button variant="outlined">View my Portfolio</Button> 
      <Divider width={"90%"} color={"grey"} sx={{ mt: 3 }} />
      <Grid item
      width={"100vw"}
      sx={{m:2}}>
        <Typography textAlign={"center"} fontSize={12}>
            Site built by Juanfer Dev using Nextjs & MUI ° 2023
        </Typography>
      </Grid>

    </Grid>
  );
}
