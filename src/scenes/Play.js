class Play extends Phaser.Scene{
    constructor() {
        super('playScene')
    }

    create() {
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A)
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D)
        this.score = 0
        console.log('welcome to play scene')
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

        this.defenderGroup = this.add.group({
            runChildUpdate: true
        })

        console.log(this.defenderGroup.runChildUpdate)

        this.addDefender()

        this.physics.add.collider(this.player, this.defenderGroup, (player, defender) => 
        {
            console.log('HIT')
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
    }


    addDefender() {
        let speedVariance = Phaser.Math.Between(0, 30)
        let defender = new Defender(this, scrollSpeed - speedVariance, defenderSpeed)
        this.defenderGroup.add(defender)
    }
}

