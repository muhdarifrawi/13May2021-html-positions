// set variable for id box-1
let box1 = document.getElementById("box-1");
//set variable for id box-2
let box2 = document.getElementById("box-2");

// set variable for id position-type-1
let pstnType1 =  document.getElementById("position-types-1");
// set variable for id position-type-2
let pstnType2 =  document.getElementById("position-types-2");

// set variables for all box-1 top, right, bottom and left
let top1 = document.getElementById("top-1");
let right1 = document.getElementById("right-1");
let bottom1 = document.getElementById("bottom-1");
let left1 = document.getElementById("left-1");

// set variables for all box-2 top, right, bottom and left
let top2 = document.getElementById("top-2");
let right2 = document.getElementById("right-2");
let bottom2 = document.getElementById("bottom-2");
let left2 = document.getElementById("left-2");

// pstnType1.setAttribute("onChange","checkPositionSet1()");
// top1.setAttribute("onChange","checkPositionSet1()");
// right1.setAttribute("onChange","checkPositionSet1()");
// bottom1.setAttribute("onChange","checkPositionSet1()");
// left1.setAttribute("onChange","checkPositionSet1()");

document.getElementById("set-button").setAttribute("onClick", "setPosition()");

// function to change positions of box 1
function checkPositionSet1(){
    // alert("success");
    box1.style.position = pstnType1.value;
    
    // set variables for checkboxes state 
    let top1chkbox = document.getElementById("top-1-checkbox").checked;
    let right1chkbox = document.getElementById("right-1-checkbox").checked;
    let bottom1chkbox = document.getElementById("bottom-1-checkbox").checked;
    let left1chkbox = document.getElementById("left-1-checkbox").checked;

    if (top1chkbox == true) {
        box1.style.top = top1.value + "px";
    }
    else {
        box1.style.top = "auto";
    }

    if (right1chkbox == true) {
        box1.style.right = right1.value + "px";
    }
    else {
        box1.style.right = "auto";
    }

    if (bottom1chkbox == true) {
        box1.style.bottom = bottom1.value + "px";
    }
    else {
        box1.style.bottom = "auto";
    }

    if (left1chkbox == true) {
        box1.style.left = left1.value + "px";
    }
    else {
        box1.style.left = "auto";
    }

    console.log(left1chkbox);

}

// function to change positions of box 1
function checkPositionSet2(){
    // alert("success");
    box2.style.position = pstnType2.value;
    
    // set variables for checkboxes state 
    let top2chkbox = document.getElementById("top-2-checkbox").checked;
    let right2chkbox = document.getElementById("right-2-checkbox").checked;
    let bottom2chkbox = document.getElementById("bottom-2-checkbox").checked;
    let left2chkbox = document.getElementById("left-2-checkbox").checked;

    if (top2chkbox == true) {
        box2.style.top = top2.value + "px";
    }
    else {
        box2.style.top = "auto";
    }

    if (right2chkbox == true) {
        box2.style.right = right2.value + "px";
    }
    else {
        box2.style.right = "auto";
    }

    if (bottom2chkbox == true) {
        box2.style.bottom = bottom2.value + "px";
    }
    else {
        box2.style.bottom = "auto";
    }

    if (left2chkbox == true) {
        box2.style.left = left2.value + "px";
    }
    else {
        box2.style.left = "auto";
    }

}

function setPosition(){
    checkPositionSet1();
    checkPositionSet2();
}