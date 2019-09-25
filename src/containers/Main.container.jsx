import React from 'react';
import { CssBaseline, Container, makeStyles } from '@material-ui/core/';
import Content from '../components/Content/Content.component';

const styles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.backgroundColor,
    height: '100vh',
  },
}));

const MainContainer = props => {
  const classes = styles(props);

  return (
    <>
      <CssBaseline />
      <Container fixed className={classes.root}>
        <Content />
      </Container>
    </>
  );
};

export default MainContainer;
