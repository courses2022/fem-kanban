import './style.css';
import Task from  './task';
import TaskStatus from "./taskStatus";
import {todoList, doingList, doneList} from "./dom/domHelpers";
import {appendListItem, clearList} from "./dom/domFunctions";


for (let index = 0; index < 5; index++) {
    appendListItem(doingList, `Todo task item ${index}`, 0, index);
    
}

console.log(todoList);

console.log('It worked');