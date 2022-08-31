"use strict";

const array = []; //an empty array that will receive items
let i = 0; //counter

document.addEventListener("DOMContentLoaded", counting);

function counting() {
  i++;
  console.log(i);
  setTimeout(counting, 1000);
}
