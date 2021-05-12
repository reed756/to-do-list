const addForm = () => {
    let normal = document.querySelector(".default");
    let form = document.createElement('form');
    let inputTitle = document.createElement('input');
    let inputDescription = document.createElement('input');
    let inputDueDate = document.createElement('input');
    let inputPriority = document.createElement('input');
    
    form.appendChild(inputTitle);
    form.appendChild(inputDescription);
    form.appendChild(inputDueDate);
    form.appendChild(inputPriority);

    normal.appendChild(form);
}

export { addForm }