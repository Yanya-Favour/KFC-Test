use('kfc_clone');

// Clear out old records to make sure we load a fresh, clean batch
db.menus.drop();

// Perform the clean CREATE operation pointing directly to our target filenames
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