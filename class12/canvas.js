var canvas = document.getElementById("Game");
var content = canvas.createContext("2d");


	var ballX = canvas.width/2;
	var ballY = canvas.height/2;
	var ballColor = "rgb(0,155,155)";

	var speedX = 5;
	var speedY = 3;

var animate = function(){
	context.fillstyle = "rgba(255, 25, 255, 0.6)";
	content.fillRect (0, 0, canvas.width, canvas.height);

	//draw the ball
	window.requestAnimationFrame('animate');
	content.fillstyle = 
	content
}