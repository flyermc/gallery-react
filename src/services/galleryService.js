const HOST = 'http://localhost:8010/';
const IMAGES_URL = HOST + 'images/';
const LIKE_URL = HOST + 'like/';

const likeBody = (method, data) => {
  return {
    method: method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };
};

export const getImagesRequest = () => fetch(IMAGES_URL).then((data) => data.json());

export const getLikeRequest = (uuid) => fetch(LIKE_URL + uuid).then((data) => data);

export const setLikeRequest = (uuid) =>
  fetch(LIKE_URL, likeBody('POST', { photo: uuid })).then((data) => data);

export const deleteLikeRequest = (uuid) =>
  fetch(LIKE_URL, likeBody('DELETE', { photo: uuid })).then((data) => data);
