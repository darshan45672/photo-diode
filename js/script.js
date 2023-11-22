var iSat = 0;
var count = 0;
var rowCount = 0;

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

//vertical line
ctx.strokeStyle = 'black';
ctx.lineWidth = 2;
ctx.beginPath();
ctx.moveTo(90, 122);
ctx.lineTo(90, 270);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(90, 300);
ctx.lineTo(90, 430);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(250, 200);
ctx.lineTo(250, 260);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(250, 300);
ctx.lineTo(250, 360);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(310, 122);
ctx.lineTo(310, 250);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(310, 307);
ctx.lineTo(310, 430);
ctx.stroke();

ctx.strokeStyle = 'gray';
ctx.beginPath();
ctx.moveTo(298, 287);
ctx.lineTo(323, 287);
ctx.stroke();


 // Draw the  arrow
 ctx.beginPath();
ctx.fillStyle = "gray";
ctx.moveTo(310, 285); 
ctx.lineTo(295, 270); 
ctx.lineTo(325, 270); 
ctx.lineTo(310, 285); 
ctx.fill();
ctx.stroke();
 

// Horizontal lines
ctx.strokeStyle = 'black';
ctx.beginPath();
ctx.moveTo(90, 430);
ctx.lineTo(180, 430);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(221, 430);
ctx.lineTo(310, 430);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(250, 200);
ctx.lineTo(310, 200);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(250, 360);
ctx.lineTo(310, 360);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(90, 122);
ctx.lineTo(310, 122);
ctx.stroke();



// ctx.beginPath();
// ctx.moveTo(300, 122);
// ctx.lineTo(370, 122);
// ctx.stroke();


ctx.lineWidth = 1;
ctx.beginPath();
ctx.moveTo(310, 250);
ctx.lineTo(310, 269);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(310, 288);
ctx.lineTo(310, 307);
ctx.stroke();

//voltmeter

ctx.lineWidth = 2;
ctx.fillStyle = "white";
ctx.beginPath();
ctx.arc(251, 281, 20, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();

// voltmetre symbol naming
ctx.fillStyle = "black"
ctx.font = "bold small-caps 20px Arial";
ctx.textBaseline = "middle";
ctx.fillText("V", 245, 283)

//power supply

ctx.beginPath();
ctx.moveTo(75, 270);
ctx.lineTo(105, 270);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(65, 280);
ctx.lineTo(115, 280);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(75, 290);
ctx.lineTo(105, 290);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(65, 300);
ctx.lineTo(115, 300);
ctx.stroke();


//ammeter
ctx.fillStyle = "white";
ctx.beginPath();
ctx.arc(200, 430, 20, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();

// ammetre symbol naming
ctx.fillStyle = "black"
ctx.font = "bold small-caps 20px Arial";
ctx.textBaseline = "middle";
ctx.fillText("A", 193, 430)

//negative
ctx.fillStyle = "black"
ctx.font = "bold small-caps 20px Arial";
ctx.textBaseline = "middle";
ctx.fillText("- ve", 30, 250)



ctx.fillStyle = "black"
ctx.font = "bold small-caps 20px Arial";
ctx.textBaseline = "middle";
ctx.fillText("_", 230, 241)
ctx.fillStyle = "black";

//positive

ctx.fillStyle = "black"
ctx.font = "bold small-caps 20px Arial";
ctx.textBaseline = "middle";
ctx.fillText("+ ve",25, 320)

ctx.fillStyle = "black"
ctx.font = "bold small-caps 20px Arial";
ctx.textBaseline = "middle";
ctx.fillText("+ ", 230, 311)

//voltmeter

// ctx.fillStyle = "black"
// ctx.font = "bold small-caps 20px Arial";
// ctx.textBaseline = "middle";
// ctx.fillText("voltmeter", 180, 265)

//ammeter

ctx.fillStyle = "black"
ctx.font = "bold small-caps 20px Arial";
ctx.textBaseline = "middle";
ctx.fillText("ammeter", 160, 465)


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
  count += 1;
  switch (count) {
    case 1:{
      var table = document.getElementById("r2c2");
      table.innerHTML = 22;
    }
      break;
      case 2:{
        var table = document.getElementById("r3c2");
        table.innerHTML = 23;
      }
      break;
      case 3:{
        var table = document.getElementById("r4c2");
        table.innerHTML = 24;
      }
        break;
      case 4:{
        var table = document.getElementById("r5c2");
        table.innerHTML = 25;
        }
        break;
      case 5:{
            var table = document.getElementById("r6c2");
            table.innerHTML = 26;
          }
        break;
      case 6:{
          var table = document.getElementById("r7c2");
          table.innerHTML = 27;
      }
      break;
      case 7:{
        var table = document.getElementById("r8c2");
        table.innerHTML = 28;
      }
      break;
      case 8:{
        var table = document.getElementById("r2c3");
        table.innerHTML = 32;
      }
      break;
      case 9:{
        var table = document.getElementById("r3c3");
        table.innerHTML = 33;
      }
      break;
      case 10:{
        var table = document.getElementById("r4c3");
        table.innerHTML = 34;
      }
      break;
      case 11:{
        var table = document.getElementById("r5c3");
        table.innerHTML = 35;
      }
      break;
      case 12:{
        var table = document.getElementById("r6c3");
        table.innerHTML = 36;
      }
      break;
      case 13:{
        var table = document.getElementById("r7c3");
        table.innerHTML = 37;
      }
      break;
      case 14:{
        var table = document.getElementById("r8c3");
        table.innerHTML = 38;
      }
      break;
      case 15:{
        var table = document.getElementById("r2c4");
        table.innerHTML = 42;
      }
      break;
      case 16:{
        var table = document.getElementById("r3c4");
        table.innerHTML = 43;
      }
      break;
      case 17:{
        var table = document.getElementById("r4c4");
        table.innerHTML = 44;
      }
      break;
      case 18:{
        var table = document.getElementById("r5c4");
        table.innerHTML = 45;
      }
      break;
      case 19:{
        var table = document.getElementById("r6c4");
        table.innerHTML = 46;
      }
      break;
      case 20:{
        var table = document.getElementById("r7c4");
        table.innerHTML = 47;
      }
      break;
      case 21:{
        var table = document.getElementById("r8c4");
        table.innerHTML = 48;
      }
      break;
      case 22:{
        var table = document.getElementById("r2c5");
        table.innerHTML = 52;
      }
      break;
      case 23:{
        var table = document.getElementById("r3c5");
        table.innerHTML = 53;
      }
      break;
      case 24:{
        var table = document.getElementById("r4c5");
        table.innerHTML = 54;
      }
      break;
      case 25:{
        var table = document.getElementById("r5c5");
        table.innerHTML = 55;
      }
      break;
      case 26:{
        var table = document.getElementById("r6c5");
        table.innerHTML = 56;
      }
      break;
      case 27:{
        var table = document.getElementById("r7c5");
        table.innerHTML = 57;
      }
      break;
      case 28:{
        var table = document.getElementById("r8c5");
        table.innerHTML = 58;
      }
      break;
      
    default:
      break;
  }

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
