import { ArrowRight } from "lucide-react";
import React from "react";

const featuredPost = {
  title: "AI Agents: Transforming Business Communication in 2025",
  author: "Fredrik Falk",
  date: "May 9, 2025",
  image: "/media/featured-bg.jpg",
  avatar: "https://imgs.search.brave.com/Tq1788E_ZRdqj5o8jvpwuGH2xKEUwBPFaKRdMKRCF9g/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Y2hhdHNpbXBsZS5h/aS9fbmV4dC9pbWFn/ZT91cmw9aHR0cHM6/Ly9jZG4uc2FuaXR5/LmlvL2ltYWdlcy9p/OGd1YWY4bC9wcm9k/dWN0aW9uLzBiMzli/Njc5ZjU3YWU0MTc5/YmI0ZDhjMDdmNTE2/ZWVjN2FlNmU5ZmYt/MTQwMHg4NjguanBn/P2ZpdD1tYXgmYXV0/bz1mb3JtYXQmdz0z/ODQwJnE9NzU",
};

const posts = [
  {
    title: "AI Agents: Transforming Business Communication in 2025",
    image: "https://imgs.search.brave.com/Tq1788E_ZRdqj5o8jvpwuGH2xKEUwBPFaKRdMKRCF9g/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Y2hhdHNpbXBsZS5h/aS9fbmV4dC9pbWFn/ZT91cmw9aHR0cHM6/Ly9jZG4uc2FuaXR5/LmlvL2ltYWdlcy9p/OGd1YWY4bC9wcm9k/dWN0aW9uLzBiMzli/Njc5ZjU3YWU0MTc5/YmI0ZDhjMDdmNTE2/ZWVjN2FlNmU5ZmYt/MTQwMHg4NjguanBn/P2ZpdD1tYXgmYXV0/bz1mb3JtYXQmdz0z/ODQwJnE9NzU",
  },
  {
    title: "The 5 Biggest Changes AI Will Bring to Your Job by 2030",
    image: "https://imgs.search.brave.com/Tq1788E_ZRdqj5o8jvpwuGH2xKEUwBPFaKRdMKRCF9g/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Y2hhdHNpbXBsZS5h/aS9fbmV4dC9pbWFn/ZT91cmw9aHR0cHM6/Ly9jZG4uc2FuaXR5/LmlvL2ltYWdlcy9p/OGd1YWY4bC9wcm9k/dWN0aW9uLzBiMzli/Njc5ZjU3YWU0MTc5/YmI0ZDhjMDdmNTE2/ZWVjN2FlNmU5ZmYt/MTQwMHg4NjguanBn/P2ZpdD1tYXgmYXV0/bz1mb3JtYXQmdz0z/ODQwJnE9NzU",
  },
  {
    title: "Hyperautomation: The Key to Competitive Advantage",
    image: "https://imgs.search.brave.com/Tq1788E_ZRdqj5o8jvpwuGH2xKEUwBPFaKRdMKRCF9g/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Y2hhdHNpbXBsZS5h/aS9fbmV4dC9pbWFn/ZT91cmw9aHR0cHM6/Ly9jZG4uc2FuaXR5/LmlvL2ltYWdlcy9p/OGd1YWY4bC9wcm9k/dWN0aW9uLzBiMzli/Njc5ZjU3YWU0MTc5/YmI0ZDhjMDdmNTE2/ZWVjN2FlNmU5ZmYt/MTQwMHg4NjguanBn/P2ZpdD1tYXgmYXV0/bz1mb3JtYXQmdz0z/ODQwJnE9NzU",
  },
  {
    title: "Why Autonomous AI Agents Are the Future of Automation",
    image: "https://imgs.search.brave.com/Tq1788E_ZRdqj5o8jvpwuGH2xKEUwBPFaKRdMKRCF9g/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Y2hhdHNpbXBsZS5h/aS9fbmV4dC9pbWFn/ZT91cmw9aHR0cHM6/Ly9jZG4uc2FuaXR5/LmlvL2ltYWdlcy9p/OGd1YWY4bC9wcm9k/dWN0aW9uLzBiMzli/Njc5ZjU3YWU0MTc5/YmI0ZDhjMDdmNTE2/ZWVjN2FlNmU5ZmYt/MTQwMHg4NjguanBn/P2ZpdD1tYXgmYXV0/bz1mb3JtYXQmdz0z/ODQwJnE9NzU",
  },
];

export default function BlogPage() {
  return (
    <section className=" max-w-7xl mx-auto text-black py-16 px-4 md:px-12">
      <h3 className="text-blue-300 font-medium text-sm uppercase mb-2">
        News & Blogs
      </h3>
      <h2 className="text-4xl font-bold mb-10">Agentic Insights</h2>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Featured Post */}
        <div className="relative rounded-2xl overflow-hidden md:col-span-2">
          <img
            src={featuredPost.image}
            alt="Featured"
            className="w-full h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent p-6 flex flex-col justify-end">
            <span className="bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full w-fit mb-3">
              ARTICLE
            </span>
            <h3 className="text-2xl font-bold leading-tight">
              {featuredPost.title}
            </h3>
            <div className="flex items-center text-sm mt-2 space-x-2">
              <img
                src={featuredPost.avatar}
                alt={featuredPost.author}
                className="w-6 h-6 rounded-full"
              />
              <span>{featuredPost.author}</span>
              <span>–</span>
              <span>{featuredPost.date}</span>
            </div>
          </div>
        </div>

        {/* Side Posts */}
        <div className="flex flex-col justify-between">
          <div className="space-y-6">
            {posts.map((post, idx) => (
              <div className="flex items-start gap-4" key={idx}>
                <img
                  src={post.image}
                  alt="thumb"
                  className="w-12 h-12 rounded object-cover"
                />
                <div>
                  <span className="text-xs text-gray-400 font-semibold">
                    ARTICLE
                  </span>
                  <p className="text-sm font-medium">{post.title}</p>
                </div>
              </div>
            ))}
          </div>
          <a
            href="/blog"
            className="flex items-center text-blue-500 text-sm font-medium mt-6 hover:underline"
          >
            See all Posts <ArrowRight className="w-4 h-4 ml-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
