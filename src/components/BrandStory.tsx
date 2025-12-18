const BrandStory = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Our Story
          </span>
          <h2 className="heading-section text-foreground mt-2 mb-6">
            Born in Vizag, Made with Love
          </h2>
          
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            What started as a dream to bring premium street-style burgers to Visakhapatnam 
            has grown into a beloved local brand. We source the freshest ingredients, 
            craft each patty by hand, and serve every burger with a smile. 
            <span className="text-foreground font-medium"> Because Vizag deserves nothing but the best.</span>
          </p>

          <div className="grid grid-cols-3 gap-6 mt-10">
            <div className="text-center">
              <div className="text-4xl mb-2">🥩</div>
              <div className="font-semibold text-foreground">Fresh Daily</div>
              <div className="text-sm text-muted-foreground">Never frozen</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">🌿</div>
              <div className="font-semibold text-foreground">Local Sourcing</div>
              <div className="text-sm text-muted-foreground">Vizag farms</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">❤️</div>
              <div className="font-semibold text-foreground">Made with Love</div>
              <div className="text-sm text-muted-foreground">Every single time</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
