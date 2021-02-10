import React, { useRef, memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { openImage } from '../../store/actions';
import { imagesSelector } from '../../selectors/imagesSelector';

import { useClickOutsideHook } from '../../hooks/ClickOutsideHook';
import { currentImageSelector } from '../../selectors/imagesSelector';
import { getImageRequest } from '../../services/galleryService';
import { Loading } from '../../components';
import LeftArrow from '../../icons/left-arrow.svg';
import RightArrow from '../../icons/right-arrow.svg';

import { Like } from './Like';
import { ImageContainer, StyledImage, StyledArrowContainer, StyledArrowImage } from './styled';

export const Arrow = ({ icon, imageUuid, loading, right }) => {
  const history = useHistory()
  const dispatch = useDispatch()

  const changeImage = () => {
    if (loading) {
      return
    }
    dispatch(openImage(imageUuid))
    history.push(`/image?id=${imageUuid}`)
  }

  return (
    <StyledArrowContainer right={right} onClick={changeImage}>
      <StyledArrowImage src={icon} alt='arrow' />
    </StyledArrowContainer>
  )
}

Arrow.propTypes = {
  icon: PropTypes.string.isRequired,
  imageUuid: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  right: PropTypes.bool
}

Arrow.defaultValues = {
  right: false
}


export const ImageDetails = memo(({ id, like }) => {
  const history = useHistory()
  const openedImage = useSelector(currentImageSelector);
  const [ image, setImage ] = React.useState(openedImage)
  const [ leftUuid, setLeftUuid ] = React.useState(null)
  const [ rightUuid, setRightUuid ] = React.useState(null)
  const [ loading, setLoading ] = React.useState(true)

  const images = useSelector(imagesSelector)

  const imageLoaded = () => setLoading(false)

  const closeImage = () => history.push('/')

  useEffect(() => {
    console.log(`Current id: ${id}`)
    async function getImage() {
      setLoading(true)
      const response = await getImageRequest(id)
      setImage(response)
    }
    getImage()
    image && console.log(`Image is: ${image.photo}`)
  }, [id])

  useEffect(() => {
    if (images) {
      const currentIndex = images.findIndex((item) => item.uuid === id)
      if (currentIndex >= 0) {
        setLeftUuid(images[(currentIndex - 1 + images.length) % images.length].uuid)
        setRightUuid(images[(currentIndex + 1 + images.length) % images.length].uuid)
      }
    }
  }, [images, id])

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
          <Arrow icon={LeftArrow} imageUuid={leftUuid} loading={loading} />
          <Arrow icon={RightArrow} right={true} imageUuid={rightUuid} loading={loading} />
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
