

class Cannon extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, level){
        super(scene, x, y, 'cannon');
        scene.add.existing(this);
        scene.physics.add.existing(this);
        
        
        this.level = level;
        this.scene = scene;
        this.x = x;
        this.y = y;
        
        this.multiplier1 = Math.floor(Math.random()*(this.level+3));
        this.multiplier2 = Math.floor(Math.random()*(this.level+3));
        
        this.problemText = scene.add.text(x-50, y-20, this.multiplier1 + " x " + this.multiplier2, {
            font: "40px Arial",
            fill: "#e3fae9",
            align: "center",
            });

        this.solution = this.multiplier1 * this.multiplier2;
    }

    shoot(number){
        console.log("Shoot " + number);
        this.cannonBall = new CannonBall(this.scene, this.x + 80, this.y)
        this.cannonBall.setScale(.15);
        this.generateNewProblem();
        return (this.cannonBall);
    }

    generateNewProblem(){
        this.multiplier1 = Math.floor(Math.random()*(this.level+3));
        this.multiplier2 = Math.floor(Math.random()*(this.level+3));
        this.problemText.text = this.multiplier1 + " x " + this.multiplier2;
        this.solution = this.multiplier1 * this.multiplier2;
    }

  }
  
    
    
      