import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import EmptyHeart from '../../icons/empty-heart.svg';
import FilledHeart from '../../icons/filled-heart.svg';

import { StyledLikeContainer, StyledLike } from './styled';
import { fetchLike } from '../../store/actions';

export const Like = () => {
    const dispatch = useDispatch();

    const [liked, setLiked] = useState(false);

    useEffect(() => {
        dispatch(fetchLike({image: "hello", src: "asdfasd"}));
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
};
