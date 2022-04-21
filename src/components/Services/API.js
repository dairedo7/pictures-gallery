import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';
const API_KEY = '24546244-2fe39103bf24816f7c49d8399';

export const fetchPicturesWithQuery = async (searchQuery, page) => {
  page += 1;
  const response = await axios.get(
    `?q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );

  return response.data.hits;
};

const api = {
  fetchPicturesWithQuery,
};

export default api;
