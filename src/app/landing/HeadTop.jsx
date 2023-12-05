import {
  Grid,
  Typography,
  Button,
  Divider,
  Avatar,
  Tooltip,
  Switch,
} from "@mui/material";
import style from "./landing.module.scss";
import Link from "next/link";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useStore } from "../../hooks/useStore";

export default function HeadTop(props) {
  const english = useStore((state) => state.english);

  return (
    <Grid
      item
      className={style.headTopLight}
      display={{ xs: "flex", sm: "none" }}
      justifyContent={"space-between"}
    >
      <Grid
        item
        //Avatar
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        flex={1}
      >
        <Avatar
          alt="Juanfer Dev"
          src="https://res.cloudinary.com/sthemma/image/upload/v1693092924/PortfolioJFJ/Juanfer1.jpg"
          sx={{ width: 40, height: 40 }}
        />
        <Typography fontSize={"small"}>Juanfer Dev</Typography>
      </Grid>

      <Grid
        item
        //Social Networks
        display={"flex"}
        flexDirection={"row"}
        flex={1}
        justifyContent={"space-around"}
        alignItems={"center"}
      >
        <Tooltip title={english ? "My Github page" : "Mi página Github"}>
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

        <Tooltip title={english ? "My Linkedin Page" : "Mi Linkedin"}>
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

      <Grid
        item
        //Switches
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"space-between"}
        alignItems={"center"}
        flex={1}
      >
        <Grid
          item
          //the languages
          display={"flex"}
          flexDirection={"row"}
          alignItems={"center"}
          height={"7vh"}
          position={"relative"}
        >
          <Typography fontSize={"small"}>English</Typography>
          <Switch
            size="small"
            onChange={useStore((state) =>
              state.english ? state.setSpanish : state.setEnglish
            )}
          />
          <Typography fontSize={"small"}>Español</Typography>
        </Grid>

        <Grid
          item
          //the darkmode switch
          display={"flex"}
          flexDirection={"row"}
          alignItems={"center"}
          height={"7vh"}
          position={"relative"}
          bottom={15}

          // marginLeft={"68vw"}
        >
          <LightModeIcon fontSize={"small"} />
          <Switch size={"small"} onChange={() => props.mode()} />
          <DarkModeIcon fontSize={"small"} />
        </Grid>
      </Grid>
    </Grid>
  );
}
