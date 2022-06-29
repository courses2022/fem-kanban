import './style.css';
import Task from  './models/task';
import Board from './models/board';
import TaskStatus from "./taskStatus";
import {todoList, doingList, doneList} from "./dom/domHelpers";
import {appendListItem, appendListItem2, clearList, generateColumnHeaders, generateBoardButtons, generateBoardItems} from "./dom/domFunctions";
import {idGenerator} from './idGenerator';
import { generateDummyData } from './dummydata';
import { board as platformLaunch} from './dummydata';

let data = [];
let currentBoard = null;
let content = document.querySelector('.content');
let boards = document.querySelector('.boards');
let boardName = document.querySelector('.headerText');

//Use dummy data for testing
data.push(generateDummyData());
currentBoard = data[0];

let newBoard = new Board ("Test Board", idGenerator);
data.push(newBoard);

//console.log(currentBoard.name);

setBoardName(boardName, currentBoard.name);

generateColumnHeaders(content, currentBoard.columns);

generateBoardButtons(boards, data);

generateBoardItems(currentBoard);


function setBoardName(boardName, name){
    boardName.innerText = name;
}

console.log('It worked');