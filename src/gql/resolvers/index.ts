import { db } from "../../db.js";

// A resolver is a function that fetches the requested data.
export const resolvers = {
  Query: {
    // resolver function 1
    products: () => db.allProducts,
    // resolver function 2
    singleProduct: (parent: any, args: { p_id: number }, context: any) => {
      const queryData = db.allProducts.find((item) => item.id == args.p_id);
      console.log(queryData);
      return queryData;
    },
    /* 
      query cat($pId: ID!) {
  singleProduct(p_id: $pId) {
    
  }
}
    */
    categories: () => db.categories, // OK
    // This resolver finds a specific category by ID
    category: (parent: any, args: { c_id: number }, context: any) => {
      const queryData = db.categories.find((item) => item.id == args.c_id);
      console.log(queryData);
      return queryData;
    },
  },

  // If you want to perform the relational query then, you have to place it outside of Query
  ProductSchema: { // no need to write when query something in GUI.
    categoryDetails: (parent: any, args: any, context: any) => {
      // console.log(parent); // allCategories
      // const res = db.categories.find((item) => item.id == parent.categoryId)
      const res = db.allProducts.find((item) => parent.categoryId === item.id);
      console.log(res);
      console.log(parent.categoryId, parent.name);
      return res;
    },
  },

  categorySchema: {
    categoryProducts: (parent: any, args: any, context: any) => {
      console.log(parent /* { name: 'Electronics', id: 1 } */);
      const res = db.allProducts.filter((item) => item.categoryId == parent.id);
      return res;
    },
  },
};
