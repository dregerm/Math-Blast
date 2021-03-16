class CannonBall extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y){
        super(scene,x,y,'cannonball');
        scene.add.existing(this);
        scene.physics.add.existing(this);
        this.x = x;
        this.setVelocityX(600);
    }

    update(time, delta){
        if(this.x > 500){
            this.destroy();
        }
    }

    collide(){
        this.destroy();
        //Add explosion image or some animation
    }





}