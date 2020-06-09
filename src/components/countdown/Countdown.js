import React from 'react';
import PropTypes from 'prop-types';

import { StyledContainer } from './styled';
import { FormatedTime } from './FormatedTime';

export const Countdown = ({ counter }) => {
  return (
    <StyledContainer>
      {counter !== 0 && (
        <div>
          <FormatedTime miliseconds={counter} />
        </div>
      )}
    </StyledContainer>
  );
};

Countdown.propTypes = {
  counter: PropTypes.number.isRequired,
};
