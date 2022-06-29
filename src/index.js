import './style.css';
import Task from  './models/task';
import TaskStatus from "./taskStatus";
import {todoList, doingList, doneList} from "./dom/domHelpers";
import {appendListItem, appendListItem2, clearList, generateColumnHeaders, generateBoardButtons} from "./dom/domFunctions";
import {idGenerator} from './idGenerator';
import { generateDummyData } from './dummydata';
import { board as platformLaunch} from './dummydata';

let data = [];
let currentBoard = null;
let content = document.querySelector('.content');
let boards = document.querySelector('.boards');

//Use dummy data for testing
data.push(generateDummyData());
currentBoard = data[0];


generateColumnHeaders(content, currentBoard.columns);

generateBoardButtons(boards, data);

currentBoard.columns.forEach(column => {
    let targetName=column.name.toLowerCase();
    column.tasks.forEach(task => {
        appendListItem2(targetName, task);
        
    });
    
});
console.log('It worked');