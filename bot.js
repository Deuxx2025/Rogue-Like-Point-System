const { startGame, endGame, getGameState } = require ('./game');

function setupBotCommands(client) {
    client.on('message', (channel, tag, message, self) => {
        if (self) return;

        if (message.toLowerCase() === '!start') {
            const started = startGame();

            if (started) {
                client.say(channel, 'Game started!');
            } else {
                client.say(channel, 'The game is already running');
            }
        }
    });
}

module.exports = { setupBotCommands }