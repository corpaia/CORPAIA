import React, { useState, useRef } from "react";
import toast from "react-hot-toast";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Linkedin,
  Instagram,
  MessageCircle,
  Send,
} from "lucide-react";
import emailjs from "@emailjs/browser";

export default function ContactUsPage() {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        "service_vgcdrr3",
        "template_iwaufnj",
        formRef.current,
        "SysCTBxfK5WWlQTH0"
      )
      .then(
        () => {
          toast.success(" Message sent! We'll get back soon.");
          setFormData({ name: "", email: "", subject: "", message: "" });
          setIsSubmitting(false);
        },
        (error) => {
          toast.error("Failed to send. Try again later.");
          console.error(error);
          setIsSubmitting(false);
        }
      );
  };

  return (
    <div className="min-h-screen py-22 bg-black text-white">
      {/* Hero */}
      <div className="pt-16 pb-12 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-500 to-orange-400 bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We'd love to hear from you. Whether you're curious about features,
            partnerships, or just want to say hi we're here.
          </p>
        </div>
      </div>

      {/* Content Grid */}
      <div className="px-6 lg:px-12 pb-16">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
          {/* Form */}
          <div className="bg-gray-900 rounded-3xl p-8 lg:p-10 border border-gray-700">
            <h2 className="text-2xl font-semibold text-white mb-6">
              Send us a message
            </h2>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Full Name*
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-700 bg-black text-white focus:ring-2 focus:ring-purple-500"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email*
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-700 bg-black text-white focus:ring-2 focus:ring-purple-500"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Subject*
                </label>
                <input
                  type="text"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-700 bg-black text-white focus:ring-2 focus:ring-purple-500"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Message*
                </label>
                <textarea
                  name="message"
                  rows="5"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-700 bg-black text-white focus:ring-2 focus:ring-purple-500 resize-none"
                  placeholder="Tell us more..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-purple-600 to-orange-500 hover:from-purple-700 hover:to-orange-600 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl disabled:opacity-70 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-gray-300 border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-gray-800 rounded-3xl p-8 border border-gray-700">
              <h2 className="text-2xl font-bold text-white mb-6">
                Get in Touch
              </h2>

              <div className="space-y-5 text-sm text-gray-300">
                {/* Address */}
                <div className="flex items-center gap-4">
                  <a
                    href="https://maps.google.com?q=Corpaia+Manjeri+Kerala+India"
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-xl hover:bg-gray-700 transition"
                  >
                    <MapPin className="w-5 h-5 text-[#a43f97]" />
                  </a>
                  <div className="flex flex-col">
                    <h3 className="font-semibold text-white">Our Office</h3>
                    <a
                      href="https://maps.google.com?q=Corpaia+Manjeri+Kerala+India"
                      className="hover:underline"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Corpaia, Near Zilmoney
                      <br />
                      Manjeri, Kerala, India
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-4">
                  <a
                    href="tel:+918075342505"
                    className="p-3 rounded-xl hover:bg-gray-700 transition"
                  >
                    <Phone className="w-5 h-5 text-[#a43f97]" />
                  </a>
                  <a
                    href="tel:+918075342505"
                    className="text-sm hover:underline"
                  >
                    +91 80-75342505
                  </a>
                </div>

                {/* Email */}
                <div className="flex items-center gap-4">
                  <a
                    href="mailto:corpaiagents@gmail.com"
                    className="p-3 rounded-xl hover:bg-gray-700 transition"
                  >
                    <Mail className="w-5 h-5 text-[#a43f97]" />
                  </a>
                  <a
                    href="mailto:corpaiagents@gmail.com"
                    className="text-sm hover:underline"
                  >
                    corpaiagents@gmail.com
                  </a>
                </div>

                {/* Hours */}
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-gray-700">
                    <Clock className="w-5 h-5 text-[#a43f97]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-0.5">
                      Working Hours
                    </h3>
                    <p className="text-sm">Mon – Fri: 10 AM – 6 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-3xl overflow-hidden border border-gray-700">
              <iframe
                src="https://www.google.com/maps?q=Corpaia+Near+Zilmoney+Manjeri+Kerala&output=embed"
                width="100%"
                height="220"
                className="w-full border-none"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Social & CTA */}
        <div className="mt-12 text-center">
          <div className="bg-gray-900 rounded-3xl p-8 border border-gray-700 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4">Connect With Us</h3>
            <p className="text-gray-400 mb-8">Follow us and stay updated</p>

            <div className="flex justify-center gap-4 mb-8">
              <SocialLink
                href="https://linkedin.com/company/corpaia"
                icon={<Linkedin />}
              />
              <SocialLink
                href="https://instagram.com/corpaia"
                icon={<Instagram />}
              />
              <SocialLink
                href="https://wa.me/918075342505"
                icon={<MessageCircle />}
              />
              <SocialLink
                href="mailto:corpaiagents@gmail.com"
                icon={<Mail />}
              />
            </div>

            <div className="bg-gradient-to-r from-purple-900 to-orange-900 rounded-2xl p-6">
              <h4 className="text-lg font-semibold mb-2">
                Still have questions?
              </h4>
              <p className="text-gray-300">
                Drop us a message and we'll get back within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Reusable SocialLink
const SocialLink = ({ href, icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-gradient-to-r from-purple-600 to-orange-500 p-3 rounded-full hover:scale-110 transition-all duration-300"
  >
    {React.cloneElement(icon, { className: "w-6 h-6 text-white" })}
  </a>
);
