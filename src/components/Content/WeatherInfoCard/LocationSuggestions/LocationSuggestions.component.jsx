import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, List, ListItem } from '@material-ui/core/';

const styles = makeStyles(theme => ({
  paper: {
    zIndex: 1,
    marginTop: theme.spacing(1),
    left: 0,
    right: 0,
  },
  locationSuggestion: {
    fontSize: '9px',
  },
}));

const LocationSuggestionsComponent = props => {
  const { locations, onLocationSelect } = props;

  const classes = styles(props);

  const handleSelectEvent = name => {
    onLocationSelect(name);
  };

  return (
    <List component="nav" className={classes.paper} aria-label="suggestions">
      {locations.map(location => {
        const { name, province } = location;

        return (
          <ListItem
            button
            className={classes.locationSuggestion}
            key={name}
            onClick={() => handleSelectEvent(name)}
          >
            {`${name} (${province})`}
          </ListItem>
        );
      })}
    </List>
  );
};

LocationSuggestionsComponent.propTypes = {
  locations: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      province: PropTypes.string.isRequired,
    })
  ).isRequired,
  onLocationSelect: PropTypes.func.isRequired,
};

export default LocationSuggestionsComponent;
