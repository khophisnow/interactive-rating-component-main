function first_selected(){
    document.getElementById('first-option').style.backgroundColor = "hsl(217, 12%, 63%)";
    document.getElementById('first-option').style.color = "hsl(0, 0%, 100%)";
    document.getElementById('second-option').style.backgroundColor = "";
    document.getElementById('second-option').style.color = "";
    document.getElementById('third-option').style.backgroundColor = "";
    document.getElementById('third-option').style.color = "";
    document.getElementById('fourth-option').style.backgroundColor = "";
    document.getElementById('fourth-option').style.color = "";
    document.getElementById('fifth-option').style.backgroundColor = "";
    document.getElementById('fifth-option').style.color = "";
    document.getElementById('option-selected').innerHTML = " 1 ";
}
function second_selected(){
    document.getElementById('first-option').style.backgroundColor = "";
    document.getElementById('first-option').style.color = "";
    document.getElementById('second-option').style.backgroundColor = "hsl(217, 12%, 63%)";
    document.getElementById('second-option').style.color = "hsl(0, 0%, 100%)";
    document.getElementById('third-option').style.backgroundColor = "";
    document.getElementById('third-option').style.color = "";
    document.getElementById('fourth-option').style.backgroundColor = "";
    document.getElementById('fourth-option').style.color = "";
    document.getElementById('fifth-option').style.backgroundColor = "";
    document.getElementById('fifth-option').style.color = "";
    document.getElementById('option-selected').innerHTML = "  2 ";
}
function third_selected(){
    document.getElementById('first-option').style.backgroundColor = "";
    document.getElementById('first-option').style.color = "";
    document.getElementById('second-option').style.backgroundColor = "";
    document.getElementById('second-option').style.color = "";
    document.getElementById('third-option').style.backgroundColor = "hsl(217, 12%, 63%)";
    document.getElementById('third-option').style.color = "hsl(0, 0%, 100%)";
    document.getElementById('fourth-option').style.backgroundColor = "";
    document.getElementById('fourth-option').style.color = "";
    document.getElementById('fifth-option').style.backgroundColor = "";
    document.getElementById('fifth-option').style.color = "";
    document.getElementById('option-selected').innerHTML = " 3 ";
}
function fourth_selected(){
    document.getElementById('first-option').style.backgroundColor = "";
    document.getElementById('first-option').style.color = "";
    document.getElementById('second-option').style.backgroundColor = "";
    document.getElementById('second-option').style.color = "";
    document.getElementById('third-option').style.backgroundColor = "";
    document.getElementById('third-option').style.color = "";
    document.getElementById('fourth-option').style.backgroundColor = "hsl(217, 12%, 63%)";
    document.getElementById('fourth-option').style.color = "hsl(0, 0%, 100%)";
    document.getElementById('fifth-option').style.backgroundColor = "";
    document.getElementById('fifth-option').style.color = "";
    document.getElementById('option-selected').innerHTML = " 4 ";
}
function fifth_selected(){
    document.getElementById('first-option').style.backgroundColor = "";
    document.getElementById('first-option').style.color = "";
    document.getElementById('second-option').style.backgroundColor = "";
    document.getElementById('second-option').style.color = "";
    document.getElementById('third-option').style.backgroundColor = "";
    document.getElementById('third-option').style.color = "";
    document.getElementById('fourth-option').style.backgroundColor = "";
    document.getElementById('fourth-option').style.color = "";
    document.getElementById('fifth-option').style.backgroundColor = "hsl(217, 12%, 63%)";
    document.getElementById('fifth-option').style.color = "hsl(0, 0%, 100%)";
    document.getElementById('option-selected').innerHTML = " 5 ";
}
function submitted(){
    document.getElementById('RatingPage').style.display = "none";
    document.getElementById('ThankYouPage').style.display = "block";
}