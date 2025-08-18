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
    # query1
    products: [ProductSchema],
    # query2
    singleProduct(p_id : ID!): ProductSchema
  }
`;


// A resolver is a function that fetches the requested data.
const resolvers = {
  Query: {
    // resolver function 1
    products: () => allProducts,
    // resolver function 2
    singleProduct: (parent : any, args : {p_id : number}, context : any) => {
        console.log(parent, args , context);
        const queryData = allProducts.find( (item) => item.id == args.p_id)
        console.log(queryData);
        return queryData;
    }
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
