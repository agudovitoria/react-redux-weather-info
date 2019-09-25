import React from 'react';
import { Grid } from '@material-ui/core';
import WeatherInfoCard from './WeatherInfoCard/WeatherInfoCard.component';

const ContentComponent = () => (
  <Grid container direction="row" justify="center" alignItems="center">
    <Grid item xs={8} lg={6}>
      <WeatherInfoCard />
    </Grid>
  </Grid>
);

export default ContentComponent;
