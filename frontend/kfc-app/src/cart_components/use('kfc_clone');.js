use('kfc_clone');

// Clear out old records
db.carts.drop();

// Perform a precise database insert using a leading currency symbol flag tag
db.carts.insertOne({
  "title": "Veg Zinger Burger",
  "desc": "Signature veg burger with crispy patties, veggies & a tangy sauce",
  "price": "UGX 79",
  "image": "menu2.png",
  "qty": 1,
  "id": "12345"
});
