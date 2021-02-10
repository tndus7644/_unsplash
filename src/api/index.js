import {FetchJson} from "../lib/Fetch";

const API = {
    getTopics:(data) => FetchJson.get('/topics', data),
    listPhotos:(data) => FetchJson.get('/photos', data),
    searchPhoto:(data) => FetchJson.get('/search/photos', data),
    getPhoto:(id, data) => FetchJson.get(`/photos/${id}`, data),
    getPhotoRelated:(id, data) => FetchJson.get(`/photos/${id}/related`, data),
    collectionPhoto:(data) => FetchJson.get(`/search/collections`, data)
}

export default API;