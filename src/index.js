import { pageLoad } from './pageload.js';
import { createTodo } from './todo.js';
import { addTodo } from './addtodo.js';
import { removeTodo } from './removetodo.js';
import { changePriority } from './changePriority.js';
import { createList } from './createlist.js';
import { moveTodo } from './movetodo.js';

let content = document.querySelector("#content");
let div = document.createElement('div');
let heading = document.createElement('h1');
let button = document.createElement('button');


pageLoad();

let todoList = [];

