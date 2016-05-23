var gameport = document.getElementById("gameport");

var renderer = PIXI.autoDetectRenderer(400, 400);
gameport.appendChild(renderer.view);

var interactive = true;
// create stage
var stage = new PIXI.Container();
var title_stage = new PIXI.Container();
var menu_stage = new PIXI.Container();
var tutorial_stage = new PIXI.Container();
var credits_stage = new PIXI.Container();
var end_stage = new PIXI.Container();

// score board
var score = 0;
var score_board = new PIXI.Text("Home: " + score + "    Away: infinity", {font:"20px Arial", fill:"white"});
score_board.position.x = 125;
score_board.position.y = 0;


// create title sprites
var title_texture = new PIXI.Texture.fromImage("title_sprite.png");
var title_sprite = new PIXI.Sprite(title_texture);
title_sprite.anchor.x = 0.5;
title_sprite.anchor.y = 0.5;
title_sprite.position.x = 200;
title_sprite.position.y = 200;

title_stage.addChild(title_sprite);


// create menu mouse handlers
function gameMouseHandler(e){
    current_stage = stage;
}

function tutorialMouseHandler(e){
    current_stage = tutorial_stage;
}

function creditsMouseHandler(e){
    current_stage = credits_stage;
}


// create menu sprites
var menu_title_texture = new PIXI.Texture.fromImage("menu_title_sprite.png");
var menu_title_sprite = new PIXI.Sprite(menu_title_texture);
menu_title_sprite.position.x = 150;
menu_title_sprite.position.y = 10;

var menu_tutorial_texture = new PIXI.Texture.fromImage("menu_tutorial_sprite.png");
var menu_tutorial_sprite = new PIXI.Sprite(menu_tutorial_texture);
menu_tutorial_sprite.position.x = 150;
menu_tutorial_sprite.position.y = 100;
menu_tutorial_sprite.interactive = true;
menu_tutorial_sprite.on('mousedown', tutorialMouseHandler);

var menu_game_texture = new PIXI.Texture.fromImage("menu_game_sprite.png");
var menu_game_sprite = new PIXI.Sprite(menu_game_texture);
menu_game_sprite.position.x = 150;
menu_game_sprite.position.y = 200;
menu_game_sprite.interactive = true;
menu_game_sprite.on('mousedown', gameMouseHandler);

var menu_credits_texture = new PIXI.Texture.fromImage("menu_credits_sprite.png");
var menu_credits_sprite = new PIXI.Sprite(menu_credits_texture);
menu_credits_sprite.position.x = 150;
menu_credits_sprite.position.y = 300;
menu_credits_sprite.interactive = true;
menu_credits_sprite.on('mousedown', creditsMouseHandler);

menu_stage.addChild(menu_credits_sprite);
menu_stage.addChild(menu_title_sprite);
menu_stage.addChild(menu_tutorial_sprite);
menu_stage.addChild(menu_game_sprite);

// create game sprites
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

stage.addChild(background_sprite);
stage.addChild(bball_sprite);
stage.addChild(hoop_sprite);
stage.addChild(score_board);

// create credits sprite
var credits_texture = new PIXI.Texture.fromImage("credits_sprite.png");
var credits_sprite = new PIXI.Sprite(credits_texture);
hoop_sprite.anchor.x = 0.5;
hoop_sprite.anchor.y = 0.5;
hoop_sprite.position.x = 200;
hoop_sprite.position.y = 200;
credits_stage.addChild(credits_sprite);


// create tutorial sprite
var tutorial_texture = new PIXI.Texture.fromImage("tutorial_sprite.png");
var tutorial_sprite = new PIXI.Sprite(tutorial_texture);
hoop_sprite.anchor.x = 0.5;
hoop_sprite.anchor.y = 0.5;
hoop_sprite.position.x = 200;
hoop_sprite.position.y = 200;
tutorial_stage.addChild(tutorial_sprite);

//current stage
var current_stage = title_stage;

// listiner for keyboard input
document.addEventListener('keydown', onKeyDown);

// random hoop location
createHoop();

// runs game
animate();


function checkStart() {
    if (current_stage == title_stage){
        setTimeout(function(){current_stage = menu_stage;}, 1000);
    }
}

function animate() {

	requestAnimationFrame(animate); // constantly calls animate
    checkStart();
	bball_sprite.rotation += 0.1; // rotate ball
	renderer.render(current_stage); // render stage
	checkPosition(); // check if made basket
}

function createHoop() {
    
    // get random numbers
    var randx = 10 * Math.floor((Math.random() * 39) + 1);
    var randy = 10 * Math.floor((Math.random() * 39) + 1);
  
    // move the hoop to random location
    createjs.Tween.get(hoop_sprite.position).to({x: randx, y: randy}, 500)

}

function checkPosition() {
    // check position of ball and position of hoop for basket.  If made basket, hoop respawns in random location
    if ((hoop_sprite.position.x >= bball_sprite.position.x-7 && hoop_sprite.position.x <= bball_sprite.position.x + 7) && (hoop_sprite.position.y >= bball_sprite.position.y-7 && hoop_sprite.position.y <= bball_sprite.position.y + 7)) {
        createHoop();
        score += 2;
        score_board.setText("Home: " + score + "    Away: infinity");
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

    if (key.keyCode === 27) {

        score = 0;
        score_board.setText("Home: " + score + "    Away: infinity");
        current_stage = menu_stage;

    }

}

