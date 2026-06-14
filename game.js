const EventEmmiter = require('events');

const gameEvents = new EventEmmiter();

let gameState = 'idle';
let activeSkin = null;
let skinLevels = {};

function startGame() {
    if (gameState !== 'idle') return false;

    gameState = 'active';
    gameEvents.emit('state-changed', getGameState());
    return true;
}

function endGame() {
    gameState = 'ended';
    gameEvents.emit('state-changed', getGameState());
}

function getGameState() {
    return {
        gameState,
        activeSkin,
        skinLevels
    };
}

module.exports = {
    gameEvents,
    startGame,
    endGame,
    getGameState
}