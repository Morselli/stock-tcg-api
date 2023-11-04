const User = require('../models/User')

module.exports = {

  async create({ username, email, password }) {

    if (!username || !email || !password) {
      throw new Error('Todos os campos são obrigatórios')
    }

    const userExists = await User.findOne({
      where: {
        email
      }
    })

    if (userExists) {
      throw new Error('Já existe um usuário cadastrado com esse e-mail')
    }

    const user = await User.create({
      username,
      email,
      password
    })

    return user

  },

  async findById(id) {
    const user = await User.findOne({
      where: {
        id: id
      }
    })

    if(!user) {
      throw new Error("Usuário não encontrado")
    }

    return user
  },

  async updateById({ id, username, email, password }) {
    const user = await User.findOne({
      where: {
        id: id
      }
    })

    if(!user) {
      throw new Error("Usuário não encontrado")
    }

    const updatedUser = await user.update(
      {
        username,
        email,
        password
      },
      {
        where: {
          id
        }
      }
    )

    return updatedUser
  },

  async removeById(userId) {

    const user = await User.findOne({
      where: {
        id: userId
      }
    })

    console.log(user)

    if (!user) {
      throw new Error('Usuário não encontrado')
    }

    await user.destroy()
  },

  async findAll() {

    const users = await User.findAll()

    if (!users) {
      throw new Error('Nenhum usuário encontrado')
    }

    return users
  }
}