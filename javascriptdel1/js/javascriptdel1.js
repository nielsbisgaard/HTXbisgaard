console.log("start javasript");

const button1 = document.getElementById("button1")
const button2 = document.getElementById("button2")
const button3 = document.getElementById("button3")
const button4 = document.getElementById("button4");
const button5 = document.getElementById("button5");
const button6 = document.getElementById("button6");
const button7 = document.getElementById("button7")
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const input3 = document.getElementById("input3");
const outputtext1 = document.getElementById("outputtext1");
const outputtext2 = document.getElementById("outputtext2");
const outputtext3 = document.getElementById("outputtext3");
const outputtext4 = document.getElementById("outputtext4");
const antalAbeArray = []
const abeBilledeArray = ["abe1.png", "abe2.png", "abe3.png"];

/* explosion video */
const explosion = document.getElementById("explosion")
explosion.addEventListener("ended", () => {
    explosion.classList.remove("playing");
})


button1.addEventListener("click", button1click);
button2.addEventListener("click", button2click);
button3.addEventListener("click", button3click);
button4.addEventListener("click", button4click);
button5.addEventListener("click", button5click);
button6.addEventListener("click", addAbe);
button7.addEventListener("click", removeAbe);

function sumToTal(tal1,tal2) {
    let sum = parseInt(tal1) + parseInt(tal2);
    console.log(sum);
    return sum;
}
function button1click() {
    console.log("button1 clicked");
    input1.value = "";
    input2.value = "";
    explosion.play();
    explosion.classList.add("playing");
    console.clear();
}
function button2click() {
    console.log("button2 clicked");
    let tal1 = input1.value;
    let tal2 = input2.value;

    let sum = sumToTal(tal1,tal2);
    
    outputtext1.textContent="sum ="+sum;
}
function button3click() {
    console.log("button3 clicked");
    if(input1.value=="") {
        console.log(input1.value)
        outputtext1.textContent=("du har ikke skidt")
    }
   
    else if (input1.value<"0") {
        console.log(input1.value)
        outputtext1.textContent=("det kan ikke lade sig gøre")
    }
     else if (input1.value>="5") {
        console.log(input1.value)
        outputtext1.textContent=("ring til lægen")
    }
    else {
        console.log(input1.value)
        outputtext1.textContent=("lort")
    }
}
function button4click() {
    //parameter1(input1.value);
    parameter2(input1.value,input2.value);
}
function button5click() {
    console.log("niga");
}
function countAber() {
    outputtext4.textContent = antalAbeArray.length;
    console.log("Der er " + antalAbeArray.length + " aber på skærmen");
}
function addAbe() {
    if (antalAbeArray.length<100){
        antalAbeArray.push("abe");
    console.log("+1 abe");
    countAber();
    const billede = abeBilledeArray[Math.floor(Math.random() * abeBilledeArray.length)];
    console.log(billede);
    const img = document.createElement("img");
    img.src = "images/abepng/" + billede;
    document.body.appendChild(img);
    } else {
        console.log("Der kan ikke være flere abe");
    }
    
}
function removeAbe() {
    if (antalAbeArray.length>0){
        antalAbeArray.pop();
        console.log("-1 abe");
        countAber();
        const billeder = document.body.getElementsByTagName("img");
        if (billeder.length>0) {
            const sidsteBillede = billeder[billeder.length -1];
            sidsteBillede.parentNode.removeChild(sidsteBillede);
        } else {
            console.log("Der er ingen billeder?");
        }
    } else {
        console.log("Der er ingen abe");
    }
}
function parameter1(a){
console.log(a);
}

function parameter2(a,b){
    if (a<=0 && b<=0){
        console.log("begge er under 0")
    }
    else if (a>0 && b>0){
        console.log("begge er over 0")
    }
    else {
        console.log("prøv at lav begge tal positiv eller negativ")
    }
}
function parameter3(a,b,c){
    if (a<=0 || b<=0 || c<=0){
        
}
}


