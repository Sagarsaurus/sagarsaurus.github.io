var currentBoxWidth = 0;
var currentBoxHeight = 0;
var startingWidth = 0;
var startingHeight = 0;
var firstClick = 0;
var timer;
var timer2;
var currentPosition;
var currentSize;
var startingPosition;
var startingSize;
var startingLeft;
var startingHeightThree;
var startingWidthThree;
var currentWidthThree;
var currentHeightThree;
var one;
var two;
var three;
var four;


function buttonOneHandler() {
    var div1 = document.getElementById("div1");
    if(currentBoxWidth==0 || currentBoxHeight == 0) {
        currentBoxWidth = 150;
        currentBoxHeight = 150;
    }
    startingHeight = currentBoxHeight;
    startingWidth =  currentBoxWidth;
    startingLeft = 30;
    timer = setInterval(animation, 0.01);
}

function animation() {
    if(firstClick==0) {
        div1.style.width = currentBoxWidth+"px";
        div1.style.height = currentBoxHeight+"px";
        div1.style.left = startingLeft+"px";
        div1.style.opacity = '0.5';
        currentBoxWidth+=1.5;
        currentBoxHeight+=1.5;
        startingLeft+=2.5;
        if(currentBoxHeight - startingHeight > 150) {
            clearInterval(timer);
            firstClick = 1;
        }
    }

    else {
        div1.style.width = currentBoxWidth+"px";
        div1.style.height = currentBoxHeight+"px";
        div1.style.opacity = '0.5';
        currentBoxWidth+=1.5;
        currentBoxHeight+=1.5;
        if(currentBoxHeight - startingHeight > 150) {
            clearInterval(timer);
        }   
    }
}

function buttonTwoHandler() {
    currentPosition = startingPosition = 30;
    currentSize = startingSize = 1;
    var div2 = document.getElementById("div2");
    timer2 = setInterval(animationTwo, 0.1);
}

function animationTwo() {
    if(currentPosition - startingPosition == 100) {
        clearInterval(timer2);
    }
    currentPosition+=5;
    currentSize+=0.04;
    div2.style.left = (currentPosition)+'px';
    div2.style.fontSize = (currentSize)+'em';
}

function buttonThreeHandler() {
    var div3 = document.getElementById("div3"); 
    startingWidthThree = startingHeightThree = currentHeightThree = currentWidthThree = 100;
    setTimeout("phaseOne()", 100);
    div3.style.opacity = 1.0;
}

function phaseOne() {
    one = setInterval(animationThreeDrop, 0.1);
}

function phaseTwo() {
    two = setInterval(animationThreeWide, 0.1);
}

function phaseThree() {
    three = setInterval(animationThreeUp, 0.1);
}

function phaseFour() {
    four = setInterval(animationThreeShrink, 0.1);
}

function animationThreeDrop() {
    if(currentHeightThree - startingHeightThree == 200) {
        clearInterval(one);
        setTimeout("phaseTwo()", 700);
    }
    currentHeightThree+=10
    div3.style.height = currentHeightThree+'px';
    div3.style.opacity = '0.4';
}

function animationThreeWide() {
    if(currentWidthThree - startingWidthThree == 200) {
        clearInterval(two);
        setTimeout("phaseThree()", 700);
    }
    currentWidthThree+=10
    div3.style.width = currentWidthThree+'px';
    div3.style.opacity = '0.8';
}

function animationThreeUp() {
    if(currentHeightThree == startingHeightThree) {
        clearInterval(three);
        setTimeout("phaseFour()", 700);
    }
    currentHeightThree-=10
    div3.style.height = currentHeightThree+'px';
    div3.style.opacity = '0.4';
}

function animationThreeShrink() {
    if(currentWidthThree == startingWidthThree) {
        clearInterval(four);
    }
    currentWidthThree-=10
    div3.style.width = currentWidthThree+'px';
    div3.style.opacity = '0.8';
}