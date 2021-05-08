const addTodo = (todo) => {
    let div = document.createElement('div');
    let regular = document.querySelector('.default');
    div.textContent = `Title: ${todo.title} | Description: ${todo.description} | Due Date: ${todo.dueDate} | Priority: ${todo.priority}`;
    regular.appendChild(div);
} 

export { addTodo }