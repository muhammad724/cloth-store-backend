import React, { useState } from "react";
import { Link } from "react-router";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FAF7F2] to-[#F5F1EB]">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C9A24D]/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#C9A24D]/5 rounded-full blur-3xl -z-10"></div>

      {/* Header Section */}
      <div className="relative bg-[#C9A24D] text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full"></div>
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-white/10 rounded-full"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Get in Touch</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Contact Information Cards */}
          <div className="lg:col-span-1 space-y-6">
            {/* Info Cards */}
            {[
              {
                icon: "📍",
                title: "Visit Us",
                content: ["123 Fashion Street", "New York, NY 10001", "United States"]
              },
              {
                icon: "📞",
                title: "Call Us",
                content: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
                action: "Call now"
              },
              {
                icon: "✉️",
                title: "Email Us",
                content: ["support@chicthreads.com", "hello@chicthreads.com"],
                action: "Send email"
              },
              {
                icon: "🕒",
                title: "Business Hours",
                content: ["Monday - Friday: 9AM - 8PM", "Saturday: 10AM - 6PM", "Sunday: Closed"]
              }
            ].map((item, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl group-hover:scale-110 transition duration-300">
                    {item.icon}
                  </span>
                  <div>
                    <h3 className="font-bold text-gray-800 text-lg mb-2">{item.title}</h3>
                    {item.content.map((line, i) => (
                      <p key={i} className="text-gray-600 text-sm">{line}</p>
                    ))}
                    {item.action && (
                      <button className="mt-3 text-[#C9A24D] text-sm font-semibold hover:text-[#b38c3f] transition">
                        {item.action} →
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}

            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="font-bold text-gray-800 text-lg mb-4">Follow Us</h3>
              <div className="flex gap-4">
                {[
                  { icon: "📘", name: "Facebook", color: "hover:bg-[#1877F2]" },
                  { icon: "📷", name: "Instagram", color: "hover:bg-[#E4405F]" },
                  { icon: "🐦", name: "Twitter", color: "hover:bg-[#1DA1F2]" },
                  { icon: "💼", name: "LinkedIn", color: "hover:bg-[#0A66C2]" }
                ].map((social) => (
                  <a
                    key={social.name}
                    href="#"
                    className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-2xl hover:text-white transition-all duration-300 group relative"
                    style={{ hover: { backgroundColor: social.color } }}
                  >
                    <span className="group-hover:scale-110 transition">
                      {social.icon}
                    </span>
                    <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs bg-gray-800 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
                      {social.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Send us a Message</h2>
              <p className="text-gray-600 mb-8">
                Have a question or feedback? Fill out the form below and we'll get back to you within 24 hours.
              </p>

              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
                  <div className="text-5xl mb-4">✅</div>
                  <h3 className="text-xl font-bold text-green-800 mb-2">Message Sent!</h3>
                  <p className="text-green-600">Thank you for contacting us. We'll respond shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700">
                        Full Name <span className="text-[#C9A24D]">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#C9A24D] focus:border-transparent transition"
                        placeholder="John Doe"
                      />
                    </div>

                    {/* Email Field */}
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700">
                        Email <span className="text-[#C9A24D]">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#C9A24D] focus:border-transparent transition"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  {/* Subject Field */}
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">
                      Subject <span className="text-[#C9A24D]">*</span>
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#C9A24D] focus:border-transparent transition"
                      placeholder="How can we help?"
                    />
                  </div>

                  {/* Message Field */}
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">
                      Message <span className="text-[#C9A24D]">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="6"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#C9A24D] focus:border-transparent transition resize-none"
                      placeholder="Tell us about your inquiry..."
                    ></textarea>
                  </div>

                  {/* File Upload (Optional) */}
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">
                      Attachment (Optional)
                    </label>
                    <div className="border-2 border-dashed border-gray-200 rounded-xl p-6 text-center hover:border-[#C9A24D] transition cursor-pointer">
                      <input type="file" className="hidden" id="file-upload" />
                      <label htmlFor="file-upload" className="cursor-pointer">
                        <span className="text-3xl mb-2 block">📎</span>
                        <p className="text-gray-600">Drop files here or click to upload</p>
                        <p className="text-xs text-gray-400 mt-1">Max file size: 10MB</p>
                      </label>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 bg-[#C9A24D] text-white font-semibold rounded-xl hover:bg-[#b38c3f] transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
                  >
                    Send Message
                  </button>

                  <p className="text-xs text-gray-400 text-center">
                    By submitting this form, you agree to our{' '}
                    <Link to="/privacy" className="text-[#C9A24D] hover:underline">
                      Privacy Policy
                    </Link>
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <div className="bg-white rounded-3xl shadow-xl p-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Find Us Here</h3>
            <div className="aspect-video bg-gray-200 rounded-xl overflow-hidden relative group">
              {/* Replace with actual Google Maps embed */}
              <div className="absolute inset-0 bg-gray-300 flex items-center justify-center">
                <div className="text-center">
                  <span className="text-4xl mb-2 block">🗺️</span>
                  <p className="text-gray-600">Google Maps Integration</p>
                  <p className="text-sm text-gray-500">123 Fashion Street, New York, NY</p>
                  
                  {/* Interactive overlay */}
                  <button className="mt-4 px-6 py-2 bg-[#C9A24D] text-white rounded-lg hover:bg-[#b38c3f] transition">
                    Get Directions
                  </button>
                </div>
              </div>
              
              {/* Map overlay with hover effect */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-lg font-semibold">Click to open in Google Maps</span>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Preview Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h3>
          <p className="text-gray-600 mb-6">Find quick answers to common questions</p>
          <Link
            to="/faq"
            className="inline-flex items-center gap-2 text-[#C9A24D] font-semibold hover:text-[#b38c3f] transition"
          >
            Visit FAQ Page
            <span className="text-xl">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;