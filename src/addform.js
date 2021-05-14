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

    let labelPriority = document.createElement('label');
    let selectPriority = document.createElement('select');
    labelPriority.textContent = "Priority:";
    selectPriority.setAttribute('data', 'priority');

    let optionOne = document.createElement('option');
    optionOne.textContent = "Red";
    optionOne.setAttribute('value', 'red');

    let optionTwo = document.createElement('option');
    optionTwo.textContent = "Orange";
    optionTwo.setAttribute('value', 'orange');

    let optionThree = document.createElement('option');
    optionThree.textContent = "Green";
    optionThree.setAttribute('value', 'green');

    let button = document.createElement('button');
    let cancel = document.createElement('button');
    button.textContent = "ADD TODO";
    button.setAttribute('type', 'button');
    cancel.textContent = "CANCEL";
    cancel.classList.add('cancel');
    cancel.setAttribute('type', 'button');
    button.setAttribute('data', 'add');
    
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
    selectPriority.appendChild(optionOne);
    selectPriority.appendChild(optionTwo);
    selectPriority.appendChild(optionThree);
    form.appendChild(selectPriority);
    form.appendChild(br4);
    form.appendChild(button);
    form.appendChild(cancel);

    normal.appendChild(form);
}

export { addForm }