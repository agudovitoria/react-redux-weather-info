import React from 'react';
import { Card, CardContent, Typography, Button, Grid } from '@material-ui/core';
import { LocationInput } from './LocationInput/LocationInput.component';
import Icon from '@material-ui/core/Icon';

import { makeStyles } from '@material-ui/core/';

const styles = makeStyles(theme => ({
  card: {
    flexGrow: 1
  },
  button: {
    margin: theme.spacing(1),
  },
  icon: {
    marginLeft: theme.spacing(1),
  },
}));

export const WeatherInfoCard = (props) => {
  const classes = styles(props);

  return (
    <Card className={classes.card}>
      <CardContent>
        <Grid
          container
          spacing={1}
          direction="column"
          justify="center"
          alignItems="center"
        >
          <Grid item xs={12}>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              <Grid item xs={12}>
                <Typography component="h5" variant="h5">
                  Search & select location
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              <Grid item>
                <LocationInput></LocationInput>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              <Grid item>
                <Button variant="contained" color="primary" className={classes.button}>
                  Search
                  <Icon className={classes.icon}>search</Icon>
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

