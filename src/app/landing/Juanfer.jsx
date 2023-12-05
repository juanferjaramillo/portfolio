"use client";
import {
  Grid,
  Typography,
  Button,
  Divider,
  Avatar,
  Tooltip,
  Switch,
} from "@mui/material";
import WhatIDo from "./WhatIDo";
import Projects from "./Projects";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useStore } from "@/hooks/useStore";
import style from "./landing.module.scss";
import Link from "next/link";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";


export default function Juanfer(props) {
  const english = useStore((state) => state.english);

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
        // border={2}
        // borderColor={"red"}
        display={"flex"}
        flexDirection={{ xs: "column", sm: "row" }}
        alignItems={"center"}
        justifyContent={"space-between"}
        // width={"100%"}
        marginTop={4}

        //second row, description an picture
      >
        <Grid
          item
          // border={1}
          // borderColor={"blue"}
          //name and description
          // width={"50%"}
          flex={1}
          marginLeft={5}
          order={{ xs: 2, sm: 1 }}
        >
          <Typography fontSize={40}
          textAlign={"center"}
          >Juanfer Jaramillo</Typography>
          <Typography 
          textAlign={"center"}
          fontSize={20} marginTop={{xs:0, sm:3}}>
            {english
              ? "Full Stack Javascript Developer"
              : "Desarrollador Full Stack Javascript"}
          </Typography>
          <Typography fontSize={15} mt={{xs:3, sm:5}} mr={3}>
            {english
              ? "I am a junior Full Stack Javascript developer always challenging my limits. Check out my project portfolio and online resume."
              : "Soy un desarrollador junior Full Stack en Javascript, siempre retándome a superar mis límites. Mira mi portafolio y mi hoja de vida en línea."}
          </Typography>
          <Grid item display={"flex"} justifyContent={"center"}>
          <Button variant="contained" sx={{ mr: 4, mt: 2 }}>
            {english ? "My portfolio" : "Mi Portafolio"}
          </Button>
          <Button
            variant="contained"
            sx={{ mt: 2, backgroundColor: "darkcyan" }}
          >
            {english ? "My resume" : "Mi Hoja de Vida"}
          </Button>
          </Grid>
        </Grid>

        <Grid
          item
          // border={1}
          // borderColor={"orange"}
          display={"flex"}
          //Picture
          justifyContent={"center"}
          // boxShadow={3}
          flex={1}
          order={{ xs: 1, sm: 2 }}
        >
          <Image
            alt="juanfer"
            src="Juanfer1.jpg"
            width="200"
            height="200"
            style={{ objectFit: "contain" }}
          />
        </Grid>
      </Grid>

      <Divider width={"90%"} color={"grey"} sx={{ mt: 3 }} />
      <WhatIDo english={props.english} />
      <Divider width={"90%"} color={"grey"} sx={{ mt: 3 }} />
      {/* <Projects english={props.english} /> */}
      <Button variant="contained" sx={{ mt: 3 }}>
        {english ? "My Portfolio" : "Mi Portafolio"}
      </Button>
      <Divider width={"90%"} color={"grey"} sx={{ mt: 3 }} />
      <Grid
        item
        // width={"100vw"}
        sx={{ m: 2 }}
      >
        <Typography textAlign={"center"} fontSize={12}>
          {english
            ? "Site built by Juanfer Dev using Nextjs & MUI • 2023"
            : "Sitio construído por Juanfer Dev con Nextjs & MUI • 2023"}
        </Typography>
      </Grid>
      <Grid item
      height={{xs:"10vh", sm: "0vh"}}
      // sx={{height:"10vh"}}
      ></Grid>
    </Grid>
  );
}
