export const OPEN_IMAGE = 'OPEN_IMAGE';
export const CLOSE_IMAGE = 'CLOSE_IMAGE';
export const LIKE_FETCH_SUCCEEDED = 'LIKE_FETCH_SUCCEEDED';
export const LIKE_REQUESTED = 'LIKE_REQUESTED';
export const LIKE_SET_REQUEST = 'LIKE_SET_REQUEST';
export const LIKE_SET_SUCCEEDED = 'LIKE_SET_SUCCEEDED';
export const LIKE_DELETE_REQUEST = 'LIKE_DELETE_REQUEST';
export const LIKE_DELETE_SUCCEEDED = 'LIKE_DELETE_SUCCEEDED';
export const LOAD_IMAGES = 'LOAD_IMAGES';
export const IMAGES_REQUESTED = 'IMAGES_REQUESTED';
export const IMAGES_FETCH_SUCCEEDED = 'IMAGES_FETCH_SUCCEEDED';
export const IMAGES_FETCH_FAILED = 'IMAGES_FETCH_FAILED';
export const IMAGE_REQUESTED = 'IMAGE_REQUESTED';
export const IMAGE_FETCH_SECCEEDED = 'IMAGE_FETCH_SECCEEDED';
export const IMAGE_FETCH_FAILED = 'IMAGE_FETCH_FAILED';
export const HOT_IMAGE_REQUESTED = 'HOT_IMAGE_REQUESTED';
export const HOT_IMAGE_FETCH_SUCCEEDED = 'HOT_IMAGE_FETCH_SUCCEEDED';
export const HOT_IMAGE_FETCH_FAILED = 'HOT_IMAGE_FETCH_FAILED';
export const ARCHIVE_REQUESTED = 'ARCHIVE_REQUESTED'
export const ARCHIVE_FETCH_SUCCEEDED = 'ARCHIVE_FETCH_SUCCEEDED'
export const ARCHIVE_FETCH_FAILED = 'ARCHIVE_FETCH_FAILED'
export const SET_ARCHIVE_YEAR = 'SET_ARCHIVE_YEAR'
export const SET_ARCHIVE_MONTH = 'SET_ARCHIVE_MONTH'

export const loadImages = () => ({ type: LOAD_IMAGES });
export const requestImages = () => ({ type: IMAGES_REQUESTED });
export const requestImage = (uuid) => ({ type: IMAGE_REQUESTED, uuid });
export const requestArchive = (params) => ({ type: ARCHIVE_REQUESTED, params })
export const imagesFetched = (images) => ({ type: IMAGES_FETCH_SUCCEEDED, images });
export const imageFetched = (image) => ({ type: IMAGE_FETCH_SECCEEDED, image })
export const archiveFetched = (images) => ({ type: ARCHIVE_FETCH_SUCCEEDED, images })
export const imagesFetchFailed = (message) => ({ type: IMAGES_FETCH_FAILED, message });
export const imageFetchFailed = (message) => ({ type: IMAGE_FETCH_FAILED, message });
export const archiveFetchFailed = (message) => ({ type: ARCHIVE_FETCH_FAILED, message });

export const setArchiveYear = (year) => ({ type: SET_ARCHIVE_YEAR, year})
export const setArchiveMonth = (month) => ({ type: SET_ARCHIVE_MONTH, month })

export const requestHotImage = () => ({ type: HOT_IMAGE_REQUESTED });
export const hotImageFetched = (image) => ({ type: HOT_IMAGE_FETCH_SUCCEEDED, image });
export const hotImageFetchFailed = (message) => ({ type: HOT_IMAGE_FETCH_FAILED, message });

export const openImage = (data) => ({ type: OPEN_IMAGE, data });
export const closeImage = () => ({ type: CLOSE_IMAGE });

export const requestLike = (uuid) => ({ type: LIKE_REQUESTED, uuid });
export const likeFetched = (data) => ({ type: LIKE_FETCH_SUCCEEDED, data });
export const setLike = (uuid) => ({ type: LIKE_SET_REQUEST, uuid });
export const setLikeSuccess = (uuid) => ({ type: LIKE_SET_SUCCEEDED, uuid });
export const deleteLike = (uuid) => ({ type: LIKE_DELETE_REQUEST, uuid });
export const deleteLikeSuccess = (uuid) => ({ type: LIKE_DELETE_SUCCEEDED, uuid });
export const fetchLike = (data) => ({ type: LIKE_FETCH_SUCCEEDED, data });
