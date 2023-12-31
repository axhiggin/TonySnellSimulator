class Title extends Phaser.Scene{
    constructor() {
        super('titleScene')
    }

    create() {
        spaceKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE)
        let menuConfig = {
            fontFamily: 'myFont',
            color: 0x000001,
            fontSize: '60px',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }
        this.add.text(game.config.width/2, game.config.height*3/8, 'Welcome to Tony Snell Simulator', menuConfig).setOrigin(0.5)
        this.add.text(game.config.width/2, game.config.height/2, 'press space to start', menuConfig).setOrigin(0.5)
        this.add.text(game.config.width/2, game.config.height*2/3, 'move with A and D', menuConfig).setOrigin(0.5)
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(spaceKey)){
            this.scene.start('playScene')
        }
    }
}