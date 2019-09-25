import React from 'react';
import PropTypes from 'prop-types';
import { TextField, makeStyles } from '@material-ui/core';

const styles = makeStyles(() => ({
  input: {
    flexGrow: 1,
  },
}));

const LocationInputComponent = props => {
  const classes = styles(props);
  const { input } = classes;
  const { criteria, onCriteriaChange } = props;

  const handleChangeEvent = event => {
    event.preventDefault();
    const {
      target: { value },
    } = event;

    onCriteriaChange(value);
  };

  return (
    <TextField
      fullWidth
      value={criteria}
      InputProps={{
        classes: { input },
        onChange: handleChangeEvent,
        ...props,
      }}
    />
  );
};

LocationInputComponent.propTypes = {
  criteria: PropTypes.string.isRequired,
  onCriteriaChange: PropTypes.func.isRequired,
};

export default LocationInputComponent;
