"use strict";

const array = []; //an empty array that will receive items
let i = 0; //counter

document.addEventListener("DOMContentLoaded", counting);

function counting() {
  array.unshift(i);
  console.log(array);
  i++;
  //console.log(i);
  setTimeout(counting, 1000);
}
