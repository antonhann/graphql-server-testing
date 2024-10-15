import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone"
//server setup (npm start)
import {sampleData} from "./_db.js";
import { typeDefs } from "./schema.js";

export const resolvers = {
  Query: {
      games(){
          return sampleData.games
      },
      authors() {
          return sampleData.authors
      },
      reviews(){
          return sampleData.reviews
      },
      review(_, args, context, info){
          return sampleData.reviews.find(review => review.id === args.id)
      },
      game(_, args, context, info){
          return sampleData.games.find(game => game.id === args.id)
      },
      author(_, args, context, info){
          return sampleData.authors.find(author => author.id === args.id)
      }
  },
  Game: {
    reviews(parent){
      return sampleData.reviews.filter(review => review.game_id === parent.id)
    }
  },
  Mutation: {
    deleteGame(_, args, context, info){
      sampleData.games = sampleData.games.filter(game => game.id !== args.id)
      return sampleData.games
    },
    addGame(_, args, context, info){
      const newGame = {
        ...args.game,
        id: Math.floor(Math.random() * 1000).toString()
      }
      sampleData.games.push(newGame)
      return newGame
    }
  }
}

const server = new ApolloServer({
    //apollo server arguments
    //type defs (schema, descriptions && relationship with other types)
    //resolvers (how to respond to querys)
    typeDefs: typeDefs,
    resolvers: resolvers
});
const port = 5001
const { url } = await startStandaloneServer(server, {
    listen: {port: port}
})

console.log("server ready at port localhost:" + port)