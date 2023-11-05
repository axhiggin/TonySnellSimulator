class Defender extends Phaser.Physics.Arcade.Sprite{
    constructor(scene, moveSpeedY, moveSpeedX){
        super(scene, Phaser.Math.Between(25/2, game.config.width - 25/2), 0, 'defender')
        this.parentScene = scene
        this.moveSpeedX = moveSpeedX
        this.anims.create({
            key: 'defend',
            frameRate: 2,
            repeat: -1,
            frames: this.anims.generateFrameNumbers('defender', {
                start: 0,
                end: 1
            })
        })

        this.play('defend', true)

        this.pointValue = 2
        this.parentScene.add.existing(this)
        this.parentScene.physics.add.existing(this)
        this.setVelocityY(moveSpeedY)
        this.setImmovable(true)
        this.setScale(3)
        this.body.setSize(23, 32).setOffset(5, 0)
        // console.log(this.parentScene.score)

    }
    update() {
        //make sure this is before the destroy so it doesn't try to access "this" when it doesn't exist
        if(this.parentScene.player.x > this.x){
            this.setVelocityX(this.moveSpeedX)
        }
        else{
            this.setVelocityX(-this.moveSpeedX)
        }

        if(this.y > game.config.height){
            this.destroy()
            this.parentScene.score += this.pointValue
            this.scoreAdd = this.parentScene.add.text(this.x, this.y * 0.9 , '+ 2', levelUpConfig)
            this.parentScene.time.delayedCall(1000, () => {
                this.scoreAdd.destroy()
            })
            this.parentScene.sound.play('point', {volume: 0.1})
            console.log(this.parentScene.score) //debug
        }
    }

}