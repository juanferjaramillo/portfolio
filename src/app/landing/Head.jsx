"use client"

import {
  Grid,
  Typography,
  Avatar,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
  Tooltip,
  Divider
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import ComputerIcon from "@mui/icons-material/Computer";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import ArticleIcon from "@mui/icons-material/Article";
import Link from "next/link";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import {useStore} from "../../hooks/useStore";

export default function Head(props) {
  const english = useStore((state)=>state.english);

  return (
    <Grid item display={"flex"} flexDirection={"column"} 
    alignItems={"center"} 
    sx={{width: "100%"}}>
      <Grid item marginBottom={3} marginTop={2}>
        <Typography fontSize={25}>Juanfer Dev</Typography>
      </Grid>
      <Avatar
        alt="Juanfer Dev"
        src="https://res.cloudinary.com/sthemma/image/upload/v1693092924/PortfolioJFJ/Juanfer1.jpg"
        sx={{ width: 130, height: 130, marginBottom: 3 }}
      ></Avatar>

      <Typography marginTop={1} textAlign={"center"} fontSize={"small"}>
        {english ? "Hi. I am Juanfer Jaramillo" : "Hola, yo soy Juanfer Jaramillo" },
      </Typography>
      <Typography fontSize={"small"}>
        {english ? "Full Stack Javascript Developer." : 
        "Desarrollador Full Stack Javascript"}
      </Typography>
      <Typography fontSize={"small"}>
        {english ? "Welcome to my site!" : "Bienvenido a mi sitio!"}
        </Typography>

      <Grid
        item
        //social networks
        sx={{ width: "50%" }}
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"space-around"}
        marginTop={3}
        marginBottom={1}
      >
        <Tooltip 
        title={english ? "My Github page" : "Mi página Github"}>
          <Link href="https://github.com/juanferjaramillo" target="_blank">
            <Avatar
              sx={{
                width: 40,
                height: 40,
                backgroundColor: "black",
              }}
              src="https://res.cloudinary.com/sthemma/image/upload/v1693104405/PortfolioJFJ/github.jpg"
            />
          </Link>
        </Tooltip>

        <Tooltip 
        title={english ? "My Linkedin Page" : "Mi Linkedin"}>
          <Link
            href="https://www.linkedin.com/in/juanferjaramillo/"
            target="_blank"
          >
            <Avatar
              sx={{
                width: 40,
                height: 40,
              }}
              src="https://res.cloudinary.com/sthemma/image/upload/v1693104528/PortfolioJFJ/Ln.png"
            />
          </Link>
        </Tooltip>
      </Grid>

      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <InfoIcon sx={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText>
              {english ? "About me" : "Acerca de mi"}
              </ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <ComputerIcon sx={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText>
              {english ? "Portfolio" : "Portafolio"}</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <ArticleIcon sx={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText>
              {english ? "Resume" : "Hoja de Vida"}</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <ContactPageIcon sx={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText>
              {english ? "Contact me" : "Contáctame"}</ListItemText>
          </ListItemButton>
        </ListItem>
      </List>

      <Divider width={"90%"} color={"grey"} />

      <Grid
        item
        //the languages
        display={"flex"}
        flexDirection={"row"}
        alignItems={"center"}
        height={"7vh"}
        position={"fixed"}
        bottom={25}

        // marginLeft={"68vw"}
      >
        <Typography>English</Typography>
        <Switch
        onChange={useStore((state)=>state.english ? state.setSpanish : state.setEnglish)}
        />
        <Typography>Español</Typography>
      </Grid>

      <Grid
        item
        //the darkmode switch
        display={"flex"}
        flexDirection={"row"}
        alignItems={"center"}
        height={"7vh"}
        position={"fixed"}
        bottom={0}

        // marginLeft={"68vw"}
      >
        <LightModeIcon />
        <Switch onChange={() => props.mode()} />
        <DarkModeIcon />
      </Grid>
    </Grid>
  );
}
