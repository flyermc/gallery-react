import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { openImage } from '../../store/actions';

export const Image = ({imageSrc}) => {
    return (
            <img src={imageSrc}></img>
    )
}
const mapDispatchToProps = (dispatch) => {
    return {
        openImage: (data) => dispatch(openImage(data)),
    }
}
Image.propTypes = {
    imageSrc: PropTypes.string,
    openImage: PropTypes.func.isRequired,
}

export default connect(null, mapDispatchToProps)(Image);
