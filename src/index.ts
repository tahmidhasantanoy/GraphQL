import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { allProducts } from "./db.js";

const typeDefs = `#graphql

  type ProductSchema {
    id: ID,
    name: String,
    description: String,
    price: Float,
    currency: String,
    category: String,
    inStock: Boolean,
    rating: Float,
  }


  type Query {
    products: [ProductSchema]
  }
`;

const resolvers = {
  Query: {
    products: () => allProducts,
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
