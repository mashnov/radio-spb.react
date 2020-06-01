import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SelectedStationName from '../../components/SelectedStationName/SelectedStationName';
import FrequencyList from '../../components/FrequencyList/FrequencyList';
import Toggle from '../../components/Toggle/Toggle';

import classes from './SideBar.css';

class SideBar extends Component {
    render () {
        return (
            <div className={classes.bar}>
                <div className={classes.name}>
                    <SelectedStationName
                        selectedStationId={ this.props.selectedStationId }
                        stationList={ this.props.stationList }
                        stationSelect={ this.props.stationClick }
                        showOffline={ true }
                    />
                </div>

                <div className={classes.frequencie}>
                    <FrequencyList 
                        isOnline={ this.props.isOnline }
                        selectedStationId={ this.props.selectedStationId }
                        frequencyList={ this.props.frequencyList }
                        stationList={ this.props.stationList }
                        stationClick={ this.props.stationClick }
                    />
                </div>

                <div className={classes.toggle}>
                    <Toggle
                        value={ this.props.isOnline }
                        change={ this.props.toggleClick }
                    />
                </div>
            </div>
        );
    }
}

SideBar.propTypes = {
    isOnline: PropTypes.bool,
    selectedStationId: PropTypes.string,
    frequencyList: PropTypes.array,
    stationList: PropTypes.array,
    stationClick: PropTypes.func,
    toggleClick: PropTypes.func
};

SideBar.defaultProps = {
    isOnline: false,
    selectedStationId: null,
    frequencyList: [],
    stationList: []
};

export default SideBar;