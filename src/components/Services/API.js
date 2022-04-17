import axios from "axios";
// import React, { Component } from 'react'

axios.defaults.baseURL = 'https://pixabay.com/api'
const API_KEY = '24546244-2fe39103bf24816f7c49d8399';

export const fetchPicturesWithQuery = async (searchQuery, page) => {
    page += 1;
    const response = await axios.get(`?q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`);
    console.log(response.data.hits)
    return response.data.hits
};
 export const createArr = value => {
    const newArr = value.map(({ id, webformatURL, largeImageURL }) => {
      return { id: id, webformatURL: webformatURL, largeImageURL: largeImageURL }
    })
    this.props.changeState(prevState => {
      return {
        pictures: [...prevState.pictures, ...newArr],
      }
    })
  }
export default {
    fetchPicturesWithQuery,
    createArr,
};

// const API_KEY = '24546244-2fe39103bf24816f7c49d8399';

// function fetchPics(searchQuery) {
//     return fetch(`?query=${searchQuery}&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`)
//         .then(response => {
//             if (response.ok) {
//                 console.log(response)
//                 return response.json();
//             }
        
//             return Promise.reject(
//             new Error (`There's no results for ${searchQuery} `)
//         )
//     })
// }

// const api = { fetchPics}

// export default api;