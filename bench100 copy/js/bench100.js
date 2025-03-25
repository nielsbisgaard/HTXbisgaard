// script.js
console.log("hello world");
let vaegt = document.querySelectorAll('.vaegt');
const squares = document.querySelectorAll('.square');
const text = document.getElementById('text');
const text2 = document.getElementById('text2');
const text3 = document.getElementById('text3');
const text4 = document.getElementById('text4');
const vaegtDiv = document.getElementById('vaegt-div');

const vaegtArray = [];

let vaegtSelected = false; // Tracks if 'vaegt' is selected


document.body.addEventListener('click', (vaegt) => {
    if (vaegt.target.classList.contains('vaegt')) {
        vaegtSelected = true;
        vaegt.target.style.outline = '2px solid red';
        console.log("vaegt selected");
    }
    
});


text.addEventListener('click', clear);
function clear() {
    console.clear();
    vaegtSelected = false;
    //vaegt.style.outline = 'none';
}

text2.addEventListener('click', addvaegt);
function addvaegt() {
    if (vaegtArray.length<6){
        vaegtArray.push("vaegt.png");


    const div = document.createElement("div");
    div.className = "vaegt-div";
    div.id = "vaegt-div";
    document.body.appendChild(div);

    const img = document.createElement("img");
    
    img.src = "../images/vaegt.png";
    img.className = "vaegt";
    img.id = "vaegt";
    div.appendChild(img);

    vaegt = document.querySelectorAll('.vaegt');

    console.log(vaegtArray);

    } else {
        console.log("ik tro du er stor");
        console.log(vaegtArray.length);
    }
    
}

text3.addEventListener('click', removevaegt);
function removevaegt() {
    if (vaegtArray.length>0){
        vaegtArray.pop();
    console.log(vaegtArray);
    console.log(vaegtArray.length);

    const div = document.getElementById("vaegt-div");
    div.remove();

    } else {
        console.log("der er ingen vaegt");
        console.log(vaegtArray);
    }
}
text4.addEventListener('click', getdata);
function getdata() {
    console.log("vaegtArray:", vaegtArray);
    console.log("vaegtArray.length:", vaegtArray.length);
    console.log("vaegt:", vaegt);
    console.log("vaegt.length:", vaegt.length);
    console.log("vaegtSelected:", vaegtSelected);
   // console.log("selectedvaegt:", selectedvaegt);
   // console.log("selectedvaegt.style.outline:", selectedvaegt.style.outline);
    console.log(document.querySelector('.vaegt').style.outline);
}

squares.forEach((square) => {
    square.addEventListener('click', () => {
        if (vaegtSelected) {
          console.log("vaegt selected and square clicked");
            // Get the square's position
            const squareRect = square.getBoundingClientRect();
            const gridRect = document.getElementById('grid-container').getBoundingClientRect();
            
            console.log("squareRect:", squareRect);
            console.log("gridRect:", gridRect);
            // Calculate new position relative to the grid
            const newTop = squareRect.top;
            const newLeft = squareRect.left;

            console.log("gridRectTop:", gridRect.top);
            console.log("gridRectLeft:", gridRect.left);

            console.log("newTop:", newTop);
            console.log("newLeft:", newLeft);

            // Move the vaegt
            const selectedvaegt = document.querySelector('.vaegt[style*="outline: 2px solid red"]');

            if (selectedvaegt) {
              selectedvaegt.style.position = 'absolute';
              selectedvaegt.style.top = `${newTop}px`;
              selectedvaegt.style.left = `${newLeft}px`;
              console.log("noget virker");
            } else {
              console.log("Ingen vaegt fundet med stil 'outline: 2px solid red;'");
            }


             // Deselect the vaegt
            vaegtSelected = false;
            selectedvaegt.style.outline = 'none';
            console.log("håber at vaegt er blevet flyttet");
                     

  
        }
        else {
            console.log("vaegt not selected");
        }
    });
});