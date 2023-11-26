const express = require('express')

const UserController = require('./controllers/UserController')
const CardGameController = require('./controllers/CardGameController')
const CollectionController = require('./controllers/CollectionController')
const CardController = require('./controllers/CardController')

const routes = express.Router()

routes.post('/user/create', UserController.create)
routes.get('/user/:id', UserController.findById)
routes.put('/user/:id', UserController.updateById)
routes.delete('/user/:id', UserController.removeById)
routes.get('/users', UserController.findAll)
routes.post('/login', UserController.login)

routes.post('/user/:userId/cardgame/new', CardGameController.create)
routes.get('/user/:userId/cardgame/:id', CardGameController.findById)
routes.put('/user/:userId/cardgame/:id', CardGameController.updateById)
routes.delete('/user/:userId/cardgame/:id', CardGameController.removeById)
routes.get('/user/:userId/cardgames', CardGameController.findAllByUser)
routes.get('/users/cardgames', CardGameController.findAll)

routes.post('/user/:userId/cardgame/:cardGameId/collection/new', CollectionController.create)
routes.get('/user/:userId/cardgame/:cardGameId/collection/:id', CollectionController.findById)

routes.post('/user/:userId/card/new', CardController.create)
routes.get('/users/cards', CardController.findAll)
routes.delete('/user/:userId/card/:id', CardController.removeById)

module.exports = routes