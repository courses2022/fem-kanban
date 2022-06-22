import './style.css';
import Task from  './models/task';
import TaskStatus from "./taskStatus";
import {todoList, doingList, doneList} from "./dom/domHelpers";
import {appendListItem, clearList} from "./dom/domFunctions";
import {idGenerator} from './idGenerator';
import { generateDummyData } from './dummydata';

for (let index = 0; index < 5; index++) {
    appendListItem(doingList, `Todo task item ${index}`, 0, index);
    
}

let currentData = [];
currentData.push(generateDummyData());

console.log('It worked');