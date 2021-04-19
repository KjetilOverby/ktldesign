import React, { useState, useEffect } from 'react';
import { Grid, makeStyles, Typography } from '@material-ui/core';
import HeaderGradient from './HeaderGradient';

const useStyles = makeStyles((theme) => ({}));
const StartPageSection = () => {
  const classes = useStyles();
  const [showComponent, setShowComponent] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShowComponent(true);
    }, 0);
  }, []);
  return <>{showComponent && <HeaderGradient />}</>;
};

export default StartPageSection;
