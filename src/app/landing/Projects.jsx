import { Grid, Typography } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import { useStore } from "../../hooks/useStore";

export default function Projects() {

  const english = useStore((state)=>state.english)

  return (
    <>
      <Grid
        item
        //third row
        width={"100%"}
        sx={{ mt: 3, pr: 10, pl: 10 }}
      >
        <Typography fontSize={25} sx={{ mb: 3 }}>
          {english ? "Featured Projects _" : "Proyectos Destacados _"}
        </Typography>
      </Grid>

      <Grid
        item
        //Projects
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"space-between"}
        width={"100%"}
        wrap={"wrap"}
        sx={{ mt: 3, mb: 3, pr: 5, pl: 5 }}
      >
        <Grid
          item
          // project
          display={"flex"}
          flexDirection={"row"}
          alignItems={"center"}
          width={"22vw"}
          boxShadow={8}
          border={1}
          borderColor={"lightgray"}
        >
          <Link href="">
          <Grid
              item
              //image 1
             display={"flex"}
             alignItems={"flex-start"}
            >
              <Image
                alt="card"
                src="TarjetaCalixto.jpg"
                style={{ objectFit: "contain" }}
                height={212}
                width={132}
              />
            </Grid>
          </Link>
          <Grid
            item
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"flex-start"}
            height={"100%"}
          >
            <Typography fontSize={20}>Calixto</Typography>
            <Typography fontSize={13} sx={{ pl: 2, mt:2, mb:4 }}>
              {english ? "Dinamic product portfolio with user app and admin dashboard" :
              "Portafolio de productos dinámico con app para usuario y un dashboard"}
            </Typography>
            <Typography mt={4} fontSize={12}>
            {english ? "Client" : "Cliente"}: SF GRoup (Col.)
            </Typography>
          </Grid>
        </Grid>

        <Grid
          item
          // project
          display={"flex"}
          flexDirection={"row"}
          alignItems={"center"}
          width={"22vw"}
          boxShadow={8}
          border={1}
          borderColor={"lightgray"}
        >
          <Link href="">
          <Grid
              item
              //image 1
             display={"flex"}
             alignItems={"flex-start"}
            >
              <Image
                alt="card"
                src="TarjetaAqui.jpg"
                style={{ objectFit: "contain" }}
                height={212}
                width={132}
              />
            </Grid>
          </Link>

          <Grid
            item
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"flex-start"}
            height={"100%"}
          >
            <Typography fontSize={20}>Aqui Estoy</Typography>
            <Typography fontSize={13} sx={{ pl: 2, mt:2, mb:4 }}>
            {english ? "Schedule app for Aquí Estoy Foundation (Arg.)" :
            "App de agendamiento para la Fundacion Aquí Estoy (Arg."}
            </Typography>
            <Typography mt={4} fontSize={12}>
            {english ? "Client: Aquí Estoy Found. (Arg.)" : 
            "Cliente: Fund. Aquí Estoy (Arg.)"}: 
            </Typography>
          </Grid>
        </Grid>

        <Grid
          item
          //project
          display={"flex"}
          flexDirection={"row"}
          alignItems={"center"}
          width={"22vw"}
          //height={"30vh"}
          boxShadow={8}
          border={1}
          borderColor={"lightgray"}
        >
          <Link href="">
            <Grid
              item
              //image 1
             display={"flex"}
             alignItems={"flex-start"}
            >
              <Image
                alt="card"
                src="Tarjeta1.jpg"
                style={{ objectFit: "contain" }}
                height={212}
                width={132}
              />
            </Grid>
          </Link>
          <Grid
            item
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"flex-start"}
            height={"100%"}
          >
            <Typography fontSize={20}>Pokedex</Typography>
            <Typography fontSize={13} sx={{ pl: 2, mt:2, mb:6 }} fontSize={15}>
              {english ? "Card game featuring Pokemon figures" :
              "Juego de cartas con los personajes de Pokemón"}
            </Typography>
            <Typography mt={4} fontSize={12}>
              {english ? "Client": "Cliente"}: Henry (Arg.)
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
