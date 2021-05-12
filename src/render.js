const render = (totalList) => {
    let normal = document.querySelector(".default");
    let List = document.createElement('ul');
    totalList.forEach(function(item) {
        let li = document.createElement("li");
        let text = document.createTextNode(`${item.title} ${item.description} ${item.dueDate} ${item.priority}`);
        li.appendChild(text);
        List.appendChild(li);
      });
    normal.appendChild(List);
}

export { render }