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
const assignedTo = document.querySelector('#assignedTo');
const duedate = document.querySelector('#dueDate');
const optionValue = document.querySelector('#optionValue');


// Error Messages
const htmlErrorMessage = document.querySelector('#errorMessage');


form.addEventListener('submit', (error)=> {
    let errorMessage = [];
    if (taskname.value === '' || taskname.value == null){
        errorMessage.push('Enter a Task Name.')
    }
    if(taskname.value.length <= 5) {
        errorMessage.push(`${taskname.value}. Name must be longer than 5 letters`);
    }
    if(description.value.length <= 5) {
        errorMessage.push(`${description.value}. Description must be longer than 5 letters`);
    }
    if(assignedTo.value.length <= 5) {
        errorMessage.push(`${assignedTo.value}. Assigned To must be longer than 5 letters`);
    }
    if(duedate.value.length < 1){
        errorMessage.push('Enter a valid date.')
    }
    if(optionValue.value === ''){
        errorMessage.push('Enter task status.')
    }
    // LOG DATA
    console.log(taskname.value)
    console.log(description.value)
    console.log(assignedTo.value)
    console.log(duedate.value)
    console.log(optionValue.value)
    if (errorMessage.length > 0) {
        error.preventDefault();
        htmlErrorMessage.innerHTML = errorMessage.join(' ');
    }
});