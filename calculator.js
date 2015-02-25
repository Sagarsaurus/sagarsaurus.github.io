var state=0;
var backgroundState = 0;
var buttonBackgroundState = 0;
var themeState = 0;
var arg1, arg2, answer, operation;
arg1 = "";
arg2 = "";
answer = "";
operation = "";
function compute(button){
    var character = button.innerHTML;
    answer = 0;
    if (character=="C"){
        document.getElementById("arg1").innerHTML = "";
        document.getElementById("operation").innerHTML = "";
        document.getElementById("arg2").innerHTML = "";
        document.getElementById("divider").style.visibility="hidden";
        document.getElementById("result").innerHTML = "";
        arg1 = "";
        arg2 = "";
        answer = "";
        operation = "";
        state=0;
    }
    else if(state==0) {
        if((character=="/" || character=="x" || character=="+" || character=="-") && arg1.length > 0) {
            console.log(arg1.length);
            operation = character;
            document.getElementById("operation").innerHTML = operation;
            state = 1;
        }

        else if(character != "/" && character!="x" && character!="+" && character!="-"){
            arg1+=character;
            document.getElementById("arg1").innerHTML = arg1;
        }
    }

    else if(state==1) {
        if(character=="=") {
            if(operation=="/") {
                if(arg2=="0") {
                    document.getElementById("result").innerHTML = "infinity";
                }

                else {
                    answer = parseInt(arg1) / parseInt(arg2);
                    document.getElementById("result").innerHTML = answer.toFixed(6);
                }
            }

            else if (operation=="x") {
                answer = parseInt(arg1) * parseInt(arg2);
                document.getElementById("result").innerHTML = answer.toFixed(6);
            }

            else if(operation=="-") {
                answer = parseInt(arg1) - parseInt(arg2);
                document.getElementById("result").innerHTML = answer.toFixed(6);
            }

            else if(operation=="+") {
                answer = parseInt(arg1) + parseInt(arg2);
                document.getElementById("result").innerHTML = answer.toFixed(6);
            }
            state = 2;
        }

        else if(character!="/" && character!="x" && character!="+" && character!="-"){
            arg2+=character;
            document.getElementById("arg2").innerHTML = arg2;
        }
    } 
}

function changeBackground(button) {
    if(this.themeState==0 && this.backgroundState==0 && this.buttonBackgroundState==0) {
        document.body.style.background="gold";
        backgroundState=1;
    }
    else if(this.themeState==0 && this.backgroundState==1 && this.buttonBackgroundState==0) {
        document.body.style.background="white";
        this.backgroundState=0;
    }
}

function buttonBackground(button){
    if(this.themeState==0 && this.backgroundState==0 && this.buttonBackgroundState==0) {
        var x = document.getElementsByClassName("button");
        for (var i = 0; i < x.length; i++) {
            x[i].style.backgroundColor = "green";
        }
        this.buttonBackgroundState=1;
    }
 
    else if(this.themeState==0 && this.backgroundState==0 && this.buttonBackgroundState==1) {
        var x = document.getElementsByClassName("button");
        for (var i = 0; i < x.length; i++) {
            x[i].style.backgroundColor = "black";
        }
        buttonBackgroundState=0;
    }
}

function changeTheme(button) {
    if(this.themeState==0 && this.backgroundState==0 && this.buttonBackgroundState==0) {
        document.body.style.background="gold";
        var x = document.getElementsByClassName("button");
        for (var i = 0; i < x.length; i++) {
            x[i].style.backgroundColor = "green";
        }
        var x = document.getElementsByClassName("argument");
        for (var i = 0; i < x.length; i++) {
            x[i].style.fontFamily = "Comic Sans";
        }
        document.getElementById("window").style.background="green";
        document.getElementById("name").style.background="green";
        this.themeState=1;
    }
    else if(this.themeState==1 && this.backgroundState==0 && this.buttonBackgroundState==0) {
        document.body.style.background="white";
        var x = document.getElementsByClassName("button");
        for (var i = 0; i < x.length; i++) {
            x[i].style.backgroundColor = "black";
        }
        var x = document.getElementsByClassName("argument");
        for (var i = 0; i < x.length; i++) {
            x[i].style.fontFamily = "Arial";
        }
        document.getElementById("window").style.background="black";
        document.getElementById("name").style.background="black";
        this.themeState=0;
    }
}

function mouseOver(obj){
    if(this.themeState==1 || this.buttonBackgroundState==1) {
        obj.style.background="#009933"
    }
    else {
        obj.style.background="#666";
    }
}

function mouseDown(obj){
    if(this.themestate==1 || this.buttonBackgroundState==1) {
        obj.style.background="00FF33";
        obj.style.boxShadow = "inset 1vh 1vh 1vh #888";

    }
    else {
        obj.style.background="#444";
        obj.style.boxShadow = "inset 1vh 1vh 1vh #888";
    }
}

function mouseUp(obj){
    if(this.themeState==1 || this.buttonBackgroundState==1) {
        obj.style.background="#009933"
        obj.style.boxShadow = "1vh 1vh 1vh #888";       
    }
    else {
        obj.style.background="#666";
        obj.style.boxShadow = "1vh 1vh 1vh #888";       
    }
}

function mouseOut(obj){
    if(this.themeState==1 || this.buttonBackgroundState==1) {
        obj.style.background="green";
    }
    else {
        obj.style.background="black";       
    }
}