function filterList(l) {
    let result = l.filter(x => typeof x === 'number')
    return result;
}


console.log(filterList([1,2,'a','b', '123', 123]));