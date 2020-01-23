import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Image, ImageDetails } from '../components';

import { openImage } from '../store/actions';

const ImageContainer = ({ currentImage }) => {
    return (
        <Fragment>
            { !currentImage && <Image imageSrc="https://www.gstatic.com/images/branding/googlemic/2x/googlemic_color_24dp.png"/ > }
            { currentImage && <ImageDetails /> }
        </Fragment>
    )
}

ImageContainer.propTypes = {
    currentImage: PropTypes.string,
}

const mapStateToProps = state => {
    return {
        currentImage: state.currentImage,
    }
}

export default connect(mapStateToProps)(ImageContainer);
