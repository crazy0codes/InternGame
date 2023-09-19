/// <reference path="../../typings/phaser.d.ts"/>
import Phaser from 'phaser';

class Hero extends Phaser.GameObjects.Sprite {
    constructor(scene,x,y) {
        super(scene, x, y, 'idle', 0);
    
    scene.add.existing(this)
    scene.physics.add.existing(this)

    this.body.setCollideWorldBounds(true);
    this.inputs = scene.userInput;
    this.body.setSize(25, 40); 
    this.body.setOffset(37, 40);
    }

    preUpdate(time, delta) {
        super.preUpdate(time, delta);

        if(this.inputs.left.isDown ) { 
           this.body.setVelocityX(-200);
           this.flipX = true;
           this.anims.play('runing', true)
           if(this.inputs.up.isDown && this.body.onFloor() && this.inputs.up.getDuration() < 250) {
               this.body.setVelocityY(-400);
               this.anims.play('jump', true);
           }
        }
        else if(this.inputs.right.isDown) {
            this.body.setVelocityX(200);
            this.flipX = false;
            this.anims.play('runing', true)

            if(this.inputs.up.isDown && this.body.onFloor() && this.inputs.up.getDuration() < 250) {
                this.body.setVelocityY(-400);
                if(!this.body.touching.down) {this.anims.play('jump', true)}
            }
        }
        else if(this.inputs.up.isDown && this.body.onFloor() && this.inputs.up.getDuration() < 250) {
            this.body.setVelocityY(-400);
            if(!this.body.touching.down) {this.anims.play('jump', true)}
        }
        
        else if(!this.body.onFloor()){
            this.body.setVelocityX(0)
            this.anims.play('fall', true)
        }

        else if(this.inputs.down.isDown && this.body.onFloor() ) {
            this.body.setVelocityX(0)
            this.anims.play('crouch', true)
        }

        else if(this.inputs.shift.isDown && this.body.onFloor()) {
            this.body.setVelocityX(70) 
            this.anims.play('roll', true)
        }

        else if(this.inputs.space.isDown && this.body.onFloor()) {
            console.log(this.inputs)
            this.body.setVelocityX(0)
            this.anims.play('attack', true)
        }

        else {
            this.body.setVelocityX(0)
            this.anims.play('idle', true)
        }
    }
}



export default Hero;