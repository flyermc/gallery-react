import { OPEN_IMAGE, CLOSE_IMAGE, IMAGES_FETCH_SUCCEEDED, LIKE_FETCH } from './actions';

const initialState = {
    currentImage: null,
}

function galleryReducer(state = initialState, action) {
    switch (action.type) {
    case OPEN_IMAGE:
        return {
            ...state, currentImage: action.data
        }
    case CLOSE_IMAGE:
        return {
            ...state, currentImage: null
        }
    case LIKE_FETCH:
        return {
            ...state, like: action.data
        }
    case IMAGES_FETCH_SUCCEEDED:
        return {
            ...state, images: action.images
        }
    default:
        return state;
    }
}

export default galleryReducer;
