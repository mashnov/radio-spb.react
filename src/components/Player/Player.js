import { useEffect } from 'react';
import PropTypes from 'prop-types';

import * as R from 'ramda';

const audio = new Audio(null);

const player = (props) => {
    useEffect(() => {
        const url = R.find(R.propEq('id', props.selectedStationId))(props.stationList);
        const stream = url ? url.stream : null;

        if (! audio.paused) {
            audio.pause();
            audio.currentTime = 0.0;
        }

        if (stream) {
            audio.src = stream;
            audio.play();
        }
    }, [props.selectedStationId]);


    return null;
};

player.propTypes = {
    selectedStationId: PropTypes.string,
    stationList: PropTypes.array
};

player.defaultProps = {
    selectedStationId: null,
    stationList: []
};

export default player;