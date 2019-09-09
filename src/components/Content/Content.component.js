import React from 'react';
import { Grid } from '@material-ui/core/';
import { styles } from './styles';
import { Row } from './Row.component';


const FirstContainer = () => (
  <Grid container spacing={3}>
  {
    [...Array(3)].map(() => <Row></Row>)
  }
  </Grid>
);

const SecondContainer = () => (
  <Grid container spacing={3}>
    <Row></Row>
    <Row size={6}></Row>
    <Row></Row>
  </Grid>
);
export const Content = () => {
  const classes = styles();

  return (
    <div className={classes.root}>
      <FirstContainer></FirstContainer>
      <SecondContainer></SecondContainer>
    </div>
  );
}
