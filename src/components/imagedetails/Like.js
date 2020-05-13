import React from 'react';

import EmptyHeart from '../../icons/empty-heart.svg';
import FilledHeart from '../../icons/filled-heart.svg';

import { StyledLikeContainer, StyledLike } from './styled';

export const Like = () => {
    return (
        <StyledLikeContainer>
            <StyledLike src={EmptyHeart} alt="Empty heart" empty={true} />
        </StyledLikeContainer>
    )
}