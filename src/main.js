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
let scrollBG
let highscore = 0
let levelUpConfig = {
    fontFamily: 'myFont',
    fontSize: '28px',
    color: '#000001',
    align: 'left',
    padding: {
      top: 5,
      bottom: 5,
    },
    fixedWidth: 100
  }
let scoreConfig = {
    fontFamily: 'myFont',
    fontSize: '40px',
    color: 0x000001
}