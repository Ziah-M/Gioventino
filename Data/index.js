const { faPizzaSlice } = require('@fortawesome/free-solid-svg-icons')

const PRODUCTS = [
  {
    name: 'Italian Pizza',
    price: 20,
    category: 'Dinner',
    ingredients: 'Tomato, Milk, Pizza, Pepperoni, Basil, Olives',
    imgUrl:
      'https://images.pexels.com/photos/263041/pexels-photo-263041.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
  },
  {
    name: 'Pepperoni Pizza',
    price: 15,
    category: 'Dinner',
    ingredients: 'Pepperoni, Cheese, Sauce, Pizza, Oregano',
    imgUrl:
      'https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
  },
  {
    name: 'Supreme Pizza',
    price: 18,
    category: 'Dinner',
    ingredients: 'Onion, Jalapenos, Pizza Sauce, Tomatoes, Cheese',
    imgUrl:
      'https://images.pexels.com/photos/3053082/pexels-photo-3053082.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  },
  {
    name: 'Summer Pizza',
    price: 20,
    category: 'Dinner',
    ingredients: 'Onion, Bacon, Cream Sauce, Tomatoes, Corn, Avocado',
    imgUrl:
      'https://images.pexels.com/photos/367915/pexels-photo-367915.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  },
  {
    price: 10,
    imgUrl:
      'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
    name: 'Potato Wedge Salad',
    category: 'Lunch',
  },
  {
    price: 8,
    imgUrl:
      'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    name: 'Burrito',
    category: 'Lunch',
  },

  {
    price: 12,
    imgUrl:
      'https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
    name: 'Chicken Fried Rice',
    category: 'Lunch',
  },
  {
    price: 14,
    imgUrl:
      'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
    name: 'Bacon Burger & Chips',
    category: 'Lunch',
  },
  {
    price: 22,
    imgUrl:
      'https://images.pexels.com/photos/675951/pexels-photo-675951.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
    name: 'Grass Fed Steak',
    category: 'Lunch',
  },
  {
    price: 9,
    imgUrl:
      'https://images.pexels.com/photos/704569/pexels-photo-704569.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    name: 'Smashed Avo',
    category: 'Breakfast',
  },
  {
    price: 14,
    imgUrl:
      'https://images.pexels.com/photos/327158/pexels-photo-327158.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    name: 'Breakfast Burger',
    category: 'Breakfast',
  },
  {
    price: 9,
    imgUrl:
      'https://images.pexels.com/photos/2103949/pexels-photo-2103949.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    name: 'Apricot Museli',
    category: 'Breakfast',
  },
  {
    price: 9,
    imgUrl:
      'https://images.pexels.com/photos/103124/pexels-photo-103124.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    name: 'Eggs and bread platter',
    category: 'Breakfast',
  },
  {
    price: 9,
    imgUrl:
      'https://images.pexels.com/photos/949069/pexels-photo-949069.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    name: 'Banana Museli Bowl',
    category: 'Breakfast',
  },
  {
    price: 25,
    imgUrl:
      'https://images.pexels.com/photos/1475/food-vegetables-italian-restaurant.jpg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
    name: 'Snack Platter',
    category: 'Snacks',
  },
  {
    price: 12,
    imgUrl:
      'https://images.pexels.com/photos/36756/food-pizza-roll-baked.jpg?auto=compress&cs=tinysrgb&h=750&w=1260',
    name: 'Cheese Scrolls',
    category: 'Snacks',
  },
  {
    price: 8,
    imgUrl:
      'https://images.pexels.com/photos/86649/pexels-photo-86649.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    name: 'Nuts Bowl',
    category: 'Snacks',
  },
  {
    price: 9,
    imgUrl:
      'https://images.pexels.com/photos/1108775/pexels-photo-1108775.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    name: 'Nachos',
    category: 'Snacks',
  },
  {
    price: 14,
    imgUrl:
      'https://images.pexels.com/photos/3606799/pexels-photo-3606799.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    name: 'Cheesy Bacon Pasta',
    category: 'Snacks',
  },
  {
    price: 7,
    imgUrl:
      'https://images.pexels.com/photos/1028718/pexels-photo-1028718.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    name: 'Macaroons',
    category: 'Dessert',
  },
  {
    price: 4,
    imgUrl:
      'https://images.pexels.com/photos/2606030/pexels-photo-2606030.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    name: 'Muffins',
    category: 'Dessert',
  },
  {
    price: 9,
    imgUrl:
      'https://images.pexels.com/photos/3794758/pexels-photo-3794758.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    name: 'Popcorn',
    category: 'Dessert',
  },
  {
    price: 8,
    imgUrl:
      'https://images.pexels.com/photos/999291/pexels-photo-999291.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    name: 'Frozen Yoghurt',
    category: 'Dessert',
  },
  {
    price: 7,
    imgUrl:
      'https://images.pexels.com/photos/4055112/pexels-photo-4055112.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    name: 'Sweet Bread',
    category: 'Dessert',
  },
]

const PRODUCT_CATEGORIES = ['Breakfast', 'Lunch', 'Dinner', 'Snacks', 'Dessert']

const CHEFS = [
  {
    name: 'Chef John',
    position: 'Head Chef',
    imgUrl:
      'https://images.pexels.com/photos/2102934/pexels-photo-2102934.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
    overview: `Chef John has over 15 years of experience and is a Michelin star chef`,
    bio:
      'A head chef is a highly skilled professional cook who oversees the operations of a restaurant or dining facility. They are responsible for the food that comes out of a kitchen, from conception to execution.',
  },
  {
    name: 'Chef Alex',
    position: 'Line Cook',
    imgUrl:
      'https://images.pexels.com/photos/887827/pexels-photo-887827.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
    overview: `Chef Alex has over 8 years of experience and has won multiple awards`,

    bio:
      'Line cooks are employed by many restaurants and prepare much of the food that comes out of the kitchen. They work under a head chef or sous chef, and each line cook is typically assigned a particular place on the line, such as the grill, stove or vegetable prep area.',
  },
  {
    name: 'Chef Andrei',
    position: 'Line Cook',
    imgUrl:
      'https://images.pexels.com/photos/2494654/pexels-photo-2494654.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    overview: `Chef Andrei has over 7 years of experience and has won multiple awards`,
    bio:
      'Line cooks are employed by many restaurants and prepare much of the food that comes out of the kitchen. They work under a head chef or sous chef, and each line cook is typically assigned a particular place on the line, such as the grill, stove or vegetable prep area.',
  },
  {
    name: 'Chef John',
    position: 'Head Chef',
    imgUrl:
      'https://images.pexels.com/photos/2102934/pexels-photo-2102934.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
    overview: `Chef John has over 15 years of experience and is a Michelin star chef`,
    bio:
      'A head chef is a highly skilled professional cook who oversees the operations of a restaurant or dining facility. They are responsible for the food that comes out of a kitchen, from conception to execution.',
  },
  {
    name: 'Chef Alex',
    position: 'Line Cook',
    imgUrl:
      'https://images.pexels.com/photos/887827/pexels-photo-887827.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
    overview: `Chef Alex has over 8 years of experience and has won multiple awards`,
    bio:
      'Line cooks are employed by many restaurants and prepare much of the food that comes out of the kitchen. They work under a head chef or sous chef, and each line cook is typically assigned a particular place on the line, such as the grill, stove or vegetable prep area.',
  },
  {
    name: 'Chef Andrei',
    position: 'Line Cook',
    imgUrl:
      'https://images.pexels.com/photos/2494654/pexels-photo-2494654.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    overview: `Chef Andrei has over 7 years of experience and has won multiple awards`,
    bio:
      'Line cooks are employed by many restaurants and prepare much of the food that comes out of the kitchen. They work under a head chef or sous chef, and each line cook is typically assigned a particular place on the line, such as the grill, stove or vegetable prep area.',
  },
]

export const getProducts = () => PRODUCTS

export const getProductCategories = () => PRODUCT_CATEGORIES

export const getChefs = () => CHEFS
