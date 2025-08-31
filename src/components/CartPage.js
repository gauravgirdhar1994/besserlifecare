import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const CartPage = () => {
  const { items, removeFromCart, updateQuantity, getCartTotal, getCartItemCount, clearCart } = useCart();

  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity >= 1) {
      updateQuantity(productId, newQuantity);
    }
  };

  const formatPrice = (price) => {
    return `₹${price}`;
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-slate-50 to-sky-50 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-8xl mb-6">🛒</div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-blue-900 mb-4">
            Your cart is empty
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            Looks like you haven't added any products to your cart yet. Start shopping to discover our amazing natural wellness products!
          </p>
          <div className="space-y-4">
            <Link
              to="/products"
              className="inline-block bg-gradient-to-r from-blue-500 to-sky-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              Start Shopping
            </Link>
            <div className="text-sm text-slate-500">
              <Link to="/" className="text-blue-600 hover:text-blue-700 underline">
                Continue browsing
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-slate-50 to-sky-50 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-blue-900 mb-4">
            Shopping Cart
          </h1>
          <p className="text-xl text-slate-600">
            {getCartItemCount()} items in your cart
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-blue-100 p-6 md:p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-display font-semibold text-blue-800">
                  Cart Items
                </h2>
                <button
                  onClick={clearCart}
                  className="text-red-500 hover:text-red-700 text-sm font-medium transition-colors"
                >
                  Clear Cart
                </button>
              </div>

              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="flex items-center space-x-4 p-4 bg-blue-50 rounded-xl">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-sky-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-contain"
                      />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-display font-semibold text-blue-800 mb-1">
                        {item.name}
                      </h3>
                      <p className="text-sm text-slate-600 mb-2">
                        Category: {item.category}
                      </p>
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                            className="w-8 h-8 bg-white border border-blue-200 rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-50 transition-colors"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4"/>
                            </svg>
                          </button>
                          
                          <span className="w-12 text-center text-lg font-medium text-slate-700">
                            {item.quantity}
                          </span>
                          
                          <button
                            onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                            className="w-8 h-8 bg-white border border-blue-200 rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-50 transition-colors"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4"/>
                            </svg>
                          </button>
                        </div>
                        
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-500 hover:text-red-700 transition-colors"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                          </svg>
                        </button>
                      </div>
                    </div>

                    <div className="text-right flex-shrink-0">
                      <div className="text-2xl font-bold text-blue-600 mb-1">
                        {formatPrice(parseFloat(item.price.replace('₹', '')) * item.quantity)}
                      </div>
                      <div className="text-sm text-slate-500">
                        {formatPrice(parseFloat(item.price.replace('₹', '')))} each
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-blue-100 p-6 md:p-8 sticky top-8">
              <h2 className="text-2xl font-display font-semibold text-blue-800 mb-6">
                Order Summary
              </h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-slate-600">
                  <span>Subtotal ({getCartItemCount()} items)</span>
                  <span>{formatPrice(getCartTotal())}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Shipping</span>
                  <span className="text-green-600">Free</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Tax</span>
                  <span>{formatPrice(Math.round(getCartTotal() * 0.18))}</span>
                </div>
                <div className="border-t border-blue-100 pt-4">
                  <div className="flex justify-between text-xl font-bold text-blue-800">
                    <span>Total</span>
                    <span>{formatPrice(Math.round(getCartTotal() * 1.18))}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <Link
                  to="/checkout"
                  className="block w-full bg-gradient-to-r from-blue-500 to-sky-500 text-white text-center py-4 px-6 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  Proceed to Checkout
                </Link>
                
                <Link
                  to="/products"
                  className="block w-full bg-white text-blue-600 text-center py-3 px-6 rounded-xl font-semibold border-2 border-blue-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300"
                >
                  Continue Shopping
                </Link>
              </div>

              <div className="mt-6 p-4 bg-blue-50 rounded-xl">
                <div className="flex items-center space-x-2 text-sm text-blue-700">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  <span>Free shipping on orders above ₹500</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-blue-700 mt-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  <span>30-day money-back guarantee</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage; 