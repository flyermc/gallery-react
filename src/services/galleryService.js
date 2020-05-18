const HOST = 'http://localhost:8010/';
const IMAGES_URL = HOST + 'images/';
const LIKE_URL = HOST + 'like/';

export const getImages = () => fetch(IMAGES_URL).then((data) => data.json());

const likeParams = ({ uuid }) => ({
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ uuid: uuid }),
});

export const getLike = ({ uuid }) => fetch(LIKE_URL + uuid).get((data) => data.json());
