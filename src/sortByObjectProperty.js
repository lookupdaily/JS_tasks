function sortByObjectProperty(array, property) {
  // algorithm to sort using insertion method (in-built method uses this)
  for (var i = 0; i < array.length; i++) {
    if (!array[i][property]) return 'property name does not exist';

    var item = array[i];
    for (var place = i + 1; place < array.length; place++) {
      var nextItem = array[place];
      if (item[property] > array[place][property]) {
        array[i] = nextItem;
        array[place] = item;
        item = array[i];
      }
    }
  }
  return array;
}
// if using built in method of sorting
// return array.sort((a,b) => {
//     return a[property] > b[property] ? 1 : -1;
// })

module.exports = sortByObjectProperty;
