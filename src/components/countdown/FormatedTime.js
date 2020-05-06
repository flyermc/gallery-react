import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export const FormatedTime = ({miliseconds}) => {
    const time = new Date(miliseconds);
    const day = Math.floor(miliseconds / (24 * 60 * 60 * 1000));
    const formatTime = (time) => {
        let pad = time < 10 ? '0': '';
        return pad + time;
    }
    return (
        <span>
            {day} days
            {formatTime(time.getHours())}:
            {formatTime(time.getMinutes())}:
            {formatTime(time.getSeconds())}
        </span>
    )
}

FormatedTime.propTypes = {
    miliseconds: PropTypes.number.isRequired,
}