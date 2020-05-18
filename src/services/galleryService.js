const HOST = 'http://localhost:8010/';
const IMAGES_URL = HOST + 'images/';
const IP_ADDRESS_HOST = 'https://geoip-db.com/json';

export const getImages = () => fetch(IMAGES_URL).then((data) => data.json());

export const getIpAddress = () =>
  fetch(IP_ADDRESS_HOST)
    .then((res) => res.json())
    .then((json) => json.IPv4);
