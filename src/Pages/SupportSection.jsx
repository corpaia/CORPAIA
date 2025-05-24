// import Image from 'next/image' // or use <img> if not using Next.js

// export default function SupportSection() {
//   const teamImages = [
//     '/team1.jpg',
//     '/team2.jpg',
//     '/team3.jpg',
//     '/team4.jpg',
//   ]

//   return (
//     <div className="bg-gradient-to-r from-[#2b0a4a] to-[#391564] rounded-2xl p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
//       {/* Team Avatars */}
//       <div className="flex -space-x-4">
//         {teamImages.map((src, index) => (
//           <img
//             key={index}
//             src={src}
//             alt={`Team member ${index + 1}`}
//             className="w-14 h-14 rounded-full border-4 border-[#1c0f2c] object-cover"
//           />
//         ))}
//       </div>

//       {/* Support Text + CTA */}
//       <div className="text-white flex-1 text-center md:text-left">
//         <h3 className="text-xl font-semibold mb-1">Looking for support?</h3>
//         <p className="text-sm text-purple-200 max-w-md">
//           We’re here to help! Get in touch if you have technical, account, or billing questions.
//         </p>
//       </div>

//       <button className="bg-white text-[#391564] font-medium px-5 py-2 rounded-xl shadow-md hover:bg-purple-100 transition">
//         Contact support
//       </button>
//     </div>
//   )
// }
