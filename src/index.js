import './style.css';
import Task from  './models/task';
import TaskStatus from "./taskStatus";
import {todoList, doingList, doneList} from "./dom/domHelpers";
import {appendListItem, appendListItem2, clearList} from "./dom/domFunctions";
import {idGenerator} from './idGenerator';
import { generateDummyData } from './dummydata';
import { board as platformLaunch} from './dummydata';

let data = [];
let currentBoard = [];

//Use dummy data for testing
data.push(platformLaunch);
currentBoard = platformLaunch;

currentBoard.columns.forEach(column => {
    let targetName=column.name.toLowerCase();
    column.items.forEach(item => {
        appendListItem2(targetName, item);
        
    });
    
});

console.log('It worked');