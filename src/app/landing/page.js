"use client";

import { Box, Grid, Avatar, Typography } from "@mui/material";
import Head from "./Head";
import Juanfer from "./Juanfer";
import style from "./landing.module.scss";
import { useState } from "react";
import HeadTop from "./HeadTop";

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
    <Grid containter display={"flex"}>
      <Grid item className={darkMode ? style.headDark : style.headLight}>
        <Head mode={handleChangeDarkMode} />
      </Grid>

      <Grid item className={darkMode ? style.bodyDark : style.bodyLight}>
        <Juanfer />
        <HeadTop
        mode={handleChangeDarkMode}
        />
      </Grid>
    </Grid>
  );
}
