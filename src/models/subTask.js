class Subtask{
    constructor(name, completed, idGenerator){
        this.name = name;
        this.completed = completed;
        this.id = idGenerator();
    }

    get name(){
        return this._name;
    }

    set name(newName){
        newName = newName.trim();
        if(newName === ''){
            throw 'Subtask name can not be empty';
        }
        this._name = newName;
    }

    get id(){
        return this._id;
    }

    get completed(){
        return this._completed;
    }

    set completed(status){
        if(typeof status === 'boolean'){
            this._completed = status;
        }
        else{
            throw 'Expecting a boolean variable for subtask status';
        }
    }
}