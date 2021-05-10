const moveTodo = (todo, firstList, secondList) => {
    let index = firstList.indexOf(todo);
    let newTodo = firstList.splice(index, 1);
    secondList.push(newTodo[0]);
}

export { moveTodo }