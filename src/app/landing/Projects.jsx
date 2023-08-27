import { Grid, Typography } from "@mui/material";
import Link from "next/link";
import Image from "next/image"

export default function Projects() {
  return (
    <>
      <Grid
        item
        //third row
        width={"100%"}
        sx={{ mt: 3, pr: 10, pl: 10 }}
      >
        <Typography fontSize={25} sx={{ mb: 3 }}>
          Featured Projects
        </Typography>
      </Grid>

      <Grid
        item
        //Projects
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"space-between"}
        width={"100%"}
        sx={{ mt: 3, mb: 3, pr: 7, pl: 7 }}
      >
    
          <Grid
            item
            // project
            display={"flex"}
            flexDirection={"row"}
            alignItems={"center"}
            width={"23vw"}
            height={"30vh"}
            boxShadow={8}
          >
             <Link href="">
            <Grid
              item
              //image 1
              height={"30vh"}
            >
              <Image
                src="https://res.cloudinary.com/sthemma/image/upload/v1687742453/calixto/Tarjeta1.jpg"
                style={{ objectFit: "contain" }}
                height={"100%"}
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
              <Typography sx={{ pl: 2 }}>
                Dinamic product portfolio with user app and admin dashboard
              </Typography>
              <Typography mt={4} fontSize={12}>
                Client: Sthemma (Col.)
              </Typography>
            </Grid>
          </Grid>
     

        <Grid
          item
          // project
          display={"flex"}
          flexDirection={"row"}
          alignItems={"center"}
          width={"23vw"}
          height={"30vh"}
          boxShadow={8}
        >
          <Link href="">
            <Grid
              item
              //image 1
              height={"30vh"}
            >
              <Image
                src="https://res.cloudinary.com/sthemma/image/upload/v1687742453/calixto/Tarjeta1.jpg"
                style={{ objectFit: "contain" }}
                height={"100%"}
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
            <Typography sx={{ pl: 2 }}>
              Schedule app for Aqui Estoy Foundation (Argentina)
            </Typography>
            <Typography mt={4} fontSize={12}>
              Client: Aqui Estoy Found. (Arg.)
            </Typography>
          </Grid>
        </Grid>

        <Grid
          item
          //project
          display={"flex"}
          flexDirection={"row"}
          alignItems={"center"}
          width={"23vw"}
          height={"30vh"}
          boxShadow={8}
        >
          <Link href="">
            <Grid
              item
              //image 1
              height={"30vh"}
            >
              <Image
                src="https://res.cloudinary.com/sthemma/image/upload/v1687742453/calixto/Tarjeta1.jpg"
                style={{ objectFit: "contain" }}
                height={"100%"}
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
            <Typography sx={{ pl: 2 }} fontSize={15}>
              Card game featuring Pokemon figures
            </Typography>
            <Typography mt={4} fontSize={12}>
              Client: Henry (Arg.)
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
