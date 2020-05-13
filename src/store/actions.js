export const OPEN_IMAGE = 'OPEN_IMAGE';
export const CLOSE_IMAGE = 'CLOSE_IMAGE';
export const LIKE_FETCH = 'LIKE_FETCH';
export const LOAD_IMAGES = 'LOAD_IMAGES';
export const IMAGES_REQUESTED = 'IMAGES_REQUESTED';
export const IMAGES_FETCH_SUCCEEDED = 'IMAGES_FETCH_SUCCEEDED';
export const IMAGES_FETCH_FAILED = 'IMAGES_FETCH_FAILED';

export function loadImages() {
    return { type: LOAD_IMAGES }
}

export function openImage(data) {
    return { type: OPEN_IMAGE, data }
}

export function closeImage() {
    return { type: CLOSE_IMAGE }
}

export function fetchLike(data) {
    return { type: LIKE_FETCH, data }
}

export function requestImages() {
    return { type: IMAGES_REQUESTED }
}

export function imagesFetched(images) {
    return { type: IMAGES_FETCH_SUCCEEDED, images }
}

export function imagesFetchFailed(message) {
    return { type: IMAGES_FETCH_FAILED, message }
}
