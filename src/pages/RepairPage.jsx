
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { ArrowLeft, Wrench, Phone, Mail, MapPin, Calendar, Clock, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from '@/components/ui/use-toast';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
 
const RepairPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    appliance: '',
    brand: '',
    model: '',
    issue: '',
    preferredDate: '',
    preferredTime: ''
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
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.phone || !formData.appliance || !formData.issue) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    // Save to localStorage
    const repairRequests = JSON.parse(localStorage.getItem('VijayaSri Enterprises-repairs') || '[]');
    const newRequest = {
      id: Date.now(),
      ...formData,
      status: 'pending',
      createdAt: new Date().toISOString()
    };
    
    repairRequests.push(newRequest);
    localStorage.setItem('VijayaSri Enterprises-repairs', JSON.stringify(repairRequests));

    toast({
      title: "Repair Request Submitted! 🔧",
      description: "We'll contact you within 24 hours to schedule your repair",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      address: '',
      appliance: '',
      brand: '',
      model: '',
      issue: '',
      preferredDate: '',
      preferredTime: ''
    });
  };

  const services = [
    {
      icon: Wrench,
      title: 'Kitchen Appliances',
      description: 'Refrigerators, ovens, dishwashers, microwaves',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: CheckCircle,
      title: 'Laundry Appliances',
      description: 'Washing machines, dryers, washer-dryer combos',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: Clock,
      title: 'Small Appliances',
      description: 'Coffee makers, blenders, toasters, air fryers',
      gradient: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Appliance Repair Services - VijayaSri Enterprises</title>
        <meta name="description" content="Professional appliance repair services for all your home appliances. Quick, reliable, and affordable repairs by certified technicians." />
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
          <span className="text-white font-medium">Repair Services</span>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Appliance Repair Services
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Expert technicians ready to fix your home appliances quickly and efficiently
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-effect rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Repair Request Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="glass-effect rounded-xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Wrench className="mr-3 h-6 w-6 text-blue-400" />
                Request Repair Service
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-white">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      className="glass-effect border-white/20 text-white placeholder:text-gray-400"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-white">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email"
                      className="glass-effect border-white/20 text-white placeholder:text-gray-400"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone" className="text-white">Phone Number *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Enter your phone number"
                      className="glass-effect border-white/20 text-white placeholder:text-gray-400"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="appliance" className="text-white">Appliance Type *</Label>
                    <select
                      id="appliance"
                      name="appliance"
                      value={formData.appliance}
                      onChange={handleInputChange}
                      className="glass-effect border border-white/20 rounded-md px-3 py-2 text-white bg-transparent w-full"
                      required
                    >
                      <option value="" className="bg-gray-800">Select appliance</option>
                      <option value="refrigerator" className="bg-gray-800">Refrigerator</option>
                      <option value="washing-machine" className="bg-gray-800">Washing Machine</option>
                      <option value="dryer" className="bg-gray-800">Dryer</option>
                      <option value="dishwasher" className="bg-gray-800">Dishwasher</option>
                      <option value="oven" className="bg-gray-800">Oven</option>
                      <option value="microwave" className="bg-gray-800">Microwave</option>
                      <option value="other" className="bg-gray-800">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="address" className="text-white">Service Address</Label>
                  <Input
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="Enter your address"
                    className="glass-effect border-white/20 text-white placeholder:text-gray-400"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="brand" className="text-white">Brand</Label>
                    <Input
                      id="brand"
                      name="brand"
                      value={formData.brand}
                      onChange={handleInputChange}
                      placeholder="e.g., Samsung, LG, Whirlpool"
                      className="glass-effect border-white/20 text-white placeholder:text-gray-400"
                    />
                  </div>
                  <div>
                    <Label htmlFor="model" className="text-white">Model Number</Label>
                    <Input
                      id="model"
                      name="model"
                      value={formData.model}
                      onChange={handleInputChange}
                      placeholder="Enter model number"
                      className="glass-effect border-white/20 text-white placeholder:text-gray-400"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="issue" className="text-white">Describe the Issue *</Label>
                  <Textarea
                    id="issue"
                    name="issue"
                    value={formData.issue}
                    onChange={handleInputChange}
                    placeholder="Please describe the problem with your appliance"
                    className="glass-effect border-white/20 text-white placeholder:text-gray-400"
                    rows={4}
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="preferredDate" className="text-white">Preferred Date</Label>
                    <Input
                      id="preferredDate"
                      name="preferredDate"
                      type="date"
                      value={formData.preferredDate}
                      onChange={handleInputChange}
                      className="glass-effect border-white/20 text-white"
                    />
                  </div>
                  <div>
                    <Label htmlFor="preferredTime" className="text-white">Preferred Time</Label>
                    <select
                      id="preferredTime"
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleInputChange}
                      className="glass-effect border border-white/20 rounded-md px-3 py-2 text-white bg-transparent w-full"
                    >
                      <option value="" className="bg-gray-800">Select time</option>
                      <option value="morning" className="bg-gray-800">Morning (8AM - 12PM)</option>
                      <option value="afternoon" className="bg-gray-800">Afternoon (12PM - 5PM)</option>
                      <option value="evening" className="bg-gray-800">Evening (5PM - 8PM)</option>
                    </select>
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white"
                  size="lg"
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Submit Repair Request
                </Button>
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="space-y-8"
          >
            <div className="glass-effect rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Phone</p>
                    <p className="text-gray-300">+91 8333074097</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Email</p>
                    <p className="text-gray-300">repair@VijayaSri Enterprises.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Service Area</p>
                    <p className="text-gray-300">Eluru and surrounding regions</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-effect rounded-xl p-8">
              <h3 className="text-xl font-bold text-white mb-4">Why Choose Our Repair Service?</h3>
              
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                  <span>Certified and experienced technicians</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                  <span>Same-day service available</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                  <span>90-day warranty on all repairs</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                  <span>Upfront pricing with no hidden fees</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                  <span>Genuine parts and quality service</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
    
  );
};

export default RepairPage;
