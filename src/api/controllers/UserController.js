const UserService = require('../services/UserService')

module.exports = {

  async create(req, res) {

    const { username, email, password } = req.body

    try {
      const user = await UserService.create({
        username,
        email,
        password
      })

      return res.json({
        id: user.id,
        username: user.username,
        email: user.email,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt
      })
    } catch (err) {
      return res.json({ error: err.message })
    }
  },

  async findById(req, res) {
    const { id } = req.params

    try {
      const user = await UserService.findById(id)

      return res.json({
        id: user.id,
        username: user.username,
        email: user.email,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt
      })
    } catch (err) {
      return res.json({ error: err.message })
    }
  },

  async updateById(req, res) {
    const { id } = req.params
    const { username, email, password } = req.body

    try {
      const user = await UserService.updateById({ id, username, email, password })

      return res.json({
        id: user.id,
        username: user.username,
        email: user.email,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt
      })
    } catch (err) {
      return res.json({ error: err.message })
    }
  },

  async removeById(req, res) {

    const { id } = req.params

    try {
      await UserService.removeById(id)

      return res.json({ message: "Usuário removido com sucesso" })
    } catch (err) {
      return res.json({ error: err.message})
    }
  },

  async findAll(req, res) {
    try {
      const users = await UserService.findAll()

      let formattedUsers = []
      
      users.forEach((user) => {
        formattedUsers.push({
          id: user.id,
          username: user.username,
          email: user.email,
          createdAt: user.createdAt,
          updatedAt: user.updatedAt
        })
      })

      return res.json(formattedUsers)
    } catch (err) {
      return res.json({ error: err.message })
    }
  },

  async login(req, res) {
    const { email, password } = req.body

    try {
      const loggedUser = await UserService.login({ email, password })

      return res.json(loggedUser)
    } catch (err) {
      return res.json({ error: err.message })
    }
  }

}