import React from 'react';
import PropTypes from 'prop-types';

import classes from './EventField.css';

const eventField = props => {
    const fieldOnClickHandler = event => {
        event.persist();

        let stationId = null;

        const clickPositionY = event.nativeEvent.layerY;
        const layerHeight = event.target.offsetHeight;
        const percentPosition = clickPositionY / layerHeight * 100;
        const frequency = parseFloat((props.frequencyState.dif / 100 * percentPosition + props.frequencyState.stop).toFixed(1));
        const stationRange = props.stationList.filter((station, index) => {
            const prevStation = props.stationList[index - 1] ? parseFloat(props.stationList[index - 1].frequency) : 0;
            const nextStation = props.stationList[index + 1] ? parseFloat(props.stationList[index + 1].frequency) : props.frequencyState.stop;

            return frequency >= prevStation && frequency <= nextStation;
        });

        if (stationRange.length === 2) {
            const frequency1 = parseFloat(stationRange[0].frequency);
            const frequency2 = parseFloat(stationRange[1].frequency);
            
            stationId = frequency - frequency1 >= frequency2 - frequency ? stationRange[1].id : stationRange[0].id
        } else {
            stationId = stationRange[0].id;
        }

        props.frequencyChange(stationId);
    };

    return (
        <div 
            className={ classes.field }
            onClick={ fieldOnClickHandler }
        >
        </div>
    )
};

eventField.propTypes = {
    fieldClick: PropTypes.func,
    frequencyState: PropTypes.object,
    stationList: PropTypes.array
};

eventField.defaultProps = {
    stationList: [],
    frequencyState: {
        dif: 0,
        stop: 0
    }
};

export default eventField;