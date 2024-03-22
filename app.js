function addTask(){
    const inputArea = document.querySelector('.input-area');
    const userInput = document.querySelector('.user-input');

    if(userInput.value == ""){
        inputArea.style.animation = "shake .13s 3";

        inputArea.addEventListener('animationend', () => {
            inputArea.style.animation = "";
            userInput.focus();
        }, {once: true}); // Ensure the event listener only runs once

    }
    else{
        createTaskList(userInput.value);

        userInput.value = "";
        inputArea.style.animation = "";
    }
}
function createTaskList(userInput){
    const taskContainer = document.querySelector('.task-container');

    var taskDiv = document.createElement('div');
    taskDiv.classList = "task";
    taskContainer.appendChild(taskDiv);

    var taskDetails = document.createElement('div');
    taskDetails.classList = "task-details";
    taskDiv.appendChild(taskDetails);

    var checkbox = document.createElement('input');
    checkbox.classList = "task-checkbox";
    checkbox.type = "checkbox";
    checkbox.onclick = () => {
        taskCheck(checkbox, taskText);
    }

    var taskText = document.createElement('p');
    taskText.classList = "task-text";
    taskText.textContent = userInput;

    taskDetails.append(checkbox, taskText);

    var taskActions = document.createElement('div');
    taskActions.classList = "task-actions";
    taskDiv.appendChild(taskActions);

    var deleteBtn = document.createElement('button');
    deleteBtn.classList = "delete-button";
    deleteBtn.textContent = "delete";
    deleteBtn.onclick = () => {
        deleteElement(taskDiv);
    }

    taskActions.appendChild(deleteBtn);
}
function taskCheck(checkbox, text){
    if(checkbox.checked){
        text.style.textDecoration = "line-through";
    }
    else{
        text.style.textDecoration = "none";
    }
}
function deleteElement(element){
    element.remove();
}