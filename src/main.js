let config = {
    type: Phaser.AUTO,
    height: 960,
    width: 640,
    scale: {
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    physics: {
        default: 'arcade',
        arcade: {
            debug: true,
            gravity: {
                x: 0,
                y: 0
            }
        }
    },
    scene: [ Load, Title, Play, GameOver ]
}

let game = new Phaser.Game(config)

//global variables here
let spaceKey, keyA, keyD