var swap = function(array, x, y) {
  var temp = array[x];
  array[x] = array[y];
  array[y] = temp;
}

var partition = function(array, start, end) {
  var pivot = array[end];
  var pIndex = start;
  for (var i = start; i < end; i++) {
    if (array[i] <= pivot) {
      swap(array, i, pIndex);
      pIndex++;
    }
  }
  swap(array, pIndex, end);
  return pIndex;
}

var quickSort = function(array, start, end) {
  if (start < end) {
    var pIndex = partition(array, start, end);
    quickSort(array, start, pIndex - 1);
    quickSort(array, pIndex + 1, end);
  }
}

var sample = [2, 7, 1, 4, 67];
quickSort(sample, 0, sample.length);
console.log(sample);
