import { pageLoad } from './pageload.js';
import { createTodo } from './todo.js';
import { addTodo } from './addtodo.js';
import { removeTodo } from './removetodo.js';
import { changePriority } from './changePriority.js';
import { createList } from './createlist.js';
import { moveTodo } from './movetodo.js';
import { addForm } from './addform.js';

pageLoad();

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
        let title = document.querySelector("[data='title']");
        let description = document.querySelector("[data='description']");
        let duedate = document.querySelector("[data='duedate']");
        let priority = document.querySelector("[data='priority']");
        let add = document.querySelector("[data='add']");

        cancel.addEventListener('click', function() {
        normal.removeChild(form);
        isClicked = false;
        })

        add.addEventListener('click', function() {
            let finalTodo = new createTodo(`${title.value}`,`${description.value}`,`${duedate.value}`,`${priority.value}`);
            addTodo(todoList, finalTodo);
            let defaultList = document.querySelector(".defaultList");
                let li = document.createElement("li");
                li.classList.add('todo');
                let deleteButton = document.createElement('button');
                let text = document.createTextNode(`${todoList[todoList.length - 1].title} ${todoList[todoList.length - 1].description} ${todoList[todoList.length - 1].dueDate} ${todoList[todoList.length - 1].priority}`);
                let priorityButton = document.createElement('button');
                priorityButton.textContent = "CHANGE PRIORITY";
                priorityButton.setAttribute('data', `${todoList[todoList.length - 1].priority}`);
                priorityButton.setAttribute('data', `${todoList.length - 1}`);
          
                deleteButton.textContent = "DELETE";
                deleteButton.setAttribute('type', 'button');
                deleteButton.setAttribute('data', 'delete');
                deleteButton.setAttribute('datanumber', `${todoList.length - 1}`);
                deleteButton.addEventListener('click', () => {
                    removeTodo(todoList, deleteButton.attributes.datanumber.value);
                    defaultList.removeChild(li);
                })
                priorityButton.addEventListener('click', () => {
                    // changePriority(todoList[deleteButton.attributes.datanumber.value].priority, todoList[deleteButton.attributes.datanumber.value].toggle);
                    todoList[todoList.length - 1].toggle;
                    console.log(todoList[deleteButton.attributes.datanumber.value].priority);
                })
                li.appendChild(text);
                li.appendChild(priorityButton);
                li.appendChild(deleteButton);
                defaultList.appendChild(li);

                title.value = "";
                description.value = "";
                duedate.value = "";
                priority.value = "";
        })
    }
});

// myLibrary[card.attributes.data.value].toggle();
//             card.textContent = `${myLibrary[card.attributes.data.value].title} ${myLibrary[card.attributes.data.value].author} ${myLibrary[card.attributes.data.value].number} ${myLibrary[card.attributes.data.value].read}`;
//             deleteButton.innerText = "DELETE";
//             readButton.innerText = "READ";
//             card.appendChild(deleteButton);
//             card.appendChild(readButton);
//             setStorage();