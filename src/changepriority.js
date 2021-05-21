const changePriority = (current) => {
    if (current === 'red') {
        return 'green';
    } else if (current === 'orange') {
        return 'red';
    } else if (current === 'green') {
        return 'orange';
    }
}

export { changePriority }