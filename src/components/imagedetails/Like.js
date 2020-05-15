import React, { useState, useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import EmptyHeart from '../../icons/empty-heart.svg';
import FilledHeart from '../../icons/filled-heart.svg';

import { StyledLikeContainer, StyledLike } from './styled';
import { fetchLike } from '../../store/actions';

export const Like = memo(({imageUuid}) => {
    const dispatch = useDispatch();

    const [liked, setLiked] = useState(false);

    useEffect(() => {
        dispatch(fetchLike(imageUuid));
    }, [liked]);

    return (
        <StyledLikeContainer>
            <StyledLike
                src={liked ? FilledHeart : EmptyHeart}
                alt='Empty heart'
                empty={!liked}
                onClick={() => setLiked(!liked)}
            />
        </StyledLikeContainer>
    );
});

Like.propTypes = {
    imageUuid: PropTypes.string.isRequired,
}