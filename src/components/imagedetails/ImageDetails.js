import React from 'react';
import { connect } from 'react-redux';

const ImageDetails = () => {
    return (
            <img src={image_src} />
    )
}

ImageDetails.propTypes = {
    imageSrc: PropTypes.string.isRequired,
}

const mapStateToProps = state => {
    return {imageSrc: state.currentImage}
}

export default connect(mapStateToProps)(ImageDetails);
