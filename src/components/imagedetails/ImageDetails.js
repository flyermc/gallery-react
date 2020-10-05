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

export const Arrow = ({ icon, right, imageUuid }) => {
  return (
    <StyledArrowContainer right={right}>
      <img src={icon} alt='arrow' />
    </StyledArrowContainer>
  )
}

Arrow.propTypes = {
  icon: PropTypes.object.isRequired,
  imageUuid: PropTypes.string.isRequired,
  right: PropTypes.bool
}

Arrow.defaultValues = {
  right: false
}


export const ImageDetails = memo(({ id, like }) => {
  const history = useHistory()
  const openedImage = useSelector(currentImageSelector);
  const [ image, setImage ] = React.useState(openedImage)
  const [ loading, setLoading ] = React.useState(true)

  const imageLoaded = () => setLoading(false)

  const closeImage = () => history.push('/')

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
        <ImageContainer loading={!loading} onClick={closeImage}>
          <Loading />
        </ImageContainer>
        )
      }
      { image && (
        <>
          <Arrow icon={LeftArrow} imageUuid='f33fghc12Rdf' />
          <Arrow icon={RightArrow} right={true} imageUuid='f33fghc12Rdf' />
          <Like imageUuid={image.uuid} likeFrom={like} />
          <ImageContainer loading={loading} onClick={closeImage}>
            <StyledImage src={image.photo} alt='Image' onLoad={imageLoaded} />
          </ImageContainer>
        </>
        )
      }
    </>
  );
});

ImageDetails.propTypes = {
    id: PropTypes.string.isRequired,
};
