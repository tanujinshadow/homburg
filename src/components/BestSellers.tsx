import { menuItems } from '@/data/menuData';
import MenuCard from './MenuCard';

const BestSellers = () => {
  const bestSellers = menuItems.filter(item => item.isBestSeller).slice(0, 4);

  return (
    <section className="section-padding bg-brand-cream">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Fan Favourites
          </span>
          <h2 className="heading-section text-foreground mt-2">
            Most Ordered 🔥
          </h2>
          <p className="text-body mt-3 max-w-md mx-auto">
            What our customers can't stop ordering
          </p>
        </div>

        {/* Best Sellers Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {bestSellers.map((item, index) => (
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

export default BestSellers;
