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
    currentImage && images && images.find((image) => image.uuid === currentImage),
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
    console.log(currentImage, hotImage)
    let id;
    if (currentImage) {
      id = currentImage
    } else if (hotImage) {
      id = hotImage.uuid
    }

    if (likes && id) {
      return likes[id]
    }
  },
);
