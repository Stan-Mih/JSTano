function sortAnArrayBy2Criteria(arr) {

    let sortedArray = arr.sort((a,b) => (a.length - b.length || a.localeCompare(b)));
    sortedArray.forEach(el => console.log(el));

}sortAnArrayBy2Criteria(['alpha', 'beta', 'gamma'] )
sortAnArrayBy2Criteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George'])