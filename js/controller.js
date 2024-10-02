// ======== INPUT ========
var keys = {};

const KEYCODE = {
    W:87, 
    S:83, 
    A:65, 
    D:68, 
    SPACE:32,
};

// ======== OBJECTS ========

function Actor(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y; 
    this.speed = 10;
    this.vX = 0;
    this.vY = 0;

    this.image = new Image();
    this.image.src = "img/Sprites/idle.gif"

    this.isMoving = false;
       
    this.update = function() {
        ctx = game.context;
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);    

        this.handleInput();
        this.gravity();
        this.move(this.vX, this.vY);  
        this.animate();
        
    }

    this.handleInput = function() 
    {
        if (keys[KEYCODE.A]) {
            player.move(-player.speed, 0);
        }

        if (keys[KEYCODE.D]) {
            player.move(player.speed, 0);
        }

        this.isMoving = (keys[KEYCODE.A] || keys[KEYCODE.D]) ? true : false;
    }

    this.jump = function() {
        this.vY = -10;
    }

    this.gravity = function() {
        var gravityForce = 0.1;

        var maxY = game.canvas.height-this.height;
        if (this.y < maxY) {
            this.vY += gravityForce;
        } else if (this.vY > 0 && this.y >= maxY) {
            this.vY = 0;
        }
    }

    this.animate = function() {
        var idle = 6;
        var walk = 10;

        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);

        /*)
        // Process Correct Sprite Sheet
        var isLeft = false;
        if (this.isMoving) {     
            this.style.backgroundImage="url(img/Sprites/Walk.png)";
            if (isLeft) {
                // PUT TRANSFORM CODE HERE
                // transform:scale(-1, 1);

            } else {
                // PUT TRANSFORM CODE HERE
                // transform:scale(1, 1);
            }
            
        } else {
            this.style.backgroundImage="url(img/Sprites/Idle.png)";
        }

        // Process Frame State
        var frameCount = (isMoving) ? 10 : 6;
        this.animationIndex += 0.01 * 10;
        var frame = Math.floor(animationIndex)
        var xPos = 40 + (frame * 128)
        this.style.backgroundPosition = '-'+xPos+'px -60px';

        if (this.animationIndex >= frameCount) {
            this.animationIndex = 0;
        }
        */
    }

    this.move = function(x,y) {
        this.x += x;
        this.y += y;

        var minX = 0;
        var minY = 0;
        var maxX = game.canvas.width -this.width;
        var maxY = game.canvas.height-this.height;
        
        if (this.y > maxY) {
            this.y = maxY;
        }

        if (this.x < minX) {
            this.x = minX;
        }

        if (this.x > maxX) {
            this.x = maxX;
        }

        if (this.y < minY) {
            this.y = minY;
        }

    }      
}

// ======== VARIABLES ========
var player;

var game = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 3000;
        this.canvas.height = 875;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(Update, 20);
    },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}


// ======== FUNCTIONS ========

function Init() {
    player = new Actor(50, 70, "red", 10, 120);
    game.start();

    // Initialize Input
    document.addEventListener('keydown', function(event) {
        onKeyDown(event.keyCode);     

        if (keys[KEYCODE.SPACE]) {
            player.jump();
        }   
    });

    document.addEventListener('keyup', function(event){
        onKeyUp(event.keyCode);
    }); 
}


function Update() {
    game.clear();  
    player.update();
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

// ======== EXECUTION ========

Init();