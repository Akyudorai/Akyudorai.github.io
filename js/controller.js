
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
var sizeX = parseInt(100);
var sizeY = parseInt(150);
var speed = 2;
var jumpForce = 4;
var velocityX = 0;
var velocityY = 0;
var keys = {};

var isMoving = false;
var animationIndex = 0;

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
	
	input();
	gravity();
	constraints();
	animate();
	window.requestAnimationFrame(update);
}

// ======== FUNCTIONS ========
function input()
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

	isMoving = (keys[KEYCODE.A] || keys[KEYCODE.D]) ? true : false;
}

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

function animate() 
{
	var idle = 6;
	var walk = 10;

	var isLeft = false;
	if (isMoving) {		
		player.style.backgroundImage="url(img/Sprites/Walk.png)";
		if (isLeft) {
			// PUT TRANSFORM CODE HERE
			// transform:scale(-1, 1);
		} else {
			// PUT TRANSFORM CODE HERE
			// transform:scale(1, 1);
		}
		
	} else {
		player.style.backgroundImage="url(img/Sprites/Idle.png)";
	}



	var frameCount = (isMoving) ? 10 : 6;

	 
	animationIndex += 0.01 * 10;

	var frame = Math.floor(animationIndex)

	var xPos = 40 + (frame * 128)
	player.style.backgroundPosition = '-'+xPos+'px -60px';

	if (animationIndex >= frameCount) {
		animationIndex = 0;
	}


	

}


function constraints()
{	
	// Motion
	x += velocityX;
	y += velocityY;

	// Bounds
	if (x < minX) {
		x = minX;
	}

	if (x > maxX - sizeX) {
		x = maxX - sizeX;
	}

	if (y < minY) {
		y = minY;
	}

	if (y > maxY) {
		y = maxY;
	}

	player.style.left = (x) +"px";
	player.style.top = (y) + "px";
	player.scrollIntoView();
}

function gravity()
{
	var gravForce = 0.1;
	
	//maxY = 870/2.5;
	//console.log(y)
	if (y + sizeY < maxY) {
		velocityY += gravForce;	
	} else if (velocityY > 0 && y + sizeY > maxY)
	{	
		velocityY = 0;
	}
	
	y += velocityY;	
	
}

function jump() 
{
	velocityY += -jumpForce;
	console.log("Jump");
}

init()
update()

