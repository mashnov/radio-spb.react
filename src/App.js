import React, { Component } from 'react';

import Player from './components/Player/Player';
import Layout from './components/Layout/Layout';
import SideBar from './containers/SideBar/SideBar';
import Stations from './containers/Stations/Stations'

import stations from './stationList'; 
import frequencyList from './frequencyList'; 

class App extends Component {
    state = {
        isOnline: false,
        frequencyList: [],
        stationList: [],
        selectedStationId: null,
        cachedStationId: null
    }

    componentDidMount() {
        this.setState({
            stationList: stations,
            frequencyList: frequencyList
        });
    }

    stationOnClickHandler = (id) => {
        this.setState( prevState => {
            const selectedStationId = prevState.selectedStationId === id ? null : id;

            return {
                selectedStationId,
                cachedStationId: id,
                isOnline: !!selectedStationId
            }
        });
    }

    radioOnAirToggleHAndler = () => {
        const selectedStationId = this.state.selectedStationId;
        const cachedStationId = this.state.cachedStationId
        
        this.stationOnClickHandler(selectedStationId || cachedStationId);
    }

    render() {
        return (
            <Layout>
                <SideBar
                    isOnline={ this.state.isOnline }
                    frequencyList={ this.state.frequencyList }
                    stationList={ this.state.stationList }
                    selectedStationId={ this.state.selectedStationId }
                    toggleClick={ this.radioOnAirToggleHAndler }
                    stationClick={ this.stationOnClickHandler }
                />
                <Stations 
                    stationList={ this.state.stationList }
                    selectedStationId={ this.state.selectedStationId }
                    stationClick={ this.stationOnClickHandler }
                />
                <Player
                    selectedStationId={ this.state.selectedStationId }
                    stationList={ this.state.stationList }
                />
            </Layout>
        );
    }
}

export default App;
