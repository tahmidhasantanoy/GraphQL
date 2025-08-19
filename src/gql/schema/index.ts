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
    categoryId: ID
    categoryDetails: categorySchema
  }

  type categorySchema {
      name: String,
      id: ID
      categoryProducts: [ProductSchema]
      # a specific category can have multiple products | only one product | no product
    }


  # Any field listed inside this Query type is considered a "root field" and can be the starting point of a request.
  type Query {
    # query1
    products: [ProductSchema],
    # query2
    singleProduct(p_id : ID!): ProductSchema
    # query3
    categories: [categorySchema]
    # query4
    category(c_id : ID): categorySchema
  }
`;