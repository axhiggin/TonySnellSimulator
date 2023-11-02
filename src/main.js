let config = {
    type: Phaser.AUTO,
    height: 960,
    width: 640,
    backgroundColor: 0xf5f5dc,
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
    render:{
        pixelArt: true
    },
    scene: [ Load, Title, Play, GameOver ]
}

let game = new Phaser.Game(config)

//global variables here
let spaceKey, keyA, keyD
let defenderHeight = 32
let defenderWidth = 32
let tonyHeight = 32
let tonyWidth = 20
let scrollSpeed = 200
let playerVelocity = 50
let defenderSpeed = 35