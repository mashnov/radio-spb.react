import React from 'react';
import PropTypes from 'prop-types';

import StationName from './StationName/StationName';

import classes from './StationNameList.css';

const stationNameList = (props) => {
    const className = [classes.itemList];

    return (
        <div 
            className={ className.join(' ') }
            onClick={ props.onNameClick }
        >
            {
                props.stationList.map(station => (
                    <StationName
                        key={ station.id }
                        id={ station.id }
                        name={ station.name }
                    />
                ))
            }
        </div>
    );
}

stationNameList.propTypes = {
    stationList: PropTypes.array,
    onNameClick: PropTypes.func
};

stationNameList.defaultProps = {
    stationList: []
};

export default stationNameList;