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
    window.scrollTo(0, 0);
  };

  const handleBackClick = () => {
    setView("listing");
    setSelectedBlog(null);
    window.scrollTo(0, 0);
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
        {/* <header className="bg-white border-b py-4 sticky top-0 z-50">
          <div className="container mx-auto px-4 flex items-center justify-between">
            <div className="text-2xl font-bold">BLOG</div>
            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              className="md:hidden"
            >
              {mobileMenu ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </header> */}

        <div className="relative h-96 w-full overflow-hidden">
          <img
            src="/assets/Blog/blogBanner.jpg"
            alt="Background"
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
          />
          <div className="absolute top-0 left-0 w-full h-full  bg-opacity-50 z-10"></div>
          <div className="relative z-20 h-full flex items-center justify-center">
            <h1 className="text-4xl font-bold text-white text-center px-4 max-w-4xl mx-auto">
              {selectedBlog.title}
            </h1>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3">
              <button
                onClick={handleBackClick}
                className="mb-6 flex items-center gap-2 text-gray-600 hover:text-black"
              >
                <ArrowLeft size={20} /> Back to Blogs
              </button>

              <div className="bg-white p-8 rounded-lg shadow">
                {BlogContent ? (
                  <BlogContent />
                ) : (
                  <div className="space-y-6 text-gray-700">
                    <p>{selectedBlog.excerpt}</p>
                    <p>Full blog content for {selectedBlog.title}...</p>
                  </div>
                )}

                <div className="mt-8 pt-6 border-t flex items-center justify-between text-sm text-gray-500">
                  <span>By {selectedBlog.author}</span>
                  <span>{selectedBlog.date}</span>
                  <span>{selectedBlog.readTime}</span>
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
                    className="w-full p-4 border border-gray-200 hover:border-black transition text-left rounded"
                  >
                    <div className="text-sm font-semibold line-clamp-2">
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
          <div className="lg:hidden fixed bottom-20 right-4 bg-white p-4 rounded-lg shadow-xl z-40 w-80">
            {otherBlogs.map((blog) => (
              <button
                key={blog.id}
                onClick={() => {
                  handleBlogClick(blog);
                  setMobileMenu(false);
                }}
                className="w-full p-3 border-b hover:bg-gray-50 text-left"
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
      <div className="h-80 bg-linear-to-r` from-blue-600 to-purple-600 flex items-center justify-center">
        <h1 className="text-6xl font-bold text-white">BLOG</h1>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            {searchQuery && (
              <div className="mb-6 text-gray-600">
                Found {filteredBlogs.length} results for &quot;{searchQuery}
                &quot;
              </div>
            )}

            {filteredBlogs.map((blog) => (
              <article
                key={blog.id}
                className="bg-white p-6 rounded-lg shadow mb-8"
              >
                <div
                  className="w-full h-64 bg-cover bg-center rounded mb-4 cursor-pointer"
                  style={{ backgroundImage: `url('${blog.image}')` }}
                  onClick={() => handleBlogClick(blog)}
                />
                <div className="text-xs text-gray-500 uppercase mb-2">
                  {blog.category}
                </div>
                <h2
                  className="text-2xl font-bold mb-3 cursor-pointer hover:text-blue-600"
                  onClick={() => handleBlogClick(blog)}
                >
                  {blog.title}
                </h2>
                <p className="text-gray-600 mb-4">{blog.excerpt}</p>
                <button
                  onClick={() => handleBlogClick(blog)}
                  className="text-sm font-semibold hover:underline"
                >
                  Read More →
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
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search blogs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 border rounded focus:outline-none focus:border-blue-500"
                />
                <Search className="absolute right-3 top-3 w-5 h-5 text-gray-400" />
              </div>

              <div>
                <h3 className="font-bold mb-4">Categories</h3>
                <ul className="space-y-2">
                  {categories.map((cat, i) => (
                    <li
                      key={i}
                      className="text-sm text-gray-600 hover:text-black cursor-pointer"
                    >
                      {cat}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
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
                      className="px-3 py-1 text-xs border rounded hover:bg-black hover:text-white cursor-pointer"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-bold mb-4">Social</h3>
                <div className="flex gap-3">
                  {[Facebook, Twitter, Instagram].map((Icon, i) => (
                    <a
                      key={i}
                      href="#"
                      className="w-8 h-8 border rounded flex items-center justify-center hover:bg-black hover:text-white"
                    >
                      <Icon size={16} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogApp;
