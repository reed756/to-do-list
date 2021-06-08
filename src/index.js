import { pageLoad } from './pageload.js';
import { createTodo } from './todo.js';
import { addTodo } from './addtodo.js';
import { removeTodo } from './removetodo.js';
import { changePriority } from './changePriority.js';
import { createList } from './createlist.js';
import { addForm } from './addform.js';
import { projectForm } from './projectform.js';

pageLoad();

let listOfProjects = [[]];
const todoList = [];
listOfProjects.push(todoList);
let add = document.querySelector('.add');
let addProject = document.querySelector('.new-project');
let isClicked = false;

// ADD NEW PROJECT //

addProject.addEventListener('click', function() {
    if (isClicked === false) {
        projectForm();
        isClicked = true;
        let cancel = document.querySelector('.cancel');
        let normal = document.querySelector(".default2");
        let listdiv = document.querySelector(".listdiv");
        let div = document.querySelector('.form-div');
        let adder = document.querySelector('.addproject');
        let input = document.querySelector("[data='title']");
        adder.addEventListener('click', function() {
            let list = document.createElement('ul');
            let button = document.createElement('button');
            let deleteProj = document.createElement('button');
            button.setAttribute('type', 'button');
            button.textContent = "+";
            button.classList.add('add');
            deleteProj.setAttribute('type', 'button');
            deleteProj.textContent = "X";
            deleteProj.classList.add('red');
            list.textContent = `${input.value}`;
            list.appendChild(button);
            list.appendChild(deleteProj);
            listdiv.appendChild(list);
            let newList = new createList(input.value);
            input.value = "test";
            listOfProjects.push(newList);
            console.log(listOfProjects.length);
            console.log(listOfProjects);
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
            setStorage();
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
                        addTodo(listOfProjects[button.attributes.data.value].array, finalTodo);
                            let li = document.createElement("li");
                            li.classList.add('todo');
                            li.style.backgroundColor = `${listOfProjects[button.attributes.data.value].array[listOfProjects[button.attributes.data.value].array.length - 1].priority}`;
                            let deleteButton = document.createElement('button');
                            let text = document.createTextNode(`${listOfProjects[button.attributes.data.value].array[listOfProjects[button.attributes.data.value].array.length - 1].title} ${listOfProjects[button.attributes.data.value].array[listOfProjects[button.attributes.data.value].array.length - 1].dueDate}`);
                            let priorityButton = document.createElement('button');
                            let viewButton = document.createElement('button');
                            viewButton.setAttribute('type', 'button');
                            priorityButton.setAttribute('datanum', `${listOfProjects[button.attributes.data.value].array.length - 1}`);
                            priorityButton.classList.add('priority-button');
                            viewButton.classList.add('view-button');
                            deleteButton.textContent = "X";
                            deleteButton.classList.add('delete-button');
                            deleteButton.setAttribute('type', 'button');
                            deleteButton.setAttribute('datanumber', `${listOfProjects[button.attributes.data.value].array.length - 1}`);
                            deleteButton.addEventListener('click', () => {
                                removeTodo(listOfProjects[button.attributes.data.value].array, deleteButton.attributes.datanumber.value);
                                list.removeChild(li);
                                let deletes = document.querySelectorAll('button[datanumber]');
                                for (let i = 0; i < listOfProjects[button.attributes.data.value].array.length; i++) {
                                    deletes[i].setAttribute('datanumber', `${i}`);
                                }
                                let priorities = document.querySelectorAll('button[datanum]');
                                for (let i = 0; i < listOfProjects[button.attributes.data.value].array.length; i++) {
                                    priorities[i].setAttribute('datanum', `${i}`);
                                }
                                setStorage();
                            })
                            priorityButton.addEventListener('click', () => {
                                li.removeChild(text);
                                li.removeChild(priorityButton);
                                li.removeChild(deleteButton);
                                li.removeChild(viewButton);
                                text = document.createTextNode(`${listOfProjects[button.attributes.data.value].array[priorityButton.attributes.datanum.value].title} ${listOfProjects[button.attributes.data.value].array[priorityButton.attributes.datanum.value].dueDate}`);
                                li.appendChild(text);
                                li.appendChild(priorityButton);
                                li.appendChild(deleteButton);
                                li.appendChild(viewButton);
                                listOfProjects[button.attributes.data.value].array[priorityButton.attributes.datanum.value].priority = changePriority(listOfProjects[button.attributes.data.value].array[priorityButton.attributes.datanum.value].priority);
                                li.style.backgroundColor = `${listOfProjects[button.attributes.data.value].array[priorityButton.attributes.datanum.value].priority}`;
                                setStorage();
                            })
                            viewButton.addEventListener('click', () => {
                                if (isClicked) {
                                    li.removeChild(text);
                                    li.removeChild(priorityButton);
                                    li.removeChild(deleteButton);
                                    li.removeChild(viewButton);
                                    text = document.createTextNode(`${listOfProjects[button.attributes.data.value].array[priorityButton.attributes.datanum.value].title} ${listOfProjects[button.attributes.data.value].array[priorityButton.attributes.datanum.value].dueDate} ${listOfProjects[button.attributes.data.value].array[priorityButton.attributes.datanum.value].description}`);
                                    li.appendChild(text);
                                    li.appendChild(priorityButton);
                                    li.appendChild(deleteButton);
                                    li.appendChild(viewButton);
                                    return isClicked = false;
                                } else if (!isClicked) {
                                    li.removeChild(text);
                                    li.removeChild(priorityButton);
                                    li.removeChild(deleteButton);
                                    li.removeChild(viewButton);
                                    text = document.createTextNode(`${listOfProjects[button.attributes.data.value].array[priorityButton.attributes.datanum.value].title} ${listOfProjects[button.attributes.data.value].array[priorityButton.attributes.datanum.value].dueDate}`);
                                    li.appendChild(text);
                                    li.appendChild(priorityButton);
                                    li.appendChild(deleteButton);
                                    li.appendChild(viewButton);
                                    return isClicked = true;
                                }
                            });
                            li.appendChild(text);
                            li.appendChild(priorityButton);
                            li.appendChild(deleteButton);
                            li.appendChild(viewButton);
                            list.appendChild(li);
                            setStorage();
                            title.value = "test";
                            description.value = "test";
                            duedate.value = "2021-07-05";
                            priority.value = "red";
                    })
                }
            });
        })
        cancel.addEventListener('click', function() {
            normal.removeChild(div);
            isClicked = false;
        })
    }
})

