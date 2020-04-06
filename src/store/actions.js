export const OPEN_IMAGE = 'OPEN_IMAGE';
export const CLOSE_IMAGE = 'CLOSE_IMAGE';
export const LOAD_IMAGES = 'LOAD_IMAGES';
export const IMAGES_REQUESTED = 'IMAGES_REQUESTED';

export function loadImages() {
    return { type: LOAD_IMAGES }
}

export function openImage(data) {
    return { type: OPEN_IMAGE, data }
}

export function closeImage() {
    return { type: CLOSE_IMAGE }
}

export function requestImages() {
    return { type: IMAGES_REQUESTED }
}
