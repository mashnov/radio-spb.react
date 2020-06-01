import React from 'react';
import PropTypes from 'prop-types';

import classes from './Station.css'

const station = props => {
    const classNames = [classes.item];

    if (props.selected) {
        classNames.push(classes.selected)
    }

    return (
        <div 
            className={ classNames.join(' ') }
            onClick={ props.stationClick }
        >
            <img 
                src={ props.station.logo }
                alt={ props.station.name }    
            />
        </div>
    )
};

station.propTypes = {
    station: PropTypes.object,
    selected: PropTypes.bool,
    stationClick: PropTypes.func
};

station.defaultProps = {
    station: {
        logo: "",
        name: ""
    },
    selected: false
};

export default station;