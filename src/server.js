// import {GraphQLServer} from 'graphql-yoga'
// import path from 'path'

const {GraphQLServer} = require('graphql-yoga')
const path = require('path')
const resolvers = require('./resolvers')
const mongoose = require('mongoose')

mongoose.connect(
  'mongodb://test:test@localhost:27017/graphqlnode',
  {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    connectTimeoutMS: 1000,
    authSource: 'admin'
  }
)

const server = new GraphQLServer({
  typeDefs: path.resolve(__dirname, 'schema.graphql'),
  resolvers: resolvers,
  mocks: false
})

server.start(() => console.log('Server is running on localhost:4000'))