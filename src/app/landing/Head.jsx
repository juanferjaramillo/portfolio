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
  Tooltip
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import ComputerIcon from "@mui/icons-material/Computer";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import ArticleIcon from "@mui/icons-material/Article";
import Link from "next/link";

export default function Head(props) {
  return (
    <Grid item display={"flex"} flexDirection={"column"} alignItems={"center"}>
      <Grid item marginBottom={3} marginTop={2}>
        <Typography fontSize={25}>Juanfer Dev</Typography>
      </Grid>
      <Avatar
        alt="Juanfer Dev"
        src="https://res.cloudinary.com/sthemma/image/upload/v1693092924/PortfolioJFJ/Juanfer1.jpg"
        sx={{ width: 130, height: 130, marginBottom: 3 }}
      ></Avatar>

      <Typography marginTop={1} textAlign={"center"} fontSize={"small"}>
        Hi! I am Juanfer Jaramillo,
      </Typography>
      <Typography fontSize={"small"}>
        Full Stack Javascript Developer.
      </Typography>
      <Typography fontSize={"small"}>Welcome to my site!</Typography>

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
        <Tooltip title="My Github page">
        <Link href="https://github.com/juanferjaramillo"
        target="_blank"
        >
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
        
        <Tooltip title="My Linkedin Page">
        <Link href="https://www.linkedin.com/in/juanferjaramillo/"
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
            <ListItemText>About me</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <ComputerIcon sx={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText>Portfolio</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <ArticleIcon sx={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText>Resume</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <ContactPageIcon sx={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText>Contact me</ListItemText>
          </ListItemButton>
        </ListItem>
      </List>

       <Grid
        item
        //the switch
        display={"flex"}
        flexDirection={"row"}
        alignItems={"center"}
        height={"7vh"}
        position={"fixed"}
        bottom={0}


        // marginLeft={"68vw"}
      >
        <Typography>Light</Typography>
        <Switch onChange={() => props.mode()} />
        <Typography>Dark</Typography>
      </Grid>


    </Grid>
  );
}
