import { pageLoad } from './pageload.js';
import { createTodo } from './todo.js';
import { addTodo } from './addtodo.js';
import { removeTodo } from './removetodo.js';
import { changePriority } from './changePriority.js';

pageLoad();

let todoList = [];
let todo = createTodo('shopping', 'need to shop', 'whenever', 'asap');
addTodo(todoList, todo);
changePriority(todo, 'green');
console.log(todoList);