let dropdown = document.getElementById("dropdown");

dropdown.addEventListener("click", () => {
  let sidebar = document.querySelector(".sidebar");
  sidebar.classList.add("show");
});

document.addEventListener("mouseup", function (params) {
  let sidebar = document.getElementById("sidebar");

  if (!sidebar.contains(params.target)) {
    sidebar.classList.remove("show");
  }
});

let logo = document.getElementById("title")
logo.addEventListener("click",() => {
    var url = "http://127.0.0.1:5500/index.html"
    window.location.href = url
})

//get url parametars

let queryParametars = window.location.search
let urlParams = new URLSearchParams(queryParametars)
let info = urlParams.get('name')

let title = document.getElementsByClassName("title")[0].innerHTML = info

//get movies

const apiKey = "8ee7f4d4c46b1cba684adc6118411654"

let movieList = []

function searchMovies(movieTitle) {
    axios
      .get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${movieTitle}`)
    .then(function (response) {
        movieList = response.data.results
        addMovies()

    });
}

searchMovies(title)

function addMovies(){

    let containerDiv = document.getElementById("search-results")
    out = ""

    for (let i = 0; i < movieList.length; i++) {
        let dates = new Date(movieList[i].release_date)
        let year = dates.getFullYear()

        if (movieList[i].poster_path == null) {
          continue
        }
        if (movieList[i].release_date == "") {
          continue
        }

        out += `<div class="image-container">
      
        <img class="movie"  src="https://image.tmdb.org/t/p/w200/${movieList[i].poster_path}"></img>
        
        <div class="description"><p>${movieList[i].title}
        <br>
        ${year}
        <br>
        ${movieList[i].vote_average} <span>&#9733</span>
        <br>
        ${movieList[i].vote_count} votes
        </p>
        </div>
        
        <a id="play"><i class="gg-play-button-r"></i></a>
        </div>`;
        
    }

    containerDiv.innerHTML = out
}

