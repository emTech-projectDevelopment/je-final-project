const createTaskHtml = (id, name, description, assignedTo, dueDate, status) => {
  const html = `<li class="list-group-item" data-task-id=${id}>
  <div class="d-flex w-100 mt-2 justify-content-between align-items-center">
    <h5>Task Name : ${name}</h5>
    <span class="badge bg-danger text-light">${status}</span>
  </div>
  <div class="d-flex w-100 mb-3 justify-content-between">
    <h6>Assigned to : ${assignedTo}</h6>
    <div class="group-right">
      <h6>DUE DATE : ${dueDate}</h6>
      <button class="done-button" id="markDone">Mark as done</button>
    </div>
  </div>
  <p>Task Description : ${description}</p>
  <section class="text-right">
    <button type="button" class="btn btn-primary btn-sm" data-toggle="modal"
      data-target="#editForm">EDIT</button>
    <button class="delete-button btn btn-danger btn-sm" name="delete">DELETE</button>
  </section>
</li>`;
  return html;
};

// TASKMANAGER CLASS
class TaskManager {
  constructor(currentId = 0) {
    this.tasks = [];
    this.currentId = currentId;
  }

  // ADD TASK METHOD
  addTask(name, description, assignedTo, dueDate, status) {
    // Create a task object that we will push to the list of tasks

    const task = {
      id: this.currentId++,
      name: name,
      description: description,
      assignedTo: assignedTo,
      dueDate: dueDate,
      status: status
    };

    this.tasks.push(task);
  }

  // GET TASK BY ID METHOD
  getTaskById(taskId) {
    let thisTask;
    // LOOP AND ALLOCATE CURRENT ID    (!! not currentId !!)
    for (let i = 0; i < this.tasks.length; i++) {
      // CURRENT TASK
      const task = this.tasks[i];
      // CHECK IF ID IS SAME
      if (task.id === taskId) {
        thisTask = task;
      }
    }
    // Return the found task
    return thisTask;
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
        task.id,
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

  // save method
  save() {
    let tasksJson = JSON.stringify(this.tasks); // create JSON string format
    localStorage.setItem("tasks", tasksJson); // store under key name "tasks"
    let currentId = JSON.stringify(this.currentId); // convert currentId into a JSON string
    localStorage.setItem("currentId", currentId); // store under key 'CurrentId'

  };

  // load method
  load() {
    if (localStorage.getItem("tasks")) {  // check the localStorage
      let tasksJson = localStorage.getItem("tasks");
      this.tasks = JSON.parse(tasksJson); // converts taskJson string to array
    };
    if (localStorage.getItem("currentId")) { // check localStorage for saved currentId
      let currentId = localStorage.getItem("currentId");
      this.currentId = parseInt(currentId); // convert currentId to a number
    };
  };
};