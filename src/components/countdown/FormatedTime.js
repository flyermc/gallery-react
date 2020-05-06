import React from 'react';
import PropTypes from 'prop-types';

export const FormatedTime = ({miliseconds}) => {
    const formatTime = (time) => {
        let pad = time < 10 ? '0': '';
        return pad + time;
    }
    return (
        <span>
            {Math.floor(miliseconds / (24 * 60 * 60 * 1000))} days
            {formatTime(new Date(miliseconds).getHours())}:
            {formatTime(new Date(miliseconds).getMinutes())}:
            {formatTime(new Date(miliseconds).getSeconds())}
        </span>
    )
}

FormatedTime.propTypes = {
    miliseconds: PropTypes.number.isRequired,
}