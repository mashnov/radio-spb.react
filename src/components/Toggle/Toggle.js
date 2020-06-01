import React from 'react';
import PropTypes from 'prop-types';

import classes from './Toggle.css';

const toggle = (props) => {
    const componentToggleCLass = props.value ? 'on' : 'off';
    const componentClassName = `${classes.wrapper} ${classes[componentToggleCLass]}`;

    return (
        <div 
            className={componentClassName}
            onClick={props.change}
        >
            <div className={classes.itemWrapper}>
                <div className={classes.itemBackText}>On</div>
                <div className={classes.itemButton}></div>
                <div className={classes.itemFrontText}>Off</div>
            </div>
        </div>
    )
};

toggle.propTypes = {
    value: PropTypes.bool,
    change: PropTypes.func
};

toggle.defaultProps = {
    value: false
};

export default toggle;