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
var win_stage = new PIXI.Container();
var lose_stage = new PIXI.Container();

// score board and timer
var score = -6;
var score_board = new PIXI.Text("Home: " + score + "    Away: infinity", {font:"20px Arial", fill:"white"});
score_board.position.x = 125;
score_board.position.y = 0;
;

var time = 30;
var time_board = new PIXI.Text("Time: " + time, {font:"20px Arial", fill:"white"});
time_board.position.x = 30;
time_board.position.y = 0;

var timer = setInterval(checkTime, 1000)

function checkTime(){
    time -= 1;
    time_board.setText("Time: " + time, {font:"20px Arial", fill:"white"});
    if (time == 0 && score == 0){
        current_stage = win_stage;
    }
    if (time == 0 && score != 0){
        current_stage = lose_stage;
    }
}


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


stage.addChild(background_sprite);
stage.addChild(bball_sprite);
stage.addChild(hoop_sprite);
stage.addChild(score_board);
stage.addChild(time_board);

// create credits sprite
var credits_texture = new PIXI.Texture.fromImage("credits_sprite.png");
var credits_sprite = new PIXI.Sprite(credits_texture);
hoop_sprite.anchor.x = 0.5;
hoop_sprite.anchor.y = 0.5;
hoop_sprite.position.x = 200;
hoop_sprite.position.y = 200;
credits_stage.addChild(credits_sprite);

// create win and lose sprites
var win_texture = new PIXI.Texture.fromImage("win_sprite.png");
var win_sprite = new PIXI.Sprite(win_texture);
win_sprite.anchor.x = 0.5;
win_sprite.anchor.y = 0.5;
win_sprite.position.x = 200;
win_sprite.position.y = 200;
win_stage.addChild(win_sprite);

var basketball_halo_texture = new PIXI.Texture.fromImage("basketball_halo_sprite.png");
var basketball_halo_sprite = new PIXI.Sprite(basketball_halo_texture);
basketball_halo_sprite.scale.x = 2;
basketball_halo_sprite.scale.y = 2;
basketball_halo_sprite.anchor.x = 0.5;
basketball_halo_sprite.anchor.y = 0.5;
basketball_halo_sprite.position.x = 100;
basketball_halo_sprite.position.y = 300;
win_stage.addChild(basketball_halo_sprite);

var basketball_halo_girl_texture = new PIXI.Texture.fromImage("basketball_halo_girl_sprite.png");
var basketball_halo_girl_sprite = new PIXI.Sprite(basketball_halo_girl_texture);
basketball_halo_girl_sprite.scale.x = 1.75;
basketball_halo_girl_sprite.scale.y = 1.75;
basketball_halo_girl_sprite.anchor.x = 0.5;
basketball_halo_girl_sprite.anchor.y = 0.5;
basketball_halo_girl_sprite.position.x = 60;
basketball_halo_girl_sprite.position.y = 300;
win_stage.addChild(basketball_halo_girl_sprite);


var basketball_halo_girl_sprite2 = new PIXI.Sprite(basketball_halo_girl_texture);
basketball_halo_girl_sprite2.scale.x = 1.75;
basketball_halo_girl_sprite2.scale.y = 1.75;
basketball_halo_girl_sprite2.anchor.x = 0.5;
basketball_halo_girl_sprite2.anchor.y = 0.5;
basketball_halo_girl_sprite2.position.x = 140;
basketball_halo_girl_sprite2.position.y = 300;
win_stage.addChild(basketball_halo_girl_sprite2);

var lose_texture = new PIXI.Texture.fromImage("lose_sprite.png");
var lose_sprite = new PIXI.Sprite(lose_texture);
lose_sprite.anchor.x = 0.5;
lose_sprite.anchor.y = 0.5;
lose_sprite.position.x = 200;
lose_sprite.position.y = 200;
lose_stage.addChild(lose_sprite);



PIXI.loader
    .add("assets.json")
    .load(ready);


function ready(){
    var frames = [];
    frames.push(PIXI.Texture.fromFrame("basketball_angel_sprite1.png"))
    frames.push(PIXI.Texture.fromFrame("basketball_angel_sprite2.png"))
    frames.push(PIXI.Texture.fromFrame("basketball_angel_sprite3.png"))

    runner = new PIXI.extras.MovieClip(frames);
    runner.position.x = 50;
    runner.position.y = 10;
    runner.animationSpeed = 0.1;
    runner.play();
    win_stage.addChild(runner);

    runner2 = new PIXI.extras.MovieClip(frames);
    runner2.position.x = 320;
    runner2.position.y = 100;
    runner2.animationSpeed = 0.1;
    runner2.play();
    win_stage.addChild(runner2);

    
}
function moveAngels(){
    if (runner.position.x == 50){
        createjs.Tween.get(runner.position).to({x: 350, y: 10}, 5000)
    }
    if (runner.position.x == 350){
         createjs.Tween.get(runner.position).to({x: 50, y: 10}, 5000)
    }

    if (runner2.position.y == 350){
        createjs.Tween.get(runner2.position).to({x: 320, y: 100}, 5000, createjs.Ease.cubicInOut)
    }
    if (runner2.position.y == 100){
         createjs.Tween.get(runner2.position).to({x: 320, y: 350}, 5000, createjs.Ease.cubicInOut)
    }
}


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
    if (current_stage === title_stage){
        setTimeout(function(){current_stage = menu_stage;}, 1000);
    }
}

function animate() {

	requestAnimationFrame(animate); // constantly calls animate
    checkStart();
	bball_sprite.rotation += 0.1; // rotate ball
	renderer.render(current_stage); // render stage
	checkPosition(); // check if made basket
    moveAngels();
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
        time = 30;
        time_board.setText("Time: " + time, {font:"20px Arial", fill:"white"});

        current_stage = menu_stage;

    }

}

