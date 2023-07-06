const taskCategories = ['Todo', 'In Progress', 'Done'];

export function createCategoryElement(category) {
    const categoryElement = document.createElement('div');
    categoryElement.id = `${category.toLowerCase()}Column`;
    categoryElement.className = 'category-column';
    categoryElement.innerHTML = `<h2>${category}</h2>`;
    return categoryElement;
}

export function setupCategories() {
    const board = document.getElementById('kanbanBoard');
    taskCategories.forEach(category => {
        const categoryElement = createCategoryElement(category);
        board.appendChild(categoryElement);
    });
}