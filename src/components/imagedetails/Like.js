import React, { useState } from 'react';

import EmptyHeart from '../../icons/empty-heart.svg';
import FilledHeart from '../../icons/filled-heart.svg';

import { StyledLikeContainer, StyledLike } from './styled';

export const Like = () => {
    const [liked, setLiked] = useState(false);

    return (
        <StyledLikeContainer>
            <StyledLike src={liked ? FilledHeart: EmptyHeart } alt="Empty heart" empty={!liked} onClick={() => setLiked(!liked)} />
        </StyledLikeContainer>
    )
}