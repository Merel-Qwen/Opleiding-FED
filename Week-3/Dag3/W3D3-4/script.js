// W3D3-4

const setMovieGenre = async function() {
  const movieGenreList = document.getElementById("lijst met genres");
  const data = await getData();
  console.log("hier is je data", data);
  data.genres.forEach(movieGenre => {
    const li = document.createElement("li");
    const liContent = document.createTextNode(
      `genre naam: ${movieGenre.name}, id: ${movieGenre.id}`
    );
    li.appendChild(liContent);
    movieGenreList.appendChild(li);
  });
};

setMovieGenre();
