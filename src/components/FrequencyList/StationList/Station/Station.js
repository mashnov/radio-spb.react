import React from 'react';
import PropTypes from 'prop-types';

import classes from './Station.css';

const station = props => {
    const itemPosition = { top: `${ props.topPosition }%` };
    const itemClassName = [classes.item];

    if (props.selectedStationId === props.station.id) {
        itemClassName.push(classes.active);
    }

    return (
        <div 
            className={ itemClassName.join(' ') }
            style={itemPosition}
        >
            <div className={ classes.indicator }></div>
            <div className={ classes.indicator }></div>
        </div>
    )
};

station.propTypes = {
    station: PropTypes.object,
    topPosition: PropTypes.number,
    selectedStationId: PropTypes.string
};

station.defaultProps = {
    station: {},
    topPosition: 0,
    selectedStationId: null
};

export default station;