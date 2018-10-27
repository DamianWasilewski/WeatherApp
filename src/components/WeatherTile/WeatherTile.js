import React, { Component } from 'react';

import '../../../node_modules/weather-icons/css/weather-icons.css';
import './WeatherTile.css';

class WeatherTile extends Component {
    render () {

    let conditionIconClassName = `wi wi-day-${this.props.condition}`;

        return (
            <div>
                {this.props.city && this.props.country && <p>Location: {this.props.city}, {this.props.country}</p>}
                {this.props.temperature && <p>Temperature: {this.props.temperature}</p>}
                {this.props.humidity && <p>Humidity: {this.props.humidity}</p>}
                {this.props.wind && <p>Wind: {this.props.wind}</p>}
                {this.props.condition && <p>Conditions: {this.props.condition} <i className={conditionIconClassName.toLowerCase()}></i></p>}
            </div>
        );
    }
}

export default WeatherTile;