import React, { Component } from 'react';

import './WeatherSearch.css';

class WeatherSearch extends Component {

  render () {
    if (this.props.error) {
      return (
        <div>
          <div>
            <p>Please fill out form properly</p>
          </div>
          <div className="WeatherSearch">
            <form onSubmit={this.props.getWeather}>
              <h1>Please write city name to search weather for it</h1>
              <label>City name</label>
              <input type="text" name="city" placeholder="City"/>
              <button>Search</button>
            </form>
          </div>
        </div>
      );
    } else {
      return (
        <div className="WeatherSearch">
          <form onSubmit={this.props.getWeather}>
            <h1>Please write city name to search weather for it</h1>
            <label>City name</label>
            <input type="text" name="city" placeholder="City"/>
            <button>Search</button>
          </form>
        </div>
      );
    }
  }
}

export default WeatherSearch;