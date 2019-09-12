import React, { useState } from 'react';
import { TextField, MenuItem, Paper, Button } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/';
import { PlacesService } from '../../../../services/Places.service';

const styles = makeStyles(theme => ({
  container: {
    flexGrow: 1,
    position: 'relative',
  },
  input: {
    flexGrow: 1
  },
  paper: {
    zIndex: 1,
    marginTop: theme.spacing(1),
    left: 0,
    right: 0,
  },
}));

const SEEK_BY_CRITERIA_MINIMUN_LENGTH = 3;
export const LocationInput = (props) => {
  const classes = styles(props);
  const [selected, setSelected] = useState({
    name: '',
    province: '',
    postalCode: ''
  });
  const [criteria, setCriteria] = useState('');
  const [isOpened, setOpened] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);

  const isCriteriaInvalidForSeek = () => (!criteria || criteria.length < SEEK_BY_CRITERIA_MINIMUN_LENGTH);

  const getSuggestionsByCriteria = (inputText) => {
    setCriteria(inputText);
    setOpened(false);

    if(isCriteriaInvalidForSeek()) {
      return [];
    }
    
    setOpened(true);
    return suggestions
      .filter(s => new RegExp(criteria.toUpperCase()).test(s.name.toUpperCase())).slice(0, 5);
  };

  const findSelectedByName = (name) => filteredSuggestions.find(s => s.name.toUpperCase() === name.toUpperCase());

  const showSuggestions = () => isOpened ?(
      <Paper className={classes.paper} square>
        {
          filteredSuggestions.map((suggestion) => {
            const { name, province, postal_code: postalCode } = suggestion;

            return (
              <MenuItem
                dense
                key={name}
                component='div'
              >
                <Button
                  color='primary'
                  onClick={ () => selectLocationByName(name) }
                >
                  {name} {postalCode} ({province})
                </Button>
              </MenuItem>
            );
          })          
        }
      </Paper>
    ) : null;

  const selectLocationByName = (name) => {
    const foundLocation = findSelectedByName(name);
    
    if(foundLocation) {
      console.log(`Selected location ${foundLocation.name}`);
      
      setSelected(foundLocation);
      setOpened(false);
      setCriteria(foundLocation.name);
    }
  };

  PlacesService
    .getPlacesData()
    .then(({data}) => {
      setSuggestions(data);
    });

  const handleChangeEvent = (event) => {
    const { target: { value: criteria } }  = event;
    setFilteredSuggestions(getSuggestionsByCriteria(criteria));
  }

  return (
    <div className={classes.container}>
      <TextField
        fullWidth
        value={criteria}
        InputProps={{
          classes: { input: classes.input },
          onChange: event => handleChangeEvent(event),
          ...props
        }}
      />
      { showSuggestions() }
    </div>
  );
}