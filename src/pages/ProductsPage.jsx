
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { ArrowLeft, Filter, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Header from '@/components/Header';
import ProductCard from '@/components/ProductCard';

const ProductsPage = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState('all');

  const categoryData = {
    electronics: {
      name: 'Electronics',
      description: 'Latest smartphones, laptops, and gadgets'
    },
    appliances: {
      name: 'Home Appliances',
      description: 'Kitchen and home essentials'
    },
    gifts: {
      name: 'Gift Articles',
      description: 'Perfect gifts for every occasion'
    }
  };

  const mockProducts = {
    electronics: [
      {
        id: 1,
        name: 'Mobile Chargers',
        description: 'Fast charging mobile chargers for all devices',
        price: 999,
        originalPrice: 1099,
        discount: 9,
        rating: 5,
        reviews: 234,
        image: 'https://res.cloudinary.com/dx3m8gmpa/image/upload/v1754377782/charger_fq4eqh.jpg'
      },
      {
        id: 2,
        name: 'Type C Cable',
        description: 'Powerful lightning-fast charging cable',
        price: 1199,
        rating: 5,
        reviews: 189,
        image: 'https://res.cloudinary.com/dx3m8gmpa/image/upload/v1754377781/cabels_kvz8cs.jpg'
      },
      {
        id: 3,
        name: 'Wireless Charger',
        description: 'Premium wireless charger for all Qi-enabled devices',
        price: 899,
        originalPrice: 999,
        discount: 10,
        rating: 4,
        reviews: 156,
        image: 'https://res.cloudinary.com/dx3m8gmpa/image/upload/v1754377781/wireless_charger_wzov5o.jpg'
      },
      {
        id: 4,
        name: 'USB Charger',
        description: 'Fast charging USB charger for all devices',
        price: 1099,
        rating: 5,
        reviews: 98,
        image: 'https://res.cloudinary.com/dx3m8gmpa/image/upload/v1754377782/usb_charger_aanaje.jpg'
      },
      {
        id: 5,
        name: 'AirPods Pro 2',
        description: 'Wireless earbuds with active noise cancellation',
        price: 249,
        rating: 4,
        reviews: 312,
        image: 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=400&h=300&fit=crop'
      },
      {
        id: 6,
        name: 'Power Cable',
        description: 'High-speed power cable for Multiple Devices',
        price: 999,
        rating: 4,
        reviews: 87,
        image: 'https://res.cloudinary.com/dx3m8gmpa/image/upload/v1754377782/power_cables_zlatvc.jpg'
      }
    ],
    appliances: [
      {
        id: 7,
        name: 'KitchenAid Stand Mixer',
        description: 'Professional-grade stand mixer for all your baking needs',
        price: 379,
        originalPrice: 429,
        discount: 12,
        rating: 5,
        reviews: 445,
        image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop'
      },
      {
        id: 8,
        name: 'Electronic Kettle',
        description: 'Fast boiling electric kettle with auto shut-off',
        price: 749,
        rating: 5,
        reviews: 234,
        image: 'https://res.cloudinary.com/dx3m8gmpa/image/upload/v1754368779/kittek_d2lrt6.jpg'
      },
      {
        id: 9,
        name: 'Utensils Stand',
        description: 'Stylish and functional utensils stand for your kitchen',
        price: 99,
        originalPrice: 129,
        discount: 23,
        rating: 4,
        reviews: 1234,
        image: 'https://res.cloudinary.com/dx3m8gmpa/image/upload/v1754369832/stand_deierr.jpg'
      },
      {
        id: 10,
        name: 'Kitchen Dishes',
        description: 'Professional kitchen dishes for culinary enthusiasts',
        price: 699,
        rating: 5,
        reviews: 167,
        image: 'https://res.cloudinary.com/dx3m8gmpa/image/upload/v1754378467/Kitchen_Itams_hexckz.jpg'
      },
      {
        id: 11,
        name: 'Stainless Steel Dishes',
        description: 'Durable and stylish stainless steel dishes for everyday use',
        price: 2299,
        rating: 4,
        reviews: 89,
        image: 'https://res.cloudinary.com/dx3m8gmpa/image/upload/v1754378467/utincilits_fpemg9.jpg'
      },
      {
        id: 12,
        name: 'Knife Set',
        description: 'Professional knife set for culinary enthusiasts',
        price: 899,
        rating: 4,
        reviews: 156,
        image: 'https://res.cloudinary.com/dx3m8gmpa/image/upload/v1754378467/knife_stand_bnsvki.jpg'
      },
      {
        id: 13,
        name: 'Dishes Set',
        description: 'Professional dishes set for culinary enthusiasts',
        price: 899,
        rating: 4,
        reviews: 156,
        image: 'https://res.cloudinary.com/dx3m8gmpa/image/upload/v1754378466/Hot_boxes_ygvhl6.jpg'
      },
      {
        id: 14,
        name: 'Electric Rice Cooker',
        description: 'Professional rice cooker for culinary enthusiasts',
        price: 899,
        rating: 4,
        reviews: 156,
        image: 'https://res.cloudinary.com/dx3m8gmpa/image/upload/v1754378467/electric-rice-coocker_eqpd6z.jpg'
      },
      {
        id: 14,
        name: 'Mixer',
        description: 'Professional mixer for culinary enthusiasts',
        price: 899,
        rating: 4,
        reviews: 156,
        image: 'https://res.cloudinary.com/dx3m8gmpa/image/upload/v1754378467/mixer-5_usqxrs.jpg'
      }
    ],
    gifts: [
      {
        id: 13,
        name: 'Luxury Watch Set',
        description: 'Elegant timepiece perfect for special occasions',
        price: 299,
        originalPrice: 399,
        discount: 25,
        rating: 5,
        reviews: 78,
        image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop'
      },
      {
        id: 14,
        name: 'Wall Clock',
        description: 'Elegant wall clock with a modern design',
        price: 49,
        rating: 5,
        reviews: 234,
        image: 'https://res.cloudinary.com/dx3m8gmpa/image/upload/v1754383970/wall-clock_xkc7tw.jpg'
      },
      {
        id: 15,
        name: 'Men Watch',
        description: 'Luxury men watch with elegant design',
        price: 79,
        rating: 4,
        reviews: 145,
        image: 'https://res.cloudinary.com/dx3m8gmpa/image/upload/v1754383970/wach_e8p4ej.jpg'
      },
      {
        id: 16,
        name: 'Ganesh idols',
        description: 'Beautifully crafted Ganesh idols for home decor',
        price: 39,
        rating: 4,
        reviews: 67,
        image: 'https://res.cloudinary.com/dx3m8gmpa/image/upload/v1754383970/idols_de8r8m.jpg'
      },
      {
        id: 17,
        name: 'Brass Balaji Idol',
        description: 'Luxurious brass Balaji idol for home decor',
        price: 89,
        rating: 5,
        reviews: 123,
        image: 'https://res.cloudinary.com/dx3m8gmpa/image/upload/v1754383969/idol-1_hulgrc.jpg'
      },
      {
        id: 18,
        name: 'Puja Items',
        description: 'Essential items for religious rituals and ceremonies',
        price: 129,
        rating: 5,
        reviews: 89,
        image: 'https://res.cloudinary.com/dx3m8gmpa/image/upload/v1754384280/pujaitems_auordz.jpg'
      }
    ]
  };

  useEffect(() => {
    const categoryProducts = mockProducts[category] || [];
    setProducts(categoryProducts);
    setFilteredProducts(categoryProducts);
  }, [category]);

  useEffect(() => {
    let filtered = products;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by price range
    if (priceRange !== 'all') {
      const [min, max] = priceRange.split('-').map(Number);
      filtered = filtered.filter(product => {
        if (max) {
          return product.price >= min && product.price <= max;
        } else {
          return product.price >= min;
        }
      });
    }

    setFilteredProducts(filtered);
  }, [searchTerm, priceRange, products]);

  const currentCategory = categoryData[category];

  if (!currentCategory) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Category not found</h1>
          <Link to="/">
            <Button>Go Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>{currentCategory.name} - VijayaSri Enterprises</title>
        <meta name="description" content={`Shop the best ${currentCategory.name.toLowerCase()} at VijayaSri Enterprises. ${currentCategory.description}`} />
      </Helmet>
      
      <Header />

      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center space-x-2 mb-8"
        >
          <Link to="/" className="text-blue-400 hover:text-blue-300 transition-colors">
            <ArrowLeft className="h-5 w-5" />
          </Link>
          <span className="text-gray-400">/</span>
          <span className="text-white font-medium">{currentCategory.name}</span>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            {currentCategory.name}
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {currentCategory.description}
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-effect rounded-lg p-6 mb-8"
        >
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-gray-400" />
              <span className="text-white font-medium">Filters:</span>
            </div>
            
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 glass-effect border-white/20 text-white placeholder:text-gray-400"
                />
              </div>
            </div>

            <select
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="glass-effect border border-white/20 rounded-md px-3 py-2 text-white bg-transparent"
            >
              <option value="all" className="bg-gray-800">All Prices</option>
              <option value="0-100" className="bg-gray-800">0 - 100</option>
              <option value="100-500" className="bg-gray-800">100 - 500</option>
              <option value="500-1000" className="bg-gray-800">500 - 1000</option>
              <option value="1000" className="bg-gray-800">1000+</option>
            </select>
          </div>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {filteredProducts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="glass-effect rounded-lg p-8 max-w-md mx-auto">
                <h3 className="text-xl font-bold text-white mb-2">No products found</h3>
                <p className="text-gray-300 mb-4">
                  Try adjusting your search or filter criteria
                </p>
                <Button
                  onClick={() => {
                    setSearchTerm('');
                    setPriceRange('all');
                  }}
                  variant="outline"
                  className="glass-effect border-white/20 hover:bg-white/20 text-white"
                >
                  Clear Filters
                </Button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default ProductsPage;
