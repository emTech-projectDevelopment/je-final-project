// Form Inputs
const form = document.querySelector('#newTask');
const taskname = document.querySelector('#taskname');
const description = document.querySelector('#description');
const assignedto = document.querySelector('#assignedTo');
const duedate = document.querySelector('#dueDate');

// Form Buttons
const btnSubmit = document.querySelector('#btnSubmit');
const btnReset = document.querySelector('#btnReset');

// Error Messages
const tasknameError = document.querySelector('#tasknameError');
const descriptionError = document.querySelector('#descriptionError');
const assignedToError = document.querySelector('#assignedToError');
const dueDateError = document.querySelector('#dueDateError');
const optionValue = document.querySelector('#optionValue');

const dateElement = document.querySelector('#showDate');
let d = new Date()
let addMonth = 0
if (d.getMonth() === 0) {
    addMonth += 1
}
dateElement.innerText = `Current date: ${d.getDate()} ${addMonth} ${d.getFullYear()}`
console.log(d)

form.addEventListener('submit', (error)=> {
    let errorMessage = [];
    if(taskname.value.length <= 5) {
        errorMessage.push('Password must be longer than 5 letters');
    }
    if (errorMessage.length > 0) {
        error.preventDefault();
        error.stopPropagation();
        tasknameError.innerHTML = errorMessage.join(', ');
    }
});