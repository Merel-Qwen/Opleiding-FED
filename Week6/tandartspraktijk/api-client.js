console.log("api.js");
const getPatients = async function() {
  const apiUrl = "https://uinames.com/api/?amount=50/";
  try {
    const res = await fetch(apiUrl, { method: "GET" });
    console.log("The response from the API in getPatients function ", res);
    const data = await res.json();
    console.log("The data in getPatients function ", data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

getPatients();

const getDentist = async function() {
  const apiUrl = "https://uinames.com/api/?amount=4/";
  try {
    const res = await fetch(apiUrl, { method: "GET" });
    console.log("The response from the API in getDentist function ", res);
    const data = await res.json();
    console.log("The data in getDentist function ", data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
const setDentist = async function() {
  const detistList = document.getElementById("dentists");
  const data = await getDentist();
  console.log("hier is je data", data);
  data.name.forEach(dentist => {
    const li = document.createElement("li");
    const liContent = document.createTextNode(`naam: ${dentist.name}`);
    li.appendChild(liContent);
    detistList.appendChild(li);
  });
};

setDentist();
