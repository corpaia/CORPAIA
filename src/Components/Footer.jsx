import React from 'react';
import { FaLinkedin, FaYoutube, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6'; // ✅ Only here



export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 py-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
        {/* Left Section */}
        <div className="space-y-6">
          <div>
            <img src="/media/corpaia.png" alt="Logo" className="h-10" />
          </div>
          <div className="space-y-3 text-sm">
            <div className="flex items-center gap-4 px-4 text-white text-lg">
              <a href="https://www.linkedin.com/company/corpaia"><FaLinkedin /></a>
              <a href="https://www.youtube.com/@Corpaia"><FaYoutube /></a>
              <a href="https://www.instagram.com/corpaia?igsh=MXdzdHY3ZHZzemR3bg%3D%3D&utm_source=qr"><FaInstagram /></a>
              <a href="https://x.com/corpaia"><FaXTwitter /></a>
            </div>
          </div>
        </div>

        {/* Platform Links */}
        <div>
          <h4 className="text-sm font-semibold mb-4 uppercase">Platform</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>AI Agents</li>
            <li>AI Copilots trained on your Data</li>
            <li>24x7 Customer Support</li>
            <li>Automated Employee Support</li>
            <li>AI-Enhanced Conversational Commerce</li>
            <li>Integrations</li>
            <li>Model Agnostic</li>
          </ul>
        </div>

        {/* Resources Links */}
        <div>
          <h4 className="text-sm font-semibold mb-4 uppercase">Resources</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Security</li>
            <li>Pricing</li>
            <li>Documentation</li>
            <li>API</li>
            <li>Status</li>
          </ul>
        </div>

        {/* Company Links */}
        <div>
          <h4 className="text-sm font-semibold mb-4 uppercase">Company</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Request a Demo</li>
            <li>About Us</li>
            <li>Careers</li>
            <li>Contact Us</li>
            <li>[New] LinkedIn AI Growth Platform</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-sm text-gray-400 flex flex-col md:flex-row justify-around items-center gap-4">
        <p>© 2024 YourCompany, Inc.</p>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:underline">Terms</a>
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Security</a>
        </div>

      </div>
    </footer>
  );
}



// // Footer.jsx
// import { Linkedin, X, Youtube } from 'lucide-react';

// export default function Footer() {
//   return (
//     <div className="w-full bg-black text-white">
//       <footer className="w-full px-6 py-12">
//         {/* Top Section */}
//         <div className="flex flex-col md:flex-row justify-around items-center gap-8 border-t border-gray-800 pt-10 mb-10">
//           {/* Logo */}
//           <a href="/" className="flex items-center">
//             <img
//               src="/media/corpaia.png"
//               alt="Creopedia Logo"
//               className="h-8 md:h-12 w-auto"
//             />
//           </a>

//           {/* Newsletter Section */}
//           <div className="space-y-4 items-center md:items-center">
//             <div className="flex justify-center md:justify-end space-x-4">
//               <Linkedin className="w-5 h-5 cursor-pointer hover:text-gray-400" />
//               <X className="w-5 h-5 cursor-pointer hover:text-gray-400" />
//               <Youtube className="w-5 h-5 cursor-pointer hover:text-gray-400" />
//             </div>
//             <h4 className="font-semibold text-lg">Subscribe to our newsletter</h4>
//             <form className="flex justify-center md:justify-end gap-2">
//               <input
//                 type="email"
//                 placeholder="name@email.com"
//                 className="bg-gray-800 text-white px-4 py-4 w-64 rounded-l focus:outline-none"
//               />
//               <button
//                 type="submit"
//                 className="bg-white text-black px-4 py-2 rounded-md font-semibold hover:bg-gray-300"
//               >
//                 Subscribe
//               </button>
//             </form>
//           </div>
//         </div>

//         {/* Bottom Grid Links */}
//         <footer className="w-full text-white">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 ml-7 md:ml-60">
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 text-md">
//               <div>
//                 <h4 className="font-semibold mb-3">Product</h4>
//                 <ul className="space-y-2">
//                   <li>Features</li>
//                   <li>Integrations</li>
//                   <li>Pricing</li>
//                   <li>Changelog</li>
//                 </ul>
//               </div>
//               <div>
//                 <h4 className="font-semibold mb-3">Company</h4>
//                 <ul className="space-y-2">
//                   <li>About</li>
//                   <li>Customers</li>
//                   <li>Careers</li>
//                   <li>Press</li>
//                 </ul>
//               </div>
//               <div>
//                 <h4 className="font-semibold mb-3">Resources</h4>
//                 <ul className="space-y-2">
//                   <li>Blog</li>
//                   <li>Docs</li>
//                   <li>Support</li>
//                   <li>API</li>
//                 </ul>
//               </div>
//               <div>
//                 <h4 className="font-semibold mb-3">Legal</h4>
//                 <ul className="space-y-2">
//                   <li>Terms</li>
//                   <li>Privacy</li>
//                   <li>Cookies</li>
//                   <li>Security</li>
//                 </ul>
//               </div>
//               <div>
//                 <h4 className="font-semibold mb-3">Contact</h4>
//                 <ul className="space-y-2">
//                   <li>Email</li>
//                   <li>Chat</li>
//                   <li>Twitter</li>
//                   <li>LinkedIn</li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </footer>

//         {/* Footer Bottom */}
//         <div className="text-center text-xs text-gray-500 mt-10 border-t border-gray-800 pt-6">
//           &copy; {new Date().getFullYear()} Corpaia. All rights reserved.
//         </div>
//       </footer>
//     </div>
//   );
// }
