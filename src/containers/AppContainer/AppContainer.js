import React, { Component } from 'react';

import WeatherSearch from '../../components/WeatherSearch/WeatherSearch';
import WeatherTile from '../../components/WeatherTile/WeatherTile';

import './AppContainer.css';
import axios from 'axios';

class AppContainer extends Component {

  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    region: undefined,
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
      //console.log(response);
      this.setState({
        temperature: response.data.query.results.channel.item.condition.temp,
        city: response.data.query.results.channel.location.city,
        country: response.data.query.results.channel.location.country,
        region: response.data.query.results.channel.location.region,
        humidity: response.data.query.results.channel.atmosphere.humidity,
        wind: response.data.query.results.channel.wind.speed,
        condition: response.data.query.results.channel.item.condition.text,
        error: false
      });
    })
    .catch(error => {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        region: undefined,
        humidity: undefined,
        wind: undefined,
        condition: undefined,
        error: true
      })
    });
  }

  render () {
      return (
        <div>
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
            condition={this.state.condition} />
          </section>
        </div>
      );
  }
}

export default AppContainer;