const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

//vertical line
ctx.strokeStyle = 'black';
ctx.lineWidth = 2;
ctx.beginPath();
ctx.moveTo(110, 122);
ctx.lineTo(110, 450);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(300, 122);
ctx.lineTo(300, 231);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(500, 122);
ctx.lineTo(500, 231);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(690, 122);
ctx.lineTo(690, 450);
ctx.stroke();

ctx.strokeStyle = 'gray';
ctx.beginPath();
ctx.moveTo(410, 109);
ctx.lineTo(410, 135);
ctx.stroke();


 // Draw the  arrow
 ctx.beginPath();
 ctx.fillStyle = "gray";
 ctx.moveTo(410, 122); 
 ctx.lineTo(390, 108); 
 ctx.lineTo(390, 138); 
 ctx.lineTo(410, 122); 
 ctx.fill();
 ctx.stroke();
 

// Horizontal lines
ctx.strokeStyle = 'black';
ctx.beginPath();
ctx.moveTo(110, 450);
ctx.lineTo(395, 450);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(425, 450);
ctx.lineTo(690, 450);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(300, 231);
ctx.lineTo(500, 231);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(110, 122);
ctx.lineTo(370, 122);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(430, 122);
ctx.lineTo(690, 122);
ctx.stroke();

// ctx.beginPath();
// ctx.moveTo(300, 122);
// ctx.lineTo(370, 122);
// ctx.stroke();


ctx.lineWidth = 1;
ctx.beginPath();
ctx.moveTo(370, 122);
ctx.lineTo(389, 122);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(411, 122);
ctx.lineTo(430, 122);
ctx.stroke();

//voltmeter

