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
            gravity: {y:2500}
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
    
    this.cannon1 = this.add.sprite(100, 75, 'cannon');
    this.cannon1.setScale(.35);
    this.cannon2 = this.add.sprite(100, 250, 'cannon');
    this.cannon2.setScale(.35);
    this.cannon3 = this.add.sprite(100, 425, 'cannon');
    this.cannon3.setScale(.35);

    this.scoreBox = this.add.sprite(config.width/2,575,'scoreBox');
    this.scoreBox.setScale(.25)
    this.level = this.add.text(850, 15, "level: " + level, {
        font: "20px Arial",
        fill: "#e3fae9",
        align: "center"
    });
    //let possibleMultipliers = [];
    //for (let i = 0; i<level+3; i++){
    //    possibleMultipliers.append(i)
    //}

    let multiplier1 = Math.floor(Math.random()*(level+3))
    let multiplier2 = Math.floor(Math.random()*(level+3))
    let multiplier3 = Math.floor(Math.random()*(level+3))
    let multiplier4 = Math.floor(Math.random()*(level+3))
    let multiplier5 = Math.floor(Math.random()*(level+3))
    let multiplier6 = Math.floor(Math.random()*(level+3))
    
    this.mathProblem1 = this.add.text(50, 55, multiplier1 + " x " + multiplier2, {
        font: "40px Arial",
        fill: "#e3fae9",
        align: "center",
        
    });
    let solution1 = multiplier1 * multiplier2;

    this.mathProblem2 = this.add.text(50, 230, multiplier3 + " x " + multiplier4, {
        font: "40px Arial",
        fill: "#e3fae9",
        align: "center"
    });
    let solution2 = multiplier3 * multiplier4;
    
    this.mathProblem3 = this.add.text(50, 405, multiplier5 + " x " + multiplier6, {
        font: "40px Arial",
        fill: "#e3fae9",
        align: "center"
    });
    let solution3 = multiplier5 * multiplier6;

    let solutionList = [solution1, solution2, solution3];

    let answer = "";
    //Their Guess at a solution that is checked against the existing problems
    let answerText = this.add.text(460, 560, 'Answer', {
        font: "25px Arial",
        fill: "#e3fae9",
        align: "center",
        
    });
    
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
    
    //make a loop thing that just creates the key object when given keyboard press and what should be added
    //to the answer.
    
    var keyObj = gameScene.input.keyboard.addKey('ENTER');  // Get key object
    keyObj.on('down', function(event) {
    
        //check if is part of solutionList
        for (let i = 0; i< solutionList.length; i++){
            if (parseInt(answer) == (solutionList[i])){
                if (i == 0){
                    console.log("Shoot 1");
                    shoot(this.cannon1, gameScene);
                }
                else if (i == 1){
                    console.log("Shoot 2");
                    shoot(this.cannon2, gameScene);
                }
                else if (i == 2){
                    console.log("Shoot 3");
                    shoot(this.cannon3, gameScene);
                }
            }
        }
        answer = '';
        answerText.text = answer;
    });
    
}

function shoot(cannon, scene){

    let multiplier1 = Math.floor(Math.random()*(level+3))
    let multiplier2 = Math.floor(Math.random()*(level+3))
    let multiplier3 = Math.floor(Math.random()*(level+3))
    let multiplier4 = Math.floor(Math.random()*(level+3))
    let multiplier5 = Math.floor(Math.random()*(level+3))
    let multiplier6 = Math.floor(Math.random()*(level+3))

    
    //this.cannon1
    //add cannonball 
    //shooting Animation
}

//have a score that increases, and decreases when you dont make it.
gameScene.update = function(time, delta) {
    

}