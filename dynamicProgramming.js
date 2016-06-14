
//Maximal subArray problem
var maxSubArray = function(array) {
  var n = array.length;
  var max = -250;
  for (var start_index = 0; start_index < n; start_index++) {
    var sum = 0;
    for (var sub_array = 1; sub_array <= n; sub_array++) {
      if (sub_index + sub_array > n) {
        break;
      }
      sum = sum + array[start_index + sub_array - 1];
      max = Math.max(max, sum);
    }
  }
  return max;
}

console.log(maxSubArray[3, -2, 5, 1]);

//Kadane's algorithm
var kadane = function(array) {
  //Max of the subArray that ends that current indice and global maxinum
  max_current = max_global = array[0];
  for (var i = 1; i < array.length; i++) {
    max_current = max(array[i], array[i] + max_current);
    if (max_current > max_global) {
      max_global = max_current;
    }
  }
}

//Longest Common Subsequence
var lcs = function(string1, string2) {
  var max = 0;
  var charArray1 = string.split("");
  var charArray2 = string.split("");
  var matrix = new Array();
  for (var i = 0; i < charArray1.length; i++) {
    matrix[i] = new Array();
    for (var j = 0; j < charArray2.length; j++) {
      matrix[i][j] = 0;
    }
  }

  for (var i = 1; i < matrix.length; i++) {
    for (var j = 1; j < matrix[i].length; j++) {
      if (charArray1[i] == charArray[j]) {
        matrix[i][j] = matrix[i - 1][j - 1] + 1;
      } else if (charArray1[i] != charArray2[j]) {
        matrix[i][j] = Math.max(matrix[i][j - 1], matrix[i - 1][j]);
      }
      if (matrix[i][j] > max) {
        max = matrix[i][j];
      }
    }
  }
  return max;
}

//Towers of Hanoi
var towerOfHanoi = function(n, a, b, c) {
  if (n == 1) {
    console.log("Move disk from " + a + " to " + c);
  } else {
    towerOfHanoi(n - 1, a, c, b);
    towerOfHanoi(1, a, b, c);
    towerOfHanoi(n - 1, b, a, c);
  }
}

towerOfHanoi(3, "a", "b", "c");
