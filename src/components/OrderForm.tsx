import { X, Phone, User, MapPin, Truck, Store } from 'lucide-react';
import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { useToast } from '@/hooks/use-toast';

interface OrderFormProps {
  onClose: () => void;
  onCartClose: () => void;
}

const OrderForm = ({ onClose, onCartClose }: OrderFormProps) => {
  const { items, totalPrice, clearCart } = useCart();
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    orderType: 'pickup' as 'pickup' | 'delivery',
    address: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.phone.trim()) {
      toast({
        title: "Missing Information",
        description: "Please fill in your name and phone number",
        variant: "destructive",
      });
      return;
    }

    if (formData.orderType === 'delivery' && !formData.address.trim()) {
      toast({
        title: "Address Required",
        description: "Please enter your delivery address",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Build order message for WhatsApp
    const orderItems = items.map(item => 
      `• ${item.name} x${item.quantity} - ₹${item.price * item.quantity}${item.notes ? ` (${item.notes})` : ''}`
    ).join('\n');

    const message = encodeURIComponent(
`🍔 *New Order from VizagBurger*

*Customer:* ${formData.name}
*Phone:* ${formData.phone}
*Order Type:* ${formData.orderType === 'pickup' ? '🏪 Pickup' : '🚚 Delivery'}
${formData.orderType === 'delivery' ? `*Address:* ${formData.address}\n` : ''}
*Order Details:*
${orderItems}

*Total: ₹${totalPrice}*

---
Placed via VizagBurger Website`
    );

    // Open WhatsApp with order
    const whatsappNumber = '919876543210'; // Replace with actual number
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
    
    window.open(whatsappUrl, '_blank');

    // Show success message
    toast({
      title: "Order Sent! 🎉",
      description: "Complete your order on WhatsApp. We'll confirm shortly!",
    });

    // Clear cart and close modals
    clearCart();
    onClose();
    onCartClose();
    setIsSubmitting(false);
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-end md:items-center justify-center">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-foreground/60"
        onClick={onClose}
      />

      {/* Form Modal */}
      <div className="relative w-full max-w-lg bg-background rounded-t-3xl md:rounded-2xl shadow-2xl animate-slide-up max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-background flex items-center justify-between p-4 border-b border-border">
          <h2 className="text-xl font-bold text-foreground">Complete Your Order</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-muted transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-4 space-y-4">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">
              Your Name *
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                value={formData.name}
                onChange={e => setFormData(prev => ({ ...prev, name: e.target.value }))}
                placeholder="Enter your name"
                className="input-field pl-10"
                required
              />
            </div>
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">
              Phone Number *
            </label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="tel"
                value={formData.phone}
                onChange={e => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                placeholder="Enter your phone number"
                className="input-field pl-10"
                required
              />
            </div>
          </div>

          {/* Order Type */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Order Type *
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setFormData(prev => ({ ...prev, orderType: 'pickup' }))}
                className={`flex items-center justify-center gap-2 p-4 rounded-xl border-2 transition-all ${
                  formData.orderType === 'pickup'
                    ? 'border-primary bg-primary/10 text-primary'
                    : 'border-border text-muted-foreground hover:border-primary/50'
                }`}
              >
                <Store className="w-5 h-5" />
                <span className="font-medium">Pickup</span>
              </button>
              <button
                type="button"
                onClick={() => setFormData(prev => ({ ...prev, orderType: 'delivery' }))}
                className={`flex items-center justify-center gap-2 p-4 rounded-xl border-2 transition-all ${
                  formData.orderType === 'delivery'
                    ? 'border-primary bg-primary/10 text-primary'
                    : 'border-border text-muted-foreground hover:border-primary/50'
                }`}
              >
                <Truck className="w-5 h-5" />
                <span className="font-medium">Delivery</span>
              </button>
            </div>
          </div>

          {/* Address (only for delivery) */}
          {formData.orderType === 'delivery' && (
            <div className="animate-fade-in">
              <label className="block text-sm font-medium text-foreground mb-1.5">
                Delivery Address *
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                <textarea
                  value={formData.address}
                  onChange={e => setFormData(prev => ({ ...prev, address: e.target.value }))}
                  placeholder="Enter your full delivery address"
                  rows={3}
                  className="input-field pl-10 resize-none"
                  required
                />
              </div>
            </div>
          )}

          {/* Order Summary */}
          <div className="bg-muted rounded-xl p-4">
            <div className="text-sm text-muted-foreground mb-2">Order Summary</div>
            <div className="space-y-1">
              {items.map(item => (
                <div key={item.id} className="flex justify-between text-sm">
                  <span className="text-foreground">{item.name} x{item.quantity}</span>
                  <span className="text-foreground font-medium">₹{item.price * item.quantity}</span>
                </div>
              ))}
            </div>
            <div className="border-t border-border mt-3 pt-3 flex justify-between">
              <span className="font-semibold text-foreground">Total</span>
              <span className="font-bold text-primary text-lg">₹{totalPrice}</span>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {isSubmitting ? (
              <>Sending...</>
            ) : (
              <>
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.789l4.933-1.294A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.487 0-4.796-.739-6.733-2.008l-.483-.29-2.926.768.783-2.857-.318-.504A9.947 9.947 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                </svg>
                Place Order via WhatsApp
              </>
            )}
          </button>

          <p className="text-xs text-center text-muted-foreground">
            Your order will be sent via WhatsApp. We'll confirm and share the estimated time.
          </p>
        </form>
      </div>
    </div>
  );
};

export default OrderForm;
