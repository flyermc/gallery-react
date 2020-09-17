import React, { Fragment, useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import queryString from 'query-string'

import { Image, ImageDetails, Countdown, FullScreen, Archive } from '../components';
import { imagesSelector, currentImageSelector } from '../selectors/imagesSelector';

import { requestImages, openImage, closeImage } from '../store/actions';

import { Container, StyledItem } from './styled';

const DAY = 1000 * 60 * 60 * 24;
const WEEK = DAY * 7;
const PUBLISH_DAY = 6;
const PUBLISH_HOUR = 10;

export const  ImageContainer = ({ location }) => {

  const { id } = queryString.parse(location.search)

  const dispatch = useDispatch();
  const [ currentImage, setCurrentImage ] = React.useState(null)

  const images = useSelector(imagesSelector);

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
    dispatch(requestImages())
  }, [])

  useEffect(() => {
    if (id === undefined) {
      setCurrentImage(null)
      dispatch(closeImage())
      console.log(`Close image`)
    } else {
      dispatch(openImage(id))
      setCurrentImage(id)
      console.log(`Open image ${id}`)
      console.log(`openedImage is ${openedImage}`)
    }
  }, [id])

  useEffect(() => {
    setTimeout(() => updateTimer(), 1000);
  }, [counter]);

  return (
    <Fragment>
      {images && counter ? (
        WEEK - counter <= DAY ? (
          <FullScreen />
        ) : (
          <>
            <Container>
              {images.map(({ photo_preview, uuid }, index) => (
                <StyledItem number={index}>
                  <Link to={`/image?id=${uuid}`}>
                    <Image imageSrc={photo_preview} id={uuid} key={uuid} number={index} />
                  </Link>
                </StyledItem>
              ))}
            </Container>
            <Archive />
          </>
        )
      ) : null}
      {!!openedImage && <ImageDetails image={openedImage} />}
      <Countdown counter={counter} />
    </Fragment>
  );
};
