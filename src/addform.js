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
    inputTitle.setAttribute('data', 'title');
    inputTitle.setAttribute('type', 'text');

    let labelDescription = document.createElement('label');
    let inputDescription = document.createElement('input');
    labelDescription.textContent = "Description:";
    inputDescription.setAttribute('data', 'description');
    inputDescription.setAttribute('type', 'text');

    let labelDueDate = document.createElement('label');
    let inputDueDate = document.createElement('input');
    labelDueDate.textContent = "Due Date:";
    inputDueDate.setAttribute('data', 'duedate');
    inputDueDate.setAttribute('type', 'date');

    let labelPriority1 = document.createElement('label');
    let inputPriority1 = document.createElement('input');
    labelPriority1.textContent = "Priority:";
    inputPriority1.setAttribute('data', 'priority');
    inputPriority1.setAttribute('type', 'radio');

    let labelPriority2 = document.createElement('label');
    let inputPriority2 = document.createElement('input');
    labelPriority2.textContent = "Priority:";
    inputPriority2.setAttribute('data', 'priority');
    inputPriority2.setAttribute('type', 'radio');

    let labelPriority3 = document.createElement('label');
    let inputPriority3 = document.createElement('input');
    labelPriority3.textContent = "Priority:";
    inputPriority3.setAttribute('data', 'priority');
    inputPriority3.setAttribute('type', 'radio');

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
    form.appendChild(labelPriority1);
    form.appendChild(inputPriority1);
    form.appendChild(labelPriority2);
    form.appendChild(inputPriority2);
    form.appendChild(labelPriority3);
    form.appendChild(inputPriority3);
    form.appendChild(br4);
    form.appendChild(button);
    form.appendChild(cancel);

    normal.appendChild(form);
}

export { addForm }