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

export const allProducts = [
  {
    id: 1,
    name: "Wireless Headphones",
    description:
      "Noise-cancelling over-ear headphones with 20 hours of battery life.",
    price: 89.99,
    currency: "USD",
    category: "Electronics",
    inStock: true,
    rating: 4.5,
  },
  {
    id: 2,
    name: "Gaming Laptop",
    description:
      "High-performance laptop with Intel i7, 16GB RAM, and RTX 3060 GPU.",
    price: 1199.99,
    currency: "USD",
    category: "Computers",
    inStock: false,
    rating: 4.7,
  },
  {
    id: 3,
    name: "Coffee Maker",
    description: "Programmable coffee machine with auto-shutoff feature.",
    price: 59.99,
    currency: "USD",
    category: "Home Appliances",
    inStock: true,
    rating: 4.2,
  },
  {
    id: 4,
    name: "Smartphone",
    description: "5G smartphone with AMOLED display and 128GB storage.",
    price: 699.99,
    currency: "USD",
    category: "Electronics",
    inStock: true,
    rating: 4.6,
  },
  {
    id: 5,
    name: "Electric Kettle",
    description: "1.7L stainless steel electric kettle with auto shut-off.",
    price: 34.99,
    currency: "USD",
    category: "Home Appliances",
    inStock: true,
    rating: 4.3,
  },
  {
    id: 6,
    name: "Office Chair",
    description:
      "Ergonomic office chair with adjustable height and lumbar support.",
    price: 149.99,
    currency: "USD",
    category: "Furniture",
    inStock: false,
    rating: 4.4,
  },
  {
    id: 7,
    name: "Smartwatch",
    description:
      "Waterproof smartwatch with fitness tracking and heart-rate monitor.",
    price: 199.99,
    currency: "USD",
    category: "Wearables",
    inStock: true,
    rating: 4.1,
  },
  {
    id: 8,
    name: "Bluetooth Speaker",
    description:
      "Portable waterproof Bluetooth speaker with 12 hours of playtime.",
    price: 79.99,
    currency: "USD",
    category: "Electronics",
    inStock: true,
    rating: 4.5,
  },
  {
    id: 9,
    name: "Backpack",
    description:
      "Durable travel backpack with multiple compartments and laptop sleeve.",
    price: 54.99,
    currency: "USD",
    category: "Accessories",
    inStock: true,
    rating: 4.0,
  },
  {
    id: 10,
    name: "LED Monitor",
    description: "27-inch Full HD monitor with 144Hz refresh rate.",
    price: 229.99,
    currency: "USD",
    category: "Computers",
    inStock: false,
    rating: 4.6,
  },
];

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
