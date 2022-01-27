
// Form Inputs
const taskname = document.querySelector('#taskname');
let description = document.querySelector('#description');
let assignedto = document.querySelector('#assignedTo');
let duedate = document.querySelector('#dueDate');

// Form Buttons
let btnSubmit = document.querySelector('#btnSubmit');
let btnReset = document.querySelector('#btnReset');

// Error Messages
const tasknameError = document.querySelector('#tasknameError');
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