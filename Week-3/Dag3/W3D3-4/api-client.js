const API_KEY = "....";

const getData = async function() {
  const apiUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`;
  try {
    const res = await fetch(apiUrl, { method: "GET" });
    console.log("The response from the API in getData function ", res);
    const data = await res.json();
    console.log("The data in getData function ", data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

const getMovieById = async function() {
  const apiMovieId = `https://api.themoviedb.org/3/find/tt6105098?external_source=imdb_id&api_key=${API_KEY}`;
  try {
    const res = await fetch(apiMovieId, { method: "GET" });
    console.log("The response from the API in getMovie function ", res);

    const data = await res.json();
    console.log("The data in getMovie function ", data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
getMovieById();
