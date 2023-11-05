class GameOver extends Phaser.Scene{
    constructor() {
        super('gameOverScene')
    }

    create() {
        spaceKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE)
        let menuConfig = {
            fontFamily: 'myFont',
            color: 0xFACADE,
            fontSize: '60px',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }
        this.add.text(game.config.width/2, game.config.height*3/8, 'You Lost', menuConfig).setOrigin(0.5)
        this.add.text(game.config.width/2, game.config.height/2, 'press space to start', menuConfig).setOrigin(0.5)
        this.add.text(game.config.width/2, game.config.height*2/3, 'Highscore: ' + highscore, menuConfig).setOrigin(0.5)

        this.creditButton = this.add.text(game.config.width * 8/10, game.config.height * 19/20, 'CREDITS', scoreConfig)
        this.creditButton.setInteractive()
        this.creditButton.on('pointerdown', () => {this.scene.start('creditScene')})


        this.sound.play('wompwomp', {volume: 0.05})
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(spaceKey)){
            this.scene.start('playScene')
        }
    }

    press() {
        console.log('pressed')
    }
}