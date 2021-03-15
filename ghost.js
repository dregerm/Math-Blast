class Ghost extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y){
        super(scene, x, y, 'ghost');
        scene.add.existing(this);
        scene.physics.add.existing(this);
        this.x = x;
        this.setVelocityX(-100);
    }

    update(time, delta){
        //this.x = this.x - (75 * 1/1000 * delta);
    }

    collide(){
        this.destroy();
    }
}