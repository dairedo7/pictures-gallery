import axios from 'axios';
import PropTypes from 'prop-types';

axios.defaults.baseURL = 'https://pixabay.com/api';
const API_KEY = '24546244-2fe39103bf24816f7c49d8399';

export const fetchPicturesWithQuery = async (searchQuery, page) => {
  const response = await axios.get(
    `?q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return response.data;
};

const api = {
  fetchPicturesWithQuery,
};

export default api;

fetchPicturesWithQuery.propTypes = {
  page: PropTypes.number.isRequired,
  searchQuery: PropTypes.string.isRequired,
};
