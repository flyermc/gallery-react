import { createSelector } from 'reselect';

export const getImages = (state) => state.images;
export const getCurrentImage = (state) => state.currentImage;
export const getHotImageSelector = (state) => state.hotImage;
export const getLikes = (state) => {
  return state.likes;
};
export const getArchive = (state) => state.archive;

export const imagesSelector = createSelector(getImages, (images) => images);

export const currentImageSelector = createSelector(
  getImages,
  getCurrentImage,
  (images, currentImage) =>
    images && currentImage && images.find((image) => image.uuid === currentImage.id),
);

export const archiveYearSelector = createSelector(
  getArchive,
  (archive) => archive ? archive.year : null
)

export const archiveMonthSelector = createSelector(
  getArchive,
  (archive) => archive ? archive.month : null
)

export const likedImageSelector = createSelector(
  getLikes,
  getCurrentImage,
  getHotImageSelector,
  (likes, currentImage, hotImage) => {
    const image = currentImage || hotImage;
    const id = image.uuid || image.id;
    if (likes && id) {
      return likes[id]
    }
  },
);
