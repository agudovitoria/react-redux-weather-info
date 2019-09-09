import { makeStyles } from '@material-ui/core/';

export const styles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  container: {
    backgroundColor: 'lightgrey',
    height: '100vh' 
  },
  paper: {
    backgroundColor: 'red',
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));