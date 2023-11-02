class Cone extends Phaser.Physics.Arcade.Sprite{
    constructor(scene, moveSpeed){
        super(scene, Phaser.Math.Between(25/2, game.config.width - 25/2), 0, 'cone')
        
        this.pointValue = 1
        scene.add.existing(this)
        scene.physics.add.existing(this)
        this.setVelocityY(moveSpeed)
        this.setImmovable(true)
        this.setScale(3)
        this.body.setSize(15, 19).setOffset(9, 13)
        
        if(this.y < -this.height){
            this.destroy
        }

    }
}