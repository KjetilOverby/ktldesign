import React from "react";
import { Container, Grid, makeStyles } from "@material-ui/core";
import CardComponent from "./CardComponent";
import DevicesIcon from "@material-ui/icons/Devices";
import PublicIcon from "@material-ui/icons/Public";
import ImportantDevicesIcon from "@material-ui/icons/ImportantDevices";
const useStyles = makeStyles((theme) => ({
  "@keyframes moveUp": {
    "0%": {
      transform: "translate3d(0, 3000px, 0)",
    },
    "60%": {
      transform: "translate3d(0, -25px, 0)",
    },
    "75%": {
      transform: "translate3d(0, 10px, 0)",
    },
    "90%": {
      transform: "translate3d(0, -5px, 0)",
    },
  },
  cardContainer: {
    display: "flex",
    justifyContent: "space-between",
  },

  container: {
    height: "50vh",
    width: "100vw",
    marginTop: "-5rem",
    display: "flex",
    justifyContent: "space-between",
    animation: "$moveUp 3.5s",
    marginBottom: "3rem",
  },

  [theme.breakpoints.down("sm")]: {
    marginTop: "5rem",
  },
}));
const StartPageSection3 = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Grid container className={classes.cardContainer}>
        <Grid item>
          <CardComponent
            header="Responsiv"
            text="Over 50% bruker i dag mobil eller nettbrett til nettbruk. Det er derfor viktig at en nettside er responsiv til alle skjermstørrelser. Hos ktl_design får du nettsiden din til å se bra ut på alle plattformer. "
            icon={
              <DevicesIcon
                style={{ fontSize: "6rem", margin: "3rem 0", color: "#496180" }}
              />
            }
          />
        </Grid>
        <Grid item>
          <CardComponent
            header="Domene"
            text="Testing purposes ipsum dolor sit amet consectetur adipisicing elit. Veritatis asperiores sint dicta, quis vero beatae perspiciatis corrupti quidem nihil doloremque quod suscipit nostrum? Libero, rem? Voluptates aspernatur nihil minima praesentium. "
            icon={
              <PublicIcon
                style={{ fontSize: "6rem", margin: "3rem 0", color: "#d45636" }}
              />
            }
          />
        </Grid>
        <Grid item>
          <CardComponent
            header="Hosting"
            text=" Lorems ipsum dolor sit amet consectetur adipisicing elit. Veritatis asperiores sint dicta, quis vero beatae perspiciatis corrupti quidem nihil doloremque quod suscipit nostrum? Libero, rem? Voluptates aspernatur nihil minima praesentium."
            icon={
              <ImportantDevicesIcon
                style={{ fontSize: "6rem", margin: "3rem 0", color: "#579586" }}
              />
            }
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default StartPageSection3;
