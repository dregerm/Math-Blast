class Ghost extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y){
        super(scene, x, y, 'ghost');
        scene.add.existing(this);
        scene.physics.add.existing(this);
        this.x = x;
        this.setVelocityX(-80);
       
    }

    update(time, delta){
       
    }

    collide(){
        this.destroy();
    }
}