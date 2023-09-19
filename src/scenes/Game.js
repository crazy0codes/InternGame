/// <reference path="../../typings/phaser.d.ts"/>
import Phaser from 'phaser';
import Hero from '../joystick/hero';

class Game extends Phaser.Scene {
  constructor() {
    super({ key: 'GameScene' });
  }

  init(data) {}

  preload() {

    this.load.spritesheet('run','../assets/Colour2/Outline/120x80_PNGSheets/_Run.png',{
      frameWidth: 120,
      frameHeight: 80,
    });

    this.load.spritesheet('idle', '../assets/Colour2/Outline/120x80_PNGSheets/_Idle.png', {
      frameWidth: 120,
      frameHeight: 80,
    })

    this.load.spritesheet('jump', '../assets/Colour2/Outline/120x80_PNGSheets/_Jump.png', {
      frameWidth: 120,
      frameHeight: 80,
    })

    this.load.spritesheet('fall', '../assets/Colour2/Outline/120x80_PNGSheets/_Fall.png', {
      frameWidth: 120,
      frameHeight: 80,
    })

    this.load.spritesheet('crouch', '../assets/Colour2/Outline/120x80_PNGSheets/_Crouch.png', {
      frameWidth: 120,
      frameHeight: 80,
    })

    this.load.spritesheet('roll', '../assets/Colour2/Outline/120x80_PNGSheets/_Roll.png', {
      frameWidth: 120,
      frameHeight: 80,
    })

    this.load.spritesheet('attack', '../assets/Colour2/Outline/120x80_PNGSheets/_AttackComboNoMovement.png', {
      frameWidth: 120,
      frameHeight: 80,
    })

    this.load.image('background', '../assets/images/wp8193297.webp');
  }

  create(data) {

    this.userInput = this.input.keyboard.createCursorKeys();

    const image = this.add.image(0, 0, 'background'); 
    const newWidth = 1000; 
    const newHeight = 600; 
    image.setScale(newWidth / image.width, newHeight / image.height);

    this.anims.create({
      key: 'idle',
      frames: this.anims.generateFrameNumbers('idle'),
      frameRate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: 'runing',
      frames: this.anims.generateFrameNumbers('run'),
      frameRate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: 'jump',
      frames: this.anims.generateFrameNumbers('jump'),
      frameRate: 10,
      repeat: -1,
    })

    this.anims.create({
      key: 'fall',
      frames: this.anims.generateFrameNumbers('fall'),
      frameRate: 10,
      repeat: -1,
    })

    this.anims.create({
      key: 'crouch',
      frames: this.anims.generateFrameNumbers('crouch'),
      frameRate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: 'roll',
      frames: this.anims.generateFrameNumbers('roll'),
      frameRate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: 'attack',
      frames: this.anims.generateFrameNumbers('attack'),
      frameRate: 12,
      repeat: -1,
    });

    this.Hero = new Hero(this, 250, 100);

    // const platform = this.add.rectangle(250, 240, 150, 50, 0x6666ff);
    // this.physics.add.existing(platform, true);
    // this.physics.add.collider(this.Hero, platform);

  }



  update(time, delta) {
  }
}

export default Game;