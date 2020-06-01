import React, { useState ,useEffect } from 'react';
import PropTypes from 'prop-types';

import * as R from 'ramda';

import ScalePointer from './ScalePointer/ScalePointer';
import ScaleList from './ScaleList/ScaleList';
import StationList from './StationList/StationList';
import EventField from './EventField/EventField';

import classes from './FrequencyList.css';

const frequencyList = props => {
    const [ frequencyState, setFrequencyState ] = useState({
        start: 0,
        stop: 0,
        dif: 0
    });

    const [ pointerState, setPointerState ] = useState({
        height: 0
    });

    useEffect(() => {
        const start = props.frequencyList[0];
        const stop = props.frequencyList[props.frequencyList.length - 1];
        const dif = start - stop;

        setFrequencyState({ start, stop, dif });
    }, [props.frequencyList]);

    useEffect(() => {
        let height = 0;

        if (props.isOnline) {
            const station = R.find(R.propEq('id', props.selectedStationId))(props.stationList);
            const frequency = parseFloat(station.frequency);
            
            height = 100 - getItemTopPosition(frequency);
        }

        setPointerState({ height });
    }, [props.selectedStationId]);

    const getItemTopPosition = value => {
        let realPosition = frequencyState.dif - (frequencyState.start - value);
        let topPosition = realPosition / frequencyState.dif * 100;

        return topPosition;
    };

    return (
        <div className={ classes.wrapper }>
            <ScalePointer
                pointerHeight={ pointerState.height }
            />
            <ScaleList
                isOnline={ props.isOnline }
                frequencyList={ props.frequencyList }
                getItemTopPosition={ getItemTopPosition }
            />
            <StationList
                stationList={ props.stationList }
                getItemTopPosition={ getItemTopPosition }
                selectedStationId={ props.selectedStationId }
            />
            <EventField
                frequencyChange={ props.stationClick }
                stationList={ props.stationList }
                frequencyState={ frequencyState }
            />
        </div>
    );
};

frequencyList.propTypes = {
    isOnline: PropTypes.bool,
    selectedStationId: PropTypes.string,
    frequencyList: PropTypes.array,
    stationList: PropTypes.array,
    stationClick: PropTypes.func
};

frequencyList.defaultProps = {
    isOnline: false,
    selectedStationId: null,
    frequencyList: [],
    stationList: []
};

export default frequencyList;