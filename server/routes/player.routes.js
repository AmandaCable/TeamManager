const PlayerController = require('../controllers/player.controller');

module.exports = function (app) {
    app.get('/api/test', PlayerController.test);
    // Create
    app.post('/api/players/addplayer', PlayerController.createPlayer);
    // Read
    app.get('/api/players/list', PlayerController.allPlayers);

    app.get('/api/status/game/1', PlayerController.allPlayers);
    // Delete
    app.delete('/api/players/delete/:id', PlayerController.deletePlayer);
}