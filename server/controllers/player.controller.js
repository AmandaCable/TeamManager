const Player  = require('../models/player.model');

// TEST
module.exports.test= (request, response) => {
    response.json( "Hello World");
}

// CREATE
module.exports.createPlayer= (request, response) => {
    Player.create(request.body)
        .then(newPlayer => response.json(newPlayer))//success
        .catch(error => {
            console.log("Validations have failed")
            response.status(400).json(error)
        })
}

// READ
module.exports.allPlayers = (request, response) => {
    Player.find().sort({name: 1})
        .then(allPlayers => response.json(allPlayers))
        .catch(error => response.json(error))
}

module.exports.onePlayer = (request, response) => {
    const {id} = request.params
    Player.findOne({_id : id})
        .then(onePlayer => response.json(onePlayer))
        .catch(error => response.json(error))
}

// UPDATE

// DELETE
module.exports.deletePlayer = (request, response) => {
    const {id} = request.params
    Player.deleteOne({_id: id})
        .then(deleteName => response.json(deleteName))
        .catch(error => response.json(error))
}