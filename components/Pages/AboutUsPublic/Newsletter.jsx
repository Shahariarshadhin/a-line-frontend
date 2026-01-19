'use client';
import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log('Email submitted:', email);
    setIsSuccess(true);
    setEmail('');
    
    setTimeout(() => {
      setIsSuccess(false);
      setIsSubmitting(false);
    }, 3000);
  };

  return (
    <section className="bg-gray-900 py-16 px-6 md:px-12 lg:px-24 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-red-500 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
        <div className="transform transition-all duration-500 hover:scale-105">
          <h2 className="text-white text-3xl md:text-4xl font-bold mb-2 animate-fade-in">
            Sign Up Now for our Discount
          </h2>
          <p className="text-white text-xl">Product</p>
        </div>
        <div className="w-full md:w-auto">
          <form onSubmit={handleSubmit} className="flex gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email@domain.com"
              className="px-4 py-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/50 w-full md:w-64 transition-all duration-300"
              required
              disabled={isSubmitting}
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className={`px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-orange-500/50 active:scale-95 ${
                isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                </span>
              ) : isSuccess ? (
                <span className="flex items-center gap-2">
                  ✓ Done
                </span>
              ) : (
                'Subscribe'
              )}
            </button>
          </form>
          
          {isSuccess && (
            <p className="text-green-400 text-sm mt-2 animate-fade-in">
              ✓ Successfully subscribed!
            </p>
          )}
        </div>
      </div>
    </section>
  );
}