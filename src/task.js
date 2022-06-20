class Task{
    constructor(title, description, subtask, status){
        this.title = title;
        this.description = description;
        this.subtask = subtask;
        this.status = status;

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

    get description(){
        return this._description;
    }

    set description(newDescription){
        this._description = newDescription.trim();
    }

    
}