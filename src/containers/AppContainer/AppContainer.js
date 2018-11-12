import React, { Component } from 'react';

import WeatherSearch from '../../components/WeatherSearch/WeatherSearch';
import WeatherTile from '../../components/WeatherTile/WeatherTile';
import Navbar from '../../components/NavBar/NavBar';

import './AppContainer.css';
import axios from 'axios';

class AppContainer extends Component {

  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    wind: undefined,
    condition: undefined,
    error: false
  }

  getWeather = (e) => {
    e.preventDefault();

    const city = e.target.elements.city.value;
    const searchedText = `select * from weather.forecast where woeid in (select woeid from geo.places(1) where text='${city}') and u='c'`
    axios.get("https://query.yahooapis.com/v1/public/yql?q=" + searchedText + "&format=json")
    .then( response => {
      this.setState({
        temperature: response.data.query.results.channel.item.condition.temp,
        city: response.data.query.results.channel.location.city,
        country: response.data.query.results.channel.location.country,
        humidity: response.data.query.results.channel.atmosphere.humidity,
        pressure: response.data.query.results.channel.atmosphere.pressure,
        visibility: response.data.query.results.channel.atmosphere.visibility,
        wind: response.data.query.results.channel.wind.speed,
        condition: response.data.query.results.channel.item.condition.text,
        error: false
      });
      console.log(response);
    })
    .catch(error => {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        wind: undefined,
        condition: undefined,
        pressure: undefined,
        visibility: undefined,
        error: true
      })
    });
    e.target.elements.city.value = '';
  }

  render () {
      return (
        <div>
          <Navbar />
          <section>
            <WeatherSearch getWeather = {this.getWeather} error={this.state.error}/>
          </section>
          <section className="WeatherTiles">
            <WeatherTile 
            temperature={this.state.temperature}
            city={this.state.city}
            country={this.state.country}
            region={this.state.city}
            humidity={this.state.humidity}
            wind={this.state.wind}
            condition={this.state.condition}
            pressure={this.state.pressure}
            visibility={this.state.visibility} />
          </section>
        </div>
      );
  }
}

export default AppContainer;