import React from 'react';
import { WeatherInfoCard } from './WeatherInfoCard/WeatherInfoCard.component';
import { Grid } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/';

export const styles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  }
}));

export const Content = (props) => (
  <Grid
    container
    direction="row"
    justify="center"
    alignItems="center"
  >
    <Grid item xs={8} lg={6}>
      <WeatherInfoCard></WeatherInfoCard>
    </Grid>
  </Grid>
);
