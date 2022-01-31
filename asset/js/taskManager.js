const createTaskHtml = (name, description, assignedTo, dueDate, status) => {
  const html = `<li class="list-group-item">
  <div class="d-flex w-100 mt-2 justify-content-between align-items-center">
    <h5>${name}</h5>
    <span class="badge bg-danger text-light">${status}</span>
  </div>
  <div class="d-flex w-100 mb-3 justify-content-between">
    <h6>${assignedTo}</h6>
    <h6>${dueDate}</h6>
  </div>
  <p>${description}</p>
  <section class="text-right">
    <button type="button" class="btn btn-primary btn-sm" data-toggle="modal"
      data-target="#editForm">EDIT</button>
    <button class="delete btn btn-danger btn-sm" name="delete">DELETE</button>
  </section>
</li>`;
  return html;
};

// Create the TaskManager class
class TaskManager {
  constructor(currentId = 0) {
    this.tasks = [];
    this.currentId = currentId;
  }

  // Create the addTask method
  addTask(name, description, assignedTo, dueDate, status) {
    // Create a task object that we will push to the list of tasks

    const task = {
      id: this.currentId++,
      name: name,
      description: description,
      assignedTo: assignedTo,
      dueDate: dueDate,
      status: status,
    };

    this.tasks.push(task);
  }

  // RENDER METHOD
  render() {
    let tasksHtmlList = [];
    // LOOP OVER TASKS ARRAY
    for (let i = 0; i < this.tasks.length; i++) {
      const task = this.tasks[i];
      // CREATE NEW DATE
      const date = new Date(task.dueDate);
      const newDate =
        date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
      // CREATE VARIABLE FOR CREAT TASK FUNCTION
      const taskHtml = createTaskHtml(
        task.name,
        task.description,
        task.assignedTo,
        newDate,
        task.status
      );
      // PUSH NEW HTML OF TASK TO ARRAY
      tasksHtmlList.push(taskHtml);
    }

    // JOIN CONTENTS OF THE ARRAY
    const tasksHtml = tasksHtmlList.join("\n");

    // ALLOCATE SELLECTOR AND DISPLAY RESULTS OF ARRAY
    const tasksList = document.querySelector("#taskList");
    tasksList.innerHTML = tasksHtml;
  }
}
