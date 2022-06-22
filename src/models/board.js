
export default function Board(name, idGenerator){
    let _name = name;
    let _columns = [];
    let _type = "board";
    let _id = idGenerator();
    return{
        set name(boardName){
            let val = boardName.trim();
            if(val.length == 0)
                throw "Board name cant be blank";
            _name = val;
            
        },
        get name(){
            return _name;
        },
        get id(){
            return _id;
        },
        get columns(){
            return _columns;
        },
        set addColumn(column){
            if(column.type === 'column'){
                _columns.push(column);
            }
            else{
                throw "Column object expected"
            }

        },
        set removeColumn(column){
            if(column.type === 'column'){
             _columns = _columns.filter(current => current.id != column.id);
            }
            else{
                throw "Column object expected"
            }
        },

        set updateColumn(column){
            if(column.type === 'column'){
                let index = _columns.findIndex( col => {return col.id === column.id})
                _columns[index] = column;
               }
               else{
                   throw "Column object expected";
               }
        },
        get type(){
            return _type;
        }



    };
}
