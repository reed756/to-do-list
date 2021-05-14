import { pageLoad } from './pageload.js';
import { createTodo } from './todo.js';
import { addTodo } from './addtodo.js';
import { removeTodo } from './removetodo.js';
import { changePriority } from './changePriority.js';
import { createList } from './createlist.js';
import { moveTodo } from './movetodo.js';
import { render } from './render.js';
import { addForm } from './addform.js';

pageLoad();

// let totalList = [];
// let anotherList = [];
// let newTodo = createTodo('title', 'description', 'dueDate', 'priority3');
// let wewTodo = createTodo('title', 'description', 'dueDate', 'priority2');
// let mewTodo = createTodo('title', 'description', 'dueDate', 'priority1');

const todoList = [];
let add = document.querySelector('.add');
let isClicked = false;

add.addEventListener('click', function() {
    if (isClicked === false) {
        addForm();
        isClicked = true;
        let cancel = document.querySelector('.cancel');
        let normal = document.querySelector(".default2");
        let form = document.querySelector('form');
        cancel.addEventListener('click', function() {
        normal.removeChild(form);
        isClicked = false;
        })
    }
});

// add.removeEventListener('click', addForm);

// addTodo(todoList, newTodo);
// addTodo(todoList, wewTodo);
// addTodo(todoList, mewTodo);

// console.log(todoList);

render(todoList);


// add.addEventListener('click', function() {
//     addForm();
//     add.removeEventListener('click', addForm);
//     let cancel = document.querySelector('.cancel');
//     let normal = document.querySelector(".default2");
//     let form = document.querySelector('form');
//     cancel.addEventListener('click', function() {
//     normal.removeChild(form);
// })
// });