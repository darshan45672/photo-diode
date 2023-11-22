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


function voltageDisplay(volt) {
  ctx.fillStyle = "white";
  ctx.fillRect(170,269,55,30);
  ctx.fillStyle = "black";
  ctx.font = "bold small-caps 20px Arial";
  ctx.textBaseline = "middle";
  let text = `${volt} V`
  ctx.fillText(text, 177, 285)
}
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

function placeObjectoff(ctx, x, y, radius) {
  // Draw a static circle at a specified position and radius
  ctx.beginPath();
  ctx.strokeStyle = 'black'; // Circle color
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(389, 285);
  ctx.lineTo(389, 297);

  ctx.moveTo(400, 285);
  ctx.lineTo(400, 297);

  ctx.moveTo(389, 297);
  ctx.lineTo(400, 297);

  ctx.moveTo(389, 293);
  ctx.lineTo(400, 293);

  ctx.moveTo(389, 290);
  ctx.lineTo(400, 290);

  ctx.moveTo(389, 272);
  ctx.lineTo(392, 286);

  ctx.moveTo(400, 272);
  ctx.lineTo(397, 286);

  ctx.moveTo(400, 274);
  ctx.lineTo(394, 272);

  ctx.moveTo(394, 274);
  ctx.lineTo(389, 272);
  
  ctx.stroke();

  ctx.fillStyle = 'black';
  ctx.font = "bold small-caps 12px Arial";
  ctx.fillText('Light source', 347, 238);

  ctx.fillStyle = 'black';
  ctx.font = "bold small-caps 18px Arial";
  ctx.fillText('OFF', 380, 318);
}

placeObjectoff(ctx, 394, 273, 14);

function placeObject(distance) {
 
  ctx.clearRect(340, 0, canvas.width, canvas.height);

  var startX =400; // X-coordinate of the starting point
  var startY = canvas.height / 1.65; // Y-coordinate of the starting point

  var objectx = startX + distance*4; // Calculate object's X-coordinate
  var objectY = startY - 20; // Y-coordinate for the object above the line

  // Draw line below the object
  ctx.beginPath();
  ctx.moveTo(startX, startY);
  ctx.lineTo(objectx, startY);
  ctx.strokeStyle = 'blue';
  ctx.lineWidth = 2;
  ctx.stroke();

  drawLightBulb(ctx, objectx, objectY); // Call function to draw light bulb
 
  // Display distance text below the object
  ctx.fillStyle = 'black';
  ctx.font = '12px Arial';
  ctx.fillText(distance + ' cm', objectx - 25, objectY + 40);
}

function drawLightBulb(ctx, x, y) {
  // Draw small yellow circles as a light bulb shape
  ctx.strokeStyle = 'black'; // Light bulb color
  ctx.fillStyle = 'yellow';
  ctx.lineWidth = 4;
  // Draw small circles
  ctx.beginPath();
  ctx.arc(x - 7, y-10, 13, 0, Math.PI * 2);
  ctx.stroke();
  ctx.fill();

  // Draw lines below the circles
  ctx.strokeStyle = 'black';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(x - 13, y + 3);
  ctx.lineTo(x - 13, y + 15);
  ctx.moveTo(x - 3, y + 3);
  ctx.lineTo(x - 3, y + 15);
  ctx.moveTo(x - 3, y + 15);
  ctx.lineTo(x - 13, y + 15);
  ctx.stroke();

  ctx.strokeStyle = 'black';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(x - 3, y + 10);
  ctx.lineTo(x - 13, y + 10);
  ctx.moveTo(x - 3, y + 7);
  ctx.lineTo(x - 13, y + 7);
  ctx.stroke();

  ctx.strokeStyle = 'black';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(x - 10, y + 3);
  ctx.lineTo(x - 13, y -10);
  ctx.moveTo(x -6, y + 3);
  ctx.lineTo(x - 3, y -10);

  ctx.lineWidth = 1;
  ctx.moveTo(x - 13, y -10);
  ctx.lineTo(x-9, y -8);
  ctx.moveTo(x -9, y -10);
  ctx.lineTo(x - 5, y -8);

  ctx.stroke();

  ctx.lineWidth = 2;
  ctx.strokeStyle ='orange';
  ctx.beginPath();
  ctx.moveTo(x -24, y -8);
  ctx.lineTo(x - 30, y -5);
  ctx.moveTo(x -23, y -18);
  ctx.lineTo(x - 29, y -20);
  ctx.moveTo(x -18, y -26);
  ctx.lineTo(x - 22, y -30);
  ctx.moveTo(x -8, y -28);
  ctx.lineTo(x - 8, y -36);
  ctx.moveTo(x +2, y -25);
  ctx.lineTo(x +6, y -31);
  ctx.moveTo(x +10, y -18);
  ctx.lineTo(x +15, y -21);
  ctx.moveTo(x +11, y -8);
  ctx.lineTo(x +17, y -5);
  ctx.stroke();

  ctx.fillStyle = 'black';
  ctx.font = "bold small-caps 12px Arial";
  ctx.fillText('Light source', x - 55, y - 45);
}

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

  $("#distance1Slider").slider("disable");
  $("#distance1Spinner").spinner("disable");
  $("#distance2Slider").slider("disable");
  $("#distance2Spinner").spinner("disable");
  $("#distance3Slider").slider("disable");
  $("#distance3Spinner").spinner("disable");
  $("#distance4Slider").slider("disable");
  $("#distance4Spinner").spinner("disable");
  $("#distance4Spinner").spinner("disable");

  $("#take-readings").prop("disabled", true);
  $("#set-distance").prop("disabled", true);
  $("#result-btn").prop("disabled", true);
  $("#plot-graph-btn").prop("disabled", true);

  $("#changing-text").text("Set Distance");
  $("#message").text("Click on Start Simulation");

  placeObjectoff(0);
}

