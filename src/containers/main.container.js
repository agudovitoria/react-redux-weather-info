import React from 'react';
import { makeStyles, Paper, Grid, CssBaseline, Container } from '@material-ui/core/';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    paddingTop: '20px'
  },
  content: {
    backgroundColor: 'blue'
  },
  container: {
    backgroundColor: 'lightgrey',
    height: '100vh' 
  },
  paper: {
    backgroundColor: 'lightred',
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));
const Row = (props) => {
  const { size } = props;
  const classes = useStyles();
  return (
    <Grid item xs={size || true}>    
      <Paper className={classes.paper}>xs</Paper>
    </Grid>
  );
};

const Content = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid item xs={true} className={classes.content}>
        <Grid container spacing={3}>
          <Row></Row>
          <Row></Row>
          <Row></Row>
        </Grid>
        <Grid container spacing={3}>
          <Row></Row>
          <Row size={6}></Row>
          <Row></Row>
        </Grid>
      </Grid>
    </div>
  );
}

export const MainContainer = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed className={classes.container}>
        <Content></Content>
      </Container>
    </React.Fragment>
  );
}

