class CannonBall extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y){
        super(scene,x,y,'cannonball');
        scene.add.existing(this);
        this.x = x;
    }

    update(time, delta){
        this.x = this.x + (600 * 1/1000 * delta);
    }

}