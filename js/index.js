
const apiKey = "8ee7f4d4c46b1cba684adc6118411654"

function getMovies() {
    axios
      .get(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${apiKey}&query=all`)
    .then(function (response) {
      console.log(response.data);
    });
}

function searchMovies(movieTitle) {
  axios
    .get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${movieTitle}`)
  .then(function (response) {
    console.log(response.data);
  });
}

function getMovieById(id) {
  axios
  .get(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`)
.then(function (response) {
  console.log(response.data);
});
  
}

getMovies()

getMovieById(634649)

searchMovies("jaws")
