function pageLoad() {

let content = document.querySelector("#content");
let div = document.createElement('div');
let heading = document.createElement('h1');
let button = document.createElement('button');
div.classList.add('default');
heading.textContent = "Todo List";
button.textContent = "ADD";
button.classList.add('add');
div.appendChild(heading);
div.appendChild(button);
content.appendChild(div);

}

export { pageLoad }