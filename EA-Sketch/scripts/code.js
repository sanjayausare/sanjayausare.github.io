const container = document.querySelector('.container');
const changeSize = document.querySelector('#changeSize');
const reset = document.querySelector('#reset');

function CreateGrid(x=16){
    for(let i=0;i<x*x;i++) {
        const div = document.createElement('div');
        div.classList.add('div');
        div.style.width = 575/x + "px";
        div.style.height = 575/x + "px";
        div.addEventListener("mouseover", function(){
            div.style.backgroundColor = `hsla(${Math.random() * 360}, 100%, 50%, 1)`;
        });
        container.appendChild(div);
    }
}

function erase() {
    /*const gridItems = document.querySelectorAll('.container > div');
    gridItems.forEach((div) => {
    div.style.backgroundColor = '#fff';
  });*/
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    CreateGrid();
}

reset.addEventListener('click',erase);
changeSize.addEventListener('click',function(){
    erase();
    size = parseInt(prompt("Enter the size of the Grid:",16));
    document.documentElement.style.setProperty('--size', size);
    
});
CreateGrid();
