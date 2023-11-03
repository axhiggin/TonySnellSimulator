class Cone extends Phaser.Physics.Arcade.Sprite{
    constructor(scene, moveSpeedY){
        super(scene, Phaser.Math.Between(25/2, game.config.width - 25/2), 0, 'cone')
        this.parentScene = scene

        this.pointValue = 1
        this.parentScene.add.existing(this)
        this.parentScene.physics.add.existing(this)
        this.setVelocityY(moveSpeedY)
        this.setImmovable(true)
        this.setScale(3)
        this.body.setSize(15, 19).setOffset(9, 13)
        console.log(this.parentScene.score)

    }
    update() {
        if(this.y > game.config.height){
            this.destroy()
            this.parentScene.score += this.pointValue
            console.log(this.parentScene.score) //debug
        }
    }

}