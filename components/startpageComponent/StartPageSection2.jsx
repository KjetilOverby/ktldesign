import React from 'react';
import { Container, Grid, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  '@keyframes moveUp': {
    '0%': {
      transform: 'translate3d(0, 3000px, 0)',
    },
    '60%': {
      transform: 'translate3d(0, -25px, 0)',
    },
    '75%': {
      transform: 'translate3d(0, 10px, 0)',
    },
    '90%': {
      transform: 'translate3d(0, -5px, 0)',
    },
  },
  container: {
    background:
      'linear-gradient(#c2dae4, rgba(11,133,113,.4)) ,url("https://images.unsplash.com/photo-1612416364684-c54c957d2b7e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80")',
    minHeight: '30rem',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    animation: '$moveUp 3s',
    backgroundPosition: 'calc(100% - 0) calc(100% - 60px)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundRepeat: 'no-repeat',
    width: '100vw',
    [theme.breakpoints.down('xs')]: {
      backgroundAttachment: 'initial',
    },
  },
  containerTag: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
  header: {
    color: '#fff',
    [theme.breakpoints.down('xs')]: {
      fontSize: '2rem',
    },
  },
  text: {
    color: '#fff',
  },
}));
const StartPageSection2 = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.container}>
      <Container maxWidth="md" className={classes.containerTag}>
        <Grid item>
          <Typography className={classes.header} variant="h1">
            TA KONTAKT I DAG
          </Typography>
        </Grid>
        <Grid item>
          <Typography className={classes.text} variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet
            nulla quae sit sapiente alias praesentium consectetur at! Rerum
            aperiam at ipsum non fugiat rem nostrum voluptates. Facilis odit
            atque sunt.
          </Typography>
        </Grid>
      </Container>
    </Grid>
  );
};

export default StartPageSection2;
