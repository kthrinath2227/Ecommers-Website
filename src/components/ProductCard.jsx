
import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/contexts/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="product-card group"
    >
      <div className="relative overflow-hidden rounded-lg mb-4">
        <img
          src={product.image}
          alt={product.name}
           className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-103"
        />
        {product.discount && (
          <Badge className="absolute top-2 left-2 bg-gradient-to-r from-red-500 to-pink-500">
            -{product.discount}%
          </Badge>
        )}
      </div>

      <div className="space-y-3">
        <h3 className="font-semibold text-lg text-white group-hover:text-blue-300 transition-colors">
          {product.name}
        </h3>
        
        <p className="text-gray-300 text-sm line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center space-x-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < product.rating
                    ? 'text-yellow-400 fill-current'
                    : 'text-gray-400'
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-400">({product.reviews})</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-white">
              {product.price}₹
            </span>
            {product.originalPrice && (
              <span className="text-sm text-gray-400 line-through">
                {product.originalPrice}₹
              </span>
            )}
          </div>
          
          <Button
            onClick={handleAddToCart}
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white"
            size="sm"
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
