export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'burgers' | 'combos' | 'sides' | 'beverages';
  isBestSeller?: boolean;
}

export const menuItems: MenuItem[] = [
  // Burgers
  {
    id: 'classic-burger',
    name: 'Classic Vizag Burger',
    description: 'Juicy beef patty, fresh lettuce, tomato, our secret sauce',
    price: 149,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400',
    category: 'burgers',
    isBestSeller: true,
  },
  {
    id: 'cheese-burst',
    name: 'Cheese Burst Burger',
    description: 'Double cheese, crispy patty, caramelized onions, pickles',
    price: 179,
    image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=400',
    category: 'burgers',
    isBestSeller: true,
  },
  {
    id: 'spicy-masala',
    name: 'Spicy Masala Burger',
    description: 'Indian spiced patty, jalapeños, mint chutney, onion rings',
    price: 169,
    image: 'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=400',
    category: 'burgers',
  },
  {
    id: 'bbq-chicken',
    name: 'BBQ Chicken Burger',
    description: 'Grilled chicken, smoky BBQ sauce, coleslaw, cheese',
    price: 189,
    image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=400',
    category: 'burgers',
    isBestSeller: true,
  },
  {
    id: 'veggie-delight',
    name: 'Veggie Delight',
    description: 'Crispy paneer patty, fresh veggies, special mayo',
    price: 139,
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=400',
    category: 'burgers',
  },
  // Combos
  {
    id: 'combo-classic',
    name: 'Classic Combo',
    description: 'Classic Burger + Fries + Drink',
    price: 249,
    image: 'https://images.unsplash.com/photo-1610440042657-612c34d95e9f?w=400',
    category: 'combos',
    isBestSeller: true,
  },
  {
    id: 'combo-cheese',
    name: 'Cheese Lover Combo',
    description: 'Cheese Burst Burger + Cheesy Fries + Drink',
    price: 299,
    image: 'https://images.unsplash.com/photo-1586816001966-79b736744398?w=400',
    category: 'combos',
  },
  {
    id: 'combo-family',
    name: 'Family Feast',
    description: '4 Burgers + 2 Large Fries + 4 Drinks',
    price: 799,
    image: 'https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=400',
    category: 'combos',
  },
  // Sides
  {
    id: 'fries-regular',
    name: 'Classic Fries',
    description: 'Golden crispy fries with seasoning',
    price: 79,
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400',
    category: 'sides',
  },
  {
    id: 'fries-cheese',
    name: 'Loaded Cheese Fries',
    description: 'Fries topped with melted cheese & jalapeños',
    price: 119,
    image: 'https://images.unsplash.com/photo-1585109649139-366815a0d713?w=400',
    category: 'sides',
    isBestSeller: true,
  },
  {
    id: 'onion-rings',
    name: 'Onion Rings',
    description: 'Crispy battered onion rings',
    price: 89,
    image: 'https://images.unsplash.com/photo-1639024471283-03518883512d?w=400',
    category: 'sides',
  },
  // Beverages
  {
    id: 'cola',
    name: 'Cola',
    description: 'Chilled refreshing cola',
    price: 49,
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=400',
    category: 'beverages',
  },
  {
    id: 'shake-chocolate',
    name: 'Chocolate Shake',
    description: 'Creamy chocolate milkshake',
    price: 99,
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400',
    category: 'beverages',
  },
  {
    id: 'shake-oreo',
    name: 'Oreo Shake',
    description: 'Rich Oreo cookie milkshake',
    price: 119,
    image: 'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?w=400',
    category: 'beverages',
  },
];

export const categories = [
  { id: 'burgers', name: 'Burgers', icon: '🍔' },
  { id: 'combos', name: 'Combos', icon: '🍟' },
  { id: 'sides', name: 'Sides', icon: '🧅' },
  { id: 'beverages', name: 'Drinks', icon: '🥤' },
] as const;
