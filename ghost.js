class Ghost extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y){
        super(scene, x, y, 'ghost');
        scene.add.existing(this);
        this.x = x;
    }

    update(time, delta){
        this.x = this.x - (75 * 1/1000 * delta);

    }
}