import { createSelector } from 'reselect';

export const getImages = (state) => state.images;
export const getImage = (state) => state.currentImage;

export const imagesSelector = createSelector(
    getImages,
    (images) => images,
);

export const currentImageSelector = createSelector(
    getImage,
    (image) => image,
);