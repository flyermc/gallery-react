import React, { useRef, memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { useClickOutsideHook } from '../../hooks/ClickOutsideHook';
import { currentImageSelector } from '../../selectors/imagesSelector';
import { getImageRequest } from '../../services/galleryService'
import { Loading } from '../../components'
import LeftArrow from '../../icons/left-arrow.svg'
import RightArrow from '../../icons/right-arrow.svg'

import { Like } from './Like';
import { ImageContainer, StyledImage, StyledArrowContainer } from './styled';

export const Arrow = ({ image, style }) => {
  return (
    <StyledArrowContainer style={style}>
      <img src={image} alt='arrow' />
    </StyledArrowContainer>
  )
}

Arrow.propTypes = {
  image: PropTypes.object.isRequired,
  style: PropTypes.object
}

Arrow.defaultValues = {
  style: {}
}


export const ImageDetails = memo(({ id, like }) => {
  const likeRef = useRef(null);
  const history = useHistory()
  const openedImage = useSelector(currentImageSelector);
  const [ image, setImage ] = React.useState(openedImage)
  const [ loading, setLoading ] = React.useState(true)

  const imageLoaded = () => setLoading(false)

  useClickOutsideHook(likeRef, () => {
      history.push('/')
  });

  useEffect(() => {
    async function getImage() {
      const response = await getImageRequest(id)
      setImage(response)
    }
    if (!image) {
      getImage()
    }
  }, [])

  return (
    <>
      { loading && (
        <ImageContainer loading={!loading}>
          <Loading />
        </ImageContainer>
        )
      }
      { image && (
        <ImageContainer loading={loading}>
          <Arrow image={LeftArrow} />
          <Arrow image={RightArrow} style={{'right': 0}} />
          <StyledImage src={image.photo} alt='Image' onLoad={imageLoaded} />
          <div ref={likeRef}>
            <Like imageUuid={image.uuid} likeFrom={like} />
          </div>
        </ImageContainer>
        )
      }
    </>
  );
});

ImageDetails.propTypes = {
    id: PropTypes.string.isRequired,
};
