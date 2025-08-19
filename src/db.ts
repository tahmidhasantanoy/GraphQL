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

const reviews = [
  {
    "id": 1,
    "review": "Great sound quality and comfortable fit. The noise-cancelling feature works like a charm.",
    "rating": 5,
    "date": "2023-04-15",
    "productId": 1
  },
  {
    "id": 2,
    "review": "A beast for gaming! Handles all my favorite titles on high settings without any issues.",
    "rating": 5,
    "date": "2023-03-20",
    "productId": 2
  },
  {
    "id": 3,
    "review": "Solid coffee maker for the price. The programmable feature is very convenient for busy mornings.",
    "rating": 4,
    "date": "2023-05-10",
    "productId": 3
  },
  {
    "id": 4,
    "review": "Impressive display and camera. The battery life is also better than expected.",
    "rating": 5,
    "date": "2023-06-01",
    "productId": 4
  },
  {
    "id": 5,
    "review": "Heats up water very quickly and the auto shut-off is a great safety feature.",
    "rating": 4,
    "date": "2023-07-05",
    "productId": 5
  },
  {
    "id": 6,
    "review": "Comfortable for long hours, but the lumbar support could be better. A good chair for the price.",
    "rating": 4,
    "date": "2023-04-22",
    "productId": 6
  },
  {
    "id": 7,
    "review": "The fitness tracking is accurate and the watch is lightweight. A good entry-level smartwatch.",
    "rating": 4,
    "date": "2023-05-25",
    "productId": 7
  },
  {
    "id": 8,
    "review": "Excellent sound for a portable speaker. Very durable and the battery lasts a long time.",
    "rating": 5,
    "date": "2023-06-18",
    "productId": 8
  },
  {
    "id": 9,
    "review": "Perfect for travel. Fits my laptop and has plenty of space for other items.",
    "rating": 4,
    "date": "2023-07-01",
    "productId": 9
  },
  {
    "id": 10,
    "review": "Great for gaming with the high refresh rate. The colors are vibrant and sharp.",
    "rating": 5,
    "date": "2023-05-30",
    "productId": 10
  },
  {
    "id": 11,
    "review": "The battery life is amazing, and it charges so fast! I use it every day for my commute.",
    "rating": 5,
    "date": "2023-08-01",
    "productId": 1
  },
  {
    "id": 12,
    "review": "I was hesitant because of the price, but it's worth every penny. The performance is top-notch.",
    "rating": 5,
    "date": "2023-08-05",
    "productId": 2
  },
  {
    "id": 13,
    "review": "Simple to use and makes a decent cup of coffee. No complaints so far.",
    "rating": 4,
    "date": "2023-08-10",
    "productId": 3
  },
  {
    "id": 14,
    "review": "The camera quality is incredible, especially in low light. So happy with this purchase.",
    "rating": 5,
    "date": "2023-08-15",
    "productId": 4
  },
  {
    "id": 15,
    "review": "I've been looking for a reliable kettle, and this one is perfect. Highly recommend!",
    "rating": 5,
    "date": "2023-08-18",
    "productId": 5
  }
];

export const db = {
  allProducts,
  categories,
  reviews
};