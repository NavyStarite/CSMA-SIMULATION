
const canvas = document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');

var PC = new Image();
PC.src = '../img/PC.png';
PC.onload = function() {ctx.drawImage(PC, dx, dy, dWidth, dHeight);}
var AP = new Image();
AP.src = '../img/PC.png';
AP.onload = function() {ctx.drawImage(AP, dx, dy, dWidth, dHeight);}