import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Card, CardContent, makeStyles } from '@material-ui/core';

const styles = makeStyles(theme => ({
  card: {
    backgroundColor: theme.palette.error.dark,
  },
}));

const ErrorNotification = props => {
  const { code, message } = props;

  const classes = styles(props);

  return (
    <div>
      <Card className={classes.card}>
        <CardContent>
          <Icon className="error" />
          {`Error ${code}: ${message}`}
        </CardContent>
      </Card>
    </div>
  );
};

ErrorNotification.propTypes = {
  code: PropTypes.number.isRequired,
  message: PropTypes.string.isRequired,
};

export default ErrorNotification;
