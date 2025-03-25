console.log("hello world");
const text = document.getElementById('text');
const text2 = document.getElementById('text2');
const text3 = document.getElementById('text3');
const text4 = document.getElementById('text4');

const gridContainer = document.getElementById('grid-container');

let selectedWeight = null;
let moveAmount = 100;


function clickWeight(event) {
    const weight = event.target;
    selectedWeight = weight;
    console.log('weight clicked');
}


document.querySelectorAll('.square').forEach(square => {
    square.addEventListener('click', function () {
        if (selectedWeight) {
            moveWeightToSquare(selectedWeight, this);
            selectedWeight = null; // Fjern markeringen efter flytning
        }
    });
});

function moveWeightToSquare(weight, square) {
    const squareRect = square.getBoundingClientRect();

    // Positionér vægten over den klikkede square
    weight.style.position = 'absolute';
    weight.style.left = `${squareRect.left}px`;
    weight.style.top = `${squareRect.top}px`;

    console.log('Weight moved to square');
}

document.addEventListener('keydown', function(event) {
    if (event.key === 's') {
        moveContainerDown();
        moveAmount = 100;
    } else if (event.key === 'w') {
        moveAmount -= 10;
        moveContainerUp();
        changebaenkneger();
    }
});


function changebaenkneger() {
    if (moveAmount >= 70) {
        const baenkneger = document.getElementById('baenkneger');
        baenkneger.remove();
        const newbaenkneger = document.createElement('img');
        newbaenkneger.src = '../images/baenknegerv4.png';
        newbaenkneger.id = 'baenkneger';
        newbaenkneger.classList.add('baenkimg');
        document.body.appendChild(newbaenkneger);
    } else if (moveAmount >= 50) {
        const baenkneger = document.getElementById('baenkneger');
        baenkneger.remove();
        const newbaenkneger = document.createElement('img');
        newbaenkneger.src = '../images/baenknegerv5.png';
        newbaenkneger.id = 'baenkneger';
        newbaenkneger.classList.add('baenkimg');
        document.body.appendChild(newbaenkneger);
    } else if (moveAmount >= 30) {
        const baenkneger = document.getElementById('baenkneger');
        baenkneger.remove();
        const newbaenkneger = document.createElement('img');
        newbaenkneger.src = '../images/baenknegerv6.png';
        newbaenkneger.id = 'baenkneger';
        newbaenkneger.classList.add('baenkimg');
        document.body.appendChild(newbaenkneger);
    } else if (moveAmount <= 20) {
        const baenkneger = document.getElementById('baenkneger');
        baenkneger.remove();
        const newbaenkneger = document.createElement('img');
        newbaenkneger.src = '../images/baenknegerv7.png';
        newbaenkneger.id = 'baenkneger';
        newbaenkneger.classList.add('baenkimg');
        document.body.appendChild(newbaenkneger);
    }
}

function moveContainerDown() {
    const gridContainer = document.getElementById('grid-container');
    const weights = document.querySelectorAll('.weight');

    gridContainer.style.marginTop = 100 + 'px';

    const gridContainerTop = gridContainer.getBoundingClientRect().top;
    
    weights.forEach(weight => {
        weight.style.top = gridContainerTop + 12 + 'px';
    });

    const baenkneger = document.getElementById('baenkneger');
    baenkneger.remove();
    const newbaenkneger = document.createElement('img');
    newbaenkneger.src = '../images/baenknegerv4.png';
    newbaenkneger.id = 'baenkneger';
    newbaenkneger.classList.add('baenkimg');
    document.body.appendChild(newbaenkneger);

    console.log('vægt flyttet ned');
}
function moveContainerUp() {
    const gridContainer = document.getElementById('grid-container');
    const weights = document.querySelectorAll('.weight');
if (moveAmount >= 0) {
    gridContainer.style.marginTop = moveAmount + 'px';
    const gridContainerTop = gridContainer.getBoundingClientRect().top;
    weights.forEach(weight => {
    weight.style.top = gridContainerTop + 12 + 'px';
    });
    console.log('vægt flyttet op');
} else {
        console.log('vægt kan ik komme højere');
    }
}



text2.addEventListener('click', addWeight);


function addWeight() {
    const newWeight = document.createElement('div');
    newWeight.className = 'weight';

    const img = document.createElement('img');
    img.src = '../images/vaegt.png';

    newWeight.addEventListener('click', clickWeight);

    newWeight.appendChild(img);

    document.body.appendChild(newWeight);
    console.log('weight added');
}

text3.addEventListener('click', removeWeight); 
function removeWeight() {
    document.querySelectorAll('.weight').forEach(weight => weight.remove());
    selectedWeight = null; // Nulstil valgt vægt
    console.log('Weights removed');
}



text4.addEventListener('click', data);
function data() {
    console.log('gridcontainer style margin top:', gridContainer.style.marginTop,
    'moveAmount:', moveAmount);
}