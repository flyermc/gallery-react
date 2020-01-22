import { OPEN_IMAGE } from './actions';

const initialState = {
    currentImage: ""
}

function galleryReducer(state = initialState, action) {
    switch (action.type) {
    case OPEN_IMAGE:
        return {
            ...state, currentImage: action.src
        }
    default:
        return state;
    }
}

export default galleryReducer;
