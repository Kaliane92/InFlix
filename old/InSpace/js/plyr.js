import Plyr from 'plyr';

const player = new Plyr('#player');
// Change the second argument to your options:
// https://github.com/sampotts/plyr/#options

// Expose player so it can be used from the console
window.player = player;