// ADD TODO TO DEFAULT LIST //

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
                let viewButton = document.createElement('button');
                priorityButton.classList.add('priority-button');
                viewButton.setAttribute('type', 'button');
                viewButton.classList.add('view-button');
                priorityButton.setAttribute('datanum', `${listOfProjects[1].length - 1}`);

                deleteButton.textContent = "X";
                deleteButton.classList.add('delete-button');
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
                    setStorage();
                })
                priorityButton.addEventListener('click', () => {
                    li.removeChild(text);
                    li.removeChild(priorityButton);
                    li.removeChild(deleteButton);
                    li.removeChild(viewButton);
                    text = document.createTextNode(`${listOfProjects[1][priorityButton.attributes.datanum.value].title} ${listOfProjects[1][priorityButton.attributes.datanum.value].dueDate}`);
                    li.appendChild(text);
                    li.appendChild(priorityButton);
                    li.appendChild(deleteButton);
                    li.appendChild(viewButton);
                    listOfProjects[1][priorityButton.attributes.datanum.value].priority = changePriority(listOfProjects[1][priorityButton.attributes.datanum.value].priority);
                    li.style.backgroundColor = `${listOfProjects[1][priorityButton.attributes.datanum.value].priority}`;
                    setStorage();
                });
                viewButton.addEventListener('click', () => {
                    if (isClicked) {
                        li.removeChild(text);
                        li.removeChild(priorityButton);
                        li.removeChild(deleteButton);
                        li.removeChild(viewButton);
                        text = document.createTextNode(`${listOfProjects[1][priorityButton.attributes.datanum.value].title} ${listOfProjects[1][priorityButton.attributes.datanum.value].dueDate} ${listOfProjects[1][priorityButton.attributes.datanum.value].description}`);
                        li.appendChild(text);
                        li.appendChild(priorityButton);
                        li.appendChild(deleteButton);
                        li.appendChild(viewButton);
                        return isClicked = false;
                    } else if (!isClicked) {
                        li.removeChild(text);
                        li.removeChild(priorityButton);
                        li.removeChild(deleteButton);
                        li.removeChild(viewButton);
                        text = document.createTextNode(`${listOfProjects[1][priorityButton.attributes.datanum.value].title} ${listOfProjects[1][priorityButton.attributes.datanum.value].dueDate}`);
                        li.appendChild(text);
                        li.appendChild(priorityButton);
                        li.appendChild(deleteButton);
                        li.appendChild(viewButton);
                        return isClicked = true;
                    }
                });
                li.appendChild(text);
                li.appendChild(priorityButton);
                li.appendChild(deleteButton);
                li.appendChild(viewButton);
                defaultList.appendChild(li);
                setStorage();
                title.value = "test";
                description.value = "test";
                duedate.value = "2021-07-05";
                priority.value = "red";
        })
    }
});

