enum TaskStatus {
    New,
    InProgress,
    Done
}

class Task {
    private _name: string;
    private _id: string;
    private _status: TaskStatus;

    constructor(name: string, id: string) {
        this._name = name;
        this._id = id;
        // this._id = new Date().getTime().toString() + Math.round(Math.random() * 10000);
        this._status = TaskStatus.New;
    }

    get name() {
        return this._name;
    }

    get id() {
        return this._id;
    }

    set status(newStatus: TaskStatus) {
        this._status = newStatus;
    }

    getStatus(): string {
        switch(this._status) {
            case TaskStatus.New: return 'Nowe';
            case TaskStatus.InProgress: return 'W trakcie';
            case TaskStatus.Done: return 'Zakonczone';
            default: return '-'
        }
    }
}

class TaskManager {
    private tasks: Task[] = [];

    add(name: string, id: string) {
        const newTask = new Task(name, id);
        this.tasks.push(newTask)
    }

    remove(id: string) {
        this.tasks = this.tasks.filter(task => task.id !== id)
    }

    changeStatus(id: string, newStatus: TaskStatus) {
        // sposób mutacyjny
        const task = this.tasks.find(task => task.id === id);

        if(task) {
            task.status = newStatus;
        }
    }

    display() {
        this.tasks.forEach(task => {
            console.log(`Zadanie ${task.id} ${task.name} (${task.getStatus()})`);
        })
    }
}

const manager = new TaskManager();
manager.add('lorem', '1');
manager.add('ipsum', '2');
manager.add('dolor', '3');

manager.changeStatus('2', TaskStatus.InProgress);
manager.display();

manager.changeStatus('2', TaskStatus.Done);
manager.display();

manager.remove('2');
manager.display();