function varchange() {
  $("#distance1Slider").slider({ max: 100, min: 0, step: 1 });
  $("#distance1Spinner").spinner({ max: 100, min: 0, step: 1 });

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
  // d1 = $("#distance1Spinner").spinner("value"); //Updating variables
  // d2 = $("#distance2Spinner").spinner("value");
  // res2 = $("#distance3Spinner").spinner("value");
  // res3 = $("#distance4Spinner").spinner("value");

  if(count<=7){
    d1 = $("#distance1Spinner").spinner("value");
    placeObject(d1);
  }
  if (count >=8 && count <= 14) {
    let d1 = $("#distance2Spinner").spinner("value");
    placeObject(d1);
  }
  if(count >= 15 && count <= 21){
    d3 = $("#distance3Spinner").spinner("value");
    placeObject(d3);
  }
  if (count >= 22 && count <= 28) {
    d4 = $("#distance4Spinner").spinner("value");
    placeObject(d4);
  }
};

function takeReadings(){
  count += 1;
  $("#distance1Slider").slider("disable");
  $("#distance1Spinner").spinner("disable");
  if (count<=7) {
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
    }
  }
  if (count == 7) {
    alert("Set distance D2 and click on take readings")
    $("#distance2Slider").slider("enable");
    $("#distance2Spinner").spinner("enable"); 
    $("#message").text("Set D2 by varying the slider Distance D2 and Click on take readings");
  }

  if (count >=8 && count <= 14) {
    switch (count) {
      case 8:{
        $("#distance2Slider").slider("disable");
        $("#distance2Spinner").spinner("disable"); 
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
      default:
        break;
    }
  }
  if (count == 14) {
    $("#distance3Slider").slider("enable");
    $("#distance3Spinner").spinner("enable"); 
    $("#message").text("Set D3 by varying the slider Distance D3 and Click on take readings");
    alert("Set distance D3 and click on take readings")
  }
  if (count >= 15 && count <= 21) {
    switch(count){
      case 15:{
        $("#distance3Slider").slider("disable");
        $("#distance3Spinner").spinner("disable"); 
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

      default:
        break;
    }
  }

  if (count == 21) {
    alert("Set distance D4 and click on take readings")
    $("#distance4Slider").slider("enable");
    $("#distance4Spinner").spinner("enable"); 
    $("#message").text("Set D4 by varying the slider Distance D4 and Click on take readings");
  }

  if (count >= 22 && count <= 28) {
    switch(count){
      case 22:{
        $("#distance4Slider").slider("disable");
        $("#distance4Spinner").spinner("disable"); 
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
    }
  }
  if(count >= 28){
    alert("Click on Plot graph to see the I-V characteristics")
    $("#message").text("Click on Plot Graph to view the graph");
    $("#take-readings").prop("disabled", true);
    $("#plot-graph-btn").prop("disabled", false);
  }

}

function startSimulation() {
  voltageDisplay(0);
  alert("Set distance D1 and click on take readings")
  $("#simulate-btn").prop("disabled", true);
  $("#set-distance").prop("disabled", false);
  $("#take-readings").prop("disabled", false);
  $("#result-btn").prop("disabled", false);

  $("#distance1Slider").slider("enable");
  $("#distance1Spinner").spinner("enable");
  $("#changing-text").text("Set Distance D1");
  $("#message").text("Set D1 by varying the slider Distance D1 and Click on take readings");
}

function showResult() {
  document.getElementById('p3').style.display = 'block'   
  document.getElementById('result-display-div').style.display = 'block'   
}

window.addEventListener("load", varinit);
