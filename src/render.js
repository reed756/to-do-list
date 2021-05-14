const render = (totalList) => {
    let normal = document.querySelector(".default");
    let List = document.createElement('ul');
    let li = document.createElement("li");
    let deleteButton = document.createElement('button');
    let text = document.createTextNode(`${totalList[totalList.length - 1].title} ${totalList[totalList.length - 1].description} ${totalList[totalList.length - 1].dueDate} ${totalList[totalList.length - 1].priority}`);

    deleteButton.textContent = "DELETE";
    deleteButton.setAttribute('type', 'button');
    deleteButton.setAttribute('data', 'delete');
    deleteButton.setAttribute('data-number', `${totalList.length - 1}`);
    li.appendChild(text);
    li.appendChild(deleteButton);
    List.appendChild(li);
    normal.appendChild(List);
}

export { render }