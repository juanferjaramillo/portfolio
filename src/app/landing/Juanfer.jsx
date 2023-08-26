import { Grid, Typography, Box, Switch } from "@mui/material";

export default function Juanfer(props) {
  return (
    <Grid item
      display={"flex"}
      justifyContent={"center"}
      alignItems={"flex-start"}
      width={"100%"}
      height={"100vh"}
      sx={{ width: "100%" }}
    >
        <Grid item 
        display={"flex"} 
        flexDirection={"row"}
        alignItems={"center"}
        height={"7vh"}
        marginLeft={"68vw"}
        >
      <Typography >Light</Typography>
      <Switch
        // onChange={darkMode => setDarkmode(!darkMode)}
        onChange={() => props.mode()}
      />
      <Typography >Dark</Typography>
      </Grid>
    </Grid>
  );
}
