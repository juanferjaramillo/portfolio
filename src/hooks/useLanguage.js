"use client"
import { useState, useEffect } from "react";

export default function useLanguage (props) {
    const [english, setEnglish] = useState(true);

    useEffect(
      ()=>{props.english ? setEnglish(true) : setEnglish(false)},
      [props.english]
    )

    return english;
}