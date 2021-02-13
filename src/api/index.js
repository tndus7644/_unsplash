import {FetchJson} from "../lib/Fetch";

const API = {
    listTopics:(data) => FetchJson.get('/topics', data),
    getTopics:(slug) => FetchJson.get(`/topics/${slug}`),
    listPhotos:(data) => FetchJson.get('/photos', data),
    searchPhoto:(data) => FetchJson.get('/search/photos', data),
    getPhoto:(id, data) => FetchJson.get(`/photos/${id}`, data),
    getPhotoRelated:(id, data) => FetchJson.get(`/photos/${id}/related`, data),
    collectionPhoto:(data) => FetchJson.get(`/search/collections`, data),
    searchUsers:(data) => FetchJson.get(`/search/users`, data),
    getTopicPhoto:(slug, data) => FetchJson.get(`/topics/${slug}/photos`, data),
}

export default API;