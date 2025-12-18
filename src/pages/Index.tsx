import { useState } from 'react';
import { CartProvider } from '@/context/CartContext';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import BestSellers from '@/components/BestSellers';
import MenuSection from '@/components/MenuSection';
import BrandStory from '@/components/BrandStory';
import Location from '@/components/Location';
import InstagramFeed from '@/components/InstagramFeed';
import Footer from '@/components/Footer';
import Cart from '@/components/Cart';
import FloatingCart from '@/components/FloatingCart';
import { Helmet } from 'react-helmet-async';

const Index = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <CartProvider>
      <Helmet>
        <title>VizagBurger - Best Burgers in Visakhapatnam | Order Online</title>
        <meta name="description" content="Taste the best burgers in Vizag! Fresh, juicy, handcrafted burgers made with premium ingredients. Order online for pickup or delivery." />
        <meta name="keywords" content="burger, Visakhapatnam, Vizag, food delivery, best burger, order online" />
        <link rel="canonical" href="https://vizagburger.com" />
      </Helmet>

      <main className="min-h-screen bg-background">
        <Header onCartClick={() => setIsCartOpen(true)} />
        <Hero />
        <BestSellers />
        <MenuSection />
        <BrandStory />
        <Location />
        <InstagramFeed />
        <Footer />
        
        <FloatingCart onClick={() => setIsCartOpen(true)} />
        <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      </main>
    </CartProvider>
  );
};

export default Index;
