import React from 'react';

import './WeatherTile.css';

const WeatherTile = (props) => (
    <div>
        {props.city && props.country && props.region && <p>Location: {props.city}, {props.country}, {props.region}</p>}
        {props.temperature && <p>Temperature: {props.temperature}</p>}
        {props.humidity && <p>Humidity: {props.humidity}</p>}
        {props.wind && <p>Wind: {props.wind}</p>}
        {props.condition && <p>Conditions: {props.condition}</p>}
    </div>
);

export default WeatherTile;