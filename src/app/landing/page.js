"use client";

import { Box, Grid, Avatar, Typography } from "@mui/material";
import Head from "./Head";
import Juanfer from "./Juanfer";
import style from "./landing.module.scss";
import { useState } from "react";

export default function Landing() {
  const [darkMode, setDarkmode] = useState(false);

  const handleChangeDarkMode = () => {
    setDarkmode(!darkMode);
  };
  return (
    <Grid container className={style.container}>
      <Grid item className={darkMode ? style.headDark : style.headLight}
      
      >
        <Head />
      </Grid>

      <Grid item 
      className={darkMode ? style.bodDark : style.bodLight}
      >
        <Juanfer mode={handleChangeDarkMode} />
      </Grid>
    </Grid>
  );
}
