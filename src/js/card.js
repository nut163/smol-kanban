class Card {
    constructor(task) {
        this.task = task;
        this.element = this.createCardElement();
    }

    createCardElement() {
        let card = document.createElement('div');
        card.classList.add('card');
        card.setAttribute('draggable', 'true');
        card.textContent = this.task.content;
        card.style.backgroundColor = taskColors[this.task.category];
        card.addEventListener('dragstart', this.dragStart.bind(this));
        card.addEventListener('dragend', this.dragEnd.bind(this));
        return card;
    }

    dragStart(e) {
        e.dataTransfer.setData('text/plain', this.task.id);
    }

    dragEnd(e) {
        e.preventDefault();
        let taskId = e.dataTransfer.getData('text');
        let task = localStorageData.find(task => task.id === taskId);
        moveTask(task, e.target.id);
    }
}

export default Card;