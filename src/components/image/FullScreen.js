import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getHotImageSelector } from '../../selectors/imagesSelector';

import { requestHotImage } from '../../store/actions';
import { Like } from './Like';

import { FullScreenContainer } from './styled';

export const FullScreen = () => {
  const dispatch = useDispatch();
  const hotImage = useSelector(getHotImageSelector);
  dispatch(requestHotImage());
  return (
    <>
      {hotImage && <FullScreenContainer imageSrc={hotImage.photo} />}
      <Like imageUuid={hotImage.uuid} />
    </>);
};
