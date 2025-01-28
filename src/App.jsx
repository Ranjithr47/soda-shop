import React, { useState, useEffect  } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Twitter,
  Factory,
  Truck,
  Award,
  Users,
  Menu,
  X,
} from 'lucide-react';

function App() {
  
  // whatsapp

    const [formData, setFormData] = useState({
      name: '',
      number: '',
      message: ''
    });
  
    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      // Construct the WhatsApp message
      const { name, number, message } = formData;
      const whatsappMessage = `Name: ${name}\nPhone Number: ${number}\nMessage: ${message}`;
      
      // URL encode the message for WhatsApp
      const encodedMessage = encodeURIComponent(whatsappMessage);
  
      // WhatsApp URL with pre-filled message
      const whatsappURL = `https://wa.me/919942390347?text=${encodedMessage}`;
  
      // Open the WhatsApp chat in a new tab or window
      window.open(whatsappURL, '_blank');
      
      // Optionally, reset the form after submission
      setFormData({ name: '', number: '', message: '' });
    };
  








  // whatsapp

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("navbar");
      if (window.scrollY > 10) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen bg-white p-4">
      {/* Header */}
      <header 
        id="navbar" 
        className="fixed w-[91%] left-[50%] transform -translate-x-[50%] bg-white shadow-md z-50 transition-opacity duration-300"
      >

        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Factory className="h-8 w-8 text-[#cc73f8]" />
              <span className="text-2xl font-bold text-[#cc73f8]">Aditi Sodas</span>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={toggleMenu}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-600 hover:text-[#cc73f8]">Home</a>
              <a href="#about" className="text-gray-600 hover:text-[#cc73f8]">About</a>
              <a href="#products" className="text-gray-600 hover:text-[#cc73f8]">Products</a>
              <a href="#contact" className="text-gray-600 hover:text-[#cc73f8]">Contact</a>
            </nav>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4">
              <div className="flex flex-col space-y-4">
                <a href="#home" className="text-gray-600 hover:text-[#cc73f8]">Home</a>
                <a href="#about" className="text-gray-600 hover:text-[#cc73f8]">About</a>
                <a href="#products" className="text-gray-600 hover:text-[#cc73f8]">Products</a>
                <a href="#contact" className="text-gray-600 hover:text-[#cc73f8]">Contact</a>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-20 bg-gradient-to-b from-green-50 to-white">
        <div className="container mx-auto px-4 py-20">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-6xl font-bold text-[#4a4a4a] mb-6">
                Aditi<br />Goli Soda
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Bringing the nostalgic fizz of traditional Indian beverages to modern times
              </p>
              <a href="#contact" className="bg-[#cc73f8] text-white px-8 py-3 rounded-full hover:bg-[#4a4a4a] transition duration-300">
                Get in Touch
              </a>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://m.media-amazon.com/images/I/41Dd4YeQrFL.jpg"
                alt="Traditional Goli Soda Bottles"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#4a4a4a] mb-12">
            Our Heritage
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-gray-600 leading-relaxed">
                Since 2000, we've been crafting authentic Goli Soda using traditional methods
                passed down through generations. Our commitment to quality and authenticity
                has made us one of India's most trusted beverage suppliers.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <h3 className="text-2xl font-bold text-[#cc73f8]">25+</h3>
                  <p className="text-gray-600">Years of Excellence</p>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <h3 className="text-2xl font-bold text-[#cc73f8]">1000+</h3>
                  <p className="text-gray-600">Happy Retailers</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Factory className="w-8 h-8 text-[#cc73f8] flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-gray-800 mb-2">Traditional Manufacturing</h3>
                  <p className="text-gray-600">Using time-tested methods and equipment for authentic taste</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Award className="w-8 h-8 text-[#cc73f8] flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-gray-800 mb-2">Quality Assurance</h3>
                  <p className="text-gray-600">Strict quality control at every production stage</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Truck className="w-8 h-8 text-[#cc73f8] flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-gray-800 mb-2">Wide Distribution</h3>
                  <p className="text-gray-600">Serving retailers across multiple states</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#4a4a4a] mb-12">
            Our Products
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                name: "Strawberry Soda",
                image: "https://images.unsplash.com/photo-1527661591475-527312dd65f5?auto=format&fit=crop&q=80",
                description: "Sweet and refreshing strawberry flavored goli soda"
              },
              {
                name: "Orange Soda",
                image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&q=80",
                description: "Tangy orange flavored traditional goli soda"
              },
              {
                name: "Panneer Soda",
                image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80",
                description: "Classic rose flavored refreshing goli soda"
              },
              {
                name: "Blueberry Soda",
                image: "https://images.unsplash.com/photo-1560508180-03f285f67ded?auto=format&fit=crop&q=80",
                description: "Sweet and tangy blueberry flavored goli soda"
              }
            ].map((product, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h3>
                  <p className="text-gray-600">{product.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#4a4a4a] mb-12">
            What Our Clients Say
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: "Vijay K",
                role: "Owner",
                text: "We've been sourcing our Goli Soda from them for over 25 years. The quality and service are unmatched."
              },
              {
                name: "Dharani R",
                role: "Wholesale Distributor",
                text: "Their traditional manufacturing process ensures the authentic taste that our customers love."
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-green-50 p-6 rounded-lg">
                <Users className="w-8 h-8 text-[#cc73f8] mb-4" />
                <p className="text-gray-600 italic mb-4">{testimonial.text}</p>
                <div>
                  <p className="font-bold text-gray-800">{testimonial.name}</p>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#4a4a4a] mb-12">
            Get in Touch
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
            <form className="space-y-6" onSubmit={handleSubmit}>
      <div>
        <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-green-500"
        />
      </div>
      <div>
        <label className="block text-gray-700 mb-2" htmlFor="number">Phone Number</label>
        <input
          type="text"
          id="number"
          name="number"
          value={formData.number}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-green-500"
        />
      </div>
      <div>
        <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-green-500"
        ></textarea>
      </div>
      <button
        type="submit"
        className="bg-[#cc73f8] text-white px-6 py-2 rounded-lg hover:bg-[#4a4a4a] transition duration-300"
      >
        Send Message
      </button>
    </form>
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-[#cc73f8] flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">Address</h3>
                  <p className="text-gray-600">Kolappalur, Near JS Mahal, Gobi, Erode, Tamil Nadu, India</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-[#cc73f8] flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">Phone</h3>
                  <p className="text-gray-600">+91 99423 90347</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-[#cc73f8] flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">Email</h3>
                  <p className="text-gray-600">dharaniravi077@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#4a4a4a] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Factory className="h-8 w-8" />
                <span className="text-2xl font-bold">Aditi Sodas</span>
              </div>
              <p className="text-green-100">
                Bringing authentic Indian beverages to your doorstep since 2000.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#about" className="text-green-100 hover:text-white">About Us</a></li>
                <li><a href="#products" className="text-green-100 hover:text-white">Products</a></li>
                <li><a href="#contact" className="text-green-100 hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <a href="mailto:dharaniravi077@gmail.com" className="text-green-100 hover:text-white">
                  <Mail className="w-6 h-6 text-[#cc73f8] flex-shrink-0" />
                </a>
                <a href="https://www.instagram.com/aditi_golisoodaa?igsh=OGlsOGV1bjZwdG1y" target='_blank' className="text-green-100 hover:text-white">
                  <Instagram className="w-6 h-6 text-[#cc73f8] flex-shrink-0" />
                </a>

              </div>
            </div>
          </div>
          <div className="border-t border-green-700 mt-8 pt-8 text-center text-green-100">
            <p>&copy; 2025 Aditi Sodas. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;