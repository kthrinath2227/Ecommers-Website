import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Home, Wrench, Zap, Mail, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';

const Header = () => {
  const location = useLocation();
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/repair', label: 'Repair', icon: Wrench },
    { path: '/contact', label: 'Contact', icon: Mail },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="glass-effect sticky top-0 z-50 border-b border-white/20"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg"
            >
              {/* <Zap className="h-6 w-6 text-white" /> */}
              <img src="https://res.cloudinary.com/dx3m8gmpa/image/upload/v1754312702/logo_copy_png_pexk0v.png" alt="Logo" className="h-8 w-8 rounded-full" />
            </motion.div>
            {/* <span className="text-2xl font-bold gradient-text-1">Vijaya Sri Enterprises</span> */}
            <span className="text-lg sm:text-xl md:text-2xl font-bold gradient-text-1">
  Vijaya Sri Enterprises
</span>


          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link key={item.path} to={item.path}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
                      isActive ? 'bg-white/20 text-white' : 'text-gray-300 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{item.label}</span>
                  </motion.div>
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center space-x-4">
            <Link to="/cart">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative"
              >
                <Button variant="outline" size="icon" className="glass-effect border-white/20 hover:bg-white/20">
                  <ShoppingCart className="h-5 w-5" />
                </Button>
                {totalItems > 0 && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="cart-badge"
                  >
                    {totalItems}
                  </motion.div>
                )}
              </motion.div>
            </Link>

            <div className="md:hidden">
              <Button onClick={toggleMenu} variant="outline" size="icon" className="glass-effect border-white/20 hover:bg-white/20">
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={menuVariants}
            className="md:hidden glass-effect border-t border-white/20"
          >
            <nav className="flex flex-col items-center space-y-4 p-4">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.div key={item.path} variants={itemVariants}>
                    <Link to={item.path} onClick={() => setIsMenuOpen(false)} className="flex items-center space-x-2 text-lg text-white hover:text-blue-300">
                      <Icon className="h-5 w-5" />
                      <span>{item.label}</span>
                    </Link>
                  </motion.div>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;