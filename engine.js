//MathBlast! by: Sawyer Blair + Michael Dreger

let gameScene = new Phaser.Scene('Game');
let startScene = new Phaser.Scene('Start');
let menuScene = new Phaser.Scene('Menu');

let config = {
    type:Phaser.AUTO,
    width: 1000,
    height: 645,
    scene: [startScene, menuScene, gameScene],
    physics: {
        default:"arcade",
        arcade:{
            debug: true,
            gravity: {y:0}
        }
    }
}

var game = new Phaser.Game(config);
startScene.preload = function(){
    this.load.image('startBackground','./assets/BLAST!.png');
    this.load.image('startButton', './assets/start.png');
}



startScene.create = function() {
    this.background = this.add.image(config.width/2, config.height/2, 'startBackground');
    this.background.setScale(.6);

    let start = this.add.sprite(config.width/2, 375,"startButton");
    start.setScale(.6);
    
    start.setInteractive();

    start.onClickTween = startScene.tweens.add({
        targets: start,
        scaleX: .55,
        scaleY: .55,
        duration: 100,
        yoyo: true,
        ease: "Quad.easeOut",
        onStart: function(){
            start.setScale(.5,.5);
        }
    });

    start.onHoverTween = startScene.tweens.add({
        targets: start,
        scaleX: .55,
        scaleY: .55,
        duration: 200,
        ease: "Quad.easeIn",
        onStart: function(){
            start.setScale(.5,.5);
        }
    });

    start.onLeaveTween = startScene.tweens.add({
        targets: start,
        scaleX: .5,
        scaleY: .5,
        duration: 200,
        ease: "Quad.easeOut",
        onStart: function(){
            start.setScale(.55,.55);
        }
    });
    

    start.on('pointerdown', function(){
        start.onClickTween.restart();
        startScene.scene.start("Menu");
        
    });

    start.on('pointerover', function(){
        start.onHoverTween.restart();
        start.onClickTween.stop();
        start.onLeaveTween.stop();
    });

    start.on('pointerout', function(){
        start.onLeaveTween.restart();
        start.onClickTween.stop();
        start.onHoverTween.stop();
    });
}



menuScene.preload = function() {
    this.load.image('background','./assets/middle_background.png')
    this.load.image('button1', './assets/1.png');
    this.load.image('button2', './assets/2.png');
    this.load.image('button3', './assets/3.png');
    this.load.image('button4', './assets/4.png');
    this.load.image('button5', './assets/5.png');
    this.load.image('button6', './assets/6.png');
    this.load.image('button7', './assets/7.png');
    this.load.image('button8', './assets/8.png');
    this.load.image('button9', './assets/9.png');
    this.load.image('button10', './assets/10.png');
}


var level = 0;
menuScene.create = function() {
    this.background = this.add.image(config.width/2, config.height/2, 'background');
    this.background.setScale(.6);
    
    this.button1 = this.add.sprite(200, 300, 'button1');
    this.button1.setScale(.2);
    this.button2 = this.add.sprite(350, 300, 'button2');
    this.button2.setScale(.2);
    this.button3 = this.add.sprite(500, 300, 'button3');
    this.button3.setScale(.2);
    this.button4 = this.add.sprite(650, 300, 'button4');
    this.button4.setScale(.2);
    this.button5 = this.add.sprite(800, 300, 'button5');
    this.button5.setScale(.2);
    this.button6 = this.add.sprite(200, 450, 'button6');
    this.button6.setScale(.2);
    this.button7 = this.add.sprite(350, 450, 'button7');
    this.button7.setScale(.2);
    this.button8 = this.add.sprite(500, 450, 'button8');
    this.button8.setScale(.2);
    this.button9 = this.add.sprite(650, 450, 'button9');
    this.button9.setScale(.2);
    this.button10 = this.add.sprite(800, 450, 'button10');
    this.button10.setScale(.2);
    
    function createTweens(item,scaleXSmall, scaleYSmall, scaleXBig, scaleYBig){
        item.onClickTween = menuScene.tweens.add({
            targets: item,
            scaleX: scaleXSmall,
            scaleY: scaleYSmall,
            duration: 100,
            yoyo: true,
            ease: "Quad.easeOut",
            onStart: function(){
                item.setScale(scaleXBig,scaleYBig);
            }
        });
    
        item.onHoverTween = menuScene.tweens.add({
            targets: item,
            scaleX: scaleXBig,
            scaleY: scaleYBig,
            duration: 100,
            ease: "Quad.easeIn",
            onStart: function(){
                item.setScale(scaleXSmall,scaleYSmall);
            }
        });
    
        item.onLeaveTween = menuScene.tweens.add({
            targets: item,
            scaleX: scaleXSmall,
            scaleY: scaleYSmall,
            duration: 200,
            ease: "Quad.easeOut",
            onStart: function(){
                item.setScale(scaleXBig,scaleYBig);
            }
        });

    }

    let buttons = [this.button1, this.button2, this.button3, this.button4, this.button5, this.button6, this.button7, this.button8, this.button9, this.button10];
    
    //establishing tweening and interacivity for all buttons
    for(let i = 0; i< buttons.length; i++){
        let button = buttons[i];
        button.setInteractive();
        createTweens(button,.2,.2,.21,.21);
        
        button.on('pointerdown', function(){
            button.onClickTween.restart();
            level = i + 1;
            menuScene.scene.start("Game");
         });
    
         button.on('pointerover', function(){
            button.onHoverTween.restart();
            button.onClickTween.stop();
            button.onLeaveTween.stop();
        });
    
        button.on('pointerout', function(){
            button.onLeaveTween.restart();
            button.onClickTween.stop();
            button.onHoverTween.stop();
        });
    } 
}

