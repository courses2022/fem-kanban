
function createListItem(title, completedTasks, totalTasks) {
    const el = document.createElement('div');
    el.classList.add("todoItem");

    const titleDiv = document.createElement('div');
    titleDiv.classList.add("todoTitle");
    titleDiv.innerText = title;
    el.appendChild(titleDiv);

    const subTaskDiv = document.createElement('div');
    subTaskDiv.classList.add("subtasksSummary");
    subTaskDiv.innerText = `${completedTasks} of ${totalTasks} subtasks`;
    el.appendChild(subTaskDiv);

    return el;
}

function appendListItem(dest, title, completedTasks, totalTasks){
    dest.appendChild(createListItem(title, completedTasks, totalTasks));
}

function clearList(dest){
    dest.innerText = "";
}

export {appendListItem, clearList}

