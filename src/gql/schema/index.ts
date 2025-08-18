export const typeDefs = `#graphql

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