import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { openImage } from '../../store/actions';
import { StyledImage } from './styled';

export const Image = ({ imageSrc, id }) => {
    const dispatch = useDispatch()
    return (
        <StyledImage src={imageSrc} onClick={() => dispatch(openImage({id}))} alt='Loading...' />
    )
}

Image.propTypes = {
    imageSrc: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
}
