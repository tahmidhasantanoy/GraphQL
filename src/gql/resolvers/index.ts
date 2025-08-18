import { allProducts } from "../../db.js";

// A resolver is a function that fetches the requested data.
export const resolvers = {
  Query: {
    // resolver function 1
    products: () => allProducts,
    // resolver function 2
    singleProduct: (parent : any, args : {p_id : number}, context : any) => {
        const queryData = allProducts.find( (item) => item.id == args.p_id)
        console.log(queryData);
        return queryData;
    }
  },
};