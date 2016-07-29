/**
 * Created by hong on 2016-07-29.
 */

'use strict';
var spriteObject = {
    sourceX: 0,
    sourceY: 0,
    sourceWidth: 64,
    sourceHeight: 64,
    width: 64,
    height: 64,
    x: 0,
    y: 0,
    vx: 0,
    vy: 0,
    visible: true,

    // Physics properties
    accelarationX: 0,
    accelarationY: 0,
    speedLimit: 5,
    friction: 0.96,
    bounce: -0.7,
    gravity: 0.3,

    // Platform properties
    isOnGround: undefined,
    jumpForce: -10,

    // Getters
    halfWidth: function() {
        return this.width / 2;
    },
    halfHeight: function() {
        return this.height / 2;
    },
    centerX: function() {
        return this.x + this.halfWidth();
    },
    centerY: function() {
        return this.y + this.halfHeight();
    }
};