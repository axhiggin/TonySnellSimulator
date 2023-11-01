class Defender extends Phaser.Physics.Arcade.Sprite{
    constructor(scene, moveSpeed){
        super(scene, Phaser.Math.Between(25/2, game.config.width - 25/2), 0, 'defender')
        
        scene.add.existing(this)
        scene.physics.add.existing(this)
        this.setVelocityY(scrollSpeed)
        this.setImmovable(true)
        this.setScale(3)
        this.body.setSize(23, 32).setOffset(5, 0)
        
        if(this.y < -this.height){
            this.destroy
        }

    }
}