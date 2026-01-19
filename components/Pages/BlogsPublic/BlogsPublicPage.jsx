"use client";
import React, { useState } from "react";
import {
  Menu,
  X,
  Search,
  Facebook,
  Twitter,
  Instagram,
  ArrowLeft,
  Heart,
  Share2,
  Bookmark,
  Eye,
} from "lucide-react";

// Import blog data
import { blogs, categories, archives, instagramImages } from "./blogData";

// Import individual blog components
import AleshaMartBlog from "./AleshaMartBlog";
import DurexFIFABlog from "./DurexFIFABlog";
import BritishCouncilIELTSBlog from "./BritishCouncilIELTSBlog";
import BritishCouncilSearchBlog from "./BritishCouncilSearchBlog";
import DettolMissionBlog from "./DettolMissionBlog";
import Image from "next/image";

const BlogApp = () => {
  const [view, setView] = useState("listing");
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileMenu, setMobileMenu] = useState(false);
  const [likedBlogs, setLikedBlogs] = useState({});
  const [bookmarkedBlogs, setBookmarkedBlogs] = useState({});

  const filteredBlogs = blogs.filter(
    (blog) =>
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      )
  );

  const handleBlogClick = (blog) => {
    setSelectedBlog(blog);
    setView("single");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBackClick = () => {
    setView("listing");
    setSelectedBlog(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleLike = (blogId, e) => {
    e.stopPropagation();
    setLikedBlogs((prev) => ({
      ...prev,
      [blogId]: !prev[blogId],
    }));
  };

  const toggleBookmark = (blogId, e) => {
    e.stopPropagation();
    setBookmarkedBlogs((prev) => ({
      ...prev,
      [blogId]: !prev[blogId],
    }));
  };

  // Map blog IDs to their components
  const BlogComponents = {
    1: AleshaMartBlog,
    2: DurexFIFABlog,
    3: BritishCouncilIELTSBlog,
    4: BritishCouncilSearchBlog,
    5: DettolMissionBlog,
  };

  if (view === "single" && selectedBlog) {
    const BlogContent = BlogComponents[selectedBlog.id];
    const otherBlogs = blogs.filter((b) => b.id !== selectedBlog.id);

    return (
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="relative h-96 w-full overflow-hidden group">
          <img
            src="/assets/Blog/blogBanner.jpg"
            alt="Background"
            className="absolute top-0 left-0 w-full h-full object-cover z-0 transition-transform duration-700 group-hover:scale-110 opacity-20"
          />
          <div className="absolute top-0 left-0 w-full h-full z-10"></div>
          <div className="relative z-20 h-full flex items-center justify-center">
            <h1 className="text-4xl font-bold text-black text-center px-4 max-w-4xl mx-auto transform transition-all duration-500 group-hover:scale-105">
              {selectedBlog.title}
            </h1>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3">
              <button
                onClick={handleBackClick}
                className="mb-6 flex items-center gap-2 text-gray-600 hover:text-black transition-all hover:gap-3 group"
              >
                <ArrowLeft
                  size={20}
                  className="transition-transform group-hover:-translate-x-1"
                />
                Back to Blogs
              </button>

              <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <div className="flex items-center justify-between mb-6 pb-6 border-b">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                      {selectedBlog.author.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold">{selectedBlog.author}</div>
                      <div className="text-sm text-gray-500">
                        {selectedBlog.date}
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <button
                      onClick={(e) => toggleLike(selectedBlog.id, e)}
                      className={`p-2 rounded-full transition-all transform hover:scale-110 ${
                        likedBlogs[selectedBlog.id]
                          ? "bg-red-100 text-red-600"
                          : "bg-gray-100 hover:bg-gray-200"
                      }`}
                    >
                      <Heart
                        size={20}
                        fill={
                          likedBlogs[selectedBlog.id] ? "currentColor" : "none"
                        }
                        className="transition-all"
                      />
                    </button>
                    <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-all transform hover:scale-110">
                      <Share2 size={20} />
                    </button>
                    <button
                      onClick={(e) => toggleBookmark(selectedBlog.id, e)}
                      className={`p-2 rounded-full transition-all transform hover:scale-110 ${
                        bookmarkedBlogs[selectedBlog.id]
                          ? "bg-yellow-100 text-yellow-600"
                          : "bg-gray-100 hover:bg-gray-200"
                      }`}
                    >
                      <Bookmark
                        size={20}
                        fill={
                          bookmarkedBlogs[selectedBlog.id]
                            ? "currentColor"
                            : "none"
                        }
                        className="transition-all"
                      />
                    </button>
                  </div>
                </div>

                {BlogContent ? (
                  <BlogContent />
                ) : (
                  <div className="space-y-6 text-gray-700">
                    <p>{selectedBlog.excerpt}</p>
                    <p>Full blog content for {selectedBlog.title}...</p>
                  </div>
                )}

                <div className="mt-8 pt-6 border-t">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {selectedBlog.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium hover:bg-blue-100 transition-all cursor-pointer transform hover:scale-105"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>By {selectedBlog.author}</span>
                    <span>{selectedBlog.date}</span>
                    <span>{selectedBlog.readTime}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="sticky top-24 space-y-4">
                <h3 className="font-bold text-lg mb-4">Other Blogs</h3>
                {otherBlogs.map((blog) => (
                  <button
                    key={blog.id}
                    onClick={() => handleBlogClick(blog)}
                    className="w-full p-4 border border-gray-200 hover:border-blue-500 hover:shadow-lg transition-all text-left rounded-lg group transform hover:-translate-y-1"
                  >
                    <div className="text-sm font-semibold line-clamp-2 group-hover:text-blue-600 transition-colors">
                      {blog.title}
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      {blog.category}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {mobileMenu && (
          <div className="lg:hidden fixed bottom-20 right-4 bg-white p-4 rounded-lg shadow-xl z-40 w-80 animate-slide-in">
            {otherBlogs.map((blog) => (
              <button
                key={blog.id}
                onClick={() => {
                  handleBlogClick(blog);
                  setMobileMenu(false);
                }}
                className="w-full p-3 border-b hover:bg-gray-50 text-left transition-colors"
              >
                {blog.title.slice(0, 40)}...
              </button>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative h-96 w-full overflow-hidden group">
        <img
          src="/assets/Blog/blogBanner.jpg"
          alt="Background"
          className="absolute top-0 left-0 w-full h-full object-cover z-0 transition-transform duration-700 group-hover:scale-110 opacity-20"
        />
        <div className="absolute top-0 left-0 w-full h-full z-10"></div>
        <div className="relative z-20 h-full flex items-center justify-center">
          <h1 className="text-6xl font-bold text-black text-center px-4 max-w-4xl mx-auto transform transition-all duration-500 group-hover:scale-105">
            Blogs
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            {searchQuery && (
              <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-200 animate-fade-in">
                <span className="text-blue-800 font-medium">
                  Found {filteredBlogs.length} results for &quot;{searchQuery}
                  &quot;
                </span>
              </div>
            )}

            {filteredBlogs.map((blog, index) => (
              <article
                key={blog.id}
                className="bg-white p-6 rounded-lg shadow-md mb-8 hover:shadow-2xl transition-all duration-300 group transform hover:-translate-y-2"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                }}
              >
                <div
                  className="w-full h-64 bg-cover bg-center rounded mb-4 cursor-pointer overflow-hidden relative"
                  style={{ backgroundImage: `url('${blog.image}')` }}
                  onClick={() => handleBlogClick(blog)}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-y-2 group-hover:translate-y-0">
                    <span className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-800">
                      {blog.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <button
                      onClick={(e) => toggleLike(blog.id, e)}
                      className={`p-2 rounded-full backdrop-blur-md transition-all transform hover:scale-110 ${
                        likedBlogs[blog.id]
                          ? "bg-red-500 text-white"
                          : "bg-white/80 hover:bg-white"
                      }`}
                    >
                      <Heart
                        size={18}
                        fill={likedBlogs[blog.id] ? "currentColor" : "none"}
                      />
                    </button>
                    <button
                      onClick={(e) => toggleBookmark(blog.id, e)}
                      className={`p-2 rounded-full backdrop-blur-md transition-all transform hover:scale-110 ${
                        bookmarkedBlogs[blog.id]
                          ? "bg-yellow-500 text-white"
                          : "bg-white/80 hover:bg-white"
                      }`}
                    >
                      <Bookmark
                        size={18}
                        fill={
                          bookmarkedBlogs[blog.id] ? "currentColor" : "none"
                        }
                      />
                    </button>
                  </div>
                </div>
                <div className="text-xs text-gray-500 uppercase mb-2 transition-colors group-hover:text-blue-600">
                  {blog.category}
                </div>
                <h2
                  className="text-2xl font-bold mb-3 cursor-pointer hover:text-blue-600 transition-colors"
                  onClick={() => handleBlogClick(blog)}
                >
                  {blog.title}
                </h2>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {blog.excerpt}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {blog.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 rounded-full text-xs text-gray-600 hover:bg-blue-100 hover:text-blue-600 transition-all cursor-pointer transform hover:scale-105"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() => handleBlogClick(blog)}
                  className="text-sm font-semibold hover:underline text-blue-600 flex items-center gap-1 group/btn transition-all hover:gap-2"
                >
                  Read More
                  <ArrowLeft
                    size={16}
                    className="rotate-180 transition-transform group-hover/btn:translate-x-1"
                  />
                </button>
                <div className="mt-4 pt-4 border-t flex items-center justify-between text-xs text-gray-500">
                  <span>By {blog.author}</span>
                  <span>{blog.date}</span>
                  <span>{blog.comments} Comment</span>
                </div>
              </article>
            ))}
          </div>

          <div>
            <div className="sticky top-24 space-y-8">
              <div className="relative group">
                <input
                  type="text"
                  placeholder="Search blogs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 pr-12 border-2 rounded-lg focus:outline-none focus:border-blue-500 transition-all"
                />
                <Search className="absolute right-3 top-3 w-5 h-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="font-bold mb-4">Categories</h3>
                <ul className="space-y-2">
                  {categories.map((cat, i) => (
                    <li
                      key={i}
                      className="text-sm text-gray-600 hover:text-black cursor-pointer hover:translate-x-2 transition-all flex items-center gap-2 group"
                    >
                      <span className="w-0 h-0.5 bg-blue-600 group-hover:w-4 transition-all"></span>
                      {cat}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="font-bold mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Art",
                    "Branding",
                    "Colors",
                    "Creative",
                    "Design",
                    "Digital",
                    "Marketing",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs border rounded-full hover:bg-black hover:text-white cursor-pointer transition-all transform hover:scale-110"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="font-bold mb-4">Social</h3>
                <div className="flex gap-3">
                  {[
                    { Icon: Facebook, color: "hover:bg-blue-600" },
                    { Icon: Twitter, color: "hover:bg-sky-500" },
                    { Icon: Instagram, color: "hover:bg-pink-600" },
                  ].map(({ Icon, color }, i) => (
                    <a
                      key={i}
                      href="#"
                      className={`w-10 h-10 border-2 rounded-lg flex items-center justify-center hover:text-white transition-all transform hover:scale-110 hover:-translate-y-1 ${color}`}
                    >
                      <Icon size={18} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        .animate-slide-in {
          animation: slideIn 0.3s ease-out;
        }
        @keyframes slideIn {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default BlogApp;
