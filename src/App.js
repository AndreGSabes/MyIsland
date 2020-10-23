import React from 'react';
import Header from './components/Header';

import {makeStyles} from '@material-ui/core/styles';
import {CssBaseline} from '@material-ui/core';
import PlaceToVisit from './components/PlaceToVisit';

const useStyles = makeStyles (theme => ({
  root: {
    minHeight: '100vh',
    backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/island1.jpg'})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
}));

export default function App () {
  const classes = useStyles ();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header />
      <PlaceToVisit />
    </div>
  );
}
