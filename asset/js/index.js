const dateElement = document.querySelector('#showDate');
let d = new Date()
let addMonth = 0
if (d.getMonth() === 0) {
    addMonth += 1
}
dateElement.innerText = `Current date: ${d.getDate()} ${addMonth} ${d.getFullYear()}`
console.log(d)

// Form Inputs
const form = document.querySelector('#newTask');
const taskname = document.querySelector('#taskname');
const description = document.querySelector('#description');
const assignedto = document.querySelector('#assignedTo');
const duedate = document.querySelector('#dueDate');
const optionValue = document.querySelector('#optionValue');

// Error Messages
const htmlErrorMessage = document.querySelector('#errorMessage');


form.addEventListener('submit', (error)=> {
    let errorMessage = [];
    if(taskname.value.length <= 5) {
        errorMessage.push('Password must be longer than 5 letters');
    }
    if (errorMessage.length > 0) {
        error.preventDefault();
        htmlErrorMessage.innerHTML = errorMessage.join(', ');
    }
});