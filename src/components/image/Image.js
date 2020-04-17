import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { openImage } from '../../store/actions';

export const Image = ({ imageSrc, id }) => {
    const dispatch = useDispatch()
    return (
        <img src={imageSrc} onClick={() => dispatch(openImage({id}))} alt='Loading...' />
    )
}

Image.propTypes = {
    imageSrc: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
}
