
//treba windows on load a ne moze se 2 puta iskoristiti

function getMovies() {
  axios
    .get("http://www.omdbapi.com/?i=tt3896198&apikey=a84e391d")
    .then(function (response) {
      console.log(response.data);
    });
}

getMovies()

