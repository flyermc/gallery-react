import React, { useRef, memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { useClickOutsideHook } from '../../hooks/ClickOutsideHook';
import { currentImageSelector } from '../../selectors/imagesSelector';
import { getImageRequest } from '../../services/galleryService'
import { Loading } from '../../components'

import { Like } from './Like';
import { ImageContainer, StyledImage } from './styled';

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
          <StyledImage src={image.photo} alt='Loading...' onLoad={imageLoaded} />
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
