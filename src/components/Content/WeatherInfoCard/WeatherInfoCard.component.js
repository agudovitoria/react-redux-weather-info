import React from 'react';
import { Card, CardContent, CardActions, Typography, Button, CardHeader } from '@material-ui/core';
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
      <CardHeader title={ 'Search & select location' }></CardHeader>
      <CardContent>
        <LocationInput></LocationInput>
      </CardContent>
      <CardActions>
        <Button variant='contained' color='primary' className={classes.button}>
          Search
          <Icon className={classes.icon}>search</Icon>
        </Button>
      </CardActions>

    </Card>
  );
};

