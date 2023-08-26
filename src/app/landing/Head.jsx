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
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import ComputerIcon from "@mui/icons-material/Computer";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import ArticleIcon from "@mui/icons-material/Article";

export default function Head(props) {
  return (
    <Grid item display={"flex"} flexDirection={"column"} alignItems={"center"}>
      <Grid item marginBottom={3} marginTop={2}>
        <Typography fontSize={25}>Juanfer Dev</Typography>
      </Grid>
      <Avatar
        alt="Juanfer Dev"
        src="https://lh3.googleusercontent.com/pw/AIL4fc82yP-5LI8YXF_A6Xy6-MqZBcziFhDpHCiHYIofooNt5MoNaAhuXscRbZVNd-LroV8tsWS5oJq3HEPv8CXnoy7_5Okiyvi0o2gGmM071B2OUdben3JrIoIjZkcHCyk_f9-qYxdJ1Eye8x-CeJ2e9Jq7v0S8ZXr6IxTS7smO5eSWxJ42YHCgL75gVJC1ZgbXMxXaKnQIbY3HQwrawPrjmj_71iQMi0pjYwx9MDBBEQ1VzlKkK5TZRzOC4YcC7GmHkkwQv6RaoOErQt1oCKjlvQtCFXWRtTS1m5W3nW1cBAHAnzCav1x6DsOxZ57-mVyjmfcAZVkBhUiEbRbzsPgnofch6w63D-DbVhTpBZLe9dfhlCo2BVkkXlNWy40GnqKM1E-E7t9GFEDYb303WVQ4XZ62fbyubhvORb32qeB46caAs5oSwyzp5oqI389m47tyhL1oEnTbhFD1GPdKcHWq5vlRJoI3bB9yYovDaldIRDXQtAyMKAe0dOGIbjwdo4rdS-Yn6nUC_WWyD0oHA6AAwn0L-yBLvebCBKQ8awiz-00xw7mVe-FYBUlankAXiw0bK2CFjzKWp36yTuhk0u1UQlCFAj-_JIj4YKwUrripo3iqswcbTjs4Gm79gazzIgY2yCZJqc6q49gnqsVSlDhaCOqclLeRcSFyh0iYXJDxdtVYiRIsjtqCp3r6IRa3hKsTlNX7z0e5JnyJ6d2zIldhBI0uC0rzzDplFM-0iAUFFNsHbLqDZNjx-h_mw54cd-qbyPvP5IU88BGU2cTkB_r5Tpv49RIHphoK9Arg5kH-7YQigOmhcwuKZjTXEV_O46PiH9bFZsfS1gZZu0WTcwM24NKkCarVWlGetpCLJw7Md14kNgFwmolE-f-_78KIQP0qeJtCy5iPJf36ynuqPaulqPM=w658-h658-s-no?authuser=0"
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
        sx={{ width: "50%" }}
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"space-around"}
        marginTop={3}
        marginBottom={1}
      >
        <Avatar
          sx={{
            width: 40,
            height: 40,
            backgroundColor: "black",
            color: "white",
          }}
        >
          GH
        </Avatar>
        <Avatar
          sx={{
            width: 40,
            height: 40,
            backgroundColor: "darkBlue",
            color: "white",
          }}
        >
          LN
        </Avatar>
      </Grid>

      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <InfoIcon sx={{ color: "white" }}/>
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
    </Grid>
  );
}
