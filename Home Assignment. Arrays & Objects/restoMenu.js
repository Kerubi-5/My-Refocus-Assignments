const restaurantMenu = {
  restaurantName: "The J Resto",
  dishes: [
    {
      dishId: 1,
      dishName: "Adobo",
      dishPrice: 45,
      ingredients: [
        "Chicken",
        "Pork",
        "Soy sauce",
        "Vinnegar",
        "Garlic",
        "Onion",
        "Oil",
      ],
    },
    {
      dishId: 2,
      dishName: "Creamy Beef and Mushroom",
      dishPrice: 100,
      ingredients: [
        "Butter",
        "Garlic",
        "Onion",
        "Button Mushrrom",
        "All purpose flour",
        "Parsley",
        "All purpose cream",
        "Beef",
      ],
    },
    {
      dishId: 3,
      dishName: "Spicy Tofu Stir-Fry",
      dishPrice: 35,
      ingredients: [
        "Tofu",
        "Bell peppers",
        "Onion",
        "Garlic",
        "Soy sauce",
        "Sriracha",
        "Oil",
      ],
    },
    {
      dishId: 4,
      dishName: "Creamy Shrimp Pasta",
      dishPrice: 65,
      ingredients: [
        "Shrimp",
        "Penne pasta",
        "Heavy cream",
        "Parmesan cheese",
        "Garlic",
        "Lemon juice",
        "Parsley",
      ],
    },
    {
      dishId: 5,
      dishName: "Lamb Kofta Curry",
      dishPrice: 80,
      ingredients: [
        "Lamb mince",
        "Onion",
        "Coriander",
        "Cumin",
        "Turmeric",
        "Coconut milk",
        "Basmati rice",
      ],
    },
  ],
  displayRestaurantName: function () {
    console.log(this.restaurantName);
  },
  displayMenu: function () {
    for (const dish of this.dishes) {
      console.log(`
        ${dish.dishName}, ₱${dish.dishPrice} \n
        Contains: ${dish.ingredients.join(", ")}
      `);
    }
  },
};

restaurantMenu.displayRestaurantName();

restaurantMenu.displayMenu();
