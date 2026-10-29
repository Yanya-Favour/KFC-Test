// 1. Target the primary database where your login accounts live
use('kfc_clone');

// 2. Clear out old collections to ensure a clean slate
db.menus.drop();
db.carts.drop();

// 3. Inject the Menu Items (For the main food display)
db.menus.insertMany([
  {
    "title": "Veg Zinger Burger",
    "desc": "Signature veg burger with crispy patties, veggies & a tangy sauce",
    "price": "179.05",
    "image": "menu2.png",
    "type": "chicken"
  },
  {
    "title": "Bucket for Two",
    "desc": "Flat UGX 115 off on combo of 2pc Hot & Crispy, 2 pc Smoky Red Chicken & Large Popcorn",
    "price": "599.05",
    "image": "menu1.png",
    "type": "chicken"
  }
]);

// 4. Inject a Cart Item (So your checkout page immediately reads data)
db.carts.insertOne({
  "title": "Veg Zinger Burger",
  "desc": "Signature veg burger with crispy patties, veggies & a tangy sauce",
  "price": "179.05",
  "image": "menu2.png",
  "qty": 1,
  "id": "12345"
});
