use('kfc_clone');

// Clear out old mismatched records
db.menus.drop();

// Perform a precise CRUD CREATE operation matching your true file extensions!
db.menus.insertMany([
  {
    "title": "Veg Zinger Burger",
    "desc": "Signature veg burger with crispy patties, veggies & a tangy sauce",
    "price": "179.05",
    "image": "menu2.png",
    "type": "burger"
  },
  {
    "title": "Bucket for Two",
    "desc": "Flat UGX 115 off on combo of 2pc Hot & Crispy, 2 pc Smoky Red Chicken & Large Popcorn [serves 2-3]",
    "price": "599.05",
    "image": "menu1.png",
    "type": "chicken"
  },
  {
    "title": "Single Roll Combo for 1",
    "desc": "Delicious chicken roll combo paired with golden crispy french fries.",
    "price": "340.00",
    "image": "menu4.png",
    "type": "rolls"
  },
  {
    "title": "Large Fries",
    "desc": "Jazz up your meal with crispy, fluffy, perfectly salted golden large fries.",
    "price": "119.05",
    "image": "menu3.png",
    "type": "snacks"
  }
]);