import { MapPin, Phone, Clock, MessageCircle } from 'lucide-react';

const Location = () => {
  const whatsappNumber = '919876543210'; // Replace with actual number

  return (
    <section id="location" className="section-padding bg-brand-cream">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Find Us
          </span>
          <h2 className="heading-section text-foreground mt-2">
            Visit Our Kitchen
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Map */}
          <div className="rounded-2xl overflow-hidden shadow-card h-64 lg:h-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.3160739!2d83.1544!3d17.6868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a39431389e6973f%3A0x92d9c20395498468!2sVisakhapatnam%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '300px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="VizagBurger Location"
            />
          </div>

          {/* Contact Info */}
          <div className="bg-card rounded-2xl p-6 md:p-8 shadow-card">
            <h3 className="text-xl font-bold text-foreground mb-6">Contact & Hours</h3>
            
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-medium text-foreground">Address</div>
                  <div className="text-muted-foreground">
                    123 Beach Road, Rama Talkies,<br />
                    Visakhapatnam, AP 530001
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-medium text-foreground">Phone</div>
                  <a 
                    href="tel:+919876543210" 
                    className="text-primary hover:underline"
                  >
                    +91 98765 43210
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-medium text-foreground">Hours</div>
                  <div className="text-muted-foreground">
                    Mon - Sun: 11:00 AM - 11:00 PM
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="grid grid-cols-2 gap-3 mt-8">
              <a
                href="tel:+919876543210"
                className="btn-secondary text-center text-sm"
              >
                <Phone className="w-4 h-4 inline mr-2" />
                Call Now
              </a>
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-center text-sm"
              >
                <MessageCircle className="w-4 h-4 inline mr-2" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
