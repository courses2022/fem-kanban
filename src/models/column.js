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
            return
        }
    }
}