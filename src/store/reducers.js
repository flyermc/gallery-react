import { OPEN_IMAGE } from './actions';

const initialState = {
    currentImage: ""
}

function galleryReducer(state = initialState, action) {
    switch (action.type) {
    case OPEN_IMAGE:
        return {
            ...state, currentImage: action.data.imageSrc
        }
    default:
        return state;
    }
}

export default galleryReducer;
