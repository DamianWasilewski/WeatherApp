import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThermometerHalf, faFlag, faTint, faWind, faTachometerAlt, faEye } from '@fortawesome/free-solid-svg-icons';

import '../../../node_modules/weather-icons/css/weather-icons.css';
import './WeatherTile.css';

class WeatherTile extends Component {

    render () {
    library.add(faThermometerHalf, faFlag, faTint, faWind, faTachometerAlt, faEye);
    let conditionIconClassName = `wi wi-day-${this.props.condition}`;
    let pressure = this.props.pressure;
    let fixedPressure = Number(pressure * 0.1).toFixed();
 
        return (
            <div className='container'>
                <div className='output_items'>
                    {this.props.city && <h2>Results for {this.props.city}</h2>}
                    {this.props.country && <div className='output_item'><FontAwesomeIcon icon="flag" /> {this.props.country}</div>}
                    {this.props.temperature && <div className='output_item'><FontAwesomeIcon icon="thermometer-half" /> {this.props.temperature} °C</div>}
                    {this.props.humidity && <div className='output_item'><FontAwesomeIcon icon="tint" /> {this.props.humidity} rH</div>}
                    {this.props.wind && <div className='output_item'><FontAwesomeIcon icon="wind" /> {this.props.wind} km/h</div>}
                    {this.props.pressure && <div className='output_item'><FontAwesomeIcon icon="tachometer-alt"/> {fixedPressure} kPa</div>}
                    {this.props.visibility && <div className='output_item'><FontAwesomeIcon icon="eye" /> {this.props.visibility}</div>}
                    {this.props.condition && <div className='output_item'><p>Conditions: {this.props.condition} <i className={conditionIconClassName.toLowerCase()}></i></p></div>}
                </div>
            </div>
        );
    }
}

export default WeatherTile;