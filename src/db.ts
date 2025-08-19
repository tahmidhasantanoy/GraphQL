const allProducts = [
  {
    "id": 1,
    "name": "Wireless Headphones",
    "description": "Noise-cancelling over-ear headphones with 20 hours of battery life.",
    "price": 89.99,
    "currency": "USD",
    "category": "Electronics",
    "inStock": true,
    "rating": 4.5,
    "categoryId": 1
  },
  {
    "id": 2,
    "name": "Gaming Laptop",
    "description": "High-performance laptop with Intel i7, 16GB RAM, and RTX 3060 GPU.",
    "price": 1199.99,
    "currency": "USD",
    "category": "Computers", // Note: The category "Computers" is not in the categories array.
    "inStock": false,
    "rating": 4.7,
    "categoryId": 1 // Assigned to Electronics as it's the closest fit.
  },
  {
    "id": 3,
    "name": "Coffee Maker",
    "description": "Programmable coffee machine with auto-shutoff feature.",
    "price": 59.99,
    "currency": "USD",
    "category": "Home Appliances", // Note: "Home Appliances" is not in the categories array.
    "inStock": true,
    "rating": 4.2,
    "categoryId": 3 // Assigned to Home & Kitchen as it's the closest fit.
  },
  {
    "id": 4,
    "name": "Smartphone",
    "description": "5G smartphone with AMOLED display and 128GB storage.",
    "price": 699.99,
    "currency": "USD",
    "category": "Electronics",
    "inStock": true,
    "rating": 4.6,
    "categoryId": 1
  },
  {
    "id": 5,
    "name": "Electric Kettle",
    "description": "1.7L stainless steel electric kettle with auto shut-off.",
    "price": 34.99,
    "currency": "USD",
    "category": "Home Appliances", // Note: "Home Appliances" is not in the categories array.
    "inStock": true,
    "rating": 4.3,
    "categoryId": 3 // Assigned to Home & Kitchen as it's the closest fit.
  },
  {
    "id": 6,
    "name": "Office Chair",
    "description": "Ergonomic office chair with adjustable height and lumbar support.",
    "price": 149.99,
    "currency": "USD",
    "category": "Furniture", // Note: "Furniture" is not in the categories array.
    "inStock": false,
    "rating": 4.4,
    "categoryId": null // No direct match, so categoryId is null.
  },
  {
    "id": 7,
    "name": "Smartwatch",
    "description": "Waterproof smartwatch with fitness tracking and heart-rate monitor.",
    "price": 199.99,
    "currency": "USD",
    "category": "Wearables", // Note: "Wearables" is not in the categories array.
    "inStock": true,
    "rating": 4.1,
    "categoryId": 1 // Assigned to Electronics as it's the closest fit.
  },
  {
    "id": 8,
    "name": "Bluetooth Speaker",
    "description": "Portable waterproof Bluetooth speaker with 12 hours of playtime.",
    "price": 79.99,
    "currency": "USD",
    "category": "Electronics",
    "inStock": true,
    "rating": 4.5,
    "categoryId": 1
  },
  {
    "id": 9,
    "name": "Backpack",
    "description": "Durable travel backpack with multiple compartments and laptop sleeve.",
    "price": 54.99,
    "currency": "USD",
    "category": "Accessories", // Note: "Accessories" is not in the categories array.
    "inStock": true,
    "rating": 4.0,
    "categoryId": null // No direct match, so categoryId is null.
  },
  {
    "id": 10,
    "name": "LED Monitor",
    "description": "27-inch Full HD monitor with 144Hz refresh rate.",
    "price": 229.99,
    "currency": "USD",
    "category": "Computers", // Note: "Computers" is not in the categories array.
    "inStock": false,
    "rating": 4.6,
    "categoryId": 1 // Assigned to Electronics as it's the closest fit.
  }
];

const categories = [
  {
    "name": "Electronics",
    "id": 1
  },
  {
    "name": "Books",
    "id": 2
  },
  {
    "name": "Home & Kitchen",
    "id": 3
  },
  {
    "name": "Clothing",
    "id": 4
  },
  {
    "name": "Sports & Outdoors",
    "id": 5
  },
  {
    "name": "Beauty & Personal Care",
    "id": 6
  },
  {
    "name": "Toys & Games",
    "id": 7
  },
  {
    "name": "Health & Household",
    "id": 8
  },
  {
    "name": "Automotive",
    "id": 9
  },
  {
    "name": "Pet Supplies",
    "id": 10
  }
];

export const db = {
  allProducts,
  categories
};
