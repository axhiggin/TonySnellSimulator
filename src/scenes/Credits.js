class Credits extends Phaser.Scene{
    constructor(){
        super('creditScene')
    }

    create() {
        let menuConfig = {
            fontFamily: 'myFont',
            color: 0x000001,
            fontSize: '60px',
            align: 'center',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }
        let credConfig = {
            fontFamily: 'myFont',
            color: 0x000001,
            fontSize: '30px',
            align: 'center'
        }
        this.add.text(game.config.width/2, game.config.height*1/8, 'CREDITS', menuConfig).setOrigin(0.5)
        this.add.text(game.config.width/2, game.config.height*3/8, 'Music: Kevin Macleod Cipher\nhttps://www.youtube.com/watch?v=PxFwthDc0eE\nSound Effects: \n Point sound effect:\npixabay.com\nLebron sound effect:\nhttps://www.youtube.com/watch?v=2hpwRSMNeWo\nLevel up sound effect:\nhttps://www.youtube.com/watch?v=P_u0k2uElHI\nSome of the scene and html code:\n Stolen from the professor\nThe Rest:\nMe', credConfig).setOrigin(0.5)

        this.creditButton = this.add.text(game.config.width * 8/10, game.config.height * 19/20, 'BACK', scoreConfig)
        this.creditButton.setInteractive()
        this.creditButton.on('pointerdown', () => {this.scene.start('titleScene')})
    }
}