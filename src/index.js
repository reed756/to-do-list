import { pageLoad } from './pageload.js';
import { createTodo } from './todo.js';
import { addTodo } from './addtodo.js';
import { removeTodo } from './removetodo.js';
import { changePriority } from './changePriority.js';
import { createList } from './createlist.js';
import { addForm } from './addform.js';
import { projectForm } from './projectform.js';
import { addList } from './addlist.js';

pageLoad();

const listOfProjects = [[]];
const todoList = [];
listOfProjects.push(todoList);
let add = document.querySelector('.add');
let addProject = document.querySelector('.new-project');
let isClicked = false;

addProject.addEventListener('click', function() {
    if (isClicked === false) {
        projectForm();
        isClicked = true;
        let cancel = document.querySelector('.cancel');
        let normal = document.querySelector(".default2");
        let listdiv = document.querySelector(".listdiv");
        let form = document.querySelector('.form');
        let adder = document.querySelector('.addproject');
        let input = document.querySelector("[data='title']");
        adder.addEventListener('click', function() {
            let list = document.createElement('ul');
            let button = document.createElement('button');
            button.setAttribute('type', 'button');
            button.textContent = "ADD TODO";
            list.textContent = `${input.value}`;
            list.appendChild(button);
            listdiv.appendChild(list);
            let newList = createList(input.value);
            input.value = "";
            listOfProjects.push(newList);
            button.setAttribute('data', `${listOfProjects.length - 1}`);
            list.setAttribute('data', `${listOfProjects.length - 1}`);
            button.addEventListener('click', function() {
                if (isClicked === false) {
                    addForm();
                    isClicked = true;
                    let cancel = document.querySelector('.cancel');
                    let normal = document.querySelector(".listdiv");
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
                        addTodo(listOfProjects[button.attributes.data.value], finalTodo);
                        let defaultList = document.querySelector(".defaultList");
                            let li = document.createElement("li");
                            li.classList.add('todo');
                            let deleteButton = document.createElement('button');
                            let text = document.createTextNode(`${listOfProjects[button.attributes.data.value][listOfProjects[button.attributes.data.value].length - 1].title} ${listOfProjects[button.attributes.data.value][listOfProjects[button.attributes.data.value].length - 1].description} ${listOfProjects[button.attributes.data.value][listOfProjects[button.attributes.data.value].length - 1].dueDate} ${listOfProjects[button.attributes.data.value][listOfProjects[button.attributes.data.value].length - 1].priority}`);
                            let priorityButton = document.createElement('button');
                            priorityButton.textContent = "CHANGE PRIORITY";
                            priorityButton.setAttribute('datanum', `${todoList.length - 1}`);
                      
                            deleteButton.textContent = "DELETE";
                            deleteButton.setAttribute('type', 'button');
                            deleteButton.setAttribute('datanumber', `${todoList.length - 1}`);
                            deleteButton.addEventListener('click', () => {
                                removeTodo(todoList, deleteButton.attributes.datanumber.value);
                                defaultList.removeChild(li);
                                let deletes = document.querySelectorAll('button[datanumber]');
                                for (let i = 0; i < todoList.length; i++) {
                                    deletes[i].setAttribute('datanumber', `${i}`);
                                }
                                let priorities = document.querySelectorAll('button[datanum]');
                                for (let i = 0; i < todoList.length; i++) {
                                    priorities[i].setAttribute('datanum', `${i}`);
                                }
                            })
                            priorityButton.addEventListener('click', () => {
                                li.removeChild(text);
                                li.removeChild(priorityButton);
                                li.removeChild(deleteButton);
                                todoList[priorityButton.attributes.datanum.value].priority = changePriority(todoList[priorityButton.attributes.datanum.value].priority);
                                text = document.createTextNode(`${todoList[priorityButton.attributes.datanum.value].title} ${todoList[priorityButton.attributes.datanum.value].description} ${todoList[priorityButton.attributes.datanum.value].dueDate} ${todoList[priorityButton.attributes.datanum.value].priority}`);
                                li.appendChild(text);
                                li.appendChild(priorityButton);
                                li.appendChild(deleteButton);
                            })
                            li.appendChild(text);
                            li.appendChild(priorityButton);
                            li.appendChild(deleteButton);
                            defaultList.appendChild(li);
            
                            title.value = "test";
                            description.value = "test";
                            duedate.value = "2021-07-05";
                            priority.value = "red";
                    })
                }
            });
        })
        cancel.addEventListener('click', function() {
            normal.removeChild(form);
            isClicked = false;
        })
    }
})

add.addEventListener('click', function() {
    if (isClicked === false) {
        addForm();
        isClicked = true;
        let cancel = document.querySelector('.cancel');
        let normal = document.querySelector(".listdiv");
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
            addTodo(listOfProjects[1], finalTodo);
            let defaultList = document.querySelector(".defaultList");
                let li = document.createElement("li");
                li.classList.add('todo');
                let deleteButton = document.createElement('button');
                let text = document.createTextNode(`${listOfProjects[1][listOfProjects[1].length - 1].title} ${listOfProjects[1][listOfProjects[1].length - 1].description} ${listOfProjects[1][listOfProjects[1].length - 1].dueDate} ${listOfProjects[1][listOfProjects[1].length - 1].priority}`);
                let priorityButton = document.createElement('button');
                priorityButton.textContent = "CHANGE PRIORITY";
                priorityButton.setAttribute('datanum', `${listOfProjects[1].length - 1}`);
          
                deleteButton.textContent = "DELETE";
                deleteButton.setAttribute('type', 'button');
                deleteButton.setAttribute('datanumber', `${listOfProjects[1].length - 1}`);
                deleteButton.addEventListener('click', () => {
                    removeTodo(listOfProjects[1], deleteButton.attributes.datanumber.value);
                    defaultList.removeChild(li);
                    let deletes = document.querySelectorAll('button[datanumber]');
                    for (let i = 0; i < listOfProjects[1].length; i++) {
                        deletes[i].setAttribute('datanumber', `${i}`);
                    }
                    let priorities = document.querySelectorAll('button[datanum]');
                    for (let i = 0; i < listOfProjects[1].length; i++) {
                        priorities[i].setAttribute('datanum', `${i}`);
                    }
                })
                priorityButton.addEventListener('click', () => {
                    li.removeChild(text);
                    li.removeChild(priorityButton);
                    li.removeChild(deleteButton);
                    listOfProjects[1][priorityButton.attributes.datanum.value].priority = changePriority(listOfProjects[1][priorityButton.attributes.datanum.value].priority);
                    text = document.createTextNode(`${listOfProjects[1][priorityButton.attributes.datanum.value].title} ${listOfProjects[1][priorityButton.attributes.datanum.value].description} ${todoList[priorityButton.attributes.datanum.value].dueDate} ${todoList[priorityButton.attributes.datanum.value].priority}`);
                    li.appendChild(text);
                    li.appendChild(priorityButton);
                    li.appendChild(deleteButton);
                })
                li.appendChild(text);
                li.appendChild(priorityButton);
                li.appendChild(deleteButton);
                defaultList.appendChild(li);

                title.value = "test";
                description.value = "test";
                duedate.value = "2021-07-05";
                priority.value = "red";
        })
    }
});