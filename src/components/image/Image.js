import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { StyledImage, StyledImageContainer } from './styled';
import { Loading } from '../../components'

export const Image = ({ imageSrc, id, number }) => {
  const imgEl = useRef();

  const [ width, setWidth ] = useState(0);
  const [ height, setHeight ] = useState(0);
  const [ isLoaded, setIsLoaded ] = useState(false)

  return (
        <StyledImageContainer width={width} height={height} number={number}>
          { !isLoaded && <Loading /> }
          <StyledImage isLoaded={isLoaded}
            src={imageSrc}
            ref={imgEl}
            onLoad={() => {
              setWidth(imgEl.current.naturalWidht)
              setHeight(imgEl.current.naturalHeight)
              setIsLoaded(true)
            }}
            height={height}
            width={width}
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
