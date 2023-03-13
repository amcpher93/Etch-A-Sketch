let val = document.querySelector('#container');
//const color = document.querySelector('');



let setting = 'blue';



let pink = document.getElementById('pink');

pink.addEventListener('click', function() {
    setting = 'pink';
    console.log(setting);
});

let red = document.getElementById('red');

red.addEventListener('click', function() {
    setting = 'red';
    console.log(setting);
});

let black = document.getElementById('black');

black.addEventListener('click', function() {
    setting = 'black';
    console.log(setting);
});

val.style.width = "960px";
val.style.height = "960px"; 
val.style.display = "flex";
val.style.flexWrap = "wrap";

function createGrid(numDivs) {
    for (let r = 0; r < numDivs; r++) {
        for (let c = 0; c < numDivs; c++) {
            let div = document.createElement('div');
            div.classList.add('gridElement');
            let gridSize = 960/ numDivs - 2; 
            div.style.width = gridSize + "px";
            div.style.height = gridSize + "px";
            val.appendChild(div); 
        }
    }
}
createGrid(12);

let cell = document.querySelectorAll('.gridElement');
console.log(cell);
function createHover (){
    for ( let i = 0; i <= cell.length; i++){
            cell[i].addEventListener('mouseover', function (e) {
                cell[i].style.backgroundColor = setting;
            })       
    }
}

createHover();