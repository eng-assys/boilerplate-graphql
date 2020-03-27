const User = require('./User')

module.exports = {
  Query: {
    users: () => User.find(),
    user: (_, { id }) => User.findById(id) // Graphql já espera promises, não precisa adicionar async
  },
  Mutation: {
    createUser: (_, {name, email}) => User.create({name, email})
  }
}