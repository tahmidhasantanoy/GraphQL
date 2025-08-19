import { db } from "../../db.js";

// A resolver is a function that fetches the requested data.
export const resolvers = {
  Query: {
    // resolver function 1
    products: () => db.allProducts,
    // resolver function 2
    singleProduct: (parent : any, args : {p_id : number}, context : any) => {
        const queryData = db.allProducts.find( (item) => item.id == args.p_id)
        console.log(queryData);
        return queryData;
    },


    /* 
      query cat($pId: ID!) {
  singleProduct(p_id: $pId) {
    
  }
}
    */
    categories : () => db.categories, // OK
    category: (parent : any, args : {c_id : number}, context : any) => {
        const queryData = db.categories.find( (item) => item.id == args.c_id)
        console.log(queryData);
        return queryData;
    },
  },
};