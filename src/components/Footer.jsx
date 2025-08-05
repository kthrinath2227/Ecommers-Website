import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Facebook, Twitter, Instagram } from 'lucide-react';
const Footer = () => {
  const socialLinks = [{
    icon: Facebook,
    href: '#',
    name: 'Facebook'
  }, {
    icon: Twitter,
    href: '#',
    name: 'Twitter'
  }, {
    icon: Instagram,
    href: '#',
    name: 'Instagram'
  }];
  const footerLinks = [{
    title: 'Shop',
    links: [{
      label: 'Electronics',
      href: '/products/electronics'
    }, {
      label: 'Home Appliances',
      href: '/products/appliances'
    }, {
      label: 'Gift Articles',
      href: '/products/gifts'
    }]
  }, {
    title: 'Services',
    links: [{
      label: 'Repair Services',
      href: '/repair'
    }, {
      label: 'Track Order',
      href: '#'
    }, {
      label: 'Support',
      href: '/contact'
    }]
  }, {
    title: 'Company',
    links: [{
      label: 'About Us',
      href: '#'
    }, {
      label: 'Careers',
      href: '#'
    }, {
      label: 'Contact Us',
      href: '/contact'
    }]
  }];
  return <footer className="glass-effect border-t border-white/20 mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
                {/* <Zap className="h-6 w-6 text-white" /> */}
                <img src="https://res.cloudinary.com/dx3m8gmpa/image/upload/v1754312702/logo_copy_png_pexk0v.png" alt="Vijaya Sri Enterprises Logo" className="h-8 w-8" />
              </div>
              <span className="text-2xl font-bold gradient-text">Vijaya Sri Enterprises</span>
            </Link>
            <p className="text-gray-400">Your one-stop shop for everything tech and home.</p>
          </div>
          
          {footerLinks.map(section => <div key={section.title}>
              <p className="font-semibold text-white mb-4">{section.title}</p>
              <ul className="space-y-2">
                {section.links.map(link => <li key={link.label}>
                    <Link to={link.href} className="text-gray-400 hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>)}
              </ul>
            </div>)}
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} TheDevsTechnologies. All Rights Reserved.
          </p>
          <p className="text-gray-400 text-sm">
            Made with ❤️ By TheDevsTechnologies
          </p>

          <div className="flex space-x-4 mt-4 md:mt-0">
            {socialLinks.map(social => <a key={social.name} href={social.href} className="text-gray-400 hover:text-white transition-colors">
                <social.icon className="h-5 w-5" />
                <span className="sr-only">{social.name}</span>
              </a>)}
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;