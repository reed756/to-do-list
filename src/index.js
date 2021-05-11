import { pageLoad } from './pageload.js';
import { createTodo } from './todo.js';
import { addTodo } from './addtodo.js';
import { removeTodo } from './removetodo.js';
import { changePriority } from './changePriority.js';
import { createList } from './createlist.js';
import { moveTodo } from './movetodo.js';
import { render } from './render.js';

pageLoad();

let totalList = [];
let todoList = [];
let newTodo = createTodo('title', 'description', 'dueDate', 'priority');

addTodo(todoList, newTodo);

let newTotalList = totalList.concat(todoList);

render(newTotalList);


