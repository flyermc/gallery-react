import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { closeImage } from '../../store/actions';
import { Like } from './Like';
import { ImageContainer, StyledImage } from './styled';

export const ImageDetails = ({image}) => {
    const dispatch = useDispatch()
    const wrapperRef = useRef(null);
    const handleClick = () => {
        dispatch(closeImage());
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClick);

        return () => {
            document.removeEventListener("mousedown", handleClick);
        };
    });

    return (
        <ImageContainer ref={wrapperRef}>
            <StyledImage src={image.photo} alt='Loading...' />
            <Like />
        </ImageContainer>
    )
}

ImageDetails.propTypes = {
    image: PropTypes.object.isRequired,
}
