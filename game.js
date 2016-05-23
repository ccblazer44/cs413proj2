var gameport = document.getElementById("gameport");

var renderer = PIXI.autoDetectRenderer(400, 400);
gameport.appendChild(renderer.view);

// create stage
var stage = new PIXI.Container();
var title_stage = new PIXI.Container();

// score board
var score = 0;
var score_board = new PIXI.Text("Home: " + score + "    Away: 0", {font:"20px Arial", fill:"white"});
score_board.position.x = 125;
score_board.position.y = 0;

//create sprites
var title_texture = new PIXI.Texture.fromImage("title_sprite.png");
var title_sprite = new PIXI.Sprite(title_texture);
title_sprite.anchor.x = 0.5;
title_sprite.anchor.y = 0.5;
title_sprite.position.x = 200;
title_sprite.position.y = 200;

var background_texture = new PIXI.Texture.fromImage("space_sprite.png");
var background_sprite = new PIXI.Sprite(background_texture);
background_sprite.anchor.x = 0.5;
background_sprite.anchor.y = 0.5;
background_sprite.position.x = 200;
background_sprite.position.y = 200;

var bball_texture = PIXI.Texture.fromImage("basketball_sprite.png");
var bball_sprite = new PIXI.Sprite(bball_texture);
bball_sprite.anchor.x = 0.5;
bball_sprite.anchor.y = 0.5;
bball_sprite.position.x = 200;
bball_sprite.position.y = 200;

var hoop_texture = PIXI.Texture.fromImage("hoop_sprite.png");
var hoop_sprite = new PIXI.Sprite(hoop_texture);
hoop_sprite.anchor.x = 0.5;
hoop_sprite.anchor.y = 0.5;
hoop_sprite.position.x = 100;
hoop_sprite.position.y = 100;


// add sprites as children to stage
title_stage.addChild(title_sprite);
stage.addChild(background_sprite);
stage.addChild(bball_sprite);
stage.addChild(hoop_sprite);
stage.addChild(score_board);

//current stage
var current_stage = title_stage;

// listiner for keyboard input
document.addEventListener('keydown', onKeyDown);

// random hoop location
createHoop();

// runs game
animate();

function animate() {

	requestAnimationFrame(animate); // constantly calls animate
	bball_sprite.rotation += 0.1; // rotate ball
	renderer.render(current_stage); // render stage
	checkPosition(); // check if made basket
}

function createHoop() {
    
    // get random numbers
    var randx = 10 * Math.floor((Math.random() * 39) + 1);
    var randy = 10 * Math.floor((Math.random() * 39) + 1);
  
    // move the hoop to random location
    hoop_sprite.position.x = randx;
    hoop_sprite.position.y = randy;
}

function checkPosition() {
    // check position of ball and position of hoop for basket.  If made basket, hoop respawns in random location
    if (hoop_sprite.position.x === bball_sprite.position.x && hoop_sprite.position.y === bball_sprite.position.y) {
        createHoop();
        score += 2;
        score_board.setText("Home: " + score + "    Away: 0");
    }
}

function onKeyDown(key) {

	// if statements for WASD and arrow keys to move the ball
    if (key.keyCode === 87 || key.keyCode === 38) {

    	key.preventDefault(); // prevents browser from scrolling when using arrow keys
        if (bball_sprite.position.y != 10) { // won't let the ball move off the stage
            bball_sprite.position.y -= 10; // move the ball
        }
    }
  

    if (key.keyCode === 83 || key.keyCode === 40) {
    	key.preventDefault();
        if (bball_sprite.position.y != renderer.height - 10) {
            bball_sprite.position.y += 10;
        }
    }
  
    if (key.keyCode === 65 || key.keyCode === 37) {
    	key.preventDefault();
        if (bball_sprite.position.x != 10) {
            bball_sprite.position.x -= 10;
        }
    }
  

    if (key.keyCode === 68 || key.keyCode === 39) {
    	key.preventDefault();
        if (bball_sprite.position.x != renderer.width - 10) {
            bball_sprite.position.x += 10;
        }
    }

    if (key.keyCode == 13) {
        current_stage = stage;
    }
}

