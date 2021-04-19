import React from 'react';
import { Grid, makeStyles, Typography } from '@material-ui/core';
import MailIcon from '@material-ui/icons/Mail';
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk';

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
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    background: 'linear-gradient(#749299, #eee)',
    animation: '$moveUp 3s',
    padding: '1rem',
    [theme.breakpoints.down('lg')]: {
      margin: '15rem 0 0 0',
    },
    [theme.breakpoints.down('xs')]: {
      margin: '70rem 0 0 0',
      transform: 'translate3d(0)',
      animation: 'none',
    },
  },
  logo: {
    height: '10rem',
  },
  icons: {
    fontSize: '2rem',
    color: '#ffffff',
    marginRight: '1rem',
  },
  text: {
    color: '#fff',
    fontSize: '1.3rem',
    fontStyle: 'italic',
  },
}));
const FooterComponent = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.container}>
      <Grid item>
        <img
          className={classes.logo}
          src={require('../../assets/ktl_design logo.png')}
        />
      </Grid>
      <Grid item>
        <Grid container>
          <Grid item>
            <MailIcon className={classes.icons} />
          </Grid>
          <Grid item>
            <Typography variant="body1" className={classes.text}>
              ktldesign80@gmail.com
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item>
            <PhoneInTalkIcon className={classes.icons} />
          </Grid>
          <Grid item>
            <Typography variant="body1" className={classes.text}>
              97541236
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default FooterComponent;
