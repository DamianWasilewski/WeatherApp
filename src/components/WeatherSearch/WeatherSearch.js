import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import './WeatherSearch.css';


class WeatherSearch extends Component {


  render () {
    library.add(faSearch)

    if (this.props.error) {
      return (
        <div className='weather'>
          <div className='error'>
            <p>Please fill out form properly</p>
          </div>
          <div className="container">
            <div className="weatherSearch">
              <form onSubmit={this.props.getWeather}>
                <div className='searchBox'>
                  <input type="text" className="searchTxt" name="city" placeholder="City name"/>
                  <button><FontAwesomeIcon icon="search" /></button>
                </div>
              </form>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="weather">
          <div className="container">
            <div className="weatherSearch">
              <form onSubmit={this.props.getWeather}>
                <div className='searchBox'>
                  <input type="text" className="searchTxt" name="city" placeholder="City name"/>
                  <button><FontAwesomeIcon icon="search" /></button>
                </div>  
              </form>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default WeatherSearch;