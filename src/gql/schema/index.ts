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
    reviews: [reviewSchema]
  }

  type categorySchema {
      name: String,
      id: ID
      categoryProducts: [ProductSchema]
      # a specific category can have multiple products | only one product | no product
    }

    type reviewSchema {
      id: ID,
      review: String,
      rating: Float,
      date: String,
      productId: ID
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
