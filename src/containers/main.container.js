import React from 'react';
import { CssBaseline, Container } from '@material-ui/core/';
import { Content } from '../components/Content/Content.component';

import { makeStyles } from '@material-ui/core/';

const styles = makeStyles(theme => ({
  root: {
    backgroundColor: 'lightgrey',
    height: '100vh'
  }
}));

export const MainContainer = (props) => {
  const classes = styles(props);

  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed className={classes.root}>
        <Content></Content>
      </Container>
    </React.Fragment>
  );
};