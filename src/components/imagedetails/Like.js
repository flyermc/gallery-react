import React, { useState, useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector, connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import EmptyHeart from '../../icons/empty-heart.svg';
import FilledHeart from '../../icons/filled-heart.svg';

import { StyledLikeContainer, StyledLike } from './styled';
import { requestLike } from '../../store/actions';
import { likedImageSelector } from '../../selectors/imagesSelector';

export const Like = memo(({ imageUuid, liked }) => {
  const dispatch = useDispatch();

  const likedHere = useSelector(likedImageSelector);
  likedHere || dispatch(requestLike(imageUuid));

  const [like, setLike] = useState(liked);

  useEffect(() => {
    //dispatch(requestLike(imageUuid));
  }, [liked]);

  return (
    <StyledLikeContainer>
      {likedHere !== undefined && (
        <StyledLike
          src={likedHere ? FilledHeart : EmptyHeart}
          alt="Empty heart"
          empty={!liked}
          onClick={() => setLike(!like)}
        />
      )}
    </StyledLikeContainer>
  );
});

Like.propTypes = {
  imageUuid: PropTypes.string.isRequired,
  liked: PropTypes.bool,
};
