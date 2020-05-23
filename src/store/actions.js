export const OPEN_IMAGE = 'OPEN_IMAGE';
export const CLOSE_IMAGE = 'CLOSE_IMAGE';
export const LIKE_FETCH_SUCCEEDED = 'LIKE_FETCH_SUCCEEDED';
export const LIKE_REQUESTED = 'LIKE_REQUESTED';
export const LIKE_SET_REQUEST = 'LIKE_SET_REQUEST';
export const LIKE_SET_SUCCESS = 'LIKE_SET_SUCCESS';
export const LIKE_DELETE_REQUEST = 'LIKE_DELETE_REQUEST';
export const LIKE_DELETE_SUCCESS = 'LIKE_DELETE_SUCCESS';
export const LOAD_IMAGES = 'LOAD_IMAGES';
export const IMAGES_REQUESTED = 'IMAGES_REQUESTED';
export const IMAGES_FETCH_SUCCEEDED = 'IMAGES_FETCH_SUCCEEDED';
export const IMAGES_FETCH_FAILED = 'IMAGES_FETCH_FAILED';

export const loadImages = () => ({ type: LOAD_IMAGES });
export const requestImages = () => ({ type: IMAGES_REQUESTED });
export const imagesFetched = (images) => ({ type: IMAGES_FETCH_SUCCEEDED, images });
export const imagesFetchFailed = (message) => ({ type: IMAGES_FETCH_FAILED, message });

export const openImage = (data) => ({ type: OPEN_IMAGE, data });
export const closeImage = () => ({ type: CLOSE_IMAGE });

export const requestLike = (uuid) => ({ type: LIKE_REQUESTED, uuid });
export const likeFetched = (data) => ({ type: LIKE_FETCH_SUCCEEDED, data });
export const setLike = (uuid) => ({ type: LIKE_SET_REQUEST, uuid });
export const setLikeSuccess = () => ({ type: LIKE_SET_SUCCESS });
export const deleteLike = (uuid) => ({ type: LIKE_DELETE_REQUEST, uuid });
export const deleteLikeSuccess = () => ({ type: LIKE_DELETE_SUCCESS });
export const fetchLike = (data) => ({ type: LIKE_FETCH_SUCCEEDED, data });
