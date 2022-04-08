
function getMovies() {
  axios
    .get("http://www.omdbapi.com/?i=tt3896198&apikey=a84e391d")
    .then(function (response) {
      console.log(response.data);
    });
}

getMovies()



