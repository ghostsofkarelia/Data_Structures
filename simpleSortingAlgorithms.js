var selectionSort = function(array) {
  for (var i = 0; i < array.length; i++) {
    var minIndex = i;
    for (var j = i + 1; j < array.length; j++) {
      if (array[minIndex] > array[j]) {
        minIndex = j;
      }
    }
    swap(array, i, minIndex);
  }
}

var insertionSort = function() {
  for (var i = 1; i < array.length; i++) {
    var value = array[i];
    var hole = i;
    while (hole > 0 && array[hole - 1] > value) {
      array[hole] = array[hole - 1];
      hole = hole - 1;
    }
    array[hole] = value;
  }
}

var bubbleSort = function() {
  for (var i = 0; i < array.length; i++) //No of passes
  {
    var flag = false;
    for (var j = 0; j < array.length - i; j++) {
      if (array[j] > array[j + 1]) {
        flag = true;
        swap(array, j, j + 1);
      }
    }
    if (!flag) {
      break;
    }
  }
}

var swap = function(array, x, y) {
  var temp = array[x];
  array[x] = array[y];
  array[y] = temp;
}

var array = [3, 5, 2, 56, 3, 4, 90, 789];
//selectionSort(array);
bubbleSort(array);
console.log(array);
