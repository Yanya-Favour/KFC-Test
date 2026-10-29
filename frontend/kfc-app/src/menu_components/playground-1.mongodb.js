// 1. Point the script directly to your active KFC database
use('kfc_clone');

// 2. Insert test product objects into your menu database collection
db.products.insertMany([
  {
    "name": "Crispy Chicken Drumsticks",
    "price": "24000",
    "category": "chicken",
    "image": "https://unsplash.com"
  },
  {
    "name": "Classic Crunch Burger",
    "price": "18000",
    "category": "burger",
    "image": "https://unsplash.com"
  }
]);