import { GraphQLServer } from 'graphql-yoga'
import Query from './Resolvers/Query'
import Mutation from './Resolvers/Mutation'
import Subscription from './Resolvers/Subscription'
import prisma from './prisma'

const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers: {
        Query,
        Mutation,
        Subscription
    },
    context: {
        prisma
    }
})

server.start(() => {
    console.log(
        'GraphQL Playground and Server Connected at http://localhost:4000'
    )
})
