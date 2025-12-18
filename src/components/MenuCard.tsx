import { Plus, Minus } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { MenuItem } from '@/data/menuData';

interface MenuCardProps {
  item: MenuItem;
}

const MenuCard = ({ item }: MenuCardProps) => {
  const { items, addItem, updateQuantity } = useCart();
  const cartItem = items.find(i => i.id === item.id);
  const quantity = cartItem?.quantity || 0;

  const handleAdd = () => {
    addItem({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
    });
  };

  const handleIncrease = () => {
    updateQuantity(item.id, quantity + 1);
  };

  const handleDecrease = () => {
    updateQuantity(item.id, quantity - 1);
  };

  return (
    <div className="card-menu group">
      {/* Image */}
      <div className="relative mb-3 overflow-hidden rounded-xl">
        <img
          src={item.image}
          alt={item.name}
          className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        {item.isBestSeller && (
          <span className="absolute top-2 left-2 badge-bestseller">
            ⭐ Best Seller
          </span>
        )}
      </div>

      {/* Content */}
      <div className="space-y-2">
        <h3 className="font-semibold text-foreground text-lg leading-tight">
          {item.name}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2">
          {item.description}
        </p>

        {/* Price & Add */}
        <div className="flex items-center justify-between pt-2">
          <span className="text-xl font-bold text-primary">
            ₹{item.price}
          </span>

          {quantity === 0 ? (
            <button
              onClick={handleAdd}
              className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-full font-medium text-sm transition-all hover:shadow-warm hover:scale-105 active:scale-95"
            >
              <Plus className="w-4 h-4" />
              Add
            </button>
          ) : (
            <div className="flex items-center gap-3">
              <button onClick={handleDecrease} className="quantity-btn">
                <Minus className="w-4 h-4" />
              </button>
              <span className="font-semibold text-foreground w-6 text-center">
                {quantity}
              </span>
              <button onClick={handleIncrease} className="quantity-btn">
                <Plus className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
