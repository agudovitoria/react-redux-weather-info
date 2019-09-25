import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, Grid, Typography } from '@material-ui/core/';
import WeatherInfo from '../../../../domain/WeatherInfo';

const styles = makeStyles(() => ({
  unitIcon: {
    paddingLeft: '8px',
    fontSize: '2em',
  },
  weatherIcon: {
    fontSize: '5em',
  },
}));

const LocationWeatherInfoComponent = props => {
  const { weatherInfo } = props;
  const { main, name, weather, wind } = weatherInfo;

  const { temp, pressure, humidity, tempMin, tempMax } = main;
  const { speed, degrees } = wind;

  const classes = styles(props);

  return weather.map(({ icon, description }) => (
    <Grid id="weather-info" container spacing={2}>
      <Grid container item xs>
        <Grid container item xs direction="column" spacing={2}>
          <Grid item xs>
            <Typography gutterBottom variant="h4">
              {name}
            </Typography>
          </Grid>
          <Grid item xs>
            <i className={`owi owi-${icon} ${classes.weatherIcon}`}>
              <Typography variant="h1" />
            </i>
          </Grid>
        </Grid>
        <Grid container item xs direction="column">
          <Grid id="weather-temperature-info" container spacing={1}>
            <Grid container direction="row" item xs>
              <Typography gutterBottom variant="subtitle1">
                {temp}
              </Typography>
              <i className={`wi wi-celsius ${classes.unitIcon}`} />
            </Grid>
            <Grid container direction="row" item xs>
              <Typography gutterBottom variant="subtitle1">
                {tempMin}
              </Typography>
              <i className={`wi wi-thermometer-exterior ${classes.unitIcon}`} />
            </Grid>
            <Grid container direction="row" item xs>
              <Typography gutterBottom variant="subtitle1">
                {tempMax}
              </Typography>
              <i className={`wi wi-thermometer ${classes.unitIcon}`} />
            </Grid>
          </Grid>

          <Grid id="weather-pressure-info" container spacing={2}>
            <Grid item xs>
              <i className={`wi wi-barometer ${classes.unitIcon}`} />
            </Grid>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1">
                {`${pressure}bar`}
              </Typography>
            </Grid>
          </Grid>

          <Grid id="weather-humidity-info" container spacing={2}>
            <Grid item xs>
              <i className={`wi wi-humidity ${classes.unitIcon}`} />
            </Grid>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1">
                {`${humidity}%`}
              </Typography>
            </Grid>
          </Grid>

          <Grid item xs>
            <Typography gutterBottom variant="subtitle1">
              {description}
            </Typography>
          </Grid>
          <Grid item xs>
            <Typography gutterBottom variant="subtitle1">
              {`${speed}m/s`}
            </Typography>
            <Typography gutterBottom variant="subtitle1">
              {`${degrees}º`}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  ));
};

LocationWeatherInfoComponent.propTypes = {
  weatherInfo: PropTypes.instanceOf(WeatherInfo),
};

export default LocationWeatherInfoComponent;
