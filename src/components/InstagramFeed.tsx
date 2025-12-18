import { Instagram } from 'lucide-react';

const InstagramFeed = () => {
  // Placeholder Instagram posts
  const posts = [
    'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300',
    'https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=300',
    'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=300',
    'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=300',
    'https://images.unsplash.com/photo-1550547660-d9450f859349?w=300',
    'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=300',
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            @VizagBurger
          </span>
          <h2 className="heading-section text-foreground mt-2">
            Follow Our Journey
          </h2>
          <p className="text-body mt-3">
            Fresh posts, behind-the-scenes, and more
          </p>
        </div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-2 md:gap-4">
          {posts.map((post, index) => (
            <a
              key={index}
              href="https://instagram.com/vizagburger"
              target="_blank"
              rel="noopener noreferrer"
              className="relative aspect-square rounded-xl overflow-hidden group"
            >
              <img
                src={post}
                alt="Instagram post"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-colors flex items-center justify-center">
                <Instagram className="w-8 h-8 text-background opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </a>
          ))}
        </div>

        {/* Follow Button */}
        <div className="text-center mt-8">
          <a
            href="https://instagram.com/vizagburger"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 btn-secondary"
          >
            <Instagram className="w-5 h-5" />
            Follow on Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
