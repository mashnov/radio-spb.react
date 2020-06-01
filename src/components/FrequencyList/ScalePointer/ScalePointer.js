import React from 'react';
import PropTypes from 'prop-types';

import classes from './ScalePointer.css';

const scalePointer = props => {
    const itemPosition = { height: `calc(${ props.pointerHeight }% - 7px)` }

    return (
        <div className={ classes.pointer }>
            <div
                className={ classes.item }
                style={ itemPosition }
            ></div>
        </div>
    )
};

scalePointer.propTypes = {
    pointerHeight: PropTypes.number
};

scalePointer.defaultProps = {
    pointerHeight: 0
};

export default scalePointer;