const projectForm = () => {
    let normal = document.querySelector(".default2");
    let form = document.createElement('form');

    let labelProject = document.createElement('label');
    let inputProject = document.createElement('input');
    labelProject.textContent = "Name of Project:";
    inputProject.setAttribute('data', 'title');
    inputProject.setAttribute('type', 'text');

    form.appendChild(labelProject);
    form.appendChild(inputProject);
    normal.appendChild(form);

}

export { projectForm }