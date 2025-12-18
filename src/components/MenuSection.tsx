import { useState } from 'react';
import { menuItems, categories } from '@/data/menuData';
import MenuCard from './MenuCard';

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState<string>('burgers');

  const filteredItems = menuItems.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="section-padding bg-background">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Our Menu
          </span>
          <h2 className="heading-section text-foreground mt-2">
            Fresh & Delicious
          </h2>
          <p className="text-body mt-3 max-w-md mx-auto">
            Handcrafted burgers made with the freshest ingredients
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-8">
          <div className="flex gap-2 p-1.5 bg-muted rounded-full overflow-x-auto max-w-full">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-medium text-sm whitespace-nowrap transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-primary text-primary-foreground shadow-warm'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <span>{category.icon}</span>
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="opacity-0 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}
            >
              <MenuCard item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
