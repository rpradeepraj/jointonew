import { useState, useEffect } from 'react';

export function useCart() {
  const [cartItems, setCartItems] = useState(() => {
    const saved = localStorage.getItem('j2n_store_cart');
    return saved ? JSON.parse(saved) : [];
  });
  const [cartOpen, setCartOpen] = useState(false);

  // Sync cart items with localStorage
  useEffect(() => {
    localStorage.setItem('j2n_store_cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product, size, price) => {
    setCartItems((prevItems) => {
      const existingIdx = prevItems.findIndex(
        (item) => item.id === product.id && item.size === size
      );

      if (existingIdx > -1) {
        const nextItems = [...prevItems];
        nextItems[existingIdx].quantity += 1;
        return nextItems;
      } else {
        return [
          ...prevItems,
          {
            id: product.id,
            name: product.name,
            size: size,
            price: price,
            image: product.image,
            quantity: 1
          }
        ];
      }
    });
    setCartOpen(true);
  };

  const updateQuantity = (productId, size, quantity) => {
    if (quantity <= 0) {
      removeItem(productId, size);
      return;
    }
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId && item.size === size
          ? { ...item, quantity }
          : item
      )
    );
  };

  const removeItem = (productId, size) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => !(item.id === productId && item.size === size))
    );
  };

  const clearCart = (confirmMsg = "Are you sure you want to clear your cart?") => {
    if (window.confirm(confirmMsg)) {
      setCartItems([]);
    }
  };

  const totalItemsCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return {
    cartItems,
    cartOpen,
    setCartOpen,
    addToCart,
    updateQuantity,
    removeItem,
    clearCart,
    totalItemsCount
  };
}
