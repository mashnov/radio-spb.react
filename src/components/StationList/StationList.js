import React from 'react';
import PropTypes from 'prop-types';

import Aux from '../../hoc/Aux';
import Station from './Station/Station'

const stationList = props => (
    <Aux>
        {
            props.list.map(station => (
                <Station
                    key={ station.id }
                    station={ station }
                    selected={ station.id === props.selectedStationId }
                    stationClick={() => props.stationClick(station.id) }
                />
            ))
        }
    </Aux>
);

stationList.propTypes = {
    list: PropTypes.array,
    selectedStationId: PropTypes.string,
    stationClick: PropTypes.func
};

stationList.defaultProps = {
    list: [],
    selectedStationId: null
};

export default stationList;