let incr = document.querySelector('.incr');
let decr = document.querySelector('.decr');
let reset = document.querySelector('.reset');
let num_count = document.querySelector('#num_count');

num_count.innerHTML = 0;

let increment = () => {
  num_count.innerHTML++; 
}

let decrement = () => {
  num_count.innerHTML--; 
}

let resetNumber = () => {
  num_count.innerHTML = 0; 
}

incr.addEventListener('click',increment);
decr.addEventListener('click',decrement);
reset.addEventListener('click',resetNumber);
