class Task {
    constructor(category, content) {
        this.category = category;
        this.content = content;
        this.color = this.setColor();
    }

    setColor() {
        const taskColors = {
            'Todo': 'grey',
            'In Progress': 'yellow',
            'Done': 'green'
        };
        return taskColors[this.category];
    }
}

export function createTask(category, content) {
    const task = new Task(category, content);
    return task;
}

export function moveTask(task, newCategory) {
    task.category = newCategory;
    task.color = task.setColor();
    return task;
}