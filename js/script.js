var voltage = i1 = i2 = i3 = 0;

var rowCount = 0;

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");


//Initialise system parameters here
function varinit() {
  varchange();
  //Variable slider and number input types
  $("#distance1Slider").slider("value", 0.05); // slider initialisation : jQuery widget
  $("#distance1Spinner").spinner("value", 0.05); // number initialisation : jQuery widget
  //resistor 1
  $("#distance2Slider").slider("value", 0.01);
  $("#distance2Spinner").spinner("value", 0.01);
  //resistor 2
  $("#distance3Slider").slider("value", 0.01);
  $("#distance3Spinner").spinner("value", 0.01);
  //resistor 3
  $("#distance4Slider").slider("value", 0.01);
  $("#distance4Spinner").spinner("value", 0.01);
}

function varchange() {
  $("#distance1Slider").slider({ max: 300, min: 0, step: 10 });
  $("#distance1Spinner").spinner({ max: 300, min: 0, step: 10 });

  $("#distance1Slider").on("slide", function (e, ui) {
    $("#distance1Spinner").spinner("value", ui.value);
    time = 0;
    varupdate();
  });
  $("#distance1Spinner").on("spin", function (e, ui) {
    $("#distance1Slider").slider("value", ui.value);
    time = 0;
    varupdate();
  });
  $("#distance1Spinner").on("change", function () {
    varchange();
  });

  // resistor 1

  $("#distance2Slider").slider({ max: 200, min: 0, step: 1 });
  $("#distance2Spinner").spinner({ max: 200, min: 0, step: 1 });

  $("#distance2Slider").on("slide", function (e, ui) {
    $("#distance2Spinner").spinner("value", ui.value);
    time = 0;
    varupdate();
  });
  $("#distance2Spinner").on("spin", function (e, ui) {
    $("#distance2Slider").slider("value", ui.value);
    time = 0;
    varupdate();
  });
  $("#distance2Spinner").on("change", function () {
    varchange();
  });
  $("#distance2Spinner").on("touch-start", function () {
    varchange();
  });

  // resistor 2
  $("#distance3Slider").slider({ max: 200, min: 0, step: 1 });
  $("#distance3Spinner").spinner({ max: 200, min: 0, step: 1 });

  $("#distance3Slider").on("slide", function (e, ui) {
    $("#distance2Spinner").spinner("value", ui.value);
    time = 0;
    varupdate();
  });
  $("#distance3Spinner").on("spin", function (e, ui) {
    $("#distance3Slider").slider("value", ui.value);
    time = 0;
    varupdate();
  });
  $("#distance3Spinner").on("change", function () {
    varchange();
  });
  $("#distance3Spinner").on("touch-start", function () {
    varchange();
  });

  // resistor 3
  $("#distance4Slider").slider({ max: 200, min: 0, step: 1 });
  $("#distance4Spinner").spinner({ max: 200, min: 0, step: 1 });

  $("#distance4Slider").on("slide", function (e, ui) {
    $("#resistorSpinner").spinner("value", ui.value);
    time = 0;
    varupdate();
  });
  $("#distance4Spinner").on("spin", function (e, ui) {
    $("#distance4Slider").slider("value", ui.value);
    time = 0;
    varupdate();
  });
  $("#distance4Spinner").on("change", function () {
    varchange();
  });
  $("#distance4Spinner").on("touch-start", function () {
    varchange();
  });
  //
  $("#CsArea").spinner({ max: 1, min: 0.01, step: 0.0001 });
  $("#Ivalue").spinner({ max: 1, min: 0.01, step: 0.0001 });
}
function varupdate() {
  $("#distance1Spinner").spinner("value", $("#distance1Slider").slider("value")); //updating slider location with change in spinner(debug)
  $("#distance2Spinner").spinner("value", $("#distance2Slider").slider("value"));
  $("#distance3Spinner").spinner("value", $("#distance3Slider").slider("value"));
  $("#distance4Spinner").spinner("value", $("#distance4Slider").slider("value"));
  volt = $("#distance1Spinner").spinner("value"); //Updating variables
  res1 = $("#distance2Spinner").spinner("value");
  res2 = $("#distance3Spinner").spinner("value");
  res3 = $("#distance4Spinner").spinner("value");
};

function addtable(){

  var table=document.getElementById("mytable");
  var row=table.insertRow(-1);
  var cell1=row.insertCell(0);
  var cell2=row.insertCell(1);
  var cell3=row.insertCell(2);
  var cell4=row.insertCell(3);
  var cell5=row.insertCell(4);
  var cell6=row.insertCell(5);

  cell1.innerHTML=voltage;
  cell2.innerHTML= i1;
  cell3.innerHTML= i2;
  cell4.innerHTML= i3;
  cell5.innerHTML= i1;
  cell6.innerHTML = 0
  cell5.classList.add("column-font");
  cell6.classList.add("column-font");
}

function showvalue(){
  var hiddenCells = document.querySelectorAll(".column-font");
  hiddenCells.forEach(function(cell) {
    cell.style.display = 'table-cell';
  });
}

function showResult() {
  document.getElementById('p3').style.display = 'block'   
}

window.addEventListener("load", varinit);
