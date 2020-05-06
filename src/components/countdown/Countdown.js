import React, { useState, useEffect } from 'react';

import { StyledContainer } from './styled';
import { FormatedTime } from './FormatedTime';

export const Countdown = () => {

    var resultDate = new Date();
    const now = new Date()

    resultDate.setDate(now.getDate() + (7 + 6 - now.getDay()) % 7);
    resultDate.setHours(10, 0, 0, 0);

    const diff = resultDate - now;

    const [counter, setCounter] = useState(diff);

    useEffect(() => {
        counter > 0 && setTimeout(() => setCounter(counter - 1000), 1000);
    }, [counter]);

    return (
        <StyledContainer>
            Next image in: {counter.toString()}' . '
            <FormatedTime miliseconds={counter} />
        </StyledContainer>
    )
}
