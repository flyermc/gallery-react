const HOST = "http://localhost:8010/";
const IMAGES_URL = HOST + "images/";
const IMAGE_URL = HOST + "image/";

export const getImages = () => fetch(IMAGES_URL).then((data) => data.json());
export const getImage = uuid => fetch(IMAGE_URL + uuid).then((data) => data.json());