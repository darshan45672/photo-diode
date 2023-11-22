let canvas = document.getElementById("canvas");
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

placeObjectoff(ctx, 394, 273, 14);

//Initialise system parameters here

function varinit() {
  varchange();
  //Variable slider and number input types
  $("#massSlider").slider("value", 25); // slider initialisation : jQuery widget
  $("#massSpinner").spinner("value", 25); // number initialisation : jQuery widget
  $("#distanceSlider").slider("value", 0);// distance d1
  $("#distanceSpinner").spinner("value", 0);// distance d1

  $("#distanceSlider").slider("value", 0);// distance d4
  $("#distanceSpinner").spinner("value", 0);// distance d4
  $("#dampSlider").slider("value", 0.05);
  $("#dampSpinner").spinner("value", 0.05);
  $("#CsArea").spinner("value", 0.01);
  $("#Ivalue").spinner("value", 0.01);
  placeObjectoff(0);
}
function varchange() {
  $("#massSlider").slider({ max: 200, min: 0, step: 0.5 });
  $("#massSpinner").spinner({ max: 200, min: 0, step: 0.5 });

  $("#massSlider").on("slide", function (e, ui) {
    $("#massSpinner").spinner("value", ui.value);
    time = 0;
    varupdate();
  });
  $("#massSpinner").on("spin", function (e, ui) {
    $("#massSlider").slider("value", ui.value);
    time = 0;
    varupdate();
  });
  $("#massSpinner").on("change", function () {
    varchange();
  });

  $("#distanceSlider").slider({ max: 100, min: 1, step: 1 });// distance d1
  $("#distanceSpinner").spinner({ max: 100, min: 1, step: 1 });

  $("#distanceSlider").on("slide", function (e, ui) {
    $("#distanceSpinner").spinner("value", ui.value);
    time = 0;
    varupdate();
  });
  $("#distanceSpinner").on("spin", function (e, ui) {
    $("#distanceSlider").slider("value", ui.value);
    time = 0;
    varupdate();
  });
  $("#distanceSpinner").on("change", function () {
    varchange();
  });
  $("#distanceSpinner").on("touch-start", function () {
    varchange();
  });

  $("#dampSlider").slider({ max: 0.99, min: 0, step: 0.01 });
  $("#dampSpinner").spinner({ max: 0.99, min: 0, step: 0.01 });

  $("#dampSlider").on("slide", function (e, ui) {
    $("#dampSpinner").spinner("value", ui.value);
    time = 0;
    varupdate();
  });
  $("#dampSpinner").on("spin", function (e, ui) {
    $("#dampSlider").slider("value", ui.value);
    time = 0;
    varupdate();
  });
  $("#dampSpinner").on("change", function () {
    varchange();
  });

  $("#distanceSlider").slider({ max: 100, min: 1, step: 1 });// distance d4
  $("#distanceSpinner").spinner({ max: 100, min: 1, step: 1 });

  $("#distanceSlider").on("slide", function (e, ui) {
    $("#distanceSpinner").spinner("value", ui.value);
    time = 0;
    varupdate();
  });
  $("#distanceSpinner").on("spin", function (e, ui) {
    $("#distanceSlider").slider("value", ui.value);
    time = 0;
    varupdate();
  });
  $("#distanceSpinner").on("change", function () {
    varchange();
  });
  $("#distanceSpinner").on("touch-start", function () {
    varchange();
  });

  $("#CsArea").spinner({ max: 1, min: 0.01, step: 0.0001 });
  $("#Ivalue").spinner({ max: 1, min: 0.01, step: 0.0001 });
}
function varupdate() {
  $("#massSpinner").spinner("value", $("#massSlider").slider("value")); //updating slider location with change in spinner(debug)
  $("#distanceSpinner").spinner("value", $("#distanceSlider").slider("value"));// distance d1

  $("#distanceSpinner").spinner("value", $("#distanceSlider").slider("value"));// distance d4
  $("#dampSpinner").spinner("value", $("#dampSlider").slider("value"));
  endmass = $("#massSpinner").spinner("value"); //Updating variables
  var distance = $("#distanceSpinner").spinner("value");// distance d1
  var distance = $("#distanceSpinner").spinner("value");// distance d4
  dampingratio = $("#dampSpinner").spinner("value");
  placeObject(distance);
 };



// document.getElementById('distanceSlider').addEventListener('input', function() {
//   var distance = parseInt(this.value);
//   document.getElementById('distanceValue').textContent = distance;
//   document.getElementById('distanceSpinner').value = distance;
//   placeObject(distance);
// });

// document.getElementById('distanceSpinner').addEventListener('input', function() {
//   var distance = parseInt(this.value);
//   document.getElementById('distanceValue').textContent = distance;
//   document.getElementById('distanceSlider').value = distance;
//   placeObject(distance);
// });


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
  ctx.fillText(distance + ' units', objectx - 40, objectY + 40);
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


window.addEventListener("load", varinit);