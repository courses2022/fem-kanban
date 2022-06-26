
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

function appendListItem2(targetName, listItem){
    let target = document.querySelector(`.${targetName}`);

    const el = document.createElement('div');
    el.classList.add("todoItem");

    const titleDiv = document.createElement('div');
    titleDiv.classList.add("todoTitle");
    titleDiv.innerText = listItem.title;
    el.appendChild(titleDiv);

    const subTaskDiv = document.createElement('div');
    subTaskDiv.classList.add('subtasksSummary');
    let completedCount = listItem.subtasks.filter(subtask => subtask.completed == true).length;
    let subtasksCount = listItem.subtasks.length;
    subTaskDiv.innerText = `${completedCount} of ${subtasksCount}`;
    el.appendChild(subTaskDiv);

    target.appendChild(el);

}

function generateColumnHeaders(target, columns){

    columns.forEach(column => {
        let el = document.createElement('div');
        el.classList.add('columnName');
        
        let circle = document.createElement('div');
        circle.setAttribute('id', 'yellowcircle');
       
        let text = document.createElement('div');
        text.innerText = `${column.name.toUpperCase()} (${column.tasks.length})`
        el.appendChild(circle);
        el.appendChild(text);
        target.appendChild(el);
    });

    let el = document.createElement('div');
    target.appendChild(el);
    
    columns.forEach(column => {
        let el = document.createElement('div');
        el.classList.add(`${column.name.toLowerCase()}`);
        target.appendChild(el);
    });

    let newEl = document.createElement('div');
    newEl.classList.add('newColumn');
    newEl.innerText = '+ Add new Column';
    target.appendChild(newEl);

    

}

export {appendListItem, appendListItem2, clearList, generateColumnHeaders}

