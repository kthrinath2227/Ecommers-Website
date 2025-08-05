import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import ScrollToTop from '@/components/ScrollToTop';
import HomePage from '@/pages/HomePage.jsx';
import ProductsPage from '@/pages/ProductsPage.jsx';
import CartPage from '@/pages/CartPage.jsx';
import RepairPage from '@/pages/RepairPage.jsx';
import ContactPage from '@/pages/ContactPage.jsx';
import { CartProvider } from '@/contexts/CartContext.jsx';
import FloatingWhatsAppButton from '@/components/FloatingWhatsAppButton.jsx';

function App() {
  return (
    <CartProvider>
      <ScrollToTop /> {/* ✅ Scroll reset on route change */}

      <div className="flex flex-col min-h-screen">
        <Helmet>
          <title>VijayaSri Enterprises - Your Ultimate Electronics & Appliances Store</title>
          <meta name="description" content="Discover the latest electronics, home appliances, and gift articles. Professional repair services available. Shop with confidence at VijayaSri Enterprises." />
        </Helmet>

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products/:category" element={<ProductsPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/repair" element={<RepairPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
          <FloatingWhatsAppButton /> {/* ✅ Floating WhatsApp button */}
        </main>
      </div>
    </CartProvider>
  );
}

export default App;
