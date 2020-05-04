const HOST = "http://localhost:8010/";
const IMAGES_URL = HOST + "images/";

export const getImages = () => fetch(IMAGES_URL).then((data) => data.json());