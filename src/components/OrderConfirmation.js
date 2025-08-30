import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const OrderConfirmation = () => {
  const { orderPlaced, checkoutData } = useCart();

  if (!orderPlaced) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-cream-50 to-coral-50 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-8xl mb-6">❌</div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-pink-900 mb-4">
            No Order Found
          </h1>
          <p className="text-xl text-slate-600 mb-8">
            It seems like there's no order to display. Please try shopping again.
          </p>
          <Link
            to="/products"
            className="inline-block bg-gradient-to-r from-pink-500 to-coral-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
          >
            Start Shopping
          </Link>
        </div>
      </div>
    );
  }

  const formatPrice = (price) => {
    return `₹${price}`;
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-cream-50 to-coral-50 py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Success Header */}
        <div className="text-center mb-12">
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-green-800 mb-4">
            Order Confirmed!
          </h1>
          <p className="text-xl text-slate-600 mb-2">
            Thank you for your purchase. Your order has been successfully placed.
          </p>
          <p className="text-lg text-slate-500">
            Order ID: <span className="font-semibold text-pink-600">{orderPlaced.id}</span>
          </p>
        </div>

        {/* Order Details */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-pink-100 p-6 md:p-8 mb-8">
          <h2 className="text-2xl font-display font-semibold text-pink-800 mb-6">
            Order Details
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="text-lg font-semibold text-pink-800 mb-3">Order Information</h3>
              <div className="space-y-2 text-slate-600">
                <p><span className="font-medium">Order ID:</span> {orderPlaced.id}</p>
                <p><span className="font-medium">Order Date:</span> {formatDate(orderPlaced.date)}</p>
                <p><span className="font-medium">Status:</span> 
                  <span className="ml-2 inline-block bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm font-medium">
                    {orderPlaced.status}
                  </span>
                </p>
                <p><span className="font-medium">Total Amount:</span> {formatPrice(orderPlaced.total)}</p>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-pink-800 mb-3">Shipping Information</h3>
              <div className="space-y-2 text-slate-600">
                <p>{checkoutData.firstName} {checkoutData.lastName}</p>
                <p>{checkoutData.address}</p>
                <p>{checkoutData.city}, {checkoutData.state} {checkoutData.pincode}</p>
                <p>Phone: {checkoutData.phone}</p>
                <p>Email: {checkoutData.email}</p>
              </div>
            </div>
          </div>

          {/* Order Items */}
          <div>
            <h3 className="text-lg font-semibold text-pink-800 mb-3">Order Items</h3>
            <div className="space-y-3">
              {orderPlaced.items.map((item) => (
                <div key={item.id} className="flex items-center justify-between bg-pink-50 rounded-xl p-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-16 h-16 bg-gradient-to-br from-pink-100 to-coral-100 rounded-lg flex items-center justify-center">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-12 h-12 object-contain"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium text-pink-800">{item.name}</h4>
                      <p className="text-sm text-slate-600">Qty: {item.quantity}</p>
                      <p className="text-sm text-slate-600">Category: {item.category}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-pink-600">
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

        {/* What's Next */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-pink-100 p-6 md:p-8 mb-8">
          <h2 className="text-2xl font-display font-semibold text-pink-800 mb-6">
            What's Next?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-pink-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-pink-800 mb-2">Order Confirmed</h3>
              <p className="text-slate-600 text-sm">
                Your order has been received and is being processed
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-coral-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-coral-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-pink-800 mb-2">Processing</h3>
              <p className="text-slate-600 text-sm">
                We'll start preparing your order for shipment
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-sage-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-pink-800 mb-2">Shipping</h3>
              <p className="text-slate-600 text-sm">
                Your order will be shipped within 2-3 business days
              </p>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-pink-100 p-6 md:p-8 mb-8">
          <h2 className="text-2xl font-display font-semibold text-pink-800 mb-6">
            Important Information
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-slate-800">Email Confirmation</h4>
                  <p className="text-sm text-slate-600">A confirmation email has been sent to {checkoutData.email}</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-slate-800">Tracking Number</h4>
                  <p className="text-sm text-slate-600">You'll receive a tracking number once your order ships</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-slate-800">Delivery Time</h4>
                  <p className="text-sm text-slate-600">Standard delivery: 3-5 business days</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-slate-800">Returns</h4>
                  <p className="text-sm text-slate-600">30-day money-back guarantee on all products</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="text-center space-y-4">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/products"
              className="w-full sm:w-auto bg-gradient-to-r from-pink-500 to-coral-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              Continue Shopping
            </Link>
            
            <Link
              to="/"
              className="w-full sm:w-auto bg-white text-pink-600 px-8 py-4 rounded-2xl font-semibold text-lg border-2 border-pink-200 hover:border-pink-300 hover:bg-pink-50 transition-all duration-300"
            >
              Back to Home
            </Link>
          </div>
          
          <p className="text-sm text-slate-500">
            Need help? <Link to="/contact" className="text-pink-600 hover:text-pink-700 underline">Contact our support team</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation; 