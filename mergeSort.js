var mergeSort = function(array) {
  var length = array.length;
  var leftArray = [];
  var rightArray = [];
  var mid = Math.floor(length / 2); //Calculate mid
  if (length < 2) { //If array smaller than two then can't be split so return. Recursion end.
    return;
  }
  // Populate left and right arrays
  for (var i = 0; i < mid; i++) {
    leftArray[i] = array[i];
  }
  for (var j = mid; j < length; j++) {
    rightArray[j - mid] = array[j];
  }
  //Call mergeSort on both arrays
  mergeSort(leftArray);
  mergeSort(rightArray);
  
  //Merge the two
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
  
  //Whichever list is empty, flush it out to the end of the merged array
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
