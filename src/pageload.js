function pageLoad() {

let normal = document.querySelector(".default");
let div = document.createElement('div');
let heading = document.createElement('h1');
let button = document.createElement('button');
div.classList.add('default2');
heading.textContent = "Todo List";
button.textContent = "ADD";
button.classList.add('add');
div.appendChild(heading);
div.appendChild(button);
normal.appendChild(div);

}

export { pageLoad }