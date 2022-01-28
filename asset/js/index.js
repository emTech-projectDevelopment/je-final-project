const dateElement = document.querySelector('#showDate');
const timeElement = document.querySelector('#showTime');


let d = new Date()
let addMonth = 0
if (d.getMonth() === 0) {
    addMonth += 1
}

function tickingTime(){
    let timeNow = new Date();
    return timeElement.innerText = `${timeNow.getHours()}:${timeNow.getMinutes()}:${timeNow.getSeconds()}`
}

// const time = function() {
//     let sec = d.getSeconds();
//     let min = d.getMinutes();
//     let hrs = d.getHours();
//     return `${hrs}:${min}:${sec}`
// }

tickingTime()
setInterval(tickingTime, 1000);
dateElement.innerText = `${d.getDate()} / ${addMonth} / ${d.getFullYear()}`
console.log(d)
console.log(tickingTime());

// FORM SELECTORS
const newForm = document.querySelector('#newTask');
const editForm = document.querySelector('#editTask');

// NEW FORM SELECTORS
const taskname = document.querySelector('#taskname');
const description = document.querySelector('#description');
const assignedTo = document.querySelector('#assignedTo');
const duedate = document.querySelector('#dueDate');

// EDIT FORM SELECTORS
const edittaskname = document.querySelector('#edittaskname');
const editdescription = document.querySelector('#editdescription');
const editassignedTo = document.querySelector('#editassignedTo');
const editduedate = document.querySelector('#editdueDate');

// NEW FORM SELECT VALUE
const getSelectedValue = function(){
    let val = document.querySelector('#getValue').value;
    return val
};
// EDIT FORM SELECT VALUE
const getEditSelectedValue = function(){
    let VAL = document.querySelector('#getEditValue').value;
    return VAL
};

// ERROR MESSAGE SELECTORS
const htmlErrorMessage = document.querySelector('#errorMessage');
const EDITErrorMessage = document.querySelector('#editErrorMessage');

// NEW FORM SUBMIT ERROR LISTENER
newForm.addEventListener('submit', (error)=> {
    let newErrorMessage = [];
    // VALIDATE NOT EMPTY STRING & HAS VALUE
    if (taskname.value === '' || taskname.value == null){
        newErrorMessage.push('Enter a Task Name. ')
    }
    // VALIDATE IF TASK NAME IS LONGER THAN 5 CHARACTERS
    if(taskname.value.length <= 5) {
        newErrorMessage.push(`Name must be longer than 5 letters. `);
    }
    // VALIDATE IF DESCRIPTION IS LONGER THAN 5 CHARACTERS
    if(description.value.length <= 5) {
        newErrorMessage.push(`Description must be longer than 5 letters. `);
    }
    // VALIDATE IF ASSIGNED TO NAME IS LONGER THAN 5 CHARACTERS
    if(assignedTo.value.length <= 5) {
        newErrorMessage.push(`Assigned To must be longer than 5 letters. `);
    }
    // VALIDATE IF DUE DATE HAS BEEN SELECTED
    if(duedate.value.length < 1){
        newErrorMessage.push('Enter a valid date. ')
    }
    // VALIDATE IF STATUS HAS A SELECTED VALUE
    if(getSelectedValue() === ''){
        newErrorMessage.push('Enter task status.')
    }
    // VERIFY IF ARRAY CONTAINS ANY ERROR MESSAGES
    if (newErrorMessage.length > 0) {
        error.preventDefault();
        htmlErrorMessage.innerHTML = newErrorMessage.join(' ');
    // LOG DATA
        console.log(taskname.value)
        console.log(description.value)
        console.log(assignedTo.value)
        console.log(duedate.value)
        console.log(getSelectedValue)
    setTimeout(function(){htmlErrorMessage.innerHTML = ""}, 3000)
    }
});
// EDIT FORM SUBMIT ERROR LISTENER
editForm.addEventListener('submit', (e)=> {
    let editErrorMessage = [];
    // VALIDATE NOT EMPTY STRING & HAS VALUE
    if (edittaskname.value === '' || edittaskname.value == null){
        editErrorMessage.push('Enter a Task Name. ')
    }
    // VALIDATE IF TASK NAME IS LONGER THAN 5 CHARACTERS
    if(edittaskname.value.length <= 5) {
        editErrorMessage.push(`Name must be longer than 5 letters. `);
    }
    // VALIDATE IF DESCRIPTION IS LONGER THAN 5 CHARACTERS
    if(editdescription.value.length <= 5) {
        editErrorMessage.push(`Description must be longer than 5 letters. `);
    }
    // VALIDATE IF ASSIGNED TO NAME IS LONGER THAN 5 CHARACTERS
    if(editassignedTo.value.length <= 5) {
        editErrorMessage.push(`Assigned To must be longer than 5 letters. `);
    }
    // VALIDATE IF DUE DATE HAS BEEN SELECTED
    if(editduedate.value.length < 1){
        editErrorMessage.push('Enter a valid date. ')
    }
    // VALIDATE IF STATUS HAS A SELECTED VALUE
    if(getEditSelectedValue() === ''){
        editErrorMessage.push('Enter task status.')
    }
    // VERIFY IF ARRAY CONTAINS ANY ERROR MESSAGES
    if (editErrorMessage.length > 0) {
        e.preventDefault();
        EDITErrorMessage.innerHTML = editErrorMessage.join(' ');
    // LOG DATA
        console.log(taskname.value)
        console.log(description.value)
        console.log(assignedTo.value)
        console.log(duedate.value)
        console.log(getEditSelectedValue)
        setTimeout(function(){EDITErrorMessage.innerHTML = ""}, 3000)
    }
});
// ADD RESET LISTENER TO CLEAR ERROR FIELDS
const btnReset = document.querySelector('#btnReset');

btnReset.addEventListener('click', function(){
    htmlErrorMessage.innerText = '';
});

const btnResetEFORM = document.querySelector('#btnResetEFORM');

btnResetEFORM.addEventListener('click', function(){
    EDITErrorMessage.innerText = '';
});