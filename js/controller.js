
// ======== CONSTANTS ========

const KEYCODE = {
	W:87, 
	S:83, 
	A:65, 
	D:68, 
	SPACE:32,
};

// ======== COMPONENTS ========

// Component References
var player = document.getElementById("player");
var container = document.getElementById("game-container");


// ======== VARIABLES ========
var x = parseInt(0);
var y = parseInt(0);
var size = parseInt(100);
var speed = 3;
var jumpForce = 2.5;
var velocityX = 0;
var velocityY = 0;
var keys = {};

// Constraints
var offsets = container.getBoundingClientRect();
var minX = 0;
var maxX = offsets.left + offsets.width;
var minY = offsets.top;
var maxY = offsets.top + offsets.height;


// ======== INITIALIZATION ========
function init() {
	player.style.top = (y*speed) + "px"
	player.style.left = (x*speed) + "px"

	document.addEventListener('keydown', function(event){

		onKeyDown(event.keyCode);

		if (event.keyCode == KEYCODE.W) {
			jump()
		}
	});

	document.addEventListener('keyup', function(event){

		onKeyUp(event.keyCode)

	});
}


// ======== UPDATE ========
function update()
{	
	vX = 0;
	if (keys[KEYCODE.A])
	{	
		console.log("A");
		vX -= 1.0 * speed;
	}

	if (keys[KEYCODE.D]) 
	{	
		console.log("D");
		vX += 1.0 * speed;
	}
	velocityX = vX * speed;

	physics()
	gravity()
	constraints();
	window.requestAnimationFrame(update);
}

// ======== FUNCTIONS ========
function onKeyDown(e)
{
	e = e || window.event;
	var key = window.event.keyCode || e.which;
	keys[key] = true;
}

function onKeyUp(e)
{
	var key = window.event.keyCode || e.which;
	delete keys[key];
}

function physics()
{
	x += velocityX;
	y += velocityY;

	player.style.left = (x) + "px";
	player.style.top = (y) + "px";
}

function constraints()
{	
	//console.log(minX)

	// Bounds
	if (x < minX) {
		x = minX;
	}

	if (x > maxX - 100) {
		x = maxX - 100;
	}

	if (y < minY) {
		y = minY;
	}

	if (y > maxY) {
		y = maxY;
	}

	player.scrollIntoView();
}

function gravity()
{
	var gravForce = 0.1;
	
	maxY = 850/2.5;
	//console.log(y)
	if (y + size < maxY) {
		velocityY += gravForce;	
	} else if (velocityY > 0 && y + size > maxY)
	{	
		velocityY = 0;
	}
	
	y += velocityY;	
	player.style.top = (y*speed) + "px"
}

function jump() 
{
	velocityY += -jumpForce;
	console.log("Jump");
}

init()
update()

