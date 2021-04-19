import React from 'react';
import { Grid, makeStyles, Typography } from '@material-ui/core';

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
  '@keyframes color': {
    '0%': {
      color: '#116466',
    },
    '20%': {
      color: '#bf91df',
    },
    '40%': {
      color: '#ff652f',
    },
    '60%': {
      color: '#5d001e',
    },
    '80%': {
      color: '#ee3cc2',
    },
    '100%': {
      color: '#116466',
    },
  },

  '@keyframes color2': {
    '0%': {
      color: '#ffcb9a',
    },
    '20%': {
      color: ' #702eec',
    },
    '40%': {
      color: '#14a76c',
    },
    '60%': {
      color: '#eaafbc',
    },
    '80%': {
      color: ' #6108f0',
    },
    '100%': {
      color: ' #ffcb9a',
    },
  },
  container: {
    background: '#ffffff',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    animation: '$moveUp 1.5s',
    display: 'flex',
    justifyContent: 'center',
  },
  header: {
    marginRight: '2rem',
    fontSize: '7rem',
    fontWeight: 'bold',
    margin: '2rem 0',
    display: 'inline',
    color: '#333',

    //WebkitTextFillColor: 'transparent',
    //['webkit-textFillColor']: 'transparent',
    [theme.breakpoints.down([1999])]: {
      fontSize: '6rem',
    },
    [theme.breakpoints.down('lg')]: {
      fontSize: '5rem',
    },
  },
  header1: {
    animation: '$color 50s infinite',
    //backgroundClip: '-webkit-text',
  },
  header2: {
    animation: '$color2 50s infinite',
    //backgroundClip: '-webkit-text',
  },
}));
const HeaderGradient = () => {
  const classes = useStyles();
  return (
    <div>
      <Grid container className={classes.container}>
        <Grid item>
          <Typography
            variant="h1"
            className={`${classes.header} ${classes.header1}`}
          >
            WEB
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            variant="h1"
            className={`${classes.header} ${classes.header2}`}
          >
            DESIGN
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default HeaderGradient;
