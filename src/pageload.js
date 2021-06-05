function pageLoad() {

let content = document.querySelector("#content");
let div = document.createElement('div');
let headDiv = document.createElement('div');
let listDiv = document.createElement('div');
let heading = document.createElement('h1');
let button = document.createElement('button');
let List = document.createElement('ul');
let buttonTwo = document.createElement('button');
div.classList.add('default2');
headDiv.classList.add('head-div');
listDiv.classList.add('listdiv');
List.classList.add('defaultList');
List.innerText = "DEFAULT";
List.setAttribute('data', '0');
heading.textContent = "Todo List";
button.textContent = "+";
button.setAttribute('data', 1);
button.classList.add('add');
buttonTwo.textContent = "ADD PROJECT";
buttonTwo.classList.add('new-project');
headDiv.appendChild(heading);
headDiv.appendChild(buttonTwo);
div.appendChild(headDiv);
List.appendChild(button);
listDiv.appendChild(List);
content.appendChild(div);
content.appendChild(listDiv);

}

export { pageLoad }