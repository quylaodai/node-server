function pickOutRandomElements(list, numElement) {
    if (!Array.isArray(list)) return console.error("invalid array", list);

    if (numElement > list.length) return console.error("not enough elements", list, numElement);
    const cloneList = list.slice();
    const results = [];
    for (let count = 0; count < numElement; count++) {
        let index = Math.floor(Math.random() * cloneList.length);
        results.push(cloneList.splice(index, 1)[0]);
    }
    return results;
}

module.exports = {
    pickOutRandomElements
}