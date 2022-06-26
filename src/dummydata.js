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

export let board = {
    name: "Platform Launch",
    columns:[{name:"Todo",
                items:[
                    {
                        title:"Build UI for onboarding flow",
                        description:"Set up wireframe for onboarding screen based on the customer journey descriptions",
                        subtasks:[],
                        status :"Todo"
                    },
                    {
                        title:"Build UI for search",
                        description:"Set up wireframe for search page and section based on the customer journey descriptions",
                        subtasks:[],
                        status :"Todo"
                    },
                    {
                        title:"Build setting UI",
                        description:"Use the Figma designs to setup section for users to manage settings",
                        subtasks:[],
                        status :"Todo"
                    }
                ]
            },
            {
                name:"Doing",
                items:[
                    {
                        title:"Design settings and search pages",
                        description:"Set up wireframe for onboarding screen based on the customer journey descriptions",
                        subtasks:[],
                        status :"Doing"
                    },
                    {
                        title:"Add account management endpoints",
                        description:"Set up wireframe for search page and section based on the customer journey descriptions",
                        subtasks:[],
                        status :"Doing"
                    },
                    {
                        title:"Design onboarding flow",
                        description:"Use the Figma designs to setup section for users to manage settings",
                        subtasks:[],
                        status :"Doing"
                    },
                    {
                        title:"Add search endpoints",
                        description:"Setup search endpoints for the backend",
                        subtasks:[],
                        status :"Doing"
                    },
                    {
                        title:"Add authentication endpoints",
                        description:"Setup identity and authentication endpoints on the back end",
                        subtasks:[],
                        status :"Doing"
                    }
                ]
            },
            {
                name:"Done",
                items:[
                    {
                        title:"Conduct 5 wireframe tests",
                        description:"Test wireframe designs to make sure they suit user stories",
                        subtasks:[],
                        status :"Done"
                    },
                    {
                        title:"Create wireframe prototype",
                        description:"Create wireframe prototype",
                        subtasks:[],
                        status :"Done"
                    },
                    {
                        title:"Review results of usability tests and iterate",
                        description:"Review usability test results with the team",
                        subtasks:[],
                        status :"Done"
                    },
                    {
                        title:"Create paper prototypes and conduct 10 usability tests with potential customers",
                        description:"Design simple page designs and go through it with customers and collect their feedback to help design wireframes",
                        subtasks:[],
                        status :"Done"
                    },
                    {
                        title:"Market discovery",
                        description:"Do a market research to evaluate the scope of the product",
                        subtasks:[],
                        status :"Done"
                    },
                    {
                        title:"Competitor analysis",
                        description:"Do research on the five major players who are operating in this field",
                        subtasks:[],
                        status :"Done"
                    },
                    {
                        title:"Research the market",
                        description:"Research the scope of the market with an emphasis on user demographics",
                        subtasks:[],
                        status :"Done"
                    }

                ]
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