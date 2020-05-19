import React, { useState, useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector, connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import EmptyHeart from '../../icons/empty-heart.svg';
import FilledHeart from '../../icons/filled-heart.svg';

import { StyledLikeContainer, StyledLike } from './styled';
import { requestLike } from '../../store/actions';
import { currentImageSelector, getImageLikeSelector } from '../../selectors/imagesSelector';

export const Like = memo(({ imageUuid, liked, likeFrom }) => {
  const dispatch = useDispatch();

  liked || dispatch(requestLike(imageUuid));

  const likedHere = useSelector(currentImageSelector);

  const [like, setLike] = useState(liked);

  useEffect(() => {
    //dispatch(requestLike(imageUuid));
  }, [liked]);

  return (
    <StyledLikeContainer>
      <StyledLike
        src={liked ? FilledHeart : EmptyHeart}
        alt="Empty heart"
        empty={!liked}
        onClick={() => setLike(!like)}
      />
    </StyledLikeContainer>
  );
});

const mapStateToProps = createStructuredSelector({
  liked: getImageLikeSelector,
});

Like.propTypes = {
  imageUuid: PropTypes.string.isRequired,
  liked: PropTypes.bool,
};

export default connect(mapStateToProps)(Like);
