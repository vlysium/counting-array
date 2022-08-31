"use strict";

const array = []; //an empty array that will receive items
let i = 0; //counter

document.addEventListener("DOMContentLoaded", counting);

function counting() {
  if (array.length >= 9) {
    array.pop();
  }
  array.unshift(i);
  console.log(array);
  i++;
  //console.log(i);
  setTimeout(counting, 1000);
}
