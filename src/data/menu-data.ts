import { MenuItem } from '@/types/menu'

export const menuData: MenuItem[] = [
  // Sandwiches
  {
    id: 'french-fries',
    category: 'Sandwiches',
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
      { name: 'Minced with cheese, lettuce, tomato, and mayonnaise', price: 4.20 },
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
      { name: 'With mustard, relish, and/or onions', price: 3.50 },
      { name: 'With cheese, lettuce, tomato, and mayonnaise', price: 3.90 }
    ]
  },
  {
    id: 'cheeseburger',
    category: 'Sandwiches',
    name: 'Cheeseburger',
    imageUrl: '/images/food/bbq-sandwich.jpg',
    description: 'With cheese on both sides',
    variations: [
      { name: 'Plain (a specialty with us)', price: 4.00 },
      { name: 'With Relish and/or Onions', price: 4.00 },
      { name: 'With lettuce, tomato, and mayonnaise', price: 4.00 }
    ]
  },
  {
    id: 'hot-dog',
    category: 'Sandwiches',
    name: 'Hot Dog',
    imageUrl: '/images/food/bbq-sandwich.jpg',
    description: 'Split and grilled on a hamburger roll',
    variations: [
      { name: 'With mustard, Relish, and/or Onions', price: 2.30 },
      { name: 'With cheese, lettuce, tomato, and mayonnaise', price: 2.70 },
      { name: 'With double meat, mustard, Relish, and/or Onions', price: 3.70 }
    ]
  },
  {
    id: 'baked-ham',
    category: 'Sandwiches',
    name: 'Ham - Baked, Smoked Ham on Toast',
    imageUrl: '/images/food/bbq-sandwich.jpg',
    variations: [
      { name: 'With lettuce, tomato, and mayonnaise', price: 5.00 },
      { name: 'With cheese, lettuce, tomato, and mayonnaise', price: 5.40 }
    ]
  },
  {
    id: 'fried-ham',
    category: 'Sandwiches',
    name: 'Fried Ham',
    imageUrl: '/images/food/bbq-sandwich.jpg',
    variations: [
      { name: 'With lettuce, tomato, and mayonnaise', price: 5.00 },
      { name: 'With cheese, lettuce, tomato, and mayonnaise', price: 5.40 }
    ]
  },
  {
    id: 'steak',
    category: 'Sandwiches',
    name: 'Steak',
    imageUrl: '/images/food/bbq-sandwich.jpg',
    description: 'Thin, grilled, sliced ribeye on a roll. With lettuce, tomato, and mayonnaise.',
    price: 6.20
  },
  {
    id: 'taylor-pork-roll',
    category: 'Sandwiches',
    name: 'Taylor Pork Roll',
    imageUrl: '/images/food/bbq-sandwich.jpg',
    description: 'Gourmet processed pork, sliced and grilled. With lettuce, tomato, and mayonnaise.',
    price: 6.00
  },
  {
    id: 'blt',
    category: 'Sandwiches',
    name: 'Bacon, Lettuce and Tomato',
    imageUrl: '/images/food/bbq-sandwich.jpg',
    description: 'On toast with mayonnaise.',
    price: 6.25
  },
  {
    id: 'lettuce-tomato',
    category: 'Sandwiches',
    name: 'Lettuce and Tomato',
    imageUrl: '/images/food/bbq-sandwich.jpg',
    description: 'On toast with mayonnaise.',
    price: 4.00
  },
  {
    id: 'tuna-fish',
    category: 'Sandwiches',
    name: 'Tuna Fish Salad',
    imageUrl: '/images/food/bbq-sandwich.jpg',
    description: 'On toast with lettuce, tomato, and mayonnaise.',
    price: 5.90
  },
  {
    id: 'bacon-egg',
    category: 'Sandwiches',
    name: 'Bacon and Egg on Toast',
    imageUrl: '/images/food/bbq-sandwich.jpg',
    price: 5.10
  },
  {
    id: 'ham-egg',
    category: 'Sandwiches',
    name: 'Ham and Egg on Toast',
    imageUrl: '/images/food/bbq-sandwich.jpg',
    price: 5.10
  },
  {
    id: 'steak-egg',
    category: 'Sandwiches',
    name: 'Steak and Egg on Toast',
    imageUrl: '/images/food/bbq-sandwich.jpg',
    price: 7.50
  },
  {
    id: 'fried-egg',
    category: 'Sandwiches',
    name: 'Fried Egg on Toast',
    imageUrl: '/images/food/bbq-sandwich.jpg',
    price: 3.00
  },
  {
    id: 'fried-egg-cheese',
    category: 'Sandwiches',
    name: 'Fried Egg on Toast with Cheese',
    imageUrl: '/images/food/bbq-sandwich.jpg',
    price: 3.40
  },
  {
    id: 'egg-o-doumar',
    category: 'Sandwiches',
    name: 'Egg-O-Doumar',
    imageUrl: '/images/food/bbq-sandwich.jpg',
    description: 'Fried ham and egg, With cheese on a roll.',
    price: 5.50
  },
  {
    id: 'grilled-cheese',
    category: 'Sandwiches',
    name: 'Grilled Cheese - Plain',
    imageUrl: '/images/food/bbq-sandwich.jpg',
    price: 4.10
  },
  {
    id: 'grilled-cheese-bacon',
    category: 'Sandwiches',
    name: 'Grilled Cheese with Bacon',
    imageUrl: '/images/food/bbq-sandwich.jpg',
    price: 6.20
  },
  {
    id: 'grilled-cheese-ham',
    category: 'Sandwiches',
    name: 'Grilled Cheese with Ham',
    imageUrl: '/images/food/bbq-sandwich.jpg',
    price: 6.20
  },

  // Sides
  {
    id: 'coleslaw',
    category: 'Sides',
    name: 'Slaw',
    imageUrl: '/images/food/bbq-sandwich.jpg',
    description: 'Especially made to go with our barbeque',
    variations: [
      { name: '14 oz', price: 2.00 },
      { name: '24 oz', price: 3.00 }
    ]
  },
  {
    id: 'rolls',
    category: 'Sides',
    name: 'Rolls',
    imageUrl: '/images/food/bbq-sandwich.jpg',
    description: 'Trays are available for larger orders',
    variations: [
      { name: 'Each', price: 0.50 },
      { name: 'Per dozen', price: 5.00 }
    ]
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

  // Shakes & Floats
  {
    id: 'shakes',
    category: 'Shakes & Floats',
    name: 'Shakes',
    imageUrl: '/images/restaurant/ice-cream-glass.jpg',
    description: 'Vanilla, Chocolate, Strawberry, Cherry, Root Beer, Pineapple, Banana, Egg Nog (seasonal), Lime Freeze, Orange Freeze, Pumpkin (seasonal), Peach (seasonal)',
    price: 4.45
  },
  {
    id: 'cheesecake-shake',
    category: 'Shakes & Floats',
    name: 'Cheesecake Shake - Seasonal',
    imageUrl: '/images/restaurant/ice-cream-glass.jpg',
    description: 'This is a seasonal shake topped with cone chips and whipped cream.',
    price: 5.45
  },
  {
    id: 'cookies-cream-shake',
    category: 'Shakes & Floats',
    name: 'Cookies & Cream Shake - Seasonal',
    imageUrl: '/images/restaurant/ice-cream-glass.jpg',
    description: 'This is a seasonal shake made by adding crumbled chocolate wafer cookies with vanilla cream to our classic vanilla shake.',
    price: 5.45
  },
  {
    id: 'ice-cream-floats',
    category: 'Shakes & Floats',
    name: 'Ice Cream Floats',
    imageUrl: '/images/restaurant/ice-cream-glass.jpg',
    description: 'Our floats come with whip cream and a cherry • Chocolate, Vanilla, Coke, Strawberry, Cherry, Root Beer, Pineapple, Banana, Egg Nog (seasonal), Limeade (with Sherbet), Orangeade (with Sherbet), Pumpkin (seasonal)',
    price: 5.70
  },

  // Desserts
  {
    id: 'ice-cream-sundaes-basic',
    category: 'Desserts',
    name: 'Chocolate, Hot Fudge, Strawberry, Pineapple',
    imageUrl: '/images/restaurant/ice-cream-sundae.jpg',
    description: 'Our Sundaes come with whip cream and a cherry and are made with Vanilla Ice Cream.',
    variations: [
      { name: 'Small', price: 5.00 },
      { name: 'Large', price: 6.00 },
      { name: 'Small (Wet nuts: +$1.00 Extra)', price: 6.00 },
      { name: 'Large (Wet nuts: +$1.00 Extra)', price: 7.00 }
    ]
  },
  {
    id: 'hawaiian-sunset',
    category: 'Desserts',
    name: 'Hawaiian Sunset',
    imageUrl: '/images/restaurant/ice-cream-sundae.jpg',
    description: 'Made with pineapple, ice cream, and nuts.',
    price: 6.00
  },
  {
    id: 'coed-sundae',
    category: 'Desserts',
    name: 'Coed Sundae Pride of the House',
    imageUrl: '/images/restaurant/ice-cream-sundae.jpg',
    description: 'Made with hot fudge, ice cream, and sliced bananas.',
    price: 6.00
  },
  {
    id: 'ringo',
    category: 'Desserts',
    name: 'Ringo',
    imageUrl: '/images/restaurant/ice-cream-sundae.jpg',
    description: 'Made with crushed cone chips.',
    price: 6.00
  },
  {
    id: 'hot-fudge-cake',
    category: 'Desserts',
    name: 'Hot Fudge Cake',
    imageUrl: '/images/restaurant/ice-cream-sundae.jpg',
    description: 'Made with yellow cake.',
    price: 6.00
  },
  {
    id: 'banana-fudge-cake',
    category: 'Desserts',
    name: 'Banana Fudge Cake',
    imageUrl: '/images/restaurant/ice-cream-sundae.jpg',
    description: 'Made with yellow cake.',
    price: 7.00
  },
  {
    id: 'shortcake',
    category: 'Desserts',
    name: 'Strawberry or Banana Shortcake',
    imageUrl: '/images/restaurant/ice-cream-sundae.jpg',
    description: 'Made with yellow cake.',
    price: 6.00
  },
  {
    id: 'banana-split',
    category: 'Desserts',
    name: 'Banana Split ~ Eternal Masterpiece',
    imageUrl: '/images/restaurant/ice-cream-sundae.jpg',
    price: 8.00
  },
  {
    id: 'one-scoop-cone',
    category: 'Desserts',
    name: 'One Scoop',
    imageUrl: '/images/restaurant/cone-machine-operator.jpg',
    description: 'The cones are still made by hand • Vanilla, Chocolate, Strawberry, Butter Pecan, Lime Sherbet, and Orange Sherbet.',
    price: 3.20
  },
  {
    id: 'two-scoop-cone',
    category: 'Desserts',
    name: 'Two Scoops',
    imageUrl: '/images/restaurant/cone-machine-operator.jpg',
    description: 'The cones are still made by hand • Vanilla, Chocolate, Strawberry, Butter Pecan, Lime Sherbet, and Orange Sherbet.',
    price: 4.60
  },
  {
    id: 'big-daddy-cone',
    category: 'Desserts',
    name: 'Big Daddy Cone',
    imageUrl: '/images/restaurant/cone-machine-operator.jpg',
    description: 'Two scoops.',
    price: 5.60
  },

  // Bulk Items
  {
    id: 'hot-sauce-bottle',
    category: 'Bulk Items',
    name: 'Bottle of Hot Sauce',
    imageUrl: '/images/food/bbq-sandwich.jpg',
    price: 7.50
  },
  {
    id: 'barbeque-bulk',
    category: 'Bulk Items',
    name: 'Barbeque',
    imageUrl: '/images/food/bbq-sandwich.jpg',
    description: 'Trays are available for larger orders.',
    variations: [
      { name: 'Half Pint', price: 6.00 },
      { name: 'Pint', price: 12.00 }
    ]
  },
  {
    id: 'cone-jars',
    category: 'Bulk Items',
    name: 'Souvenir Jars of 2 Dozen Cones',
    imageUrl: '/images/restaurant/cone-machine-operator.jpg',
    price: 22.00
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