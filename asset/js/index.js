// Initialize a new TaskManager with currentId set to 0

const taskManager = new TaskManager(0);
console.log(taskManager);

// SELECTOR FOR DATE AND TIME
const dateElement = document.querySelector("#showDate");
const timeElement = document.querySelector("#showTime");

// FUNCTION FOR TIME OBJECT
function tickingTime() {
  let timeNow = new Date();
  return (timeElement.innerText = `${timeNow.getHours()}:${timeNow.getMinutes()}:${timeNow.getSeconds()}`);
}
// DATE OBJECT
let d = new Date();

// DISPLAY TIME AND DATE
tickingTime();
setInterval(tickingTime, 1000);
dateElement.innerText = `${d.getDate()} / ${
  d.getMonth() + 1
} / ${d.getFullYear()}`;

// Close the modal after submit
function closeModal() {
  $('.close').trigger('click');
}

// CLEAR INPUTS AFTER SUBMIT
const clearInputs = () => {
  taskname.value = "";
  description.value = "";
  assignedTo.value = "";
  getStatus.value = "Select";
  dueDate.value = "";
  NewErrorMessage.innerHTML = "";
};

// NEW FORM SELECT VALUE
const getSelectedValue = function () {
  let val = document.querySelector("#getStatus").value;
  return val;
};

// ERROR MESSAGE SELECTORS
const NewErrorMessage = document.querySelector("#errorMessage");
const EditErrorMessage = document.querySelector("#editErrorMessage");

// FORM SELECTORS
const newForm = document.querySelector("#newTask");
const editForm = document.querySelector("#editTask");

//ADD SUBMIT EVENT LISTENER
newForm.addEventListener("submit", (error) => {
  // ALLOCATE SELECTORS
  let taskname = document.querySelector("#taskname");
  let description = document.querySelector("#description");
  let assignedTo = document.querySelector("#assignedTo");
  let dueDate = document.querySelector("#dueDate");
  let getStatus = document.querySelector("#getstatus");
  let newErrorMessage = [];
  error.preventDefault();

  console.log("Task Name :" + taskname.value.length);
  console.log("Task Description :" + description.value.length);
  console.log("Task Assigned To :" + assignedTo.value.length);
  console.log("Task Due Date :" + dueDate.value);
  console.log("Task Status:" + getSelectedValue());

  // VALIDATE NOT EMPTY STRING & HAS VALUE
  if (taskname.value === "" || taskname.value == null) {
    newErrorMessage.push("Enter a Task Name. ");
  }
  // VALIDATE IF TASK NAME IS LONGER THAN 5 CHARACTERS
  if (taskname.value.length <= 5) {
    newErrorMessage.push(`Name must be longer than 5 letters. `);
  }

  // VALIDATE IF DESCRIPTION IS LONGER THAN 5 CHARACTERS
  if (description.value.length <= 5) {
    newErrorMessage.push(`Description must be longer than 5 letters. `);
  }

  // VALIDATE IF ASSIGNED TO NAME IS LONGER THAN 5 CHARACTERS
  if (assignedTo.value.length <= 5) {
    newErrorMessage.push(`Assigned To must be longer than 5 letters. `);
  }

  // VALIDATE IF DUE DATE HAS BEEN SELECTED
  if (dueDate.value.length < 1) {
    newErrorMessage.push("Enter a valid date. ");
  }

  // VALIDATE IF STATUS HAS A SELECTED VALUE
  if (getSelectedValue() === "") {
    newErrorMessage.push("Enter task status.");
  }
  // VERIFY IF ARRAY CONTAINS ANY ERROR MESSAGES
  if (newErrorMessage.length > 0) {
    error.preventDefault();
    NewErrorMessage.innerHTML = newErrorMessage.join(" ");
  } else {
    // SUBMIT VALID FORM TO ARRAY
    taskManager.addTask(
      taskname.value,
      description.value,
      assignedTo.value,
      dueDate.value,
      getSelectedValue()
    );
    closeModal();
    clearInputs();
    taskManager.render();
  }
});
// Still working on closing the add task modal on succesfull submission
//of the form
