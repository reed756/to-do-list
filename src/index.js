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
            let deleteProj = document.createElement('button');
            button.setAttribute('type', 'button');
            button.textContent = "ADD TODO";
            deleteProj.setAttribute('type', 'button');
            deleteProj.textContent = "DELETE PROJECT";
            list.textContent = `${input.value}`;
            list.appendChild(button);
            list.appendChild(deleteProj);
            listdiv.appendChild(list);
            let newList = createList(input.value);
            input.value = "test";
            listOfProjects.push(newList);
            button.setAttribute('data', `${listOfProjects.length - 1}`);
            deleteProj.setAttribute('data', `${listOfProjects.length - 1}`);
            list.setAttribute('data', `${listOfProjects.length - 1}`);
            deleteProj.addEventListener('click', function() {
                listOfProjects.splice(list.attributes.data.value, 1);
                listdiv.removeChild(list);
                let deleters = document.querySelectorAll('ul[data]');
                for (let i = 0; i < listOfProjects.length - 1; i++) {
                    deleters[i].setAttribute('data', `${i}`);
                }
            })
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
                            li.style.backgroundColor = `${listOfProjects[button.attributes.data.value][listOfProjects[button.attributes.data.value].length - 1].priority}`;
                            let deleteButton = document.createElement('button');
                            let text = document.createTextNode(`${listOfProjects[button.attributes.data.value][listOfProjects[button.attributes.data.value].length - 1].title} ${listOfProjects[button.attributes.data.value][listOfProjects[button.attributes.data.value].length - 1].dueDate}`);
                            let priorityButton = document.createElement('button');
                            priorityButton.textContent = "CHANGE PRIORITY";
                            priorityButton.setAttribute('datanum', `${listOfProjects[button.attributes.data.value].length - 1}`);
                      
                            deleteButton.textContent = "DELETE";
                            deleteButton.setAttribute('type', 'button');
                            deleteButton.setAttribute('datanumber', `${listOfProjects[button.attributes.data.value].length - 1}`);
                            deleteButton.addEventListener('click', () => {
                                removeTodo(listOfProjects[button.attributes.data.value], deleteButton.attributes.datanumber.value);
                                list.removeChild(li);
                                let deletes = document.querySelectorAll('button[datanumber]');
                                for (let i = 0; i < listOfProjects[button.attributes.data.value].length; i++) {
                                    deletes[i].setAttribute('datanumber', `${i}`);
                                }
                                let priorities = document.querySelectorAll('button[datanum]');
                                for (let i = 0; i < listOfProjects[button.attributes.data.value].length; i++) {
                                    priorities[i].setAttribute('datanum', `${i}`);
                                }
                            })
                            priorityButton.addEventListener('click', () => {
                                li.removeChild(text);
                                li.removeChild(priorityButton);
                                li.removeChild(deleteButton);
                                text = document.createTextNode(`${listOfProjects[button.attributes.data.value][priorityButton.attributes.datanum.value].title} ${listOfProjects[button.attributes.data.value][priorityButton.attributes.datanum.value].dueDate}`);
                                li.appendChild(text);
                                li.appendChild(priorityButton);
                                li.appendChild(deleteButton);
                                listOfProjects[button.attributes.data.value][priorityButton.attributes.datanum.value].priority = changePriority(listOfProjects[button.attributes.data.value][priorityButton.attributes.datanum.value].priority);
                                li.style.backgroundColor = `${listOfProjects[button.attributes.data.value][priorityButton.attributes.datanum.value].priority}`;
                            })
                            li.appendChild(text);
                            li.appendChild(priorityButton);
                            li.appendChild(deleteButton);
                            list.appendChild(li);
            
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
                li.style.backgroundColor = `${listOfProjects[1][listOfProjects[1].length - 1].priority}`;
                let deleteButton = document.createElement('button');
                let text = document.createTextNode(`${listOfProjects[1][listOfProjects[1].length - 1].title} ${listOfProjects[1][listOfProjects[1].length - 1].dueDate}`);
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
                    text = document.createTextNode(`${listOfProjects[1][priorityButton.attributes.datanum.value].title} ${listOfProjects[1][priorityButton.attributes.datanum.value].dueDate}`);
                    li.appendChild(text);
                    li.appendChild(priorityButton);
                    li.appendChild(deleteButton);
                    listOfProjects[1][priorityButton.attributes.datanum.value].priority = changePriority(listOfProjects[1][priorityButton.attributes.datanum.value].priority);
                    li.style.backgroundColor = `${listOfProjects[1][priorityButton.attributes.datanum.value].priority}`;
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