import React from 'react';
import PropTypes from 'prop-types';

export const Image = ({image_src}) => {
    return (
            <img src={image_src}></img>
    )
}

Image.propTypes = {
    image_src: PropTypes.string,
}
