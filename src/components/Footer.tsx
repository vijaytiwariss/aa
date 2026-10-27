'use client';

import React from 'react';
import Link from 'next/link';
import { GraduationCap, Heart, ShieldCheck, HelpCircle, FileText, Compass, Search } from 'lucide-react';

export default function Footer() {
  const currentYear = 2025;

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="space-y-4 md:col-span-1">
            <Link href="/" className="flex items-center space-x-2 text-white font-bold text-lg">
              <div className="p-1.5 rounded-lg bg-blue-600">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl tracking-tight bg-gradient-to-r from-white via-slate-200 to-blue-400 bg-clip-text text-transparent">
                SilentCampus
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              A free, open campus community platform designed by students for students. Access campus guides, peer study materials, Q&A, and community boards seamlessly.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-base">Quick Navigation</h3>
            <ul className="space-y-2.5">
              <li>
                <Link href="/campus-info" className="hover:text-blue-400 transition-colors flex items-center space-x-2">
                  <Compass className="w-4 h-4 text-blue-500" />
                  <span>Campus Info & Guides</span>
                </Link>
              </li>
              <li>
                <Link href="/peer-help" className="hover:text-blue-400 transition-colors flex items-center space-x-2">
                  <HelpCircle className="w-4 h-4 text-blue-500" />
                  <span>Peer Help Q&A</span>
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-blue-400 transition-colors flex items-center space-x-2">
                  <FileText className="w-4 h-4 text-blue-500" />
                  <span>Academic Resources & PYQs</span>
                </Link>
              </li>
              <li>
                <Link href="/lost-found" className="hover:text-blue-400 transition-colors flex items-center space-x-2">
                  <Search className="w-4 h-4 text-blue-500" />
                  <span>Lost & Found Board</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Guidelines & Peer Culture */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-base">Community Pillars</h3>
            <ul className="space-y-2.5">
              <li className="flex items-start space-x-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>100% Free & Open Access for Students</span>
              </li>
              <li className="flex items-start space-x-2">
                <Heart className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <span>Peer-to-Peer Help & Knowledge Sharing</span>
              </li>
              <li className="flex items-start space-x-2">
                <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>Respectful & Safe Student Environment</span>
              </li>
            </ul>
          </div>

          {/* Mission & Status */}
          <div className="space-y-3">
            <h3 className="text-white font-semibold mb-4 text-base">SilentCampus Network</h3>
            <p className="text-xs text-slate-400">
              SilentCampus operates independently to promote transparent student communication, academic resource equality, and rapid peer assistance across college departments.
            </p>
            <div className="pt-2">
              <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Campus Status: All Systems Live</span>
              </span>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 space-y-3 sm:space-y-0">
          <p>© {currentYear} SilentCampus Platform. All rights reserved.</p>
          <p className="flex items-center space-x-1">
            <span>Built with care for college students nationwide</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
