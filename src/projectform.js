const projectForm = () => {
    let normal = document.querySelector(".default2");
    let form = document.createElement('form');
    let labelProject = document.createElement('label');
    let inputProject = document.createElement('input');
    let buttonProject = document.createElement('button');
    let cancelProject = document.createElement('button');
    let div = document.createElement('div');
    div.classList.add('form-div');
    labelProject.textContent = "Name of Project:";
    buttonProject.textContent = "CREATE PROJECT";
    buttonProject.setAttribute('type', 'button');
    buttonProject.classList.add('addproject');
    cancelProject.textContent = "CANCEL";
    cancelProject.classList.add('cancel');
    form.classList.add('form');
    cancelProject.setAttribute('type', 'button');
    inputProject.setAttribute('data', 'title');
    inputProject.setAttribute('type', 'text');

    form.appendChild(labelProject);
    form.appendChild(inputProject);
    form.appendChild(buttonProject);
    form.appendChild(cancelProject);
    div.appendChild(form);
    normal.appendChild(div);
}

export { projectForm }