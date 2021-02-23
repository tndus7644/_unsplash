import {FetchJson} from "../lib/Fetch";

const API = {
    getPhotos:(data) => FetchJson.get('/photos', data),
    getPhotoById:(id) => FetchJson.get(`/photos/${id}`),
    getPhotoRelated:(id, data) => FetchJson.get(`/photos/${id}/related`, data),

    searchPhotos:(data) => FetchJson.get('/search', data),

    getTopicPhoto:(slug, data) => FetchJson.get(`/topics/${slug}/photos`, data),
    listTopics:(data) => FetchJson.get('/topics', data),
    getTopics:(slug) => FetchJson.get(`/topics/${slug}`),

}

export default API;