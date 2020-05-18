import { OPEN_IMAGE, CLOSE_IMAGE, IMAGES_FETCH_SUCCEEDED, LIKE_FETCH_SUCCEEDED } from './actions';
import { List } from 'immutable';

const initialState = {
  currentImage: null,
  likes: new List(),
  images: new List(),
};

function galleryReducer(state = initialState, action) {
  switch (action.type) {
    case OPEN_IMAGE:
      return {
        ...state,
        currentImage: action.data,
      };
    case CLOSE_IMAGE:
      return {
        ...state,
        currentImage: null,
      };
    case LIKE_FETCH_SUCCEEDED:
      return {
        ...state,
        likes: { [action.data.image]: action.data.like },
      };
    case IMAGES_FETCH_SUCCEEDED:
      return {
        ...state,
        images: action.images,
      };
    default:
      return state;
  }
}

export default galleryReducer;
