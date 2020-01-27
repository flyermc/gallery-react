import React from 'react';
import PropTypes from 'prop-types';
import { connect, useDispatch } from 'react-redux';
import { openImage } from '../../store/actions';

export const Image = ({imageSrc, clickImage}) => {
    const dispatch = useDispatch()
    return (
            <img src={imageSrc} onClick={() => dispatch(openImage(imageSrc))} alt='Loading...' />
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
