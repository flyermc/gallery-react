import React from 'react';
import PropTypes from 'prop-types';

export const FormatedTime = ({miliseconds}) => {
    const time = new Date(miliseconds);
    const day = Math.floor(miliseconds / (24 * 60 * 60 * 1000));
    const hours = Math.floor((miliseconds / 1000 / 60 / 60) % 24);
    const minutes = Math.floor((miliseconds / 1000 / 60) % 60);
    const seconds = Math.floor((miliseconds / 1000) % 60);
    const formatTime = (time) => {
        let pad = time < 10 ? '0': '';
        return pad + time;
    }
    return (
        <span>
            {day} {day === 1 ? `day`: `days`}
            {formatTime(hours)}:
            {formatTime(minutes)}:
            {formatTime(seconds)}
        </span>
    )
}

FormatedTime.propTypes = {
    miliseconds: PropTypes.number.isRequired,
}