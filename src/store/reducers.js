import {
  OPEN_IMAGE,
  CLOSE_IMAGE,
  IMAGES_FETCH_SUCCEEDED,
  ARCHIVE_FETCH_SUCCEEDED,
  HOT_IMAGE_FETCH_SUCCEEDED,
  LIKE_FETCH_SUCCEEDED,
  LIKE_SET_SUCCEEDED,
  LIKE_DELETE_SUCCEEDED,
} from './actions';
import { List } from 'immutable';

const initialState = {
  currentImage: null,
  likes: {},
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
        likes: null,
      };
    case LIKE_FETCH_SUCCEEDED:
      return {
        ...state,
        likes: { [action.data.image]: action.data.like },
      };
    case LIKE_SET_SUCCEEDED:
      return {
        ...state,
        likes: { [action.uuid]: true },
      };
    case LIKE_DELETE_SUCCEEDED:
      return {
        ...state,
        likes: { [action.uuid]: false },
      };
    case IMAGES_FETCH_SUCCEEDED:
      return {
        ...state,
        images: action.images,
      };
    case ARCHIVE_FETCH_SUCCEEDED:
      return {
        ...state,
        images: action.images,
      }
    case HOT_IMAGE_FETCH_SUCCEEDED:
      return {
        ...state,
        hotImage: action.image,
      }
    default:
      return state;
  }
}

export default galleryReducer;
