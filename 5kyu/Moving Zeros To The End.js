/*
Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
*/

var moveZeros = function (arr) {
  let arr2 = [];
  let arr3 = [];

  arr.forEach(function (item) {
    if (item !== 0) {
      arr2.push(item);
    } else {
      arr3.push(item);
    }
  });

  return arr2.concat(arr3);
}