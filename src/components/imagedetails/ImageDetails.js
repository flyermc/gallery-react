import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { openImage } from '../../store/actions';

const ImageDetails = ({ imageSrc, closeImage }) => {
    return (
            <img src={imageSrc} onClick={() => closeImage()}/>
    )
}

ImageDetails.propTypes = {
    imageSrc: PropTypes.string.isRequired,
}

const mapStateToProps = state => {
    return {imageSrc: state.currentImage}
}

const mapDispatchToProps = dispatch => {
    return {
        closeImage: () => dispatch(openImage(null))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ImageDetails);
