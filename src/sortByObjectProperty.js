function sortByObjectProperty(array, property) {
  // built in method of sorting
  // return array.sort((a,b) => {
  //     return a[property] > b[property] ? 1 : -1;
  // })

  // algorithm to sort using insertion method (in-built method uses this)
  for (var i = 0; i < array.length; i++) {
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

module.exports = sortByObjectProperty;
