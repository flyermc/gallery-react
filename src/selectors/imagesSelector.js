import { createSelector } from 'reselect';

export const getImages = (state) => {
  return state.images;
};
export const getCurrentImage = (state) => {
  return state.currentImage;
};
export const getLikesSelector = (state) => {
  console.log(state);
  return state.likes;
};

export const imagesSelector = createSelector(getImages, (images) => images);

export const currentImageSelector = createSelector(
  getImages,
  getCurrentImage,
  (images, currentImage) =>
    images && currentImage && images.find((image) => image.uuid === currentImage.id),
);

export const getImageLikeSelector = createSelector(
  getLikesSelector,
  getCurrentImage,
  (likes, uuid) => likes.get(uuid),
);
