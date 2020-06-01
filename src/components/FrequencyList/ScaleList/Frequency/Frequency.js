import React from 'react';
import PropTypes from 'prop-types';

import classes from './Frequency.css';

const frequency = props => {
    const itemPosition = { top: `${ props.topPosition }%` }

    return (
        <div 
            className={ classes.item }
            style={itemPosition}
        >
            { props.frequency } 
            <span>
                mHz
            </span>
        </div>
    )
};

frequency.propTypes = {
    frequency: PropTypes.number,
    topPosition: PropTypes.number
};

frequency.defaultProps = {
    frequency: 0,
    topPosition: 0
};

export default frequency;