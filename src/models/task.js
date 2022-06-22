class Task{
    constructor(title, description, subtasks, status, idGenerator){
        this.title = title;
        this.description = description;
        this.subtasks = subtasks;
        this.status = status;
        this.id = idGenerator();

    }

    get title(){
        return this._title;
    }

    set title(newTitle){
        newTitle = newTitle.trim();
        if(newTitle === ''){
            throw 'The name cannot be empty';
        }
        this._title = newTitle;
    }

    get id(){
        return this._id;
    }
    

    get description(){
        return this._description;
    }

    set description(newDescription){
        this._description = newDescription.trim();
    }

    get subtasks(){
        return this._subtasks;
    }

    set subtasks(newSubtasks){
        this._subtasks = [];
        newSubtasks.forEach(task => {
            this._subtasks.push(task);
            
        });

    }

    get status(){
        return this._status;
    }

    set status(newStatus){
        this._status = newStatus;
    }
   


}

export default Task;