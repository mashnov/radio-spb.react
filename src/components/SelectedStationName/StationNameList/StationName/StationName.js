import React from 'react';
import PropTypes from 'prop-types';

import classes from './StationName.css';

const stationName = (props) => (
    <div 
        className={ classes.item }
        data-id={props.id}
    >
        { props.name }
    </div>
);

stationName.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string
};

stationName.defaultProps = {
    id: '',
    name: ''
};

export default stationName;