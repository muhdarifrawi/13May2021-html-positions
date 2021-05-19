// set variable for id position-type-1
let pstnType1 =  document.getElementById("position-types-1");
// set variable for id box-1
let box1 = document.getElementById("box-1");
// set variable for box-1-button
let box1button = document.getElementById("box-1-button");
// set attribute to detect changes in pstnType1
box1button.setAttribute("onClick", "checkPositionSet1()");

// set variables for all box-1 top, right, bottom and left
let top1 = document.getElementById("top-1");
let right1 = document.getElementById("right-1");
let bottom1 = document.getElementById("bottom-1");
let left1 = document.getElementById("left-1");

// function to change positions of box 1
function checkPositionSet1(){
    alert("success");
    box1.style.position = pstnType1.value;
    box1.style.top = top1.value + "px";
    box1.style.right = right1.value + "px";
    box1.style.bottom = bottom1.value + "px";
    box1.style.left = left1.value + "px";
}
