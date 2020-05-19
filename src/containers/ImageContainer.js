import React, { Fragment, useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Image, ImageDetails, Countdown, FullScreen } from '../components';
import { imagesSelector, currentImageSelector } from '../selectors/imagesSelector';

import { requestImages } from '../store/actions';

import { Container, StyledItem } from './styled';

const DAY = 1000 * 60 * 60 * 24;
const WEEK = DAY * 7;
const PUBLISH_DAY = 6;
const PUBLISH_HOUR = 10;

export const ImageContainer = () => {
  let dispatch = useDispatch();

  const images = useSelector(imagesSelector);
  images || dispatch(requestImages());

  const openedImage = useSelector(currentImageSelector);

  var resultDate = new Date();
  const now = new Date();

  resultDate.setDate(now.getDate() + ((WEEK + PUBLISH_DAY - now.getDay()) % WEEK));
  resultDate.setHours(PUBLISH_HOUR, 0, 0, 0);

  const [counter, setCounter] = useState(0);

  const updateTimer = useCallback(() => {
    let diff = resultDate - new Date();
    if (diff < 0) {
      diff += WEEK;
    }
    setCounter(diff);
  }, [resultDate]);

  useEffect(() => {
    setTimeout(() => updateTimer(), 1000);
  }, [updateTimer]);

  return (
    <Fragment>
      {images ? (
        WEEK - counter <= DAY ? (
          <FullScreen imageSrc={images[0].photo} />
        ) : (
          <Container>
            {images.map(({ photo_preview, uuid }, index) => (
              <StyledItem number={index}>
                <Image imageSrc={photo_preview} id={uuid} key={uuid} number={index} />
              </StyledItem>
            ))}
          </Container>
        )
      ) : null}
      {!!openedImage && <ImageDetails image={openedImage} />}
      <Countdown counter={counter} />
    </Fragment>
  );
};
