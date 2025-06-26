import { MenuItem } from '@/types/menu'

export const menuData: MenuItem[] = [
  // Sandwiches
  {
    id: 'french-fries',
    category: 'Sides',
    name: 'French Fries',
    imageUrl: '/images/food/bbq-sandwich.jpg',
    price: 2.25
  },
  {
    id: 'pork-barbeque',
    category: 'Sandwiches',
    name: 'Pork Barbeque',
    imageUrl: '/images/food/bbq-sandwich.jpg',
    description: 'Cooked in our own inimitable way',
    variations: [
      { name: 'Minced with slaw, our best seller', price: 3.80 },
      { name: 'Minced with cheese, lettuce, tomato, mayonnaise', price: 4.20 },
      { name: 'Minced with slaw, double meat', price: 5.80 },
      { name: 'Sliced with slaw', price: 5.00 }
    ]
  },
  {
    id: 'hamburger',
    category: 'Sandwiches',
    name: 'Hamburger',
    imageUrl: '/images/food/bbq-sandwich.jpg',
    description: 'We grind our own beef on the premises',
    variations: [
      { name: 'With mustard, relish, onions', price: 3.50 },
      { name: 'With cheese, lettuce, tomato, mayonnaise', price: 3.90 }
    ]
  },

  // Shakes & Floats
  {
    id: 'milkshakes',
    category: 'Shakes & Floats',
    name: 'Milkshakes',
    imageUrl: '/images/restaurant/ice-cream-glass.jpg',
    variations: [
      { name: 'Vanilla', price: 4.45 },
      { name: 'Chocolate', price: 4.45 },
      { name: 'Strawberry', price: 4.45 },
      { name: 'Cherry', price: 4.45 },
      { name: 'Root Beer', price: 4.45 },
      { name: 'Pineapple', price: 4.45 },
      { name: 'Banana', price: 4.45 },
      { name: 'Egg Nog', price: 4.45 },
      { name: 'Lime Freeze', price: 4.45 },
      { name: 'Orange Freeze', price: 4.45 },
      { name: 'Pumpkin', price: 4.45 },
      { name: 'Peach', price: 4.45 }
    ]
  },

  // Desserts
  {
    id: 'ice-cream-sundaes',
    category: 'Desserts',
    name: 'Ice Cream Sundaes',
    imageUrl: '/images/restaurant/ice-cream-sundae.jpg',
    description: 'Come with whip cream and a cherry, made with Vanilla Ice Cream',
    variations: [
      { name: 'Chocolate', price: 5.25 },
      { name: 'Hot Fudge', price: 5.25 },
      { name: 'Strawberry', price: 5.25 },
      { name: 'Pineapple', price: 5.25 },
      { name: 'Butterscotch', price: 5.25 },
      { name: 'Cherry', price: 5.25 }
    ]
  },
  {
    id: 'waffle-cones',
    category: 'Desserts',
    name: 'Waffle Cones',
    imageUrl: '/images/restaurant/cone-machine-operator.jpg',
    description: 'Made fresh on our original 1905 cone machine',
    variations: [
      { name: 'Single Scoop Vanilla', price: 4.50 },
      { name: 'Single Scoop Chocolate', price: 4.50 },
      { name: 'Single Scoop Strawberry', price: 4.50 },
      { name: 'Double Scoop Vanilla', price: 6.50 },
      { name: 'Double Scoop Chocolate', price: 6.50 },
      { name: 'Double Scoop Strawberry', price: 6.50 }
    ]
  },
  {
    id: 'banana-split',
    category: 'Desserts',
    name: 'Banana Split',
    imageUrl: '/images/restaurant/ice-cream-sundae.jpg',
    description: 'Three scoops of ice cream with banana, toppings, whipped cream and cherry',
    price: 8.95
  },

  // Drinks
  {
    id: 'coke',
    category: 'Drinks',
    name: 'Coca-Cola',
    imageUrl: '/images/restaurant/ice-cream-glass.jpg',
    variations: [
      { name: 'Small', price: 1.70 },
      { name: 'Large', price: 2.40 }
    ]
  },
  {
    id: 'root-beer',
    category: 'Drinks',
    name: 'Root Beer',
    imageUrl: '/images/restaurant/ice-cream-glass.jpg',
    variations: [
      { name: 'Small', price: 1.70 },
      { name: 'Large', price: 2.40 }
    ]
  },
  {
    id: 'limeade',
    category: 'Drinks',
    name: 'Famous Limeade',
    imageUrl: '/images/restaurant/ice-cream-glass.jpg',
    description: 'Our signature refreshing drink',
    variations: [
      { name: 'Small', price: 1.70 },
      { name: 'Large', price: 2.40 }
    ]
  },
  {
    id: 'orangeade',
    category: 'Drinks',
    name: 'Fresh Orangeade',
    imageUrl: '/images/restaurant/ice-cream-glass.jpg',
    variations: [
      { name: 'Small', price: 2.25 },
      { name: 'Large', price: 3.25 }
    ]
  },
  {
    id: 'diet-coke',
    category: 'Drinks',
    name: 'Diet Coke',
    imageUrl: '/images/restaurant/ice-cream-glass.jpg',
    variations: [
      { name: 'Small', price: 1.70 },
      { name: 'Large', price: 2.40 }
    ]
  },
  {
    id: 'cherry-coke',
    category: 'Drinks',
    name: 'Cherry Coke',
    imageUrl: '/images/restaurant/ice-cream-glass.jpg',
    variations: [
      { name: 'Small', price: 1.70 },
      { name: 'Large', price: 2.40 }
    ]
  },
  {
    id: 'hot-coffee',
    category: 'Drinks',
    name: 'Hot Coffee',
    imageUrl: '/images/restaurant/ice-cream-glass.jpg',
    variations: [
      { name: 'Small', price: 1.70 },
      { name: 'Large', price: 2.40 }
    ]
  },
  {
    id: 'tea',
    category: 'Drinks',
    name: 'Hot or Iced Tea',
    imageUrl: '/images/restaurant/ice-cream-glass.jpg',
    variations: [
      { name: 'Small', price: 1.70 },
      { name: 'Large', price: 2.40 }
    ]
  },
  {
    id: 'milk',
    category: 'Drinks',
    name: 'Milk',
    imageUrl: '/images/restaurant/ice-cream-glass.jpg',
    variations: [
      { name: 'Small', price: 1.95 },
      { name: 'Large', price: 2.75 }
    ]
  },
  {
    id: 'chocolate-milk',
    category: 'Drinks',
    name: 'Chocolate Milk',
    imageUrl: '/images/restaurant/ice-cream-glass.jpg',
    variations: [
      { name: 'Small', price: 2.25 },
      { name: 'Large', price: 3.25 }
    ]
  },

  // Additional Sides
  {
    id: 'coleslaw',
    category: 'Sides',
    name: 'Homemade Coleslaw',
    imageUrl: '/images/food/bbq-sandwich.jpg',
    description: 'Fresh creamy coleslaw made daily',
    price: 2.95
  },
  {
    id: 'onion-rings',
    category: 'Sides',
    name: 'Onion Rings',
    imageUrl: '/images/food/bbq-sandwich.jpg',
    description: 'Beer-battered and crispy',
    price: 4.50
  },
  {
    id: 'pickle',
    category: 'Sides',
    name: 'Dill Pickle',
    imageUrl: '/images/food/bbq-sandwich.jpg',
    price: 1.25
  },

  // Bulk Items
  {
    id: 'pork-by-pound',
    category: 'Bulk Items',
    name: 'Pork Barbecue by the Pound',
    imageUrl: '/images/food/bbq-sandwich.jpg',
    description: 'Our famous barbecue pork for home',
    price: 12.95
  },
  {
    id: 'sauce-bottle',
    category: 'Bulk Items',
    name: 'Barbecue Sauce Bottle',
    imageUrl: '/images/food/bbq-sandwich.jpg',
    description: 'Take home our signature sauce',
    price: 4.95
  },
  {
    id: 'dozen-cones',
    category: 'Bulk Items',
    name: 'Dozen Fresh Waffle Cones',
    imageUrl: '/images/restaurant/cone-machine-operator.jpg',
    description: 'Fresh waffle cones to take home',
    price: 15.95
  }
]

// Helper function to get items by category
export const getItemsByCategory = (category: MenuItem['category']): MenuItem[] => {
  return menuData.filter(item => item.category === category)
}

// Helper function to get all categories
export const getCategories = (): MenuItem['category'][] => {
  const categories = Array.from(new Set(menuData.map(item => item.category)))
  return categories
}