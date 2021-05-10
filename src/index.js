import { pageLoad } from './pageload.js';
import { createTodo } from './todo.js';
import { addTodo } from './addtodo.js';
import { removeTodo } from './removetodo.js';
import { changePriority } from './changePriority.js';
import { createList } from './createlist.js';
import { moveTodo } from './movetodo.js';

pageLoad();

let todoList = [];
let todo = createTodo('shopping', 'need to shop', 'whenever', 'asap');
addTodo(todoList, todo);
changePriority(todo, 'green');
let john = createList('bob');

moveTodo(todo, todoList, john);