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

menuScene.create = function() {
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
    
    function createTweens(item){
        item.onClickTween = menuScene.tweens.add({
            targets: item,
            scaleX: .12,
            scaleY: .12,
            duration: 100,
            yoyo: true,
            ease: "Quad.easeOut",
            onStart: function(){
                item.setScale(.11,.11);
            }
        });
    
        item.onHoverTween = menuScene.tweens.add({
            targets: item,
            scaleX: .12,
            scaleY: .12,
            duration: 200,
            ease: "Quad.easeIn",
            onStart: function(){
                item.setScale(.11,.11);
            }
        });
    
        item.onLeaveTween = menuScene.tweens.add({
            targets: item,
            scaleX: .11,
            scaleY: .11,
            duration: 200,
            ease: "Quad.easeOut",
            onStart: function(){
                item.setScale(.12,.12);
            }
        });

    }

    let buttons = [this.button1, this.button2, this.button3, this.button4, this.button5, this.button6, this.button7, this.button8, this.button9, this.button10];
    
    //establishing tweening and interacivity for all buttons
    for(i = 0; i< buttons.length; i++){
        button = buttons[i];
        button.setInteractive();
        createTweens(button);

        button.on('pointerdown', function(){
            button.onClickTween.restart();
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
}

gameScene.create = function(){
    this.background = this.add.image(config.width/2, config.height/2, 'gameSceneBackground');
    this.background.setScale(.6);

    this.cannon1 = this.add.sprite(100, 125, 'cannon');
    this.cannon1.setScale(.3);
    this.cannon2 = this.add.sprite(100, 300, 'cannon');
    this.cannon2.setScale(.3);
    this.cannon3 = this.add.sprite(100, 475, 'cannon');
    this.cannon3.setScale(.3);

}

gameScene.update = function(time, delta) {



}