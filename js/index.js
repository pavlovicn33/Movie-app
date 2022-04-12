
function getMovies() {
    axios
      .get("https://api.themoviedb.org/3/movie/550?api_key=8ee7f4d4c46b1cba684adc6118411654")
    .then(function (response) {
      console.log(response.data);
    });
}

getMovies()

// KEY =8ee7f4d4c46b1cba684adc6118411654