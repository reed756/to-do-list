const render = (totalList) => {
    let normal = document.querySelector(".default");

    for (let i = 0; i < totalList.length; i++) {
        let div = document.createElement('div');
        let List = document.createElement('ul');
        div.appendChild(List);
        normal.appendChild(div);
        // console.log(totalList[i].title);
        for (let j = 0; j < totalList[i].length; j++) {
            let todo = document.createElement('li');
            console.log(totalList[i].title);
            todo.textContent = `${totalList[i][j].title}`;
            List.appendChild(todo);
        }
    }
}

export { render }