ctx.lineWidth = 2;
ctx.fillStyle = "white";
ctx.beginPath();
ctx.arc(400, 231, 20, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();

// voltmetre symbol naming
ctx.fillStyle = "black"
ctx.font = "bold small-caps 20px Arial";
ctx.textBaseline = "middle";
ctx.fillText("V", 393, 233)

//power supply

ctx.beginPath();
ctx.moveTo(395, 435);
ctx.lineTo(395, 465);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(405, 425);
ctx.lineTo(405, 475);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(415, 435);
ctx.lineTo(415, 465);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(425, 425);
ctx.lineTo(425, 475);
ctx.stroke();


//ammeter
ctx.fillStyle = "white";
ctx.beginPath();
ctx.arc(689, 280, 20, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();

// ammetre symbol naming
ctx.fillStyle = "black"
ctx.font = "bold small-caps 20px Arial";
ctx.textBaseline = "middle";
ctx.fillText("A", 683, 281)

//negative
ctx.fillStyle = "black"
ctx.font = "bold small-caps 20px Arial";
ctx.textBaseline = "middle";
ctx.fillText("- ve", 343, 431)

ctx.fillStyle = "black"
ctx.font = "bold small-caps 20px Arial";
ctx.textBaseline = "middle";
ctx.fillText("-", 346, 431)

ctx.fillStyle = "black"
ctx.font = "bold small-caps 20px Arial";
ctx.textBaseline = "middle";
ctx.fillText("-", 360, 221)
ctx.fillStyle = "black"
ctx.font = "bold small-caps 20px Arial";
ctx.textBaseline = "middle";
ctx.fillText("-", 356, 221)

//positive

ctx.fillStyle = "black"
ctx.font = "bold small-caps 20px Arial";
ctx.textBaseline = "middle";
ctx.fillText("+ ve", 443, 431)

ctx.fillStyle = "black"
ctx.font = "bold small-caps 20px Arial";
ctx.textBaseline = "middle";
ctx.fillText("+ ", 430, 221)

//voltmeter

ctx.fillStyle = "black"
ctx.font = "bold small-caps 20px Arial";
ctx.textBaseline = "middle";
ctx.fillText("voltmeter", 350, 265)

//ammeter

ctx.fillStyle = "black"
ctx.font = "bold small-caps 20px Arial";
ctx.textBaseline = "middle";
ctx.fillText("ammeter", 575, 280)

//Initialise system parameters here
function varinit() {
  varchange();
  //Variable slider and number input types
  $("#voltageSlider").slider("value", 0.05); // slider initialisation : jQuery widget
  $("#voltageSpinner").spinner("value", 0.05); // number initialisation : jQuery widge
  $("#CsArea").spinner("value", 0.01);
  $("#Ivalue").spinner("value", 0.01);

  $('#voltageSlider').slider("disable"); 
  $('#voltageSpinner').spinner("disable");
}

function varchange() {
  $("#voltageSlider").slider({ max: 300, min: 0, step: 10 });
  $("#voltageSpinner").spinner({ max: 300, min: 0, step: 10 });

  $("#voltageSlider").on("slide", function (e, ui) {
    $("#voltageSpinner").spinner("value", ui.value);
    time = 0;
    varupdate();
  });
  $("#voltageSpinner").on("spin", function (e, ui) {
    $("#voltageSlider").slider("value", ui.value);
    time = 0;
    varupdate();
  });
  $("#voltageSpinner").on("change", function () {
    varchange();
  });

  $("#resistorSlider").slider({ max: 200, min: 0, step: 1 });
  $("#resistorSpinner").spinner({ max: 200, min: 0, step: 1 });

  $("#resistorSlider").on("slide", function (e, ui) {
    $("#resistorSpinner").spinner("value", ui.value);
    time = 0;
    varupdate();
  });
  $("#resistorSpinner").on("spin", function (e, ui) {
    $("#resistorSlider").slider("value", ui.value);
    time = 0;
    varupdate();
  });
  $("#resistorSpinner").on("change", function () {
    varchange();
  });
  $("#resistorSpinner").on("touch-start", function () {
    varchange();
  });
}

function varupdate() {
  $("#voltageSpinner").spinner("value", $("#voltageSlider").slider("value")); //updating slider location with change in spinner(debug)
  volt = $("#voltageSpinner").spinner("value"); //Updating variables
 };

 function checkConnection() {
  // console.log("working check");
  if(red && black){
    // console.log("working red black");
    alert('Circuit connection is correct ')
    $('#voltageSlider').slider("disable"); 
    $('#voltageSpinner').spinner("disable");
    $('#resistorSlider').slider("disable"); 
    $('#resistorSpinner').spinner("disable"); 
    $('#thresholdSlider').slider("enable"); 
    $('#thresholdSpinner').spinner("enable"); 
    $("#check-btn").prop("disabled", true);
    $("#message").text("Set the threshold current and click on simulate button");
    $("#threshold-btn, #simulate-btn").prop("disabled", false);
    varupdate();
  }
  else{
    if(red == 0 ){
      if(black == 0){
        alert('complete the circuit connection')
        return;
      }else{
        alert('connect live wire')
        console.log("live wire");
      }
    }
    if(black == 0){
        alert("connect neutral wire")
        console.log("neutral wire");
      }
    }   
  }


function setThreshold() {
  if(simStat = 1)  {
    // console.log("working");
    $('#voltageSlider').slider("disable"); 
    $('#voltageSpinner').spinner("disable");
    $('#resistorSlider').slider("disable"); 
    $('#resistorSpinner').spinner("disable"); 
    $('#thresholdSlider').slider("enable"); 
    $('#thresholdSpinner').spinner("enable"); 
    $("#message").text("Set the threshold current and click on simulate button");
    }
  }

function parametreSliderEnable() {
    console.log("working");
    $('#voltageSlider').slider("enable"); 
    $('#voltageSpinner').spinner("enable");
    $('#resistorSlider').slider("enable"); 
    $('#resistorSpinner').spinner("enable"); 
    $('#thresholdSlider').slider("disable"); 
    $('#thresholdSpinner').spinner("disable"); 
    $("#message").text("Vary the parameters and see the Result");
}


window.addEventListener("load", varinit);