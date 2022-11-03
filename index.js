// local variables 
var feet = 3.28084;
var meter = 0.6096;
var gallon = 0.264172;
var litre = 0.9999998018;
var pound = 2.20462;
var kilo = 0.453591830542594;

var inputValue = "";

// Components
var inputValue1 = document.getElementsByClassName("value1");
var inputValue2 = document.getElementsByClassName("value2");
var inputValue3 = document.getElementsByClassName("value3");
var inputField = document.getElementsByClassName("UnitConvertor_InputField");
var inputBtn = document.getElementsByClassName("UnitConvertor_ConvertBtn");


// gets called when use clicks button
function getCount() {

    inputValue = inputField[0].value; 

    var calcVal1 = `${inputValue} meters = ${inputValue * feet} feets | ${inputValue} feet = ${inputValue * meter} meters`
    var calcVal2 = `${inputValue} litre = ${inputValue * gallon} gallons | ${inputValue} gallon = ${inputValue * litre} litres`  
    var calcVal3 = `${inputValue} kilos = ${inputValue * pound} pounds | ${inputValue} pound = ${inputValue * kilo} kilos`

    inputValue1[0].innerText = calcVal1;
    inputValue2[0].innerText = calcVal2;
    inputValue3[0].innerText = calcVal3;
}

inputBtn[0].addEventListener('click', getCount);