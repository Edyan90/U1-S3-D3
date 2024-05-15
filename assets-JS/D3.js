const newTask = document.getElementById("form");
newTask.addEventListener("submit", function (eventoCorrente) {
  eventoCorrente.preventDefault();
  const taskInputField = document.getElementById("task");
  const nomeTask = taskInputField.value;
  const creazioneTask = document.createElement("li");
  creazioneTask.innerText = `${nomeTask}`;
  const creazioneButtonElimina = document.createElement("button");

  creazioneButtonElimina.innerText = `x`;
  const TaskList = document.getElementById("TaskList");
  TaskList.appendChild(creazioneTask);
  creazioneTask.appendChild(creazioneButtonElimina);
  creazioneTask.addEventListener("click", function (eventoCorrente) {
    creazioneTask.classList.add("cestina");
  });
  creazioneButtonElimina.addEventListener("click", function (eventoCorrente) {
    creazioneTask.remove();
  });
});
