import './style.css';
import Task from  './models/task';
import TaskStatus from "./taskStatus";
import {todoList, doingList, doneList} from "./dom/domHelpers";
import {appendListItem, appendListItem2, clearList} from "./dom/domFunctions";
import {idGenerator} from './idGenerator';
import { generateDummyData } from './dummydata';
import { board } from './dummydata';

let temp = board;

board.columns.forEach(column => {
    let targetName=column.name.toLowerCase();
    column.items.forEach(item => {
        appendListItem2(targetName, item);
        
    });
    
});
for (let index = 0; index < 5; index++) {
    appendListItem(doingList, `Todo task item ${index}`, 0, index);
    
}



let currentData = [];
currentData.push(generateDummyData());

console.log('It worked');