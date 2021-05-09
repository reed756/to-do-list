import { pageLoad } from './pageload.js';
import { createTodo } from './todo.js';
import { addTodo } from './addtodo.js';
// import { addForm } from './addform.js';
import { getTodo } from './gettodo.js';

pageLoad();
let finalTodo = getTodo();
let todo = createTodo(finalTodo.title, finalTodo.description, finalTodo.dueDate, finalTodo.priority);
addTodo(todo);

// let add = document.querySelector('.add');
// let submit = document.querySelector('.submit');
// let title = document.querySelector('.title');
// let description = document.querySelector('.description');
// let dueDate = document.querySelector('.dueDate');
// let priority = document.querySelector('.priority');

// let numberAdd = 0;

// add.addEventListener('click', function() {
//     if (numberAdd < 1) {
//         addForm();
//         numberAdd++;
//     }
// });

// submit.addEventListener('click', function() {
//     const todo = createTodo( title.value, description.value, dueDate.value, priority.value);
//     addTodo(todo);
// });

// const shopping = createTodo('Shopping', 'do the shopping', 'tomorrow', 'green');
// addTodo(shopping);