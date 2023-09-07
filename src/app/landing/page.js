"use client";

import { Box, Grid, Avatar, Typography } from "@mui/material";
import Head from "./Head";
import Juanfer from "./Juanfer";
import style from "./landing.module.scss";
import { useState } from "react";
import { TRUE } from "sass";

export default function Landing() {
  const [darkMode, setDarkmode] = useState(false);
  const [english, setEnglish] = useState(true);

  const handleChangeDarkMode = () => {
    setDarkmode(!darkMode);
  };

  const handleLanguage = () => {
    setEnglish(!english);
  };

  return (
    <Grid container className={style.container}>
      <Grid item className={darkMode ? style.headDark : style.headLight}>
        <Head mode={handleChangeDarkMode} />
      </Grid>

      <Grid item className={darkMode ? style.bodDark : style.bodLight}>
        <Juanfer />
      </Grid>
    </Grid>
  );
}
