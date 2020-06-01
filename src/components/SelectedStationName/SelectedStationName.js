import React, { useState ,useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import StationNameList from './StationNameList/StationNameList';
import Aux from '../../hoc/Aux';

import classes from './SelectedStationName.css';

const selectedStationName = (props) => {
    const wrapperRef = useRef(null);
    const selectRef = useRef(null);
    const [ stationsListState, setStationsListState ] = useState([]);

    const nameClickHandler = () => {
        selectRef.current.focus();
    };

    useEffect(() => {
        const list = [...props.stationList];

        if (props.showOffline) {
            list.unshift({
                name: 'Offline',
                id: null
            });
        }

        setStationsListState(list);
    }, [props.stationList]);
    
    useEffect(() => {
        const selectedItem = Array.from(wrapperRef.current.firstElementChild.childNodes).find(item => { 
            return item.dataset.id === props.selectedStationId 
        });
        
        wrapperRef.current.firstElementChild.style.transform = `translateY(${ selectedItem ? selectedItem.offsetTop / -1 : 0 }px)`
    }, [props.selectedStationId]);

    return (
        <Aux>
            <div 
                className={ classes.wrapper }
                ref={ wrapperRef }
            >
                <StationNameList
                    onNameClick={ nameClickHandler }
                    stationList={ stationsListState }
                />
            </div>
            <div className={ classes.hiddenSelect }>
                <select 
                    ref={ selectRef }
                    onChange={ (e) => props.stationSelect(e.target.value) }
                >
                    {
                        stationsListState.map(station => (
                            <option 
                                key={ station.id }
                                value={ station.id }
                            >
                                { station.name }
                            </option>
                        ))
                    }
                </select>
            </div>
        </Aux>
    )
};

selectedStationName.propTypes = {
    selectedStationId: PropTypes.string,
    stationList: PropTypes.array,
    showOffline: PropTypes.bool,
    stationSelect: PropTypes.func
};

selectedStationName.defaultProps = {
    selectedStationId: null,
    stationList: [],
    showOffline: false
};

export default selectedStationName;