import * as Phaser from 'phaser';
import config from './config';
import GameScene from './scenes/game-scene';

new Phaser.Game(
  Object.assign(config, {
    scene: [GameScene],
  }),
);
