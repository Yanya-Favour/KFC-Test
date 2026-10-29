use('kfc_clone');

// Clear out old records
db.menus.drop();

// Perform a precise CREATE operation matching your screen names and local images
db.menus.insertMany([
  {
    "title": "Veg Zinger Burger",
    "desc": "Crispy veg patty burger layered with fresh lettuce and signature mayo.",
    "price": "15000",
    "image": "2.jpeg",
    "type": "burger"
  },
  {
    "title": "Bucket for Two",
    "desc": "A sharing bucket packed with golden crispy chicken drumsticks and wings.",
    "price": "35000",
    "image": "1.jpeg",
    "type": "chicken"
  },
  {
    "title": "Single Roll Combo for 1",
    "desc": "Delicious chicken roll paired with a side of crispy golden fries.",
    "price": "18000",
    "image": "3.jpeg",
    "type": "rolls"
  },
  {
    "title": "Large Fries",
    "desc": "Perfectly salted, fluffy on the inside, crispy on the outside french fries.",
    "price": "8000",
    "image": "4.jpeg",
    "type": "snacks"
  }
]);