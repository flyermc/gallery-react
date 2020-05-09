import React, { useState, useEffect, useCallback } from 'react';

import { StyledContainer } from './styled';
import { FormatedTime } from './FormatedTime';

const WEEK = 1000 * 60 * 60 * 24 * 7;

export const Countdown = () => {

    var resultDate = new Date();
    const now = new Date()

    resultDate.setDate(now.getDate() + (7 + 6 - now.getDay()) % 7);
    resultDate.setHours(10, 0, 0, 0);

    const [counter, setCounter] = useState(0);

    const updateTimer = useCallback(() => {
        let diff = resultDate - new Date();
        if (diff < 0) {
            diff += WEEK;
        }

        setCounter(diff);
    }, [resultDate]);

    useEffect(() => {
        setTimeout(() => updateTimer(), 1000);
    }, [updateTimer]);

    return (
        <StyledContainer>
            <span>New image in... </span>
            {counter !== 0 && <FormatedTime miliseconds={counter} />}
        </StyledContainer>
    )
}
