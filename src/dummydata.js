import {idGenerator} from './idGenerator';
import Board from './models/board';
import Column from './models/column';

export function generateDummyData() {

    let newBoard = Board("Platform Launch", idGenerator);

    let columns = [
        "Todo", "Doing", "Done"
    ];

    columns.forEach(column => {
        let newColumn = Column(column, idGenerator);
        newBoard.addColumn=newColumn;
    });

    return newBoard;
}

let board = {
    name: "Platform Launch",
    columns:[{name:"Todo",
                items:[]
            },
            {
                name:"Doing",
                items:[]
            },
            {
                name:"Done",
                items:[]
            }
        ]
}

let task = {
    title: "",
    description:"",
    subtasks:[]
}

let subtask = {
    name:"",
    completed:false
}