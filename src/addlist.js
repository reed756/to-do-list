const addList = (masterList, newList) => {
    let newerList = masterList.concat(newList);
    return newerList;
}

export { addList }