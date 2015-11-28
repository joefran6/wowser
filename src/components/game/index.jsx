const React = require('react');
const THREE = require('three');

require('./index.styl');

const HUD = require('./hud');
const session = require('../wowser/session');

class GameScreen extends React.Component {

  static id = 'game';
  static title = 'Game';

  constructor() {
    super();

    this.animate = ::this.animate;
    this.resize = ::this.resize;

    this.camera = new THREE.PerspectiveCamera(60, this.aspectRatio, 1, 1000);
    this.camera.up.set(0, 0, 1);
    this.camera.position.set(15, 0, 7);
  }

  componentDidMount() {
    this.renderer = new THREE.WebGLRenderer({
      alpha: true,
      canvas: this.refs.canvas
    });

    this.resize();
    this.animate();

    window.addEventListener('resize', this.resize);
  }

  get aspectRatio() {
    return window.innerWidth / window.innerHeight;
  }

  resize() {
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.camera.aspect = this.aspectRatio;
    this.camera.updateProjectionMatrix();
  }

  animate() {
    this.renderer.render(session.world.scene, this.camera);
    requestAnimationFrame(this.animate);
  }

  render() {
    return (
      <game className="game screen">
        <canvas ref="canvas"></canvas>
        <HUD />
      </game>
    );
  }

}

module.exports = GameScreen;