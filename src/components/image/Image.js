import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { openImage } from '../../store/actions';
import { StyledImage, StyledImageContainer } from './styled';

export const Image = ({ imageSrc, id, number }) => {
    const dispatch = useDispatch()
    const imgEl = useRef(null);
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);

    return (
        <StyledImageContainer width={width} height={height} number={number}>
            <StyledImage
                src={imageSrc}
                ref={imgEl}
                onLoad={() => {
                        setHeight(imgEl.current.naturalHeight);
                        setWidth(imgEl.current.naturalWidth);
                        }
                    }
                height={height}
                width={width}
                onClick={() => dispatch(openImage({id}))}
                alt='Loading...'
            />
        </StyledImageContainer>
    )
}

Image.propTypes = {
    imageSrc: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,
}
