/*
Name: Aidan Higgins
Title: Tony Snell Simulator/Basketball Runner
Approximate Time Spent: 15 Hours
Creative Tilt:
    1. This isn't very technical but I implemented a level up mechanic that uses the previous update cycle's this.level and compares it to this cycle's, and if it is different, it calls a few methods to let the player know they leveled up and increase the speed of the background and other sprites. It also plays a unique sound effect every 5 levels.
    2. I'm not the most talented artist but I think the visual style turned out alright, I'm quite proud of the stick figure animations. I made them all in piskelapp.com. I downloaded a font from https://www.fontspace.com/pixgamer-font-f85447 to make the text look a bit nicer
    3. I didn't know I'd be getting 0 bonus points for it but I did a basketball theme!
    NOTE: I do have 4 sound effects, but one of them only plays once you hit 50 points
*/


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
    scene: [ Load, Title, Play, GameOver, Credits ]
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