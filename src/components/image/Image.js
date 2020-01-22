import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { openImage } from '../../store/actions';

export const Image = ({imageSrc, clickImage}) => {
    return (
            <img src={imageSrc} onClick={(imageSrc) => clickImage(imageSrc)}></img>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        clickImage: (data) => dispatch(openImage(data)),
    }
}
Image.propTypes = {
    imageSrc: PropTypes.string,
    clickImage: PropTypes.func.isRequired,
}

export default connect(null, mapDispatchToProps)(Image);
