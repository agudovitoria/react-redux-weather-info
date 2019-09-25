import React, { useState, useEffect } from 'react';
import {
  Card,
  CardContent,
  CardActions,
  Button,
  CardHeader,
  Icon,
  makeStyles,
} from '@material-ui/core';
import LocationInput from './LocationInput/LocationInput.component';
import PlacesService from '../../../services/Places.service';
import OpenWeatherService from '../../../services/OpenWeather.service';
import LocationSuggestions from './LocationSuggestions/LocationSuggestions.component';
import LocationWeatherInfo from './LocationWeatherInfo/LocationWeatherInfo.component';
import Location from '../../../domain/Location';
import OpenWeatherResponse from '../../../domain/OpenWeatherResponse';
import ErrorNotification from './ErrorNotification/ErrorNotification.component';
import Error from '../../../domain/Error';

const SEEK_BY_CRITERIA_MINIMUN_LENGTH = 3;

const styles = makeStyles(theme => ({
  card: {
    flexGrow: 1,
  },
  container: {
    flexGrow: 1,
    position: 'relative',
  },
  button: {
    margin: theme.spacing(1),
  },
  icon: {
    marginLeft: theme.spacing(1),
  },
}));

const WeatherInfoCardComponent = props => {
  const classes = styles(props);

  const [suggestions, setSuggestions] = useState([]);
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [weatherInfo, setWeatherInfo] = useState(new OpenWeatherResponse({}));
  const [criteria, setCriteria] = useState('');
  const [error, setError] = useState(null);
  const [selected, setSelected] = useState(new Location({}));
  useEffect(() => {
    if (!!selected && !!selected.name) {
      OpenWeatherService.getWeatherFor(selected.name)
        .then(info => setWeatherInfo(info))
        .catch(({ cod, message }) => setError(new Error({ code: cod, message })));
    }
  }, [selected]);

  const init = () => {
    PlacesService.getPlacesData().then(({ data }) => {
      setSuggestions(data);
    });
  };

  const findSelectedByName = name =>
    filteredSuggestions.find(s => s.name.toUpperCase() === name.toUpperCase());

  const isCriteriaInvalidForSeek = inputText =>
    !inputText || inputText.length < SEEK_BY_CRITERIA_MINIMUN_LENGTH;

  const getSuggestionsByCriteria = inputText => {
    if (isCriteriaInvalidForSeek(inputText)) {
      return [];
    }

    return suggestions
      .filter(s => new RegExp(inputText.toUpperCase()).test(s.name.toUpperCase()))
      .slice(0, 5);
  };

  const onLocationInputChange = location => {
    setCriteria(location);
    setFilteredSuggestions(getSuggestionsByCriteria(location));
  };

  const onLocationSelectChange = location => {
    setCriteria(location);
    setFilteredSuggestions([]);
    setSelected(findSelectedByName(location));
  };

  init();

  return (
    <Card className={classes.card}>
      <CardHeader title="Search & select location" />
      <CardContent>
        <div className={classes.container}>
          <LocationInput criteria={criteria} onCriteriaChange={onLocationInputChange} />
          {error ? (
            <ErrorNotification code={error.code} message={error.message} />
          ) : (
            <LocationSuggestions
              criteria={criteria}
              locations={filteredSuggestions}
              onLocationSelect={onLocationSelectChange}
            />
          )}
          {!!weatherInfo && !!weatherInfo.id && <LocationWeatherInfo weatherInfo={weatherInfo} />}
        </div>
      </CardContent>
      <CardActions>
        <Button variant="contained" color="primary" className={classes.button}>
          Search
          <Icon className={classes.icon}>search</Icon>
        </Button>
      </CardActions>
    </Card>
  );
};

export default WeatherInfoCardComponent;
