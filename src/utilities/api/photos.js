import { sendRequest } from "../request";
const BASE_URL = '/api/photos';


export function getPhotos() {
    return sendRequest(`${BASE_URL}`);
}