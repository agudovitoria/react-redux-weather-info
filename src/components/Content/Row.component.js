import React from 'react';
import { Paper, Grid } from '@material-ui/core/';
import { styles } from './styles';

export const Row = (props) => {
  const { size } = props;
  const classes = styles();
  return (
    <Grid item xs={size || true}>    
      <Paper className={classes.paper}>xs</Paper>
    </Grid>
  );
};

