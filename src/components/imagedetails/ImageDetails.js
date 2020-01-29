import React from 'react';
import PropTypes from 'prop-types';
import { connect, useDispatch } from 'react-redux';
import { closeImage } from '../../store/actions';

const ImageDetails = ({imageSrc}) => {
    const dispatch = useDispatch()
    return (
            <img src={imageSrc} onClick={() => dispatch(closeImage())} alt='Loading...' />
    )
}

ImageDetails.propTypes = {
    imageSrc: PropTypes.string.isRequired,
}

const mapStateToProps = state => {
    return {imageSrc: state.currentImage}
}

export default connect(mapStateToProps)(ImageDetails);
