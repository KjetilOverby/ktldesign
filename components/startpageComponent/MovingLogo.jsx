import React from 'react';
import { makeStyles } from '@material-ui/core';

const StartPageComponent = () => {
  const useStyles = makeStyles((theme) => ({
    '@keyframes move': {
      '0%': {
        transform: 'perspective(400px) rotate3d(1, -10, 0, 90deg)',
      },
      '40%': {
        transform: 'perspective(400px) rotate3d(1, -50, -20, -20deg)',
      },
      '60%': {
        animationTimingFunction: 'ease-in-out',
        transform: 'perspective(400px) rotate3d(1, -40, -10, 100deg)',
      },
      '80%': {
        animationTimingFunction: 'ease-in-out',

        transform: 'perspective(400px) rotate3d(1, -30, 30, -150deg)',
      },
      '100%': {
        animationTimingFunction: 'ease-in-out',

        transform: 'perspective(400px)',
      },
    },
    logo: {
      [theme.breakpoints.up('lg')]: {
        animationDelay: '1s',
        animation: '$move 1s',
      },
      height: '10rem',
      [theme.breakpoints.down('xs')]: {
        height: '9rem',
      },
    },
  }));
  const classes = useStyles();
  return (
    <div>
      <img
        className={classes.logo}
        src={require('../../assets/ktl_design logo.png')}
        alt=""
      />
    </div>
  );
};

// style={{ position: 'absolute', zIndex: 100, top: 0, left: 0 }}

export default StartPageComponent;
