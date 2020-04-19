import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { closeImage } from '../../store/actions';

export const ImageDetails = ({image}) => {
    const dispatch = useDispatch()
    return (
        <img src={image.photo} onClick={() => dispatch(closeImage())} alt='Loading...' />
    )
}

ImageDetails.propTypes = {
    image: PropTypes.object.isRequired,
}
