import heroBurger from '@/assets/hero-burger.jpg';
const Hero = () => {
  return <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 opacity-50" style={{
      background: 'var(--gradient-hero)'
    }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <span className="inline-block mb-4 px-4 py-2 bg-primary/10 text-primary font-semibold text-sm rounded-full opacity-0 animate-fade-up">
              🔥 Now in Visakhapatnam
            </span>
            
            <h1 className="heading-hero text-foreground mb-6 opacity-0 animate-fade-up stagger-1">
              Taste the <span className="text-primary">Best Burgers</span> in Vizag
            </h1>
            
            <p className="text-body max-w-lg mx-auto lg:mx-0 mb-8 opacity-0 animate-fade-up stagger-2">
              Fresh, juicy, and made with love. From our kitchen to your table – 
              experience street-style burgers with a premium twist.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start opacity-0 animate-fade-up stagger-3">
              <a href="#menu" className="btn-primary text-center">
                Order Now
              </a>
              <a href="#menu" className="btn-secondary text-center">
                View Menu
              </a>
            </div>

            {/* Trust badges */}
            <div className="mt-10 lg:justify-start gap-6 opacity-0 animate-fade-up stagger-4 flex-row flex items-center justify-center">
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">500+</div>
                <div className="text-sm text-muted-foreground">Happy Customers</div>
              </div>
              <div className="w-px h-10 bg-border" />
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">4.9★</div>
                <div className="text-sm text-muted-foreground">Rating</div>
              </div>
              <div className="w-px h-10 bg-border" />
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">30min</div>
                <div className="text-sm text-muted-foreground">Avg Delivery</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="order-1 lg:order-2 flex justify-center opacity-0 animate-fade-up">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl transform scale-75" />
              <img alt="Delicious gourmet burger with fresh ingredients" className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl rounded-3xl shadow-elevated animate-bounce-soft" src="/lovable-uploads/8ba17cb7-b6ac-4d92-8bf1-3b876bcf3d17.jpg" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-2.5 bg-primary rounded-full" />
        </div>
      </div>
    </section>;
};
export default Hero;