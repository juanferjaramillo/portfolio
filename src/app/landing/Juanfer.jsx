"use client";
import {
  Grid,
  Typography,
  Button,
  Divider,
} from "@mui/material";
import WhatIDo from "./WhatIDo";
import Projects from "./Projects";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useStore } from "@/hooks/useStore";

export default function Juanfer(props) {
  const english = useStore((state)=>state.english);

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
          {english ? "Full Stack Javascript Developer" : "Desarrollador Full Stack Javascript"}
          </Typography>
          <Typography fontSize={15} 
          mt={5} mr={3}>
            {english
              ? "I am a junior Full Stack Javascript developer always challenging my limits. Check out my project portfolio and online resume."
              : "Soy un desarrollador junior Full Stack en Javascript, siempre retándome a superar mis límites. Mira mi portafolio y mi hoja de vida en línea."}
          </Typography>
          <Button variant="outlined" sx={{ mr: 4, mt: 2 }}>
          {english ? "My portfolio" : "Mi Portafolio"}
          </Button>
          <Button variant="outlined" sx={{ mt: 2 }}>
          {english ? "My resume" : "Mi Hoja de Vida"}
          </Button>
        </Grid>
        <Grid
          item
          //Picture
          // width={"30%"}
          marginRight={12}
          boxShadow={3}
        >
          <Image
            alt="juanfer"
            src="Juanfer1.jpg"
            width={300}
            height={300}
            style={{ objectFit: "contain" }}
          />
        </Grid>
      </Grid>

      <Divider width={"90%"} color={"grey"} sx={{ mt: 3 }} />
      <WhatIDo english={props.english}/>
      <Divider width={"90%"} color={"grey"} sx={{ mt: 3 }} />
      <Projects english={props.english}/>
      <Button variant="outlined">
      {english ? "My Portfolio" : "Mi Portafolio"}</Button>
      <Divider width={"90%"} color={"grey"} sx={{ mt: 3 }} />
      <Grid
        item
        // width={"100vw"}
        sx={{ m: 2 }}
      >
        <Typography textAlign={"center"} fontSize={12}>
        {english ? "Site built by Juanfer Dev using Nextjs & MUI • 2023" : 
        "Sitio construído por Juanfer Dev con Nextjs & MUI • 2023"}
        </Typography>
      </Grid>
    </Grid>
  );
}
