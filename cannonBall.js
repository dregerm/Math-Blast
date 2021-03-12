class CannonBall {
    constructor(scene, x, y){
        scene.add.existing(this);
        this.x = x;
        this.y = y;
        this.sprite = scene.add.sprite(this.x, y, 'cannonball');
        this.sprite.setScale(.15);
    }

}