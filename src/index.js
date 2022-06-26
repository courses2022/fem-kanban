import './style.css';
import Task from  './models/task';
import TaskStatus from "./taskStatus";
import {todoList, doingList, doneList} from "./dom/domHelpers";
import {appendListItem, appendListItem2, clearList, generateColumnHeaders} from "./dom/domFunctions";
import {idGenerator} from './idGenerator';
import { generateDummyData } from './dummydata';
import { board as platformLaunch} from './dummydata';

let data = [];
let currentBoard = [];
let content = document.querySelector('.content');

//Use dummy data for testing
data.push(generateDummyData());
currentBoard = generateDummyData();


generateColumnHeaders(content, currentBoard.columns);

currentBoard.columns.forEach(column => {
    let targetName=column.name.toLowerCase();
    column.tasks.forEach(task => {
        appendListItem2(targetName, task);
        
    });
    
});
console.log('It worked');