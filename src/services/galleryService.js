const IP_ADDRESS = process.env.REMOTE_IP || '18.158.181.102';
const HOST = `http://${IP_ADDRESS}:8010/`;
const IMAGES_URL = HOST + 'images/';
const HOT_IMAGE_URL = HOST + 'hot/';
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

export const getArchiveRequest = (data) => console.log(IMAGES_URL + `${data.year}/${data.month}`) || fetch(IMAGES_URL + `${data.year}/${data.month}`).then((resp) => resp.json())

export const getHotImageRequest = () => fetch(HOT_IMAGE_URL).then((data) => data.json());

export const getLikeRequest = (uuid) => fetch(LIKE_URL + uuid).then((data) => data);

export const setLikeRequest = (uuid) =>
  fetch(LIKE_URL, likeBody('POST', { photo: uuid })).then((data) => data);

export const deleteLikeRequest = (uuid) =>
  fetch(LIKE_URL, likeBody('DELETE', { photo: uuid })).then((data) => data);
