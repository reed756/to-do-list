const addDelete = (remove, rend, List) => {
    let deleteButton = document.querySelectorAll("[data='delete']");
            deleteButton.forEach((element) => {
                element.addEventListener('click', function() {
                    remove(List, element.attributes.datanumber.value);
                    rend(List);
                })
            })
}

export { addDelete }