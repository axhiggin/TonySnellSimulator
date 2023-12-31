class Play extends Phaser.Scene{
    constructor() {
        super('playScene')
    }

    create() {
        //MUSIC
        this.bgm = this.sound.add('music', {loop: true, volume: 0.05})
        this.bgm.play()

        // initize some stuff
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A)
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D)
        this.score = 0

        this.scrollBG = this.add.tileSprite(320, 480, 640, 960, 'court')

        //make sure globals are reset
        scrollSpeed = 200
        playerVelocity = 50
        defenderSpeed = 35


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

        this.time.delayedCall(200, () => {
            this.spawnEnemy()
        })
        

        this.physics.add.collider(this.player, this.defenderGroup, (player, defender) => 
        {
            console.log('HIT')
            this.bgm.stop()
            this.scene.start('gameOverScene')
        })

        //levels and stuff
        this.level = 0

        //display score!
        this.scoreText = this.add.text(game.config.width/15, game.config.height/25, "Score: " + this.score, scoreConfig)

    }


    update(){
        this.scoreText.text = "Score: " + this.score

        //levels
        this.prelevel = this.level
        this.level = Math.floor(this.score/10)
        
        //level up
        if(this.prelevel < this.level){
            //print LEVEL UP message
            if(this.level % 5 == 0){
                this.sound.play('LBJ', {volume: 0.1})
            }
            else{
                this.sound.play('levelUp', {volume: 0.1})
            }
            
            console.log('LEVEL UP')
            this.levelUpText = this.add.text(this.player.x, this.player.y * 0.9, 'LEVEL UP!', levelUpConfig)
            this.time.delayedCall(1000, () => {
                this.levelUpText.destroy()
            })
            scrollSpeed *= 1.1
        
        }
        


        if(this.player){
            if(keyA.isDown){
                this.player.body.velocity.x -= playerVelocity
            }
            if(keyD.isDown){
                this.player.body.velocity.x += playerVelocity
            }
        }

        this.scrollBG.tilePositionY -= (scrollSpeed/163)

        if(this.score > highscore){
            highscore = this.score
        }
    }


    addDefender() {
        let speedVariance = Phaser.Math.Between(0, 30)
        let defender = new Defender(this, scrollSpeed + speedVariance, defenderSpeed + this.level)
        this.defenderGroup.add(defender)
    }

    addCone() {
        let cone = new Cone(this, scrollSpeed)
        this.defenderGroup.add(cone)
    }

    spawnEnemy() {
        if(Math.random()< 0.5){
            this.addDefender()
        }
        else{
            this.addCone()
        }
        this.time.delayedCall(2000/(1 + (this.level*0.01)), () => { 
            this.spawnEnemy(); 
        })
    }
}

