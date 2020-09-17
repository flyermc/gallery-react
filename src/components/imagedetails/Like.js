import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import EmptyHeart from '../../icons/empty-heart.svg';
import FilledHeart from '../../icons/filled-heart.svg';

import { StyledLikeContainer, StyledLike } from './styled';
import { requestLike, setLike, deleteLike } from '../../store/actions';
import { likedImageSelector } from '../../selectors/imagesSelector';

export const Like = memo(({ imageUuid, bottom }) => {
  const dispatch = useDispatch();

  const liked = useSelector(likedImageSelector);

  const changeLike = (liked) => {
    if (liked) {
      dispatch(deleteLike(imageUuid));
    } else {
      dispatch(setLike(imageUuid));
    }
  };

  useEffect(() => {
    dispatch(requestLike(imageUuid));
  }, [imageUuid]);

  return (
    <StyledLikeContainer bottom={bottom}>
      {liked !== undefined && (
        <StyledLike
          src={liked ? FilledHeart : EmptyHeart}
          alt="Heart"
          empty={!liked}
          onClick={() => changeLike(liked)}
        />
      )}
    </StyledLikeContainer>
  );
});

Like.propTypes = {
  imageUuid: PropTypes.string.isRequired,
  liked: PropTypes.bool,
  bottom: PropTypes.number,
};

Like.defaultProps = {
  bottom: 10,
}
