const popularMovies = [
  {
    _id: 1,
    name: "The Shawshank Redemption",
    year: "1994",
    rating: "9.3",
    description:
      "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    duration: "142",
    director: "Frank Darabont",
    genre: "drama",
    image: "911USrdQtPL._AC_SL1500_2cc46831-caf7-4de2-93b7-2583561d1798.jpg",
    imbd: "https://www.imdb.com/title/tt0111161/"
  },
  {
    _id: 2,
    name: "The Godfather",
    year: "1972",
    rating: "9.2",
    description:
      "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    duration: "175",
    director: "Francis Ford Coppola",
    genre: "drama",
    image: "download.jpg",
    imbd: "https://www.imdb.com/title/tt0068646/"
  },
  {
    _id: 3,
    name: "The Dark Knight",
    year: "2008",
    rating: "9.0",
    description:
      "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice. ",
    duration: "152",
    director: "Christopher Nolan",
    genre: "action",
    image: "download (1).jpg",
    imbd: "https://www.imdb.com/title/tt0468569/"
  },
  {
    _id: 4,
    name: "Pulp Fiction",
    year: "1994",
    rating: "8.9",
    description:
      "The lives of two mob hit men, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    duration: "154",
    director: "Quentin Tarantino",
    genre: "drama",
    image: "fIE3lAGcZDV1G6XM5KmuWnNsPp1.jpg",
    imbd: "https://www.imdb.com/title/tt0110912/"
  },
  {
    _id: 5,
    name: "Schindler's List",
    year: "1993",
    rating: "8.9",
    description:
      "In Poland during World War II, Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis. ",
    duration: "185",
    director: "Steven Spielberg",
    genre: "drama",
    image:
      "MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
      imbd: "https://www.imdb.com/title/tt0108052/"
  },
  {
    _id: 6,
    name: "12 Angry Men",
    year: "1957",
    rating: "8.9",
    description:
      "A dissenting juror in a murder trial slowly manages to convince the others that the case is not as obviously clear as it seemed in court. ",
    duration: "96",
    director: "Sidney Lumet",
    genre: "drama",
    image: "e6520b78339627.5ca24af435882.png",
    imbd: "https://www.imdb.com/title/tt0050083/"
  },
  {
    _id: 7,
    name: "Interstellar",
    year: "2014",
    rating: "8.6",
    description:
      "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    duration: "169",
    director: "Christopher Nolan",
    genre: "sci-fi",
    image: "interstellar-ice-walk-i23290.jpg",
    imbd: "https://www.imdb.com/title/tt0816692/"
  },
  {
    _id: 8,
    name: "Fight Club",
    year: "1999",
    rating: "8.9",
    description:
      "An insomniac office worker, looking for a way to change his life, crosses paths with a devil-may-care soap maker, forming an underground fight club that evolves into something much, much more...",
    duration: "145",
    director: "David Fincher",
    genre: "drama",
    image: "14290080_max.jpg",
    imbd: "https://www.imdb.com/title/tt0137523/"
  },
  {
    _id: 9,
    name: "Inception",
    year: "2010",
    rating: "8.8",
    description:
      "A thief who steals corporate secrets through use of the dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.",
    duration: "148",
    director: "Christopher Nolan",
    genre: "action",
    image: "MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
    imbd: "https://www.imdb.com/title/tt1375666/"
  },
  {
    _id: 10,
    name: "Up",
    year: "2009",
    rating: "8.3",
    description:
      "Seventy-eight year old Carl Fredricksen travels to Paradise Falls in his home equipped with balloons, inadvertently taking a young stowaway.",
    duration: "96",
    director: "Pete Docter",
    genre: "comedy",
    image: "81RG2NB+CzL._AC_SY679_.jpg",
    imbd: "https://www.imdb.com/title/tt1049413/"
  },
  {
    _id: 11,
    name: "The Pianist",
    year: "2002",
    rating: "7.9",
    description:
      "A Polish Jewish musician struggles to survive the destruction of the Warsaw ghetto of World War II.",
    duration: "150",
    director: "Roman Polanski",
    genre: "drama",
    image:
      "MV5BOWRiZDIxZjktMTA1NC00MDQ2LWEzMjUtMTliZmY3NjQ3ODJiXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg",
      imbd: "https://www.imdb.com/title/tt0253474/"
  },
  {
    _id: 12,
    name: "Dogville",
    year: "2004",
    rating: "8.1",
    description:
      "A woman on the run from the mob is reluctantly accepted in a small Colorado town. In exchange, she agrees to work for them. As a search visits town, she finds out that their support has a price. Yet her dangerous secret is never far away... ",
    duration: "178",
    director: "Lars von Trier",
    genre: "drama",
    image: "MV5BMTkwNTg2MTI1NF5BMl5BanBnXkFtZTcwMDM1MzUyMQ@@._V1_.jpg",
    imbd: "https://www.imdb.com/title/tt0276919/"
  },
  {
    _id: 13,
    name: "Silent Hill",
    year: "2006",
    rating: "6.6",
    description:
      "A woman goes in search for her daughter within the confines of a strange, desolate town called Silent Hill.",
    duration: "125",
    director: "Christophe Gans",
    genre: "horror",
    image: "28cb46dd2f4d2bc8b69a882848630634.jpg",
    imbd: "https://www.imdb.com/title/tt0384537/"
  },
];

