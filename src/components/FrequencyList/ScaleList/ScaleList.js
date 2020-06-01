import React from 'react';
import PropTypes from 'prop-types';

import Frequency from './Frequency/Frequency';

import classes from './ScaleList.css';

const scaleList = props => (
    <div className={ classes.scale }>
        {
            props.frequencyList.map((frequency, index) => (
                <Frequency
                    key={ `${frequency}-${index}` }
                    frequency={ frequency }
                    topPosition={ props.getItemTopPosition(frequency) }
                />
            ))
        }
    </div>
);

scaleList.propTypes = {
    isOnline: PropTypes.bool,
    frequencyList: PropTypes.array,
    getItemTopPosition: PropTypes.func
};

scaleList.defaultProps = {
    isOnline: false,
    frequencyList: [],
    value: 0
};


export default scaleList;