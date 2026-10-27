'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Compass,
  MessageSquare,
  FileText,
  Search,
  ArrowRight,
  Sparkles,
  TrendingUp,
} from 'lucide-react';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');

  const features = [
    {
      title: 'Campus Info & Guides',
      description: 'Directory of hostels, mess menus, library timings, facility locations, and department contacts.',
      icon: Compass,
      href: '/campus-info',
      accentColor: 'from-blue-500 to-cyan-500',
      badge: 'Updated Daily',
      count: '45+ Campus Guides',
    },
    {
      title: 'Peer Help (Q&A)',
      description: 'Ask questions anonymously or publicly and get instant answers from fellow college seniors and peers.',
      icon: MessageSquare,
      href: '/peer-help',
      accentColor: 'from-indigo-500 to-purple-500',
      badge: 'Active Community',
      count: '320+ Questions Answered',
    },
    {
      title: 'Academic Resources',
      description: 'Free access to lecture notes, Previous Year Questions (PYQs), lab manuals, and syllabus guides.',
      icon: FileText,
      href: '/resources',
      accentColor: 'from-emerald-500 to-teal-500',
      badge: 'Free Downloads',
      count: '1,200+ Notes & PYQs',
    },
    {
      title: 'Lost & Found Board',
      description: 'Quickly report lost items across campus locations like labs, library, or canteen and retrieve them.',
      icon: Search,
      href: '/lost-found',
      accentColor: 'from-amber-500 to-orange-500',
      badge: 'Live Board',
      count: '88% Recovery Rate',
    },
  ];

  const recentTopics = [
    { tag: 'Mess Menu', title: 'South Mess Special Dinner Timing on Weekends', category: 'Campus Info', href: '/campus-info' },
    { tag: 'PYQ', title: 'Data Structures 3rd Sem End-Sem PYQs (2022-2024)', category: 'Resources', href: '/resources' },
    { tag: 'Q&A', title: 'How to get lab clearance signature from CSE Dean office?', category: 'Peer Help', href: '/peer-help' },
    { tag: 'Lost Item', title: 'Blue Boat Earbuds case lost in Central Library 2nd Floor', category: 'Lost & Found', href: '/lost-found' },
  ];

  return (
    <div className="space-y-16 pb-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-16 md:pt-20 md:pb-24 border-b border-slate-800/60 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center_top,rgba(37,99,235,0.15),transparent_50%)] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6 animate-pulse">
            <Sparkles className="w-4 h-4" />
            <span>100% Free Campus Peer Platform</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-tight">
            Free Campus Community & <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400 bg-clip-text text-transparent">
              Student Peer Help
            </span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
            Everything you need for student life in one place: campus guides, peer Q&A, exam notes & PYQs, and lost item tracking.
          </p>

          {/* Search Bar */}
          <div className="mt-8 max-w-2xl mx-auto">
            <div className="relative flex items-center shadow-2xl rounded-2xl overflow-hidden border border-slate-700 bg-slate-900/90 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500/20 transition-all">
              <Search className="w-5 h-5 text-slate-400 ml-4 shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search PYQs, campus guides, hostels, questions, or lost items..."
                className="w-full bg-transparent px-4 py-4 text-sm text-slate-100 placeholder-slate-400 focus:outline-none"
              />
              <Link
                href={searchQuery ? `/peer-help?q=${encodeURIComponent(searchQuery)}` : '/peer-help'}
                className="mr-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm rounded-xl transition-colors shrink-0 flex items-center space-x-1"
              >
                <span>Search</span>
              </Link>
            </div>
            <div className="mt-3 flex flex-wrap items-center justify-center gap-2 text-xs text-slate-400">
              <span className="text-slate-500">Popular:</span>
              <Link href="/resources?q=Data+Structures" className="hover:text-blue-400 underline decoration-slate-700">Data Structures PYQ</Link>
              <span>•</span>
              <Link href="/campus-info?tab=mess" className="hover:text-blue-400 underline decoration-slate-700">Mess Timing</Link>
              <span>•</span>
              <Link href="/campus-info?tab=facilities" className="hover:text-blue-400 underline decoration-slate-700">Library Hours</Link>
              <span>•</span>
              <Link href="/lost-found" className="hover:text-blue-400 underline decoration-slate-700">Lost ID Card</Link>
            </div>
          </div>

          {/* Quick Stats Banner */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto border-t border-slate-800/80 pt-8 text-center">
            <div className="p-3">
              <div className="text-2xl font-bold text-white">4,800+</div>
              <div className="text-xs text-slate-400 mt-1">Active Campus Students</div>
            </div>
            <div className="p-3">
              <div className="text-2xl font-bold text-blue-400">1,200+</div>
              <div className="text-xs text-slate-400 mt-1">Free Study Notes & PYQs</div>
            </div>
            <div className="p-3">
              <div className="text-2xl font-bold text-emerald-400">95%</div>
              <div className="text-xs text-slate-400 mt-1">Peer Question Response Rate</div>
            </div>
            <div className="p-3">
              <div className="text-2xl font-bold text-cyan-400">100%</div>
              <div className="text-xs text-slate-400 mt-1">Free & Open Access</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Core Features Navigation Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Explore Campus Hubs
          </h2>
          <p className="mt-2 text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            Choose a section to quickly find verified information or ask your fellow students for guidance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((item) => {
            const IconComponent = item.icon;
            return (
              <Link
                key={item.title}
                href={item.href}
                className="group relative rounded-2xl border border-slate-800 bg-slate-900/70 p-6 transition-all duration-300 hover:border-slate-700 hover:bg-slate-900 hover:shadow-xl hover:shadow-blue-500/5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${item.accentColor} text-white shadow-md`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors flex items-center space-x-2">
                    <span>{item.title}</span>
                  </h3>

                  <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between text-xs font-medium">
                  <span className="text-slate-500">{item.count}</span>
                  <span className="text-blue-400 group-hover:translate-x-1 transition-transform inline-flex items-center space-x-1">
                    <span>Browse Section</span>
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Trending & Live Peer Activity */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 md:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center space-x-2 text-blue-400 text-xs font-semibold tracking-wide uppercase mb-1">
                <TrendingUp className="w-4 h-4" />
                <span>Live Feed</span>
              </div>
              <h3 className="text-xl font-bold text-white">Trending Campus Discussions & Files</h3>
            </div>
            <Link
              href="/peer-help"
              className="text-xs font-semibold text-blue-400 hover:text-blue-300 inline-flex items-center space-x-1 self-start sm:self-auto"
            >
              <span>View All Discussions</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {recentTopics.map((topic, i) => (
              <Link
                key={i}
                href={topic.href}
                className="p-4 rounded-xl border border-slate-800 bg-slate-950/60 hover:border-slate-700 transition-all flex flex-col justify-between group"
              >
                <div>
                  <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    {topic.tag}
                  </span>
                  <h4 className="mt-2 text-sm font-medium text-slate-200 group-hover:text-blue-300 line-clamp-2">
                    {topic.title}
                  </h4>
                </div>
                <div className="mt-4 text-xs text-slate-500 flex items-center justify-between">
                  <span>{topic.category}</span>
                  <span className="group-hover:translate-x-0.5 transition-transform text-blue-400">&rarr;</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden border border-blue-500/30 bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950 p-8 sm:p-12 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Stuck on a campus query or looking for study notes?</h2>
            <p className="mt-2 text-slate-300 text-sm sm:text-base">
              Join thousands of fellow students who share exam resources, solve doubts, and make campus navigation effortless.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link
              href="/peer-help?ask=true"
              className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm shadow-lg shadow-blue-500/25 transition-all text-center"
            >
              Ask a Question
            </Link>
            <Link
              href="/resources"
              className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-sm border border-slate-700 transition-all text-center"
            >
              Browse PYQs & Notes
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
