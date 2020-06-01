import React, { Component } from 'react';
import PropTypes from 'prop-types';

import StationList from '../../components/StationList/StationList';

import classes from './Stations.css';

class Stations extends Component {
    render () {
        return (
            <div className={classes.list}>
                <StationList
                    list={ this.props.stationList }
                    selectedStationId={ this.props.selectedStationId }
                    stationClick={ this.props.stationClick }
                />
            </div>
        );
    }
}

Stations.propTypes = {
    selectedStationId: PropTypes.string,
    stationList: PropTypes.array,
    stationClick: PropTypes.func
};

Stations.defaultProps = {
    selectedStationId: null,
    stationList: []
};

export default Stations;