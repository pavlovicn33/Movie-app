
// function getMovies() {
//   axios
//     .get("http://www.omdbapi.com/?i=tt3896198&apikey=a84e391d")
//     .then(function (response) {
//       console.log(response.data);
//     });
// }

// getMovies()

var slider = document.getElementById("slider")
var sliderItems = document.getElementById("films");
let pressed = false;
let xAxis;
let x;

slider.addEventListener("mousedown", e => {
  pressed = true;
  xAxis = e.offsetX - slider.offsetLeft;
})

window.addEventListener("mouseup", () =>{
  pressed = false
})

slider.addEventListener("mousemove", e => {
  if(!pressed) return;
  e.preventDefault()
  x = e.offsetX ;
  slider.style.left = `${x-xAxis}px`
})

