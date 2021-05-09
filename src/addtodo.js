const addTodo = (todo) => {
   let todoList = {};
   todoList.push(todo);
   return todoList;
} 

export { addTodo }

 // let div = document.createElement('div');
    // let regular = document.querySelector('.default');
    // div.textContent = `Title: ${todo.title} | Description: ${todo.description} | Due Date: ${todo.dueDate} | Priority: ${todo.priority}`;
    // regular.appendChild(div);