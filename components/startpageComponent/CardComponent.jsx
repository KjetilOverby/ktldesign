import React from 'react';
import { Grid, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    height: '30rem',
    width: '22rem',
    background: '#fff',
    display: 'flex',
    padding: '2rem',
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: '10px',
    margin: '2px',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'row',
      marginBottom: '2rem',
    },
  },
}));
const CardComponent = ({ header, icon, text }) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.container}>
      <Grid item>
        <Typography variant="h4">{header}</Typography>
      </Grid>
      <Grid item>{icon}</Grid>
      <Grid item>
        <Typography variant="body1">{text}</Typography>
      </Grid>
    </Grid>
  );
};

export default CardComponent;
