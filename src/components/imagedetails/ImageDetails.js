import React, { useRef, memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { useClickOutsideHook } from '../../hooks/ClickOutsideHook';
import { currentImageSelector } from '../../selectors/imagesSelector';
import { getImageRequest } from '../../services/galleryService'

import { Like } from './Like';
import { ImageContainer, StyledImage } from './styled';

export const ImageDetails = memo(({ id, like }) => {
  const likeRef = useRef(null);
  const history = useHistory()
  const openedImage = useSelector(currentImageSelector);
  const [ image, setImage ] = React.useState(openedImage)

  useClickOutsideHook(likeRef, () => {
      history.push('/')
  });

  useEffect(() => {
    console.log("Loading imageDetails component")
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
      { image && (
        <ImageContainer>
          <StyledImage src={image.photo} alt='Loading...' />
          <div ref={likeRef}>
            <Like imageUuid={image.uuid} likeFrom={like} />
          </div>
        </ImageContainer>
      )}
    </>
  );
});

ImageDetails.propTypes = {
    id: PropTypes.string.isRequired,
};
