var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var intervalId;
var timerDelay = 100;

var ballX;
var BallY;

function Ball(x, y, radius)
{
    this.x = x;
    this.y = y;
    this.radius = radius;
}

var ball = new Ball(200, 200, 100);

function redrawBall() 
{
    // erase everything -- not efficient, but simple!
    function drawCircle(ctx, cx, cy, radius) 
    {
        ctx.beginPath();
        ctx.arc(cx, cy, radius, 0, 2*Math.PI, true);
        ctx.fill();
    }
     
    drawCircle(ctx, ball.x, ball.y, ball.radius);
}

function onTimer() // called every timerDelay millis
{
    // first find out the new coordinates of where to draw the ball

    // then redraw it at that place
    redrawBall();
}

function run() 
{
    // make canvas focusable, then give it focus!
    canvas.setAttribute('tabindex','0');
    canvas.focus();

    intervalId = setInterval(onTimer, timerDelay); // call onTimer every timerDelay millis
}

run();
