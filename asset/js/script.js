// Form Inputs
let taskname = document.querySelector('#taskname');
let description = document.querySelector('#description');
let assignedto = document.querySelector('#assignedTo');
let duedate = document.querySelector('#dueDate');

// Form Buttons
let btnSubmit = document.querySelector('#btnSubmit');
let btnReset = document.querySelector('#btnReset');

// Error Messages
let tasknameError = document.querySelector('#tasknameError');
let descriptionError = document.querySelector('#descriptionError');
let assignedToError = document.querySelector('#assignedToError');
let dueDateError = document.querySelector('#dueDateError');
let optionValue = document.querySelector('#optionValue');

function formSubmit(){
    if (taskname.value.length < 5) {
        tasknameError.innerText = 'Name must be longer than 5 Characters.'
    }
};

btnSubmit.addEventListener('click', formSubmit);

let dateElement = document.querySelector('#showDate');
let d = new Date()
let addMonth = 0
if (d.getMonth() === 0) {
    addMonth += 1
}

dateElement.innerText = `Current date: ${d.getDate()} ${addMonth} ${d.getFullYear()}`
console.log(d)