const HOST = 'http://localhost:8010/';
const IMAGES_URL = HOST + 'images/';
const LIKE_URL = HOST + 'like/';

export const getImages = () => fetch(IMAGES_URL).then((data) => data.json());

export const getLike = (uuid) => fetch(LIKE_URL + uuid).then((data) => data);
