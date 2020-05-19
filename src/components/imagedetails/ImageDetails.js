import React, { useRef, memo } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { closeImage } from '../../store/actions';
import { useClickOutsideHook } from '../../hooks/ClickOutsideHook';

import { Like } from './Like';
import { ImageContainer, StyledImage } from './styled';

export const ImageDetails = memo(({ image, like }) => {
    const dispatch = useDispatch();
    const likeRef = useRef(null);

    useClickOutsideHook(likeRef, () => {
        dispatch(closeImage());
    });

    return (
        <ImageContainer>
            <StyledImage src={image.photo} alt='Loading...' />
            <div ref={likeRef}>
                <Like imageUuid={image.uuid} likeFrom={like} />
            </div>
        </ImageContainer>
    );
});

ImageDetails.propTypes = {
    image: PropTypes.object.isRequired,
};
