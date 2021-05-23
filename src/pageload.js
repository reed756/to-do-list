function pageLoad() {

let content = document.querySelector("#content");
let div = document.createElement('div');
let heading = document.createElement('h1');
let button = document.createElement('button');
let List = document.createElement('ul');
let buttonTwo = document.createElement('button');
div.classList.add('default2');
List.classList.add('defaultList');
List.innerText = "DEFAULT";
heading.textContent = "Todo List";
button.textContent = "ADD";
button.classList.add('add');
buttonTwo.textContent = "ADD PROJECT";
buttonTwo.classList.add('new-project');
div.appendChild(buttonTwo);
div.appendChild(heading);
div.appendChild(button);
content.appendChild(div);
content.appendChild(List);

}

export { pageLoad }