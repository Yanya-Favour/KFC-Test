use('kfc_clone');

// Clear out old records
db.menus.drop();

// Perform a precise CREATE operation using local asset targets
db.menus.insertMany([
  {
    "title": "Mingles Bucket Meal",
    "desc": "Save UGX 71 on 4 Hot Wings, 2 Chicken Strips, Reg Popcorn, medium fries & Pepsi PET [serves 2-3]",
    "price": "479.05",
    "image": "1.jpeg",
    "type": "chicken"
  },
  {
    "title": "Mixed Zinger Doubles",
    "desc": "Best-seller combo of classic chicken zinger & tandoori zinger",
    "price": "348.57",
    "image": "2.jpeg",
    "type": "burger"
  },
  {
    "title": "10pc Strips with Nashville Sauce",
    "desc": "Dipping combo of 10pc chicken strips & our new Nashville sauce",
    "price": "639.05",
    "image": "3.jpeg",
    "type": "chicken"
  }
]);