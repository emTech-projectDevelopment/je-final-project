const dateElement = document.querySelector('#showDate');
let d = new Date()
let addMonth = 0
if (d.getMonth() === 0) {
    addMonth += 1
}
dateElement.innerText = `Current date: ${d.getDate()} / ${addMonth} / ${d.getFullYear()}`
console.log(d)

// Form Inputs
const newForm = document.querySelector('#newTask');
const editForm = document.querySelector('#editTask');
const taskname = document.querySelector('#taskname');
const description = document.querySelector('#description');
const assignedTo = document.querySelector('#assignedTo');
const duedate = document.querySelector('#dueDate');

// EDIT FORM SELECTORS
const edittaskname = document.querySelector('#edittaskname');
const editdescription = document.querySelector('#editdescription');
const editassignedTo = document.querySelector('#editassignedTo');
const editduedate = document.querySelector('#editdueDate');

const getSelectedValue = function(){
    let val = document.querySelector('#getValue').value;
    return val
};

const getEditSelectedValue = function(){
    let VAL = document.querySelector('#getEditValue').value;
    return VAL
};
// Error Messages
const htmlErrorMessage = document.querySelector('#errorMessage');
const EDITErrorMessage = document.querySelector('#editErrorMessage');


newForm.addEventListener('submit', (error)=> {
    let newErrorMessage = [];
    if (taskname.value === '' || taskname.value == null){
        newErrorMessage.push('Enter a Task Name. ')
    }
    if(taskname.value.length <= 5) {
        newErrorMessage.push(`Name must be longer than 5 letters. `);
    }
    if(description.value.length <= 5) {
        newErrorMessage.push(`Description must be longer than 5 letters. `);
    }
    if(assignedTo.value.length <= 5) {
        newErrorMessage.push(`Assigned To must be longer than 5 letters. `);
    }
    if(duedate.value.length < 1){
        newErrorMessage.push('Enter a valid date. ')
    }
    if(getSelectedValue() === ''){
        newErrorMessage.push('Enter task status.')
    }
    if (newErrorMessage.length > 0) {
        error.preventDefault();
        htmlErrorMessage.innerHTML = newErrorMessage.join(' ');
    // LOG DATA
        console.log(taskname.value)
        console.log(description.value)
        console.log(assignedTo.value)
        console.log(duedate.value)
        console.log(getSelectedValue)
    setTimeout(function(){htmlErrorMessage.innerHTML = ""}, 2500)
    }
});

editForm.addEventListener('submit', (e)=> {
    let editErrorMessage = [];
    if (edittaskname.value === '' || edittaskname.value == null){
        editErrorMessage.push('Enter a Task Name. ')
    }
    if(edittaskname.value.length <= 5) {
        editErrorMessage.push(`Name must be longer than 5 letters. `);
    }
    if(editdescription.value.length <= 5) {
        editErrorMessage.push(`Description must be longer than 5 letters. `);
    }
    if(editassignedTo.value.length <= 5) {
        editErrorMessage.push(`Assigned To must be longer than 5 letters. `);
    }
    if(editduedate.value.length < 1){
        editErrorMessage.push('Enter a valid date. ')
    }
    if(getEditSelectedValue() === ''){
        editErrorMessage.push('Enter task status.')
    }
    if (editErrorMessage.length > 0) {
        e.preventDefault();
        EDITErrorMessage.innerHTML = editErrorMessage.join(' ');
    // LOG DATA
        console.log(taskname.value)
        console.log(description.value)
        console.log(assignedTo.value)
        console.log(duedate.value)
        console.log(getEditSelectedValue)
        setTimeout(function(){EDITErrorMessage.innerHTML = ""}, 2500)
    }
});
// From Buttons
const btnReset = document.querySelectorAll('#btnReset');

btnReset.addEventListener('click', function(){
    htmlErrorMessage.innerText = '';
});

const btnResetEFORM = document.querySelector('#btnResetEFORM');

btnResetEFORM.addEventListener('click', function(){
    EDITErrorMessage.innerText = '';
});