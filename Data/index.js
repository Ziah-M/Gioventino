const { faPizzaSlice } = require("@fortawesome/free-solid-svg-icons");

const PRODUCTS = [
  {
    name: "Italian Pizza",
    price: 20,
    category: "Dinner",
    ingredients: "Tomato, Milk, Pizza, Pepperoni, Basil, Olives",
    imgUrl:
      "https://images.pexels.com/photos/263041/pexels-photo-263041.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
  },
  {
    name: "Pepperoni Pizza",
    price: 15,
    category: "Dinner",
    ingredients: "Pepperoni, Cheese, Sauce, Pizza, Oregano",
    imgUrl:
      "https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
  },
  {
    name: "Supreme Pizza",
    price: 18,
    category: "Dinner",
    ingredients: "Onion, Jalapenos, Pizza Sauce, Tomatoes, Cheese",
    imgUrl:
      "https://images.pexels.com/photos/3053082/pexels-photo-3053082.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    name: "Summer Pizza",
    price: 20,
    category: "Dinner",
    ingredients: "Onion, Bacon, Cream Sauce, Tomatoes, Corn, Avocado",
    imgUrl:
      "https://images.pexels.com/photos/367915/pexels-photo-367915.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    price: 10,
    imgUrl:
      "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    name: "Burrito",
    category: "Lunch",
  },
  {
    price: 10,
    imgUrl:
      "https://images.pexels.com/photos/704569/pexels-photo-704569.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    name: "Smashed Avo",
    category: "Breakfast",
  },
  {
    price: 10,
    imgUrl:
      "https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    name: "Chicken Fried Rice",
    category: "Lunch",
  },
  {
    price: 10,
    imgUrl:
      "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    name: "Bacon Burger & Chips",
    category: "Lunch",
  },
  {
    price: 10,
    imgUrl:
      "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    name: "Potato Wedge Salad",
    category: "Dinner",
  },
  {
    price: 10,
    imgUrl:
      "https://images.pexels.com/photos/675951/pexels-photo-675951.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    name: "Grass Fed Steak",
    category: "Lunch",
  },
];

const PRODUCT_CATEGORIES = ["Breakfast", "Lunch", "Dinner", "Snacks", "Desert"];

const CHEFS = [
  {
    name: "Chef John",
    position: "Head Chef",
    imgUrl: "https://images.pexels.com/photos/2102934/pexels-photo-2102934.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
  },
  {
    name: "Chef Alex",
    position: "Line Cook",
    imgUrl: "https://images.pexels.com/photos/887827/pexels-photo-887827.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
  },
  {
    name: "Chef Andrei",
    position: "Line Cook",
    imgUrl: "https://images.pexels.com/photos/2494654/pexels-photo-2494654.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
    {
      name: "Chef John",
      position: "Head Chef",
      imgUrl: "https://images.pexels.com/photos/2102934/pexels-photo-2102934.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    },
    {
      name: "Chef Alex",
      position: "Line Cook",
      imgUrl: "https://images.pexels.com/photos/887827/pexels-photo-887827.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    },
    {
      name: "Chef Andrei",
      position: "Line Cook",
      imgUrl: "https://images.pexels.com/photos/2494654/pexels-photo-2494654.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
];

export const getProducts = () => PRODUCTS;

export const getProductCategories = () => PRODUCT_CATEGORIES;

export const getChefs = () => CHEFS;
