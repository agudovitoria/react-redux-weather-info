import React, { useState } from 'react';
import { TextField, MenuItem, Paper } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/';

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


export const LocationInput = (props) => {
  const classes = styles(props);

  
  const allSuggestions = [
    {
      name: 'Catarroja',
      province: 'Valencia',
      region: 'Comunidad Valenciana',
      postal_code: '46094'
    },
    {
      name: 'Banyeres del Penedès',
      province: 'Tarragona',
      region: 'Cataluña',
      postal_code: '43020'
    },
    {
      name: 'Valseca',
      province: 'Segovia',
      region: 'Castilla y León',
      postal_code: '40214'
    }
  ];

  const [criteria, setCriteria] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleChangeEvent = (event) => {
    const { target: { value } }  = event;

    setCriteria(value);

    const newSuggestions = !!value ? allSuggestions.filter(s => new RegExp(value).test(s.name)) : [];
    
    setSuggestions(newSuggestions);
    
    console.log(`Found ${suggestions.length} that matches ${criteria}`);
  }

  return (
    <div className={classes.container}>
      <TextField
        fullWidth
        InputProps={{
          classes: { input: classes.input },
          onChange: event => handleChangeEvent(event),
          ...props
        }}
      />
      <Paper className={classes.paper} square>
        {
          suggestions.map(suggestion => {
            const { name, province, postal_code: postalCode } = suggestion;

            return (
              <MenuItem
                key={name}
                selected={postalCode.length % 13 === 0}
                component='div'
              >
              {name} {postalCode} ({province})
            </MenuItem>
            );
          })
        }
      </Paper>
    </div>
  );
}