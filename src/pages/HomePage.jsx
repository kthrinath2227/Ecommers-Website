import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Smartphone, Home, Gift, Wrench, ArrowRight, Star, Zap, Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from '@/components/ui/use-toast';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Carousel from '@/components/Carousel';
import ProductCard from '@/components/ProductCard';

const HomePage = () => {
  const [formData, setFormData] = useState({
    name: '',
    numer: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.number || !formData.subject || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields to send a message.",
        variant: "destructive"
      });
      return;
    }

    console.log("Contact form submitted:", formData);

    toast({
      title: "Message Sent! 🚀",
      description: "Thanks for reaching out! We'll get back to you soon.",
    });

    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const categories = [
    {
      id: 'electronics',
      name: 'Electronics',
      description: 'Mobile,Laptops, Electronic Accessories',
      icon: Smartphone,
      image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=500&h=300&fit=crop',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'appliances',
      name: 'Home Appliances',
      description: 'Kitchen and home essentials',
      icon: Home,
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=300&fit=crop',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      id: 'gifts',
      name: 'Gift Articles',
      description: 'Perfect gifts for every occasion',
      icon: Gift,
      image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=500&h=300&fit=crop',
      gradient: 'from-pink-500 to-rose-500'
    }
  ];

  const features = [
    {
      icon: Zap,
      title: 'Fast Delivery',
      description: 'Get your orders delivered within 24 hours'
    },
    {
      icon: Star,
      title: 'Quality Products',
      description: 'Only the best brands and highest quality items'
    },
    {
      icon: Wrench,
      title: 'Repair Services',
      description: 'Professional repair services for all your appliances'
    }
  ];

  const carouselSlides = [
    {
      image: 'https://res.cloudinary.com/dx3m8gmpa/image/upload/v1754368780/stove_za7hjr.jpg',
      title: 'Modern Gas Stoves',
      description: 'Cook like a pro with our high-efficiency gas stoves.',
      link: '/products/appliances'
    },
    {
      image: 'https://res.cloudinary.com/dx3m8gmpa/image/upload/v1754368231/sillent-fan_zbpglu.jpg',
      title: 'Cool Down in Style',
      description: 'Beat the heat with our powerful and silent fans.',
      link: '/products/appliances'
    },
    {
      image: 'https://res.cloudinary.com/dx3m8gmpa/image/upload/v1754368885/rice_coocker_pbmmwh.jpg',
      title: 'Perfect Rice, Every Time',
      description: 'Discover our range of automatic rice cookers for fluffy results.',
      link: '/products/appliances'
    }
  ];

  const featuredProducts = [
      {
        id: 1,
        name: 'High-Speed Juicer',
        description: 'Extract maximum nutrients with this powerful centrifugal juicer.',
        price: 1500,
        originalPrice: 2000,
        discount: 5,
        rating: 5,
        reviews: 150,
        image: 'https://res.cloudinary.com/dx3m8gmpa/image/upload/v1754369832/juicer_wrjgkn.jpg'
      },
      {
        id: 7,
        name: 'Professional Blender',
        description: 'Create smoothies, soups, and more with this versatile blender.',
        price: 129,
        rating: 4,
        reviews: 210,
        image: 'https://res.cloudinary.com/dx3m8gmpa/image/upload/v1754369832/blender-1_k0owa0.jpg'
      },
      {
        id: 11,
        name: 'Gourmet Stand Mixer',
        description: 'The ultimate kitchen tool for baking and dough making.',
        price: 349,
        originalPrice: 399,
        discount: 12,
        rating: 5,
        reviews: 305,
        image: 'https://res.cloudinary.com/dx3m8gmpa/image/upload/v1754369832/stand_deierr.jpg'
      },
      {
        id: 2,
        name: 'Digital Air Fryer',
        description: 'Enjoy crispy, delicious food with less oil. Perfect for healthy meals.',
        price: 99,
        rating: 5,
        reviews: 189,
        image: 'https://res.cloudinary.com/dx3m8gmpa/image/upload/v1754369832/airfyer_io5org.jpg'
      }
  ];


  return (
    <>
      <Helmet>
        <title>Vijaya Sri Enterprises - Electronics & Home Appliances</title>
        <meta name="description" content="Discover the latest electronics, home appliances, and gift articles. Professional repair services available. Shop with confidence at Vijaya Sri Enterprises." />
      </Helmet>
      
      <Header />

      <div className="flex-grow">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-20 pb-10">
          <div className="container mx-auto px-4 relative z-10">
            <Carousel slides={carouselSlides} />
          </div>
        </section>

        {/* Featured Products Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
                Featured Products
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Check out our handpicked selection of top-rated products
              </p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {featuredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  viewport={{ once: true }}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-20 bg-gradient-to-r from-purple-900/10 to-blue-900/10">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
                Shop by Category
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Explore our wide range of products across different categories
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {categories.map((category, index) => {
                const Icon = category.icon;
                
                return (
                  <motion.div
                    key={category.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <Link to={`/products/${category.id}`}>
                      <div className="category-card group">
                        <div className="relative overflow-hidden rounded-xl mb-6">
                          <img
                            src={category.image}
                            alt={category.name}
                            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className={`absolute inset-0 bg-gradient-to-t ${category.gradient} opacity-60`}></div>
                          <div className="absolute top-4 left-4">
                            <div className="p-3 bg-white/20 backdrop-blur-sm rounded-lg">
                              <Icon className="h-8 w-8 text-white" />
                            </div>
                          </div>
                        </div>
                        
                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                          {category.name}
                        </h3>
                        <p className="text-gray-300 mb-4">
                          {category.description}
                        </p>
                        
                        <div className="flex items-center text-blue-400 group-hover:text-blue-300 transition-colors">
                          <span className="font-medium">Explore Products</span>
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
                Why Choose Us?
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="glass-effect rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 pulse-glow">
                      <Icon className="h-10 w-10 text-blue-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300">
                      {feature.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-effect rounded-2xl p-12 text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
                Need Appliance Repair?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Our expert technicians are ready to fix your home appliances quickly and efficiently
              </p>
              <Link to="/repair">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-8 py-3 text-lg"
                >
                  <Wrench className="mr-2 h-5 w-5" />
                  Book Repair Service
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
                Get In Touch
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Have questions? We'd love to hear from you!
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="glass-effect rounded-xl p-8 h-full">
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                    <Mail className="mr-3 h-6 w-6 text-blue-400" />
                    Send us a Message
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="home-name" className="text-white">Full Name</Label>
                        <Input id="home-name" name="name" value={formData.name} onChange={handleInputChange} placeholder="Your Name" className="glass-effect border-white/20 text-white placeholder:text-gray-400" />
                      </div>
                      <div>
                        <Label htmlFor="home-email" className="text-white">Number</Label>
                        <Input id="home-email" name="number" type="tel" value={formData.number} onChange={handleInputChange} placeholder="Your Phone Number" className="glass-effect border-white/20 text-white placeholder:text-gray-400" />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="home-subject" className="text-white">Subject</Label>
                      <Input id="home-subject" name="subject" value={formData.subject} onChange={handleInputChange} placeholder="How can we help?" className="glass-effect border-white/20 text-white placeholder:text-gray-400" />
                    </div>
                    <div>
                      <Label htmlFor="home-message" className="text-white">Message</Label>
                      <Textarea id="home-message" name="message" value={formData.message} onChange={handleInputChange} placeholder="Your message..." className="glass-effect border-white/20 text-white placeholder:text-gray-400" rows={5} />
                    </div>
                    <Button type="submit" className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white" size="lg">
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </Button>
                  </form>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="glass-effect rounded-xl p-8 h-full">
                  <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg"><Phone className="h-6 w-6 text-white" /></div>
                      <div>
                        <p className="text-white font-medium">Call Us</p>
                        <p className="text-gray-300">+91 8333074097</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg"><Mail className="h-6 w-6 text-white" /></div>
                      <div>
                        <p className="text-white font-medium">Email Us</p>
                        <p className="text-gray-300">contact@vijayasri.com</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg"><MapPin className="h-6 w-6 text-white" /></div>
                      <div>
                        <p className="text-white font-medium">Visit Us</p>
                        <p className="text-gray-300">Near Old Bus Stand, Main Bazar, Elluru</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8">
                    <iframe
    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d30570.305701838683!2d81.07662406050706!3d16.712465186024467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1754386222542!5m2!1sen!2sin"
    width="100%"
    height="300"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    title="VijayaSri Enterprises Map"
  ></iframe>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default HomePage;