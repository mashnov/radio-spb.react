import React from 'react';
import PropTypes from 'prop-types';

import Station from './Station/Station'

import classes from './StationList.css';

const stationList = props => {
    return (
        <div className={ classes.stations }>
            {
                props.stationList.map(station => (
                    <Station
                        key={ station.id }
                        station={ station }
                        selectedStationId={ props.selectedStationId }
                        topPosition={ props.getItemTopPosition(parseFloat(station.frequency)) }
                    />
                ))
            }
        </div>
    )
};

stationList.propTypes = {
    stationList: PropTypes.array,
    selectedStationId: PropTypes.string,
    getItemTopPosition: PropTypes.func
};

stationList.defaultProps = {
    stationList: [],
    selectedStationId: null
};

export default stationList;