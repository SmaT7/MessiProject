function displayalert(){    
    alert ("Aloha, there!")

}
function disalert(){
    alert ("My name is Heet")

}


function displayAdd(){
    var x = document.getElementById("firstNumber").value; 
    var y = document.getElementById("secondNumber").value; 
    var z = parseInt(x) + parseInt(y);
    alert("Answer is:"+ z);
}

function displaySubstract(){
    var x = document.getElementById("firstNumber").value; 
    var y = document.getElementById("secondNumber").value; 
    var z = parseInt(x) - parseInt(y);
    alert("Answer is:"+ z);
}

function displayMultiply(){
    var x = document.getElementById("firstNumber").value; 
    var y = document.getElementById("secondNumber").value; 
    var z = parseInt(x) * parseInt(y);
    alert("Answer is:"+ z);
}

function displayDivide(){
    var x = document.getElementById("firstNumber").value; 
    var y = document.getElementById("secondNumber").value; 
    var z = parseInt(x) / parseInt(y);
    alert("Answer is:"+ z);
}
