"use client"
import React, { useState } from 'react';
import { Menu, X, Calendar, User, ArrowRight, Tag, Search, Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';

// Blog data with full content
const blogs = [
  {
    id: 1,
    slug: 'alesha-mart-launch',
    title: 'Reimagining E-Commerce in Bangladesh: The Disruptive Launch of Alesha Mart',
    excerpt: 'The e-commerce industry in Bangladesh is on a growth trajectory but still navigating its early development stages. With only two or three major players dominating the landscape...',
    category: 'E-Commerce',
    author: 'Austin Rogers',
    date: 'November 14, 2018',
    image: '/assets/Home/Blog/BD-1.png',
    readTime: '8 min read',
    tags: ['E-Commerce', 'Digital', 'Marketing', 'Bangladesh'],
    comments: 1,
    content: `
      <p>The e-commerce industry in Bangladesh is on a growth trajectory but still navigating its early development stages. With only two or three major players dominating the landscape, the market has remained relatively stagnant, plagued by recurring issues — delayed deliveries, poor service, and inaccurate product fulfillments. It's within this space that <strong>Alesha Mart</strong> emerged — not just as a competitor, but as a bold disruptor with a mission to <strong>redefine the online shopping experience</strong> for millions.</p>

      <h3 class="text-red-500 text-xl font-bold mt-8 mb-4">Challenging the Status Quo</h3>
      <p>Customer dissatisfaction with existing e-commerce platforms was widespread. Alesha Mart identified this gap and aimed to stand out by offering faster delivery, reliable service, and a user-centric approach.</p>

      <h3 class="text-red-500 text-xl font-bold mt-8 mb-4">Crafting a High-Impact Campaign</h3>
      <p>Our strategy revolved around building pre-launch curiosity while subtly educating audiences about the common pain points in the current e-commerce ecosystem.</p>

      <h3 class="text-red-500 text-xl font-bold mt-8 mb-4">The Results: Numbers That Speak Volumes</h3>
      <p>The impact of Alesha Mart's campaign was nothing short of extraordinary. In just the first month, the brand achieved over 30 million people reached across Bangladesh.</p>
    `
  },
  {
    id: 2,
    slug: 'durex-fifa-campaign',
    title: 'Durex Scores Big During the FIFA World Cup',
    excerpt: 'In the world of marketing, timing is everything. And when the FIFA World Cup rolls around, it\'s not just football fans who are gearing up — brands, too, see an opportunity...',
    category: 'Social Media',
    author: 'Austin Rogers',
    date: 'December 15, 2018',
    image: '/assets/Home/Blog/BD-2-1.png',
    readTime: '6 min read',
    tags: ['Social', 'Creative', 'FIFA', 'Campaign'],
    comments: 2,
    content: `
      <p>In the world of marketing, timing is everything. And when the FIFA World Cup rolls around, it's not just football fans who are gearing up — brands, too, see an opportunity to ride the wave of global excitement.</p>

      <h3 class="text-red-500 text-xl font-bold mt-8 mb-4">The Objective: Make Safe Sex Talk Fun, Relevant, and Shareable</h3>
      <p>While Durex is globally known for pushing creative boundaries, launching a campaign around sex in a culturally nuanced country like Bangladesh requires delicate balance.</p>

      <h3 class="text-red-500 text-xl font-bold mt-8 mb-4">Strategic Foundation</h3>
      <p>At the core of this campaign was a keen insight: football, like sex, is universal, passionate, and filled with intense moments.</p>
    `
  },
  {
    id: 3,
    slug: 'british-council-ielts',
    title: 'A Smarter Approach to Performance Marketing',
    excerpt: 'In the high-stakes world of standardised testing, timing and user experience can make or break a conversion. For prospective IELTS candidates in Bangladesh...',
    category: 'Performance',
    author: 'Austin Rogers',
    date: 'November 20, 2018',
    image: '/assets/Home/Picture 11.png',
    readTime: '10 min read',
    tags: ['Performance', 'Automation', 'IELTS', 'Ads'],
    comments: 1,
    content: `
      <p>In the high-stakes world of standardised testing, timing and user experience can make or break a conversion. For prospective IELTS candidates in Bangladesh, the British Council website offered a reliable test booking experience — but with a critical flaw.</p>

      <h3 class="text-red-500 text-xl font-bold mt-8 mb-4">The Objective</h3>
      <p>Our key goal was to shorten the journey between ad exposure and action. Instead of relying on a delayed reveal of test dates, we aimed to promote available IELTS test dates upfront in ads.</p>
    `
  },
  {
    id: 4,
    slug: 'british-council-search',
    title: 'The Speed of Thought',
    excerpt: 'When the world began to adapt to the "new normal," so did the education and testing sectors. In Bangladesh, IELTS-related services surged back to life...',
    category: 'SEO',
    author: 'Austin Rogers',
    date: 'October 5, 2018',
    image: '/assets/Home/Blog/BD-4-1.png',
    readTime: '9 min read',
    tags: ['Google', 'SEO', 'Optimization', 'Search'],
    comments: 1,
    content: `
      <p>When the world began to adapt to the "new normal," so did the education and testing sectors. In Bangladesh, IELTS-related services surged back to life — and with that came a flood of digital advertising.</p>

      <h3 class="text-red-500 text-xl font-bold mt-8 mb-4">The Challenge</h3>
      <p>With nearly every IELTS exam provider and training institute bidding on the same commercial-intent keywords, CPCs spiked, impression share fragmented, and ad relevance dropped across the board.</p>
    `
  },
  {
    id: 5,
    slug: 'dettol-mission',
    title: 'Dance! Move Your Body',
    excerpt: 'In Bangladesh, maternal and child health remains a pressing challenge — particularly in underprivileged communities where access to healthcare and hygiene education is scarce...',
    category: 'Social',
    author: 'Austin Rogers',
    date: 'September 12, 2018',
    image: '/assets/Home/Blog/BD-5-2.png',
    readTime: '7 min read',
    tags: ['Social', 'CSR', 'Healthcare', 'Purpose'],
    comments: 2,
    content: `
      <p>In Bangladesh, maternal and child health remains a pressing challenge — particularly in underprivileged communities where access to healthcare and hygiene education is scarce.</p>

      <h3 class="text-red-500 text-xl font-bold mt-8 mb-4">The Objective</h3>
      <p>The campaign titled "Shurokkhito Maa, Shurokkhito Agami" (Safe Mother, Safe Future) was designed with a clear and meaningful mission.</p>
    `
  }
];

const categories = ['Branding (14)', 'Ideas (6)', 'News (4)', 'Project (6)'];
const instagramImages = [
  '/assets/Home/Blog/BD-1.png',
  '/assets/Home/Blog/BD-2-1.png',
  '/assets/Home/Picture 11.png',
  '/assets/Home/Blog/BD-4-1.png',
  '/assets/Home/Blog/BD-5-2.png',
  '/assets/Home/Blog/BD-1.png',
];

// Header Component
const Header = () => (
  <header className="bg-white border-b border-gray-200 py-4 sticky top-0 z-50">
    <div className="container mx-auto px-4 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-black rounded flex items-center justify-center">
          <div className="w-4 h-4 border-2 border-white rounded-full" />
        </div>
      </div>
      <nav className="hidden md:flex items-center gap-8 text-sm font-semibold">
        <a href="#" className="hover:text-gray-600">HOME</a>
        <a href="#" className="hover:text-gray-600">PAGES</a>
        <a href="#" className="hover:text-gray-600">PORTFOLIO</a>
        <a href="#" onClick={(e) => { e.preventDefault(); window.history.pushState({}, '', '/blogs'); window.dispatchEvent(new PopStateEvent('popstate')); }} className="hover:text-gray-600 cursor-pointer">BLOG</a>
        <a href="#" className="hover:text-gray-600">SHOP</a>
        <a href="#" className="hover:text-gray-600">ELEMENTS</a>
      </nav>
      <button className="md:hidden">
        <Menu size={24} />
      </button>
    </div>
  </header>
);

// Sidebar Component
const Sidebar = ({ searchQuery, onSearchChange }) => (
  <div className="space-y-8">
    {/* Search */}
    <div>
      <div className="relative">
        <input
          type="text"
          placeholder="Search blogs..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full px-4 py-3 pr-10 border border-gray-300 rounded focus:outline-none focus:border-gray-400"
        />
        <Search className="absolute right-3 top-3 w-5 h-5 text-gray-400" />
      </div>
    </div>

    {/* About */}
    <div>
      <h3 className="text-lg font-bold mb-4 uppercase">About</h3>
      <p className="text-sm text-gray-600 leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam erc.
      </p>
    </div>

    {/* Categories */}
    <div>
      <h3 className="text-lg font-bold mb-4 uppercase">Categories</h3>
      <ul className="space-y-2">
        {categories.map((cat, i) => (
          <li key={i}>
            <a href="#" className="text-sm text-gray-600 hover:text-black">
              {cat}
            </a>
          </li>
        ))}
      </ul>
    </div>

    {/* Tags */}
    <div>
      <h3 className="text-lg font-bold mb-4 uppercase">Tags</h3>
      <div className="flex flex-wrap gap-2">
        {['Art', 'Branding', 'Colors', 'Creative', 'Design', 'Digital', 'Ideas', 'Marketing', 'Photography', 'Project', 'Technology'].map(tag => (
          <a
            key={tag}
            href="#"
            className="px-3 py-1 text-xs border border-gray-300 hover:bg-black hover:text-white hover:border-black transition"
          >
            {tag}
          </a>
        ))}
      </div>
    </div>

    {/* Social */}
    <div>
      <h3 className="text-lg font-bold mb-4 uppercase">Social</h3>
      <div className="flex gap-3">
        {[Facebook, Twitter, Instagram].map((Icon, i) => (
          <a
            key={i}
            href="#"
            className="w-8 h-8 border border-gray-300 rounded flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition"
          >
            <Icon size={16} />
          </a>
        ))}
      </div>
    </div>

    {/* Instagram */}
    <div>
      <h3 className="text-lg font-bold mb-4 uppercase">Instagram</h3>
      <div className="grid grid-cols-3 gap-2">
        {instagramImages.map((img, i) => (
          <div
            key={i}
            className="aspect-square bg-cover bg-center rounded cursor-pointer hover:opacity-75 transition"
            style={{ backgroundImage: `url('${img}')` }}
          />
        ))}
      </div>
    </div>
  </div>
);

// Blog Card Component
const BlogCard = ({ blog, onBlogClick }) => (
  <article className="bg-white mb-12">
    <div
      className="w-full h-80 bg-cover bg-center mb-6 cursor-pointer hover:opacity-90 transition"
      style={{ backgroundImage: `url('${blog.image}')` }}
      onClick={() => onBlogClick(blog.slug)}
    />
    <div className="space-y-4">
      <div className="text-xs text-gray-500 uppercase">
        <a href="#" className="hover:text-black">{blog.category}</a>
        {' / '}
        <a href="#" className="hover:text-black">Ideas</a>
        {' / '}
        <a href="#" className="hover:text-black">Project</a>
      </div>
      <h2 className="text-3xl font-bold hover:text-gray-600 cursor-pointer" onClick={() => onBlogClick(blog.slug)}>
        {blog.title}
      </h2>
      <p className="text-gray-600 leading-relaxed">
        {blog.excerpt}
      </p>
      <button
        onClick={() => onBlogClick(blog.slug)}
        className="text-sm font-semibold hover:underline uppercase"
      >
        Read More →
      </button>
      <div className="pt-4 border-t border-gray-200 flex items-center justify-between text-xs text-gray-500">
        <span>By {blog.author}</span>
        <span>{blog.date}</span>
        <span>{blog.comments} Comment</span>
      </div>
    </div>
  </article>
);

// Blog Listing Component
const BlogListing = ({ onBlogClick }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredBlogs = blogs.filter(blog => {
    const query = searchQuery.toLowerCase();
    return (
      blog.title.toLowerCase().includes(query) ||
      blog.excerpt.toLowerCase().includes(query) ||
      blog.category.toLowerCase().includes(query) ||
      blog.tags.some(tag => tag.toLowerCase().includes(query))
    );
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div
        className="h-96 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/assets/Service/blog-1.jpg')" }}
      >
        <div className="text-center text-white">
          <h1 className="text-6xl font-bold mb-4">BLOG</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            {searchQuery && (
              <div className="mb-6 text-sm text-gray-600">
                Found {filteredBlogs.length} result{filteredBlogs.length !== 1 ? 's' : ''} for &quot;{searchQuery}&quot;
              </div>
            )}
            
            {filteredBlogs.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No blogs found matching your search.</p>
                <button
                  onClick={() => setSearchQuery('')}
                  className="mt-4 text-sm font-semibold hover:underline"
                >
                  Clear search
                </button>
              </div>
            ) : (
              filteredBlogs.map(blog => (
                <BlogCard key={blog.id} blog={blog} onBlogClick={onBlogClick} />
              ))
            )}
            
            {filteredBlogs.length > 0 && (
              <div className="flex items-center justify-center gap-2 mt-12">
                <button className="w-8 h-8 border border-gray-300 flex items-center justify-center hover:bg-black hover:text-white">
                  ←
                </button>
                {[1, 2, 3, 4, 5].map(num => (
                  <button
                    key={num}
                    className={`w-8 h-8 border flex items-center justify-center ${
                      num === 1
                        ? 'bg-black text-white border-black'
                        : 'border-gray-300 hover:bg-black hover:text-white'
                    }`}
                  >
                    {num}
                  </button>
                ))}
                <button className="w-8 h-8 border border-gray-300 flex items-center justify-center hover:bg-black hover:text-white">
                  →
                </button>
              </div>
            )}
          </div>

          <div className="lg:col-span-1">
            <Sidebar searchQuery={searchQuery} onSearchChange={setSearchQuery} />
          </div>
        </div>
      </div>

      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4 uppercase">About Us</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                This is Movers, a photography services creative business theme that will move you! It&apos;s the fastest way to get started.
              </p>
              <p className="text-xs text-gray-500 mt-4">
                A Templatemela Themes | ©2018 All Rights Reserved
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 uppercase">Latest News</h3>
              <p className="text-sm text-gray-400">
                Explore latest tech updates at this Moment!
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 uppercase">Instagram</h3>
              <div className="grid grid-cols-3 gap-2">
                {instagramImages.map((img, i) => (
                  <div
                    key={i}
                    className="aspect-square bg-cover bg-center rounded"
                    style={{ backgroundImage: `url('${img}')` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Single Blog Component with Navigation
const SingleBlog = ({ currentBlog, onBackClick, onBlogClick }) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  
  const otherBlogs = blogs.filter(b => b.slug !== currentBlog.slug);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div
        className="h-96 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/assets/Service/blog-1.jpg')" }}
      >
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold max-w-4xl mx-auto px-4">
            {currentBlog.title}
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-3">
            <article className="bg-white p-8">
              <div className="mb-6 text-xs text-gray-500">
                <a href="#" className="hover:text-black uppercase">{currentBlog.category}</a>
                {' / '}
                <a href="#" className="hover:text-black uppercase">Ideas</a>
                {' / '}
                <a href="#" className="hover:text-black uppercase">Project</a>
              </div>

              <div
                className="w-full h-96 bg-cover bg-center mb-8"
                style={{ backgroundImage: `url('${currentBlog.image}')` }}
              />

              <div 
                className="space-y-6 text-gray-600 leading-relaxed prose max-w-none"
                dangerouslySetInnerHTML={{ __html: currentBlog.content }}
              />

              <div className="mt-8 pt-6 border-t border-gray-200 flex items-center justify-between text-xs text-gray-500">
                <span>By {currentBlog.author}</span>
                <span>{currentBlog.date}</span>
                <span>{currentBlog.comments} Comment</span>
              </div>

              <button
                onClick={onBackClick}
                className="mt-8 px-6 py-3 bg-black text-white hover:bg-gray-800 transition uppercase text-sm font-semibold"
              >
                ← Back to Blog
              </button>
            </article>
          </div>

          {/* Desktop Sidebar Navigation */}
          <div className="hidden lg:block">
            <div className="sticky top-32 space-y-4">
              <h3 className="text-lg font-bold mb-4">Other Blogs</h3>
              {otherBlogs.map(blog => (
                <button
                  key={blog.slug}
                  onClick={() => onBlogClick(blog.slug)}
                  className="w-full px-4 py-3 border border-red-500 text-white rounded-md hover:bg-red-500 transition text-left"
                >
                  <div className="text-sm font-semibold">{blog.title}</div>
                  <div className="text-xs text-gray-400 mt-1">{blog.category}</div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Floating Menu */}
      {showMobileMenu && (
        <div className="lg:hidden fixed bottom-20 right-4 z-40 w-[90%] max-w-sm bg-zinc-900 rounded-xl p-5 shadow-2xl flex flex-col gap-4">
          {otherBlogs.map(blog => (
            <button
              key={blog.slug}
              onClick={() => {
                onBlogClick(blog.slug);
                setShowMobileMenu(false);
              }}
              className="border border-red-500 py-2 rounded-md hover:bg-red-500 hover:text-white transition text-white"
            >
              {blog.title.slice(0, 30)}...
            </button>
          ))}
        </div>
      )}

      <button
        onClick={() => setShowMobileMenu(!showMobileMenu)}
        className="lg:hidden fixed bottom-5 right-5 z-50 p-4 bg-red-500 text-white rounded-full shadow-xl"
        aria-label="Toggle Blog Menu"
      >
        {showMobileMenu ? <X size={24} /> : <Menu size={24} />}
      </button>

      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4 uppercase">About Us</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                This is Movers, a photography services creative business theme that will move you! It&apos;s the fastest way to get started.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 uppercase">Latest News</h3>
              <p className="text-sm text-gray-400">
                Explore latest tech updates at this Moment!
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 uppercase">Instagram</h3>
              <div className="grid grid-cols-3 gap-2">
                {instagramImages.map((img, i) => (
                  <div
                    key={i}
                    className="aspect-square bg-cover bg-center rounded"
                    style={{ backgroundImage: `url('${img}')` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Main Component with URL Routing
const BlogSystem = () => {
  const [currentPath, setCurrentPath] = useState(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname;
      if (path.startsWith('/blogs/')) {
        return path.replace('/blogs/', '');
      }
    }
    return 'listing';
  });

  const handleBlogClick = (slug) => {
    setCurrentPath(slug);
    window.history.pushState({}, '', `/blogs/${slug}`);
    window.scrollTo(0, 0);
  };

  const handleBackClick = () => {
    setCurrentPath('listing');
    window.history.pushState({}, '', '/blogs');
    window.scrollTo(0, 0);
  };

  React.useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      if (path === '/blogs' || path === '/blogs/') {
        setCurrentPath('listing');
      } else if (path.startsWith('/blogs/')) {
        setCurrentPath(path.replace('/blogs/', ''));
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  if (currentPath === 'listing') {
    return <BlogListing onBlogClick={handleBlogClick} />;
  }

  const currentBlog = blogs.find(b => b.slug === currentPath);

  if (!currentBlog) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Blog Not Found</h1>
          <button
            onClick={handleBackClick}
            className="px-6 py-3 bg-black text-white hover:bg-gray-800 transition"
          >
            Back to Blogs
          </button>
        </div>
      </div>
    );
  }

  return (
    <SingleBlog
      currentBlog={currentBlog}
      onBackClick={handleBackClick}
      onBlogClick={handleBlogClick}
    />
  );
};

export default BlogSystem;