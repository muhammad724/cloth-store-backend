import React from "react";
import { Link } from "react-router";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FAF7F2] to-[#F5F1EB] px-4 py-16">
      <div className="max-w-6xl mx-auto space-y-24">
        
        {/* Decorative Elements */}
        <div className="absolute top-20 left-0 w-40 h-40 bg-[#C9A24D]/5 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-20 right-0 w-60 h-60 bg-[#C9A24D]/5 rounded-full blur-3xl -z-10"></div>

        {/* Hero Section with Animation */}
        <section className="text-center space-y-6 relative">
          <div className="inline-block animate-bounce-slow">
            <span className="bg-[#C9A24D]/10 text-[#C9A24D] px-4 py-2 rounded-full text-sm font-semibold">
              Welcome to ChicThreads
            </span>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-extrabold text-gray-800 tracking-tight">
            About <span className="text-[#C9A24D] relative">
              ChicThreads
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0,5 Q25,0 50,5 T100,5" stroke="#C9A24D" strokeWidth="2" fill="none" strokeOpacity="0.3"/>
              </svg>
            </span>
          </h1>
          
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-light">
            Fashion is more than just clothes — it's a statement of your personality. 
            From casual wear to premium collections, we bring style, comfort, and confidence to every wardrobe.
          </p>
          
          <div className="flex justify-center gap-4 pt-4">
            <div className="h-1 w-12 bg-[#C9A24D]/30 rounded-full"></div>
            <div className="h-1 w-12 bg-[#C9A24D] rounded-full"></div>
            <div className="h-1 w-12 bg-[#C9A24D]/30 rounded-full"></div>
          </div>
        </section>

        {/* Our Story with Parallax Effect */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 order-2 md:order-1">
            <div className="relative">
              <h2 className="text-4xl font-bold text-gray-800 relative z-10">
                Our Story
              </h2>
              <div className="absolute -left-4 top-0 w-12 h-12 bg-[#C9A24D]/10 rounded-full -z-10"></div>
            </div>
            
            <div className="space-y-4">
              <p className="text-gray-600 text-lg leading-relaxed">
                Founded in <span className="font-bold text-[#C9A24D]">2020</span>, ChicThreads began as a small boutique with a big vision — 
                to offer unique, sustainable, and high-quality fashion.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Today, we serve fashion enthusiasts worldwide, delivering trend-forward styles with comfort and elegance. 
                Every piece tells a story, and we're here to help you write yours.
              </p>
            </div>
            
            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-2">
                {[1,2,3,4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-r from-[#C9A24D] to-[#b38c3f] border-2 border-white"></div>
                ))}
              </div>
              <p className="text-sm text-gray-500">Join 10,000+ happy customers</p>
            </div>
          </div>
          
          <div className="relative group order-1 md:order-2">
            <div className="absolute -inset-2 bg-gradient-to-r from-[#C9A24D]/20 to-transparent rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition duration-500"></div>
            <img 
              src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xvdGhpbmd8ZW58MHx8MHx8fDA%3D" 
              alt="Our Store" 
              className="rounded-2xl shadow-2xl w-full object-cover h-[400px] transform group-hover:scale-[1.02] transition duration-700"
            />
            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg">
              <p className="text-sm font-semibold text-gray-800">Est. 2020</p>
              <p className="text-xs text-gray-600">4+ Years of Excellence</p>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {[
            { number: "10K+", label: "Happy Customers", icon: "👥" },
            { number: "500+", label: "Products", icon: "👕" },
            { number: "50+", label: "Brands", icon: "🏷️" },
            { number: "24/7", label: "Support", icon: "💬" }
          ].map((stat) => (
            <div key={stat.label} className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl text-center hover:bg-white transition duration-300 group">
              <span className="text-3xl mb-2 block group-hover:scale-110 transition">{stat.icon}</span>
              <h3 className="text-2xl font-bold text-gray-800">{stat.number}</h3>
              <p className="text-sm text-gray-600">{stat.label}</p>
            </div>
          ))}
        </section>

        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#C9A24D] to-[#b38c3f] p-12 text-center">
          <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
          
          <div className="relative z-10 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Our Mission</h2>
            <p className="text-white/90 text-lg max-w-3xl mx-auto leading-relaxed">
              Making fashion accessible, sustainable, and empowering. 
              Every piece is designed to make our customers feel stylish, confident, and comfortable.
            </p>
          </div>
        </section>

        <section className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold text-gray-800">Meet Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The passionate people behind ChicThreads who work tirelessly to bring you the best fashion experience.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Jane Doe", role: "Founder & CEO", img: "https://randomuser.me/api/portraits/women/44.jpg", quote: "Fashion is my passion" },
              { name: "John Smith", role: "Head of Design", img: "https://randomuser.me/api/portraits/men/46.jpg", quote: "Design with purpose" },
              { name: "Emily Clark", role: "Marketing Lead", img: "https://randomuser.me/api/portraits/women/55.jpg", quote: "Connect through style" },
              { name: "Michael Lee", role: "Operations Manager", img: "https://randomuser.me/api/portraits/men/50.jpg", quote: "Efficiency meets elegance" }
            ].map((member, index) => (
              <div 
                key={member.name} 
                className="group relative bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#C9A24D] to-[#b38c3f] rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 blur"></div>
                <div className="relative bg-white p-6 rounded-2xl">
                  <div className="relative mb-4 mx-auto w-32 h-32">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#C9A24D] to-[#b38c3f] rounded-full opacity-0 group-hover:opacity-100 transition duration-500 blur-md"></div>
                    <img 
                      src={member.img} 
                      alt={member.name} 
                      className="relative w-32 h-32 mx-auto rounded-full object-cover border-4 border-[#C9A24D] group-hover:border-white transition duration-500"
                    />
                  </div>
                  <h3 className="font-bold text-gray-800 text-xl mb-1">{member.name}</h3>
                  <p className="text-[#C9A24D] font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-gray-500 italic">"{member.quote}"</p>
                  
                  <div className="flex justify-center gap-2 mt-4 opacity-0 group-hover:opacity-100 transition duration-500">
                    {['📱', '💼', '✉️'].map((icon) => (
                      <span key={icon} className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-[#C9A24D] hover:text-white transition cursor-pointer">
                        {icon}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold text-gray-800 text-center">What Our Customers Say</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { text: "Amazing quality and fast shipping! Will definitely shop again.", author: "Sarah K.", rating: 5 },
              { text: "The designs are unique and the fabric is so comfortable.", author: "Mike R.", rating: 5 },
              { text: "Best customer service I've experienced. Highly recommended!", author: "Lisa M.", rating: 5 }
            ].map((testimonial) => (
              <div key={testimonial.author} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition">
                <div className="flex text-[#C9A24D] mb-3">
                  {"★".repeat(testimonial.rating)}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                <p className="font-semibold text-gray-800">- {testimonial.author}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action with Animation */}
        <section className="text-center space-y-8 bg-white/50 backdrop-blur-sm p-12 rounded-3xl shadow-xl">
          <h2 className="text-4xl font-bold text-gray-800">Join Our Fashion Journey</h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Explore our latest collections and find pieces that reflect your unique style.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/Product"
              className="group relative px-8 py-4 bg-[#C9A24D] text-white font-semibold rounded-lg hover:bg-[#b38c3f] transition-all duration-300 shadow-md hover:shadow-xl overflow-hidden"
            >
              <span className="relative z-10">Shop Now</span>
              <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left opacity-20"></div>
            </Link>
            
            <Link
              to="/ContactUs"
              className="px-8 py-4 border-2 border-[#C9A24D] text-[#C9A24D] font-semibold rounded-lg hover:bg-[#C9A24D] hover:text-white transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
          
          <p className="text-sm text-gray-400">
            Join 10,000+ fashion enthusiasts who trust ChicThreads
          </p>
        </section>

      </div>
    </div>
  );
};

export default AboutUs;