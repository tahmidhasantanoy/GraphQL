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

  type categorySchema {
      name: String,
      id: ID
    } #ok


  type Query {
    # query1
    products: [ProductSchema],
    # query2
    singleProduct(p_id : ID!): ProductSchema
    # query3
    categories: [categorySchema] #ok
    # query4
    category(c_id : ID): categorySchema #ok
  }
`;