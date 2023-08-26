
import {
  Grid,
  Typography,
  Box,
  Switch,
  Avatar,
  Button,
  ListItemIcon,
  IconButton,
} from "@mui/material";

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
      height={"100vh"}
    >
      <Grid
        item
        //first row - only contains the switch
        display={"flex"}
        flexDirection={"row"}
        alignItems={"center"}
        height={"7vh"}
        marginLeft={"68vw"}
      >
        <Typography>Light</Typography>
        <Switch onChange={() => props.mode()} />
        <Typography>Dark</Typography>
      </Grid>

      <Grid
        //description and image
        item
        display={"flex"}
        flexDirection={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        width={"100%"}

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
            I'm a software engineer specialised in frontend and backend
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
          <img
            alt="juanfer"
            src="https://lh3.googleusercontent.com/pw/AIL4fc82yP-5LI8YXF_A6Xy6-MqZBcziFhDpHCiHYIofooNt5MoNaAhuXscRbZVNd-LroV8tsWS5oJq3HEPv8CXnoy7_5Okiyvi0o2gGmM071B2OUdben3JrIoIjZkcHCyk_f9-qYxdJ1Eye8x-CeJ2e9Jq7v0S8ZXr6IxTS7smO5eSWxJ42YHCgL75gVJC1ZgbXMxXaKnQIbY3HQwrawPrjmj_71iQMi0pjYwx9MDBBEQ1VzlKkK5TZRzOC4YcC7GmHkkwQv6RaoOErQt1oCKjlvQtCFXWRtTS1m5W3nW1cBAHAnzCav1x6DsOxZ57-mVyjmfcAZVkBhUiEbRbzsPgnofch6w63D-DbVhTpBZLe9dfhlCo2BVkkXlNWy40GnqKM1E-E7t9GFEDYb303WVQ4XZ62fbyubhvORb32qeB46caAs5oSwyzp5oqI389m47tyhL1oEnTbhFD1GPdKcHWq5vlRJoI3bB9yYovDaldIRDXQtAyMKAe0dOGIbjwdo4rdS-Yn6nUC_WWyD0oHA6AAwn0L-yBLvebCBKQ8awiz-00xw7mVe-FYBUlankAXiw0bK2CFjzKWp36yTuhk0u1UQlCFAj-_JIj4YKwUrripo3iqswcbTjs4Gm79gazzIgY2yCZJqc6q49gnqsVSlDhaCOqclLeRcSFyh0iYXJDxdtVYiRIsjtqCp3r6IRa3hKsTlNX7z0e5JnyJ6d2zIldhBI0uC0rzzDplFM-0iAUFFNsHbLqDZNjx-h_mw54cd-qbyPvP5IU88BGU2cTkB_r5Tpv49RIHphoK9Arg5kH-7YQigOmhcwuKZjTXEV_O46PiH9bFZsfS1gZZu0WTcwM24NKkCarVWlGetpCLJw7Md14kNgFwmolE-f-_78KIQP0qeJtCy5iPJf36ynuqPaulqPM=w658-h658-s-no?authuser=0"
            width={"100%"}
          />
        </Grid>
      </Grid>

      <Grid item
      //second row
      width={"100%"}
      sx={{mt:5, pl: 10}}
      >
        <Typography fontSize={25} sx={{mb:3}}>
            What I do
        </Typography>
        <Typography fontSize={15}>
        I build software for clients all over the world. 
        Below is a quick overview of my main technical skill sets and technologies I use. 
        Want to find out more about my experience? Check out my online resume and project portfolio.
        </Typography>
      </Grid>

      <Grid item
      //Third row with technologies
      display={"flex"}
      flexDirection={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
      wrap={"wrap"}
      width={"100%"}
      padding={5}
      >
        <Grid item border={1}>Javascript Vanilla</Grid>
        <Grid item border={1}>React.js</Grid>
        <Grid item border={1}>Next.js</Grid>
        <Grid item border={1}>MUI</Grid>
        <Grid item border={1}>Express.js</Grid>
        <Grid item border={1}>Sequelize.js</Grid>
        <Grid item border={1}>Node.js</Grid>
      </Grid>

    </Grid>
  );
}
