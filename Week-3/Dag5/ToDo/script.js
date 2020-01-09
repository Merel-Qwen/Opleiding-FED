console.log("Hier is script.js");

const setTodoList = async () => {
  const teDoen = document.getElementById("teDoen");

  const data = await getToDolist();
  data.forEach(taak => {
    const li = document.createElement("li");
    const liContent = document.createTextNode(
      `taak naam: ${taak.description}, gedaan? ${taak.done}`
    );

    li.appendChild(liContent);
    teDoen.appendChild(li);
  });
};

const addTaskToDom = async () => {
  const addTo = document.getElementById("addButton");
  addTo.addEventListener("click", () => {
    const input = document.getElementById("newItem");

    const giveTask = {
      description: ` ${input.value}`,
      done: false
    };
    addListTask(giveTask);
  });
};

document.addEventListener("DOMContentLoaded", function(event) {
  console.log("content is loaded");

  setTodoList();
  addTaskToDom();
});
