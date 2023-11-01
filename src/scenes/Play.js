class Play extends Phaser.Scene{
    constructor() {
        super('playScene')
    }

    create() {
        console.log('welcome to play scene')
        this.player = this.physics.add.sprite(game.config.width/2, game.config.height*18/20, 'player').setOrigin(0.5).setScale(3)
        this.player.body.setSize(17, 32).setOffset(11, 0)
        this.player.setCollideWorldBounds(true);
        this.player.setBounce(0.5);
        this.player.setImmovable();
        this.player.setMaxVelocity(600, 0);
        this.player.setDragX(200);
        this.player.setDepth(10);
        this.defender1 = new Defender(this, scrollSpeed)
    }
}

