// const API_KEY = "";

const getData = async function() {
  const movieUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=`;
  try {
    const res = await fetch(movieUrl, { method: "GET" });
    // console.log("The response from the API in getData function ", res);
    const data = await res.json();
    // console.log("The data in getData function ", data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

// // console.log("hallo");

// const getMovieGenres = async function() {
//   const movieGenreapiUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=c54748decf3be1becd812480c4c785f9`;
//   const result = await fetch(movieGenreapiUrl, {
//     method: "GET"
//   })
//     .then(response => response.json())
//     .catch(error => console.log(error));

//   return result;
// };