gameScene.preload = function(){
    this.load.image('gameSceneBackground', './assets/game_background.png');
    this.load.image('redHeart', './assets/red_heart.png');
    this.load.image('blackHeart', './assets/black_heart.png');
    this.load.image('cannon','./assets/cannon.png');
    this.load.image('ghost', './assets/ghost.png');
    this.load.image('cannonball', './assets/Cannonball.jpg');
    this.load.image('scoreBox','./assets/score_box.png')
}





gameScene.create = function(){
    this.background = this.add.image(config.width/2, config.height/2, 'gameSceneBackground');
    this.background.setScale(.6);
    
    this.cannon1 = new Cannon(gameScene, 100, 75, level);
    this.cannon2 = new Cannon(gameScene, 100, 250, level);
    this.cannon3 = new Cannon(gameScene, 100, 425, level);
    this.cannon1.setScale(.35);
    this.cannon2.setScale(.35);
    this.cannon3.setScale(.35);

    this.scoreBox = this.add.sprite(config.width/2,575,'scoreBox');
    this.scoreBox.setScale(.25)
    this.level = this.add.text(850, 15, "level: " + level, {
        font: "20px Arial",
        fill: "#e3fae9",
        align: "center"
    });

    let solutionList = [this.cannon1.solution, this.cannon2.solution, this.cannon3.solution];
    let answer = "";

    //Their Guess at a solution that is checked against the existing problems
    let answerText = this.add.text(480, 550, 'Answer', {
        font: "40px Arial",
        fill: "#e3fae9",
        align: "center",
    });


    /*
    this.keyObjectList = [['ONE', '1'], ['TWO', '2'], ['THREE', '3'], ['FOUR', '4'], ['FIVE', '5'], ['SIX', '6'], ['SEVEN', '7'], ['EIGHT', '8'], ['NINE', '9'], ['ZERO', '0']];
    
    for (let i = 0; i < this.keyObjectList.length; i++){
        var keyObj = gameScene.input.keyboard.addKey(this.keyObjectList[i[0]]);
        keyObj.on('down', function(event) {
            if (answer.length == 0){
                answerText.text = '';
            }
            answer = answer + this.keyObjectList[i[1]];
            answerText.text = answer;   
        });
    }
    */
    
    
    
    var keyObj = gameScene.input.keyboard.addKey('ONE');  // Get key object
    keyObj.on('down', function(event) {
        if (answer.length == 0){
            answerText.text = '';
        }
        answer = answer + '1';
        answerText.text = answer;
        
    });

    var keyObj = gameScene.input.keyboard.addKey('TWO');  // Get key object
    keyObj.on('down', function(event) {
        if (answer.length == 0){
            answerText.text = '';
        }
        answer = answer + '2';
        answerText.text = answer;
        
    });
    var keyObj = gameScene.input.keyboard.addKey('THREE');  // Get key object
    keyObj.on('down', function(event) {
        if (answer.length == 0){
            answerText.text = '';
        }
        answer = answer + '3';
        answerText.text = answer;
        
    });
    var keyObj = gameScene.input.keyboard.addKey('FOUR');  // Get key object
    keyObj.on('down', function(event) {
        if (answer.length == 0){
            answerText.text = '';
        }
        answer = answer + '4';
        answerText.text = answer;
        
    });
    var keyObj = gameScene.input.keyboard.addKey('FIVE');  // Get key object
    keyObj.on('down', function(event) {
        if (answer.length == 0){
            answerText.text = '';
        }
        answer = answer + '5';
        answerText.text = answer;
        
    });
    var keyObj = gameScene.input.keyboard.addKey('SIX');  // Get key object
    keyObj.on('down', function(event) {
        if (answer.length == 0){
            answerText.text = '';
        }
        answer = answer + '6';
        answerText.text = answer;
        
    });
    var keyObj = gameScene.input.keyboard.addKey('SEVEN');  // Get key object
    keyObj.on('down', function(event) {
        if (answer.length == 0){
            answerText.text = '';
        }
        answer = answer + '7';
        answerText.text = answer;
        
    });
    var keyObj = gameScene.input.keyboard.addKey('EIGHT');  // Get key object
    keyObj.on('down', function(event) {
        if (answer.length == 0){
            answerText.text = '';
        }
        answer = answer + '8';
        answerText.text = answer;
        
    });
    var keyObj = gameScene.input.keyboard.addKey('NINE');  // Get key object
    keyObj.on('down', function(event) {
        if (answer.length == 0){
            answerText.text = '';
        }
        answer = answer + '9';
        answerText.text = answer;
        
    });
    var keyObj = gameScene.input.keyboard.addKey('ZERO');  // Get key object
    keyObj.on('down', function(event) {
        if (answer.length == 0){
            answerText.text = '';
        }
        answer = answer + '0';
        answerText.text = answer;
        
    });

    
    
    this.ghosts = [];
    this.cannonBalls = [];
    var keyObj = gameScene.input.keyboard.addKey('ENTER');  // Get key object
    keyObj.on('down', function(event) {
    
        //check if is part of solutionList
        for (let i = 0; i< solutionList.length; i++){
            if (parseInt(answer) == (solutionList[i])){
                if (i == 0){
                    gameScene.physics.add.collider(gameScene.cannon1.shoot(1), gameScene.ghosts1[0], destroy);
                }
                else if (i == 1){
                    gameScene.physics.add.collider(gameScene.cannon2.shoot(2), gameScene.ghosts2[0], destroy);
                }
                else if (i == 2){
                    gameScene.physics.add.collider(gameScene.cannon3.shoot(3), gameScene.ghosts3[0], destroy);
                }
            }
        }
        solutionList = [gameScene.cannon1.solution, gameScene.cannon2.solution, gameScene.cannon3.solution];
        answer = '';
        answerText.text = answer;
        
    });




    this.ghosts = [];
    this.ghosts1 = [];
    this.ghosts2 = [];
    this.ghosts3 = [];

    destroy = function(cannonBall, ghost){
        if (cannonBall.y == 75) {
            console.log('cannon1');
            gameScene.ghosts1.shift();
        }
        if (cannonBall.y == 250) {
            gameScene.ghosts2.shift();
        }
        if (cannonBall.y == 425) {
            gameScene.ghosts3.shift();
        }
        cannonBall.collide();
        ghost.collide();
    }

    this.createGhost = function(){
        let floor = Math.floor(Math.random() * 3) + 1;
        if (floor == 3){
            gameScene.ghost = new Ghost(gameScene, 1100, 425);
            gameScene.ghost.setScale(.2);
            gameScene.ghosts3.push(gameScene.ghost);
        }
        else if(floor == 2){
            gameScene.ghost = new Ghost(gameScene, 1100, 250);
            gameScene.ghost.setScale(.2);
            gameScene.ghosts2.push(gameScene.ghost);
        }
        else{
            gameScene.ghost = new Ghost(gameScene, 1100, 75);
            gameScene.ghost.setScale(.2);
            gameScene.ghosts1.push(gameScene.ghost);
        }
        gameScene.ghosts = [gameScene.ghosts1, gameScene.ghosts2, gameScene.ghosts3];
    }
    

    this.createGhost();
    
}


