const getTodo = () => {
    let title = 'shopping'
    let description = 'need to shop';
    let dueDate = 'whenever';
    let priority = 'asap';
    let finalTodo = {title, description, dueDate, priority};
    return finalTodo;
}

export { getTodo }