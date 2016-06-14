var mergeSort = function(array) {
  var length = array.length;
  var leftArray = [];
  var rightArray = [];
  var mid = Math.floor(length / 2);
  if (length < 2) {
    return;
  }
  for (var i = 0; i < mid; i++) {
    leftArray[i] = array[i];
  }
  for (var j = mid; j < length; j++) {
    rightArray[j - mid] = array[j];
  }
  mergeSort(leftArray);
  mergeSort(rightArray);
  merge(leftArray, rightArray, array);
}

var merge = function(left, right, array) {
  var lenLeft = left.length;
  var lenRight = right.length;
  var i, j, k = 0;
  while (i < lenLeft && j < lenRight) {
    if (left[i] <= right[j]) {
      array[k] = left[i];
      i++;
    } else {
      array[k] = right[j];
      j++;
    }
    k++;
  }
  while (i < lenLeft) {
    array[i] = left[i];
    i++;
  }
  while (j < lenRight) {
    array[j] = right[j];
    j++;
  }
}

var array = [45, 2, 1, 6, 3, 4];
mergeSort(array, 0, array.length);
console.log(array);
