class Play extends Phaser.Scene{
    constructor() {
        super('playScene')
    }

    create() {
        // initize some stuff
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A)
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D)
        this.score = 0

        this.scrollBG = this.add.tileSprite(320, 480, 640, 960, 'court')


        //add the player sprite
        this.player = this.physics.add.sprite(game.config.width/2, game.config.height*18/20, 'player').setOrigin(0.5).setScale(3)
        this.player.body.setSize(17, 32).setOffset(11, 0)
        this.player.setCollideWorldBounds(true);
        this.player.setBounce(0);
        this.player.setImmovable();
        this.player.setMaxVelocity(600, 0);
        this.player.setDragX(5000);
        this.player.setDepth(10);
        this.anims.create({
            key: 'dribble',
            frameRate: 2,
            repeat: -1,
            frames: this.anims.generateFrameNumbers('player', {
                start: 0,
                end: 3
            })
        })
        this.player.play('dribble', true)


        //defender stuff
        this.defenderGroup = this.add.group({
            runChildUpdate: true
        })

        console.log(this.defenderGroup.runChildUpdate) //debug

        this.addDefender()
        this.time.delayedCall(100000, this.addCone(), null, this)

        this.physics.add.collider(this.player, this.defenderGroup, (player, defender) => 
        {
            console.log('HIT')
            this.scene.start('gameOverScene')
        })
    }


    update(){
        if(this.player){
            if(keyA.isDown){
                this.player.body.velocity.x -= playerVelocity
            }
            if(keyD.isDown){
                this.player.body.velocity.x += playerVelocity
            }
        }

        this.scrollBG.tilePositionY -= 0.5

        if(this.score > highscore){
            highscore = this.score
        }
    }


    addDefender() {
        let speedVariance = Phaser.Math.Between(0, 30)
        let defender = new Defender(this, scrollSpeed + speedVariance, defenderSpeed)
        this.defenderGroup.add(defender)
    }

    addCone(){
        let cone = new Cone(this, scrollSpeed, defenderSpeed)
        this.defenderGroup.add(cone)
    }
}

