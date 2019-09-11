import React from 'react';
import './App.css';
// import { PlacesService, OpenWeatherService } from './services/';
import { MainContainer } from './containers/Main.container';

const App = () => {
  //PlacesService.getPlacesData().then(data => console.log(data));

  // OpenWeatherService.getWeatherFor('Benidorm');
  return (<MainContainer></MainContainer>);
;}

export default App;