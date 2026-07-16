import React, { useEffect } from 'react';

export default function CartDrawer({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem, onClearCart }) {
  
  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Calculate cart subtotal
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const minDeliveryLimit = 199;
  const isBelowMinLimit = subtotal < minDeliveryLimit && subtotal > 0;

  const handleCheckout = () => {
    if (cartItems.length === 0) return;

    // Check minimum order limits
    if (isBelowMinLimit) {
      const proceed = window.confirm(
        `Minimum order for home delivery is ₹${minDeliveryLimit}. For orders below this, you can pick up at our facility. Do you want to proceed with a Pick-up Order?`
      );
      if (!proceed) return;
    }

    // Build WhatsApp Message
    let message = `*PRADEEP VEGETABLES - NEW ORDER*\n`;
    message += `==================================\n`;
    message += `Hello! I would like to place an order:\n\n`;

    cartItems.forEach((item, index) => {
      const itemTotal = item.price * item.quantity;
      message += `${index + 1}. *${item.name}*\n`;
      message += `   - Portion Size: ${item.size}\n`;
      message += `   - Quantity: ${item.quantity}\n`;
      message += `   - Unit Price: ₹${item.price}\n`;
      message += `   - Total: ₹${itemTotal}\n\n`;
    });

    message += `==================================\n`;
    message += `*Grand Total:* ₹${subtotal}\n`;
    message += `*Order Type:* ${subtotal >= minDeliveryLimit ? 'Home Delivery (Eligible)' : 'Facility Self Pick-Up'}\n\n`;
    message += `Please confirm availability and share payment details. Thank you!`;

    // Encode message and redirect to WhatsApp API
    const encodedMessage = encodeURIComponent(message);
    const whatsappNumber = "918428402482"; // Pradeep WhatsApp Contact
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      {/* Drawer Overlay Backdrop */}
      <div 
        className={`cart-drawer-backdrop ${isOpen ? 'active' : ''}`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Cart Drawer Container */}
      <div 
        className={`cart-drawer ${isOpen ? 'active' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Shopping Cart"
      >
        {/* Header */}
        <div className="cart-header">
          <h2 className="cart-title">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#10b981', verticalAlign: 'middle', marginRight: '8px' }}><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
            Your Cart
          </h2>
          <button 
            className="cart-close-btn" 
            onClick={onClose}
            aria-label="Close cart"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          </button>
        </div>

        {/* Content Body */}
        <div className="cart-body">
          {cartItems.length === 0 ? (
            <div className="cart-empty-state">
              <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.2, marginBottom: '1rem', color: '#064e3b' }}><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
              <p className="empty-text-title">Your cart is empty</p>
              <p className="empty-text-desc">Choose from our farm-fresh FSSAI cut vegetable inventory to start cooking.</p>
              <button className="btn btn-green btn-small" onClick={onClose} style={{ marginTop: '1.25rem' }}>
                Browse Products
              </button>
            </div>
          ) : (
            <div className="cart-items-list">
              {cartItems.map((item) => (
                <div key={`${item.id}-${item.size}`} className="cart-item">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="cart-item-img"
                  />
                  <div className="cart-item-details">
                    <h4 className="cart-item-name">{item.name}</h4>
                    <p className="cart-item-size">Portion: {item.size}</p>
                    <p className="cart-item-price">₹{item.price} each</p>
                    
                    <div className="cart-item-controls">
                      <div className="quantity-adjuster">
                        <button 
                          className="qty-btn"
                          onClick={() => onUpdateQuantity(item.id, item.size, item.quantity - 1)}
                          aria-label="Decrease quantity"
                        >
                          -
                        </button>
                        <span className="qty-val">{item.quantity}</span>
                        <button 
                          className="qty-btn"
                          onClick={() => onUpdateQuantity(item.id, item.size, item.quantity + 1)}
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>
                      <span className="cart-item-subtotal">₹{item.price * item.quantity}</span>
                    </div>
                  </div>
                  <button 
                    className="item-remove-btn"
                    onClick={() => onRemoveItem(item.id, item.size)}
                    aria-label="Remove item"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer Summary & Checkout */}
        {cartItems.length > 0 && (
          <div className="cart-footer">
            <div className="cart-summary-row">
              <span className="summary-label">Subtotal</span>
              <span className="summary-val">₹{subtotal}</span>
            </div>

            {/* Minimum Order Warnings */}
            {isBelowMinLimit ? (
              <div className="cart-alert-box warning">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '5px', flexShrink: 0 }}><circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/></svg>
                <span>Order is below ₹199. Pick up at facility only. Add ₹{minDeliveryLimit - subtotal} more for home delivery!</span>
              </div>
            ) : (
              <div className="cart-alert-box success">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '5px', flexShrink: 0 }}><path d="M20 6 9 17l-5-5"/></svg>
                <span>Your order qualifies for Home Delivery in Chennai!</span>
              </div>
            )}

            <button className="btn btn-green btn-full checkout-btn" onClick={handleCheckout}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '6px' }}><path d="M22 2 11 13"/><path d="m22 2-7 20-4-9-9-4Z"/></svg>
              Order via WhatsApp
            </button>
            <button className="clear-cart-link" onClick={onClearCart}>
              Clear Cart
            </button>
          </div>
        )}
      </div>
    </>
  );
}
