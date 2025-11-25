import React from 'react';
import { Instagram, Facebook, Twitter, ArrowUp, Send, IceCream, MapPin, Phone } from 'lucide-react';

const FunkyFooter = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#1a1a2e] text-white pt-32 pb-10 overflow-hidden">
      
      {/* --- 1. THE MELTING DRIP (SVG Separator) --- */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-10">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[100px] md:h-[150px] fill-white">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="fill-[#1a1a2e]"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="fill-[#e83e8c]"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="fill-white"></path>
        </svg>
      </div>

      {/* --- 2. GIANT WATERMARK TEXT --- */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none">
        <h1 className="text-[15rem] font-black text-white/5 whitespace-nowrap tracking-tighter rotate-[-5deg]">
          YUMMY
        </h1>
      </div>

      {/* --- 3. FLOATING DECOR (Sprinkles) --- */}
      <div className="absolute top-40 right-10 w-4 h-16 bg-pink-500 rounded-full rotate-45 opacity-50 animate-bounce"></div>
      <div className="absolute bottom-20 left-10 w-4 h-4 bg-yellow-400 rounded-full opacity-50 animate-pulse"></div>
      <div className="absolute top-60 left-1/4 w-8 h-8 border-4 border-purple-500 rounded-full opacity-30 animate-spin-slow"></div>

      <div className="container mx-auto px-6 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="bg-pink-500 p-2 rounded-xl rotate-3">
                <IceCream className="w-8 h-8 text-white" />
              </div>
              <span className="text-3xl font-black tracking-tight">SweetScoop</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              We don't sell ice cream. We sell frozen happiness on a cone. Grab a spoon and join the revolution.
            </p>
            <div className="flex gap-4 pt-2">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="p-3 bg-white/5 rounded-full hover:bg-pink-500 hover:scale-110 transition-all duration-300">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <span className="w-8 h-1 bg-pink-500 rounded-full"></span> Explore
            </h3>
            <ul className="space-y-4">
              {['Our Story', 'Flavors', 'Locations', 'Franchise', 'Careers'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-pink-400 hover:pl-2 transition-all duration-300 flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 bg-pink-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <span className="w-8 h-1 bg-purple-500 rounded-full"></span> Visit Us
            </h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 text-gray-400">
                <MapPin className="w-6 h-6 text-purple-500 shrink-0 mt-1" />
                <span>123 Sugar Cone Blvd,<br/>Dessert District, NY 10012</span>
              </li>
              <li className="flex items-center gap-4 text-gray-400">
                <Phone className="w-6 h-6 text-purple-500 shrink-0" />
                <span>+1 (555) SC0-00PS</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter (The Fun Part) */}
          <div className="relative">
             <div className="bg-gradient-to-br from-pink-500 to-purple-600 p-6 rounded-3xl shadow-xl transform rotate-2 hover:rotate-0 transition-transform duration-300">
                <h3 className="text-xl font-bold mb-2">Free Ice Cream? 🍦</h3>
                <p className="text-white/80 text-sm mb-4">Join our VIP club for weekly discounts and secret flavors.</p>
                <div className="flex bg-white rounded-xl p-1 shadow-lg">
                  <input 
                    type="email" 
                    placeholder="Email..." 
                    className="w-full bg-transparent px-3 text-gray-800 outline-none text-sm placeholder:text-gray-400"
                  />
                  <button className="bg-gray-900 p-2 rounded-lg hover:bg-gray-800 transition-colors">
                    <Send className="w-4 h-4 text-white" />
                  </button>
                </div>
             </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">© 2025 SweetScoop Inc. Stay Frosty.</p>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>

      {/* --- 4. BACK TO TOP BUTTON --- */}
      <button 
        onClick={scrollToTop}
        className="absolute bottom-10 right-10 bg-white text-pink-600 p-4 rounded-full shadow-lg hover:bg-pink-500 hover:text-white transition-all duration-300 animate-bounce hover:animate-none z-30 hidden md:block"
        title="Back to Top"
      >
        <ArrowUp className="w-6 h-6" />
      </button>

    </footer>
  );
};

export default FunkyFooter;