gameScene.ghostSpawning = false;
gameScene.difficultyValue = 4000;


gameScene.update = function(time, delta) {

    for(let i = 0; i < this.cannonBalls.length; i++){
        if (this.cannonBalls[i].x > 1500){
            this.cannnoBalls[i].destroy()
            this.cannonBalls[i].splice(i,i);
        }
    }
    
    //if time between 2 values... set spawn rate to faster... then when time passes certain point set it to slower....

    if(time > 5000 && time < 6000){
        this.difficultyValue = 3000;
    }else{
        this.difficultyValue = 4000;
    }
    
    //Starts a new time interval at the end of which, a ghost will spawn
    if (!this.ghostSpawning){
        this.ghostSpawnInterval = time + this.difficultyValue + (Math.random() * 1000);
        this.ghostSpawning = true;
    }
    
    //When the end of the spawning interval is reached, this spawns a new ghost
    if (time > this.ghostSpawnInterval){
        console.log('spawning ghost');
        this.createGhost();
        this.ghostSpawning = false;
    }
    

    //NOTES FOR NEXT TIME!!!
    //Ghost spanwing in waves - down times and intense times
    //Make the end to each level
    //Do something with the ghosts when they reach the cannons (Hearts? Kill them? Lose points?)
    //Score system

    //need to set up the scoring system in which you gain points
    //from destroying ghosts, and lose points for ghost hitting cannon
    //but doesnt actually mean anything...

    //nuke button?

    //difficulty selector?

    //THE CANNON BALL GOES ON FOREVER (If it goes out of the screen without killing a ghost)
    //Michael personal note: photo ID - song*
    //Sawyer Personal Note: ****DON"T TELL ANYONE*** ***TOP SECRET*** M1cha31 $uck$ ****DON"T TELL ANYONE*** ***TOP SECRET*** 
     //Michael personal note in response to sawyer personal note: :'(


}