// console.log(JSON.parse(localStorage.getItem('listOfProjects')));

// ADD LOCAL STORAGE //

const addStorage = () => {
    let defaultList = document.querySelector(".defaultList");
        for (let i = 1; i < listOfProjects.length; i++) {
            if (i === 1) {
            for (let j = 0; j < listOfProjects[i].length; j++) {
                let li = document.createElement("li");
                li.classList.add('todo');
                li.style.backgroundColor = `${listOfProjects[i][j].priority}`;
                let deleteButton = document.createElement('button');
                let text = document.createTextNode(`${listOfProjects[i][j].title} ${listOfProjects[i][j].dueDate}`);
                let priorityButton = document.createElement('button');
                let viewButton = document.createElement('button');
                priorityButton.classList.add('priority-button');
                viewButton.setAttribute('type', 'button');
                viewButton.classList.add('view-button');
                priorityButton.setAttribute('datanum', `${j}`);
                deleteButton.textContent = "X";
                deleteButton.classList.add('delete-button');
                deleteButton.setAttribute('type', 'button');
                deleteButton.setAttribute('datanumber', `${j}`);
                deleteButton.addEventListener('click', () => {
                    removeTodo(listOfProjects[i], deleteButton.attributes.datanumber.value);
                    defaultList.removeChild(li);
                    let deletes = document.querySelectorAll('button[datanumber]');
                    for (let z = 0; z < listOfProjects[i].length; z++) {
                        deletes[z].setAttribute('datanumber', `${z}`);
                    }
                    let priorities = document.querySelectorAll('button[datanum]');
                    for (let z = 0; z < listOfProjects[i].length; z++) {
                        priorities[z].setAttribute('datanum', `${z}`);
                    }
                    setStorage();
                })
                priorityButton.addEventListener('click', () => {
                    li.removeChild(text);
                    li.removeChild(priorityButton);
                    li.removeChild(deleteButton);
                    li.removeChild(viewButton);
                    text = document.createTextNode(`${listOfProjects[i][priorityButton.attributes.datanum.value].title} ${listOfProjects[i][priorityButton.attributes.datanum.value].dueDate}`);
                    li.appendChild(text);
                    li.appendChild(priorityButton);
                    li.appendChild(deleteButton);
                    li.appendChild(viewButton);
                    listOfProjects[i][priorityButton.attributes.datanum.value].priority = changePriority(listOfProjects[i][priorityButton.attributes.datanum.value].priority);
                    li.style.backgroundColor = `${listOfProjects[i][priorityButton.attributes.datanum.value].priority}`;
                    setStorage();
                });
                viewButton.addEventListener('click', () => {
                    if (isClicked) {
                        li.removeChild(text);
                        li.removeChild(priorityButton);
                        li.removeChild(deleteButton);
                        li.removeChild(viewButton);
                        text = document.createTextNode(`${listOfProjects[i][priorityButton.attributes.datanum.value].title} ${listOfProjects[i][priorityButton.attributes.datanum.value].dueDate} ${listOfProjects[i][priorityButton.attributes.datanum.value].description}`);
                        li.appendChild(text);
                        li.appendChild(priorityButton);
                        li.appendChild(deleteButton);
                        li.appendChild(viewButton);
                        return isClicked = false;
                    } else if (!isClicked) {
                        li.removeChild(text);
                        li.removeChild(priorityButton);
                        li.removeChild(deleteButton);
                        li.removeChild(viewButton);
                        text = document.createTextNode(`${listOfProjects[i][priorityButton.attributes.datanum.value].title} ${listOfProjects[i][priorityButton.attributes.datanum.value].dueDate}`);
                        li.appendChild(text);
                        li.appendChild(priorityButton);
                        li.appendChild(deleteButton);
                        li.appendChild(viewButton);
                        return isClicked = true;
                    }
                });
                li.appendChild(text);
                li.appendChild(priorityButton);
                li.appendChild(deleteButton);
                li.appendChild(viewButton);
                defaultList.appendChild(li);
                } 
            } else if (i > 1) {
                console.log('this works');
                // let list = document.createElement('ul');
                // let button = document.createElement('button');
                // let deleteProj = document.createElement('button');
                // let listdiv = document.querySelector(".listdiv");
                // button.setAttribute('type', 'button');
                // button.textContent = "+";
                // button.classList.add('add');
                // deleteProj.setAttribute('type', 'button');
                // deleteProj.textContent = "X";
                // deleteProj.classList.add('red');
                // list.textContent = `${listOfProjects[i].name}`;
                // list.appendChild(button);
                // list.appendChild(deleteProj);
                // listdiv.appendChild(list);
                // let newList = createList(listOfProjects[i]);
                // listOfProjects.push(newList);
                // button.setAttribute('data', `${listOfProjects[i]}`);
                // deleteProj.setAttribute('data', `${listOfProjects[i]}`);
                // list.setAttribute('data', `${listOfProjects[i]}`);
                // deleteProj.addEventListener('click', function() {
                //     listOfProjects.splice(list.attributes.data.value, 1);
                //     listdiv.removeChild(list);
                //     let deleters = document.querySelectorAll('ul[data]');
                //     for (let i = 0; i < listOfProjects.length - 1; i++) {
                //         deleters[i].setAttribute('data', `${i}`);
                //     }
                // })
            }
        }
}