var span = document.getElementsByClassName("arrow");
var movies = document.getElementById("films");

span[1].onclick = () => {
  movies.scrollLeft += 350;
};

span[0].onclick = () => {
  movies.scrollLeft -= 350;
};

function refreshMovies() {
  let movieDiv = document.getElementById("films");
  let out = "";

  for (let i = 0; i < popularMovies.length; i++) {
    out += `<div id="img-wrapper" class="image-container">
      
      <img class="movie"  src="/img/${popularMovies[i].image}"></img>
      
      <div class="description"><p>${popularMovies[i].name}
      <br>
      ${popularMovies[i].genre}
      <br>
      ${popularMovies[i].duration} minutes
      <br>
      ${popularMovies[i].rating} <span>&#9733
      </p>
      </div>
      
      <a id="play" href="${popularMovies[i].imbd}" ><i class="gg-play-button-r"></i></a>
      </div>`;
  }

  movieDiv.innerHTML = out;
}

refreshMovies();

//Hamburger

let dropdown = document.getElementById("dropdown");

dropdown.addEventListener("click", () => {
  let sidebar = document.querySelector(".sidebar");
  let remove = document.getElementById("remove");
  remove.classList.add("hide");
  sidebar.classList.add("show");
});

document.addEventListener("mouseup", function (params) {
  let sidebar = document.getElementById("sidebar");
  let remove = document.getElementById("remove");

  if (!sidebar.contains(params.target)) {
    remove.classList.remove("hide");
    remove.style.display = "block";
    sidebar.classList.remove("show");
  }
});


//Carousel drag

let isDown = false;
let startX;
let scrollLeft;
const slider = document.querySelector(".movies");

const end = () => {
  isDown = false;
  movies.style.scrollBehavior = "smooth";
  slider.classList.remove("active");
};

const start = (e) => {
  isDown = true;
  movies.style.scrollBehavior = "auto";
  slider.classList.add("active");
  startX = e.pageX || e.touches[0].pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
};

const move = (e) => {
  if (!isDown) return;
  
  e.preventDefault();
  const x = e.pageX || e.touches[0].pageX - slider.offsetLeft;
  const dist = x - startX;
  slider.scrollLeft = scrollLeft - dist;
};

(() => {
  slider.addEventListener("mousedown", start);
  slider.addEventListener("touchstart", start);

  slider.addEventListener("mousemove", move);
  slider.addEventListener("touchmove", move);

  slider.addEventListener("mouseleave", end);
  slider.addEventListener("mouseup", end);
  slider.addEventListener("touchend", end);
})();

//Momentum slide

var velX = 0;
var momentumID;

slider.addEventListener("wheel", (e) => {
  cancelMomentumTracking();
});

function beginMomentumTracking() {
  cancelMomentumTracking();
  momentumID = requestAnimationFrame(momentumLoop);
}

function cancelMomentumTracking() {
  cancelAnimationFrame(momentumID);
}

function momentumLoop() {
  slider.scrollLeft += velX * 2;
  velX *= 0.95;
  if (Math.abs(velX) > 0.5) {
    momentumID = requestAnimationFrame(momentumLoop);
  }
}

