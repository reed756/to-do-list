const addForm = () => {
    let normal = document.querySelector(".default2");
    let form = document.createElement('form');
    let br1 = document.createElement('br');
    let br2 = document.createElement('br');
    let br3 = document.createElement('br');
    let br4 = document.createElement('br');

    let labelTitle = document.createElement('label');
    let inputTitle = document.createElement('input');
    labelTitle.textContent = "Title:";

    let labelDescription = document.createElement('label');
    let inputDescription = document.createElement('input');
    labelDescription.textContent = "Description:";

    let labelDueDate = document.createElement('label');
    let inputDueDate = document.createElement('input');
    labelDueDate.textContent = "Due Date:";

    let labelPriority = document.createElement('label');
    let inputPriority = document.createElement('input');
    labelPriority.textContent = "Priority:";

    let button = document.createElement('button');
    let cancel = document.createElement('button');
    button.textContent = "ADD TODO";
    button.setAttribute('type', 'button');
    cancel.textContent = "CANCEL";
    cancel.classList.add('cancel');
    cancel.setAttribute('type', 'button');
    
    form.appendChild(labelTitle);
    form.appendChild(inputTitle);
    form.appendChild(br1);
    form.appendChild(labelDescription);
    form.appendChild(inputDescription);
    form.appendChild(br2);
    form.appendChild(labelDueDate);
    form.appendChild(inputDueDate);
    form.appendChild(br3);
    form.appendChild(labelPriority);
    form.appendChild(inputPriority);
    form.appendChild(br4);
    form.appendChild(button);
    form.appendChild(cancel);

    normal.appendChild(form);
}

export { addForm }