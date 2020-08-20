import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getHotImageSelector } from '../../selectors/imagesSelector';

import { requestHotImage } from '../../store/actions';
import { Like } from '../imagedetails/Like';

import { FullScreenContainer } from './styled';

export const FullScreen = () => {
  const dispatch = useDispatch();
  const hotImage = useSelector(getHotImageSelector);

  useEffect(() => {
    dispatch(requestHotImage());
    // eslint-disable-next-line
  }, [])

  return (
    <>
      {hotImage && <FullScreenContainer imageSrc={hotImage.photo} />}
      {hotImage && <Like imageUuid={hotImage.uuid} bottom={40}/>}
    </>);
};
