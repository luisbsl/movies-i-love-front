const axios = require('axios');

const API_BASEURL = 'http://159.89.134.42:8081/v1/movie'

const GetMovies = async () => {
  let movies = []
  await axios.get(API_BASEURL)
    .then(function (response) {
      movies = response.data.results
    })
    .catch(function (error) {
      console.error(error);
    });
  return movies
}

export {
  GetMovies
}