/// <reference path="../typings/phaser.d.ts"/>
import Phaser from 'phaser';

export default {
  type: Phaser.AUTO,
  parent: 'app',
  backgroundColor: '#f9f9f9',
  scale: {
    width: 500,
    height: 300,
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },

  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 900},
      debug: false,
      debugShowVelocity: true,
      debugShowBody: true,
      debugShowStaticBody: true,
    },
  },
  render : {
    pixelArt : true
  }

};
