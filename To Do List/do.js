let theInput = document.querySelector('.add-task input'),
    theAddButton = document.querySelector('.add-task .plus'),
    taskContent = document.querySelector('.tasks-content'),
    tasksCount = document.querySelector('.tasks-count span'),
    tasksComplete = document.querySelector('.tasks-completed span');

window.onload = function() {
    theInput.focus();
};
theAddButton.onclick = function() {
    if(theInput.value === '' | theInput.value === ' ' ) {
        console.log('no value'); // sweet alert
    } else {
        noTasks = document.querySelector('.no-tasks');
        if(document.body.contains(document.querySelector('.no-tasks'))) {
            noTasks.remove();
        }
       // localStorage.setItem(theInput.value, 'tasks');
    
            let mainSpan = document.createElement("span");
            let delSpan = document.createElement("span");
            let text = document.createTextNode(theInput.value);
            let delText = document.createTextNode("Delete");
    
            mainSpan.appendChild(text);
            mainSpan.className = 'task-box';
            delSpan.appendChild(delText);
            delSpan.className = 'delete';
    
            mainSpan.appendChild(delSpan);
            taskContent.appendChild(mainSpan);  
            
            theInput.value = '';
            theInput.focus();
        // check if the task is exist
        calculateTasks();
    }
};
document.addEventListener('click', function(e) {
    if(e.target.className == 'delete') {
        e.target.parentNode.remove();
        if(taskContent.childElementCount == 0) {
            createNoTasks();
        }
    }
    if(e.target.classList.contains('task-box')) {
        e.target.classList.toggle('finished');
    }
    calculateTasks();
    // create delete all tasks button
    // create finished all tasks
});

function createNoTasks() {
    let msgSpan = document.createElement('span');
    let msgText = document.createTextNode("No Tasks To Show");
    msgSpan.appendChild(msgText);
    msgSpan.className = "no-tasks";
    taskContent.appendChild(msgSpan);
}
function calculateTasks() {
    tasksCount.innerHTML = document.querySelectorAll('.tasks-content .task-box').length;

    tasksComplete.innerHTML = document.querySelectorAll('.tasks-content .finished').length;

}
// add tasks to the local storage
function addLocalStorage() {

}