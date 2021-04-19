import React from 'react';
import { makeStyles } from '@material-ui/core';
import MovingHeader from './MovingHeader';

const useStyles = makeStyles((theme) => ({}));
const StartPageComponent = () => {
  const classes = useStyles();
  return (
    <div>
      <MovingHeader />
    </div>
  );
};

export default StartPageComponent;
