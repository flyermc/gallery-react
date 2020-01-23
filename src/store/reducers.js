import { OPEN_IMAGE, CLOSE_IMAGE } from './actions';

const initialState = {
    currentImage: null,
}

function galleryReducer(state = initialState, action) {
    switch (action.type) {
    case OPEN_IMAGE:
        return {
            ...state, currentImage: action.data.imageSrc
        }
    case CLOSE_IMAGE:
        return {
            ...state, currentImage: null
        }
    default:
        return state;
    }
}

export default galleryReducer;
