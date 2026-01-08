"use client";
import { Home, Search, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 text-center max-w-2xl mx-auto">
        {/* 404 Number with glitch effect */}
        <div className="mb-8 relative">
          <h1 className="text-9xl md:text-[12rem] font-bold text-transparent bg-clip-text bg-linear-to-r from-purple-400 via-pink-400 to-blue-400 animate-pulse">
            404
          </h1>
          <div className="absolute inset-0 text-9xl md:text-[12rem] font-bold text-purple-500/20 blur-sm">
            404
          </div>
        </div>

        {/* Main message */}
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
          Page Not Found
        </h2>

        <p className="text-gray-300 text-lg mb-12 max-w-md mx-auto">
          Oops! The page you&apos;re looking for seems to have vanished into the
          digital void.
        </p>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/"
            className="group flex items-center gap-2 px-8 py-4 bg-linear-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105"
          >
            <Home className="w-5 h-5" />
            Go Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="group flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
          >
            <ArrowLeft className="w-5 h-5" />
            Go Back
          </button>
        </div>

        {/* Search suggestion */}
        <div className="mt-12 flex items-center justify-center gap-2 text-gray-400 text-sm">
          <Search className="w-4 h-4" />
          <p>Try searching for what you need</p>
        </div>

        {/* Floating elements */}
        <div className="absolute top-10 left-10 w-20 h-20 border-2 border-purple-400/30 rounded-lg rotate-12 animate-bounce"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 border-2 border-blue-400/30 rounded-full animate-ping"></div>
      </div>
    </div>
  );
}
