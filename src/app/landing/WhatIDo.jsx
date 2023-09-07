import { Divider, Grid, Typography } from "@mui/material";
import Image from 'next/image'
import {useStore} from "../../hooks/useStore"

export default function WhatIDo() {
  const english = useStore((state)=>state.english);

  return (
    <>
      <Grid
        item
        //second row
        width={"100%"}
        sx={{ mt: 3, pr: 10, pl: 10 }}
      >
        <Typography fontSize={25} sx={{ mb: 3 }}>
          {english ? "What I do _" : "Lo que hago _"}
        </Typography>
        <Typography fontSize={15}>
        {english ? "I build software in a creative way!. Below is a quick overview of my main technical skills and technologies I use. Check out my online resume and project portfolio."
        :"Construyo soluciones creativas de software!. Abajo encuentras un resumen de mis capacidades técnicas, y las tecnologías que uso.  Encuentra tambien mi hoja de vida y mi portafolio."}
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
          height={130}
        >
          <Image
            // style={{ objectFit: "contain" }}
            height={40}
            width={40}
            src="JS.jpg"
          />
          <Typography fontSize={15} textAlign={"center"} marginTop={1}>
          {english ? "Vanilla Javascript" : "Javascript Vainilla"}
          </Typography>
          <Typography fontSize={12} textAlign={"center"}>
          <Divider color={"darkGrey"} />
          {english ? "Simple Javascript for problem solving" :
          "Simple Javascript para solución de problemas"}
          </Typography>
        </Grid>
        <Grid
          item
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          width={150}
          height={130}
        >
          <Image
            style={{ objectFit: "contain" }}
            height={40}
            width={40}
            src="react-1-logo.png"
          />
          <Typography fontSize={15} textAlign={"center"} marginTop={1}>
            React
          </Typography>
          <Typography fontSize={12} textAlign={"center"}>
           <Divider color={"darkGrey"} />
            {english ? "Simply React for problem solving" :
            "Simple React para solución de problemas"}
          </Typography>
        </Grid>
        <Grid
          item
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          width={150}
          height={130}
        >
          <Image
            style={{ objectFit: "contain" }}
            height={40}
            width={40}
            src="Next.jpg"
          />
          <Typography fontSize={15} textAlign={"center"} marginTop={1}>
            Next
          </Typography>
          <Typography fontSize={12} textAlign={"center"}>
            <Divider color={"darkGrey"} />
          {english ? "For pages SEO firendly" : "Para páginas amigas de SEO"}
          </Typography>
        </Grid>
        <Grid
          item
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          width={150}
          height={130}
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
          <Divider color={"darkGrey"} />
            {english ? "Simply MUI for looking good" : 
            "MUI para páginas que lucen bien"}
          </Typography>
        </Grid>
      </Grid>

      <Grid
        item
        //fourth row with technologies
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"space-between"}
        alignItems={"flex-start"}
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
          height={130}
        >
          <Image
            style={{ objectFit: "contain" }}
            height={40}
            width={40}
            src="Redux.jpg"
          />
          <Typography fontSize={15} textAlign={"center"} marginTop={1}>
            Redux / Zustand
          </Typography>
          <Typography fontSize={12} textAlign={"center"}>
          <Divider color={"darkGrey"} />
            {english ? "Redux or Zustand as global containers" : 
            "Redux o Zustand como contenedores globales"}
          </Typography>
        </Grid>
        <Grid
          item
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          width={150}
          height={130}
        >
          <Image
            style={{ objectFit: "contain" }}
            height={40}
            width={40}
            src="Express.jpg"
          />
          <Typography fontSize={15} textAlign={"center"} marginTop={1}>
            Express
          </Typography>
          <Typography fontSize={12} textAlign={"center"}>
          <Divider color={"darkGrey"} />
            {english ? "Simply Express for backing you up" : 
            "Express para el back end"}
          </Typography>
        </Grid>
        <Grid
          item
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          width={150}
          height={130}
        >
          <Image
            style={{ objectFit: "contain" }}
            height={40}
            width={40}
            src="Sequelize.jpg"
          />
          <Typography fontSize={15} textAlign={"center"} marginTop={1}>
            Sequelize + PostgreSQL
          </Typography>
          <Typography fontSize={12} textAlign={"center"}>
          <Divider color={"darkGrey"} />
            {english ? "ORM + SQL database" : 
            "ORM + base de datos SQL"}
          </Typography>
        </Grid>
        <Grid
          item
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          width={150}
          height={130}
        >
          <Image
            style={{ objectFit: "contain" }}
            height={40}
            width={40}
            src="Node.jpg"
          />
          <Typography fontSize={15} textAlign={"center"} marginTop={1}>
            Node
          </Typography>
          <Typography fontSize={12} textAlign={"center"}>
          <Divider color={"darkGrey"} />
            {english ? "Simply Node for max power" : 
            "Node para maximo poder"}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}
