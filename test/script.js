'use strict';
const hex = [0, 1, 2, 3, 4, 5, 6, 'A', 'B', 'C', 'D', 'E', 'F'];
const btn = document.getElementById('colorBtn');
const currentColor = document.getElementById('currentColor');

btn.addEventListener('click', genColor);

function genColor() {
  let hexColor = '#';
  for (let i = 0; i < 6; i++) {
    hexColor += hex[randNum()];
  }
  currentColor.innerText = hexColor;
  document.body.style.backgroundColor = hexColor;
  console.log(randNum);
}
function randNum() {
  return Math.floor(Math.random() * hex.length);
}