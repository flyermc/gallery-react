import React from 'react';
import PropTypes from 'prop-types';
import { connect, useDispatch } from 'react-redux';
import { openImage } from '../../store/actions';

export const Image = ({imageSrc}) => {
    const dispatch = useDispatch()
    return (
            <img src={imageSrc} onClick={() => dispatch(openImage(imageSrc))} alt='Loading...' />
    )
}

Image.propTypes = {
    imageSrc: PropTypes.string,
}
