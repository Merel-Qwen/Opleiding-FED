console.log("Hier is api-client.js");

const getToDolist = async function() {
  const res = await fetch(
    `https://wincacademydatabase.firebaseio.com/merel/tasks.json `
  );
  const json = await res.json();
  //   console.log("Before (the raw result):", json);
  const tasks = Object.keys(json).map(key => ({
    id: key,
    description: json[key].description,
    done: json[key].done
  }));
  //   console.log("After the tasks array", tasks);
  return tasks;
};

getToDolist().then(tasks => {
  console.log(tasks);
});

const addListTask = async function(giveTask) {
  const url = "https://wincacademydatabase.firebaseio.com/merel/tasks.json";
  const data = giveTask;
  //   console.log(data);
  try {
    const response = await fetch(url, {
      method: "POST", // or 'PUT'
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    });
    const json = await response.json();
    setTodoList();

    // console.log("Success:", JSON.stringify(json));
  } catch (error) {
    // console.error("Error:", error);
  }
};

addListTask();
