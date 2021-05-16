const render = (totalList) => {

  let normal = document.querySelector(".default");
  let defaultlist = document.querySelector('.defaultList');
  // let liNums = document.querySelectorAll('.todo').length;
  // let liNum = document.querySelectorAll('.todo');
    
  if (totalList.length > 0 && !defaultlist) {
      let div = document.createElement('div');
      div.classList.add('defaultList');
      let List = document.createElement('ul');
      let li = document.createElement("li");
      li.classList.add('todo');
      let deleteButton = document.createElement('button');
      let text = document.createTextNode(`${totalList[totalList.length - 1].title} ${totalList[totalList.length - 1].description} ${totalList[totalList.length - 1].dueDate} ${totalList[totalList.length - 1].priority}`);

      deleteButton.textContent = "DELETE";
      deleteButton.setAttribute('type', 'button');
      deleteButton.setAttribute('data', 'delete');
      deleteButton.setAttribute('datanumber', `${totalList.length - 1}`);
      li.appendChild(text);
      li.appendChild(deleteButton);
      List.appendChild(li);
      div.appendChild(List);
      normal.appendChild(div);
    } else if (totalList.length > 0 && defaultlist) {
      normal.removeChild(defaultlist);
      let List = document.createElement('ul');
      let div = document.createElement('div');
      div.appendChild(List);
      normal.appendChild(div);

      for (let i = 0; i < totalList.length; i++) {
        div.classList.add('defaultList');
        let li = document.createElement("li");
        li.classList.add('todo');
        let deleteButton = document.createElement('button');
        let text = document.createTextNode(`${totalList[i].title} ${totalList[i].description} ${totalList[i].dueDate} ${totalList[i].priority}`);

        deleteButton.textContent = "DELETE";
        deleteButton.setAttribute('type', 'button');
        deleteButton.setAttribute('data', 'delete');
        deleteButton.setAttribute('datanumber', `${i}`);
        li.appendChild(text);
        li.appendChild(deleteButton);
        List.appendChild(li);
      }
    } else if (totalList.length === 0 && defaultlist) {
      normal.removeChild(defaultlist);
    }
    // else if (totalList.length - 1 === 0 && defaultlist) {
    //   normal.removeChild(defaultlist);
    // } 
    // else if (totalList.length === liNums) {
    //   liNum.forEach(function(item) {
    //     console.log(item.nodeValue);
    //   })
    // }
}

export { render }