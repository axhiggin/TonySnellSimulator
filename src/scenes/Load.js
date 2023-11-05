class Load extends Phaser.Scene {
    constructor() {
        super('loadScene');
    }

    preload() {
        // loading bar
        // see: https://rexrainbow.github.io/phaser3-rex-notes/docs/site/loader/
        let loadingBar = this.add.graphics();
        this.load.on('progress', (value) => {
            loadingBar.clear();                                 // reset fill/line style
            loadingBar.fillStyle(0xFFFFFF, 1);                  // (color, alpha)
            loadingBar.fillRect(0, game.config.width/2, game.config.width * value, 5);  // (x, y, w, h)
        });
        this.load.on('complete', () => {
            loadingBar.destroy();
        });

        this.load.image('court', './assets/image/Court.png')
        this.load.image('cone', './assets/image/ChrisPaul.png')
        this.load.spritesheet('defender', './assets/image/BasketballDefender.png', {frameWidth: 32, frameHeight:32})
        this.load.spritesheet('player', './assets/image/BasketballMan.png', {frameWidth: 32, frameHeight:32})
        this.load.audio('wompwomp', './assets/audio/womp-womp.mp3')
        this.load.audio('music', './assets/audio/Cipher.mp3')
        this.load.audio('point', './assets/audio/point.mp3')
        this.load.audio('levelUp', './assets/audio/levelUp.mp3')
        this.load.audio('LBJ', './assets/audio/LEBRON.mp3')

    }

    create() {
        // check for local storage browser support
        if(window.localStorage) {
            console.log('Local storage supported');
        } else {
            console.log('Local storage not supported');
        }

        // go to Title scene
        this.scene.start('titleScene');
    }
}