import {idGenerator} from '../idGenerator';

export default function Column(name, idGenerator){
    let _name = name;
    let _tasks = [];
    let _type = "column";
    let _id = idGenerator();

    return{
        set name(columnName){
            let val = columnName.trim();
            if(val.length == 0)
                throw "Column name cant be blank";
            _name = val;
        },
        get name(){
            return _name;
        },
        get type(){
            return _type;
        },
        get id(){
            return _id;
        },
        get tasks(){
            return _tasks;
        },
        set addTask(task){
            if(task.type = 'task'){
                _tasks.push(task);
            }
            else{
                throw "Task object expected";
            }
        },
        set removeTask(task){
            if(task.type === 'task'){
                _tasks = _tasks.filter(current => current.id != task.id);
            }
        },
        set updateTask(task){
            
        }

    }
}