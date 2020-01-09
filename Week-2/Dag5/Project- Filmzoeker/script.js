//Hieronder worden de films in de DOM geplaatst

const addMoviesToDom = function(selectedMovies) {
  const movieList = document.getElementById("resultaat");
  const listItems = selectedMovies.map(function(movie) {
    const listItem = document.createElement("li");
    const imageItem = document.createElement("img");
    imageItem.setAttribute("src", movie.Poster);
    // console.log(movies);
    listItem.appendChild(imageItem);

    return listItem;
  });

  listItems.forEach(function(item) {
    movieList.appendChild(item);
  });
};

console.log(movies);

console.log(addMoviesToDom(movies));

// stap 11, iets doen met het switch staement


console.log(filterMovies.includes("X-Men: Days of Future Past"));

// Stap 10, maak switch statement
const handleOnChangeEvent = function(event) {
  console.log (event.target);
  const filterMovies = (function(wordInMovieTitle) {
    return movie.filter(function(movie){
      return movie.Title.includes(wordInMovieTitle);

    })
  

  switch (event.target.value) {
    case "Laatse Films":
      
      console.log("hey ik ben {nieuwe} film");
      break;
      console.log("hey ik ben {Avenger} film");
    case "Avenger Films":
      // filterMovies("Avenger Films");
      break;

    case "X-man Films":
      // filterMovies("X-man Films");
      console.log("hey ik ben {X-man} film");
      break;

    case "Princess Films":
      // filterMovies("Princess Films");
      console.log("hey ik ben {Princess} film");
      break;

    case "Batman Films":
      // filterMovies("Batman Films");
      console.log("hey ik ben {Batman} film");
      break;

    default:
      addMoviesToDom(movies);
  }
};}

// stap 7, de addEventListener toevoegen
const addEventListers = function() {
  const filmfilterelement = document.getElementsByName("film-filter");
  filmfilterelement.forEach(element => {
    element.addEventListener("change", handleOnChangeEvent);
  });
};

console.log(addEventListener);

document.addEventListener("DOMContentLoaded", function(event) {
  addEventListers();
  addMoviesToDom(movies);
});