const addStorageTwo = () => {
    // for (let i = 0; i < listOfProjects.length; i++) {
        // if (i === 0 || i === 1) {
        //     continue;
        // }
            let list = document.createElement('ul');
            let button = document.createElement('button');
            let deleteProj = document.createElement('button');
            let listdiv = document.querySelector(".listdiv");
            // let input = document.querySelector("[data='title']");
            button.setAttribute('type', 'button');
            button.textContent = "+";
            button.classList.add('add');
            deleteProj.setAttribute('type', 'button');
            deleteProj.textContent = "X";
            deleteProj.classList.add('red');
            list.textContent = `${listOfProjects[2].name}`;
            list.appendChild(button);
            list.appendChild(deleteProj);
            listdiv.appendChild(list);
            let newList = createList(listOfProjects[2]);
            // input.value = "test";
            listOfProjects.push(newList);
            button.setAttribute('data', `${listOfProjects[2]}`);
            deleteProj.setAttribute('data', `${listOfProjects[2]}`);
            list.setAttribute('data', `${listOfProjects[2]}`);
            deleteProj.addEventListener('click', function() {
                listOfProjects.splice(list.attributes.data.value, 1);
                listdiv.removeChild(list);
                let deleters = document.querySelectorAll('ul[data]');
                for (let i = 0; i < listOfProjects.length - 1; i++) {
                    deleters[i].setAttribute('data', `${i}`);
                }
            })
        }

const setStorage = () => {
    localStorage.setItem('listOfProjects', JSON.stringify(listOfProjects));
}

const getStorage = () => {
    if (localStorage.listOfProjects) {
    let objects = localStorage.getItem('listOfProjects');
    objects = JSON.parse(objects);
    for (let i = 1; i < objects.length; i++) {
        for (let j = 0; j < objects[i].length; j++) {
        objects[i][j] = new createTodo(`${objects[i][j].title}`, `${objects[i][j].description}`, `${objects[i][j].dueDate}`, `${objects[i][j].priority}`);
        }
    }
    listOfProjects = objects;
    addStorage();
    // console.log(localStorage.listOfProjects.length);
    // console.log(localStorage.listOfProjects);
    // addStorageTwo();
    return objects;
    };
}

// localStorage.listOfProjects = "";
console.log(localStorage.listOfProjects.length);
console.log(localStorage.listOfProjects);
getStorage();
console.log(listOfProjects);
// console.log(JSON.parse(localStorage.getItem('listOfProjects')));