'use client';

import React, { useState } from 'react';
import {
  Compass,
  Building2,
  Utensils,
  Clock,
  Phone,
  MapPin,
  Search,
  BookOpen,
  Info,
} from 'lucide-react';

export default function CampusInfoPage() {
  const [activeTab, setActiveTab] = useState<'all' | 'hostels' | 'mess' | 'facilities' | 'academic'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const guides = [
    {
      id: 'h1',
      category: 'hostels',
      title: 'Boys Hostel 3 (BH-3 - Newton Hall)',
      location: 'North Campus Quadrangle',
      contact: '+1 (555) 234-5678 (Warden Office)',
      timings: 'Curfew: 10:30 PM (Mon-Sun)',
      details: '4 floors, double occupancy rooms, 24x7 study common room, high-speed Wi-Fi, badminton court inside premises.',
      tags: ['Hostel', 'Boys', 'Wi-Fi', 'Study Room'],
    },
    {
      id: 'h2',
      category: 'hostels',
      title: 'Girls Hostel 2 (GH-2 - Kalpana Chawla Hall)',
      location: 'South Campus Quadrangle',
      contact: '+1 (555) 234-5679 (Warden Office)',
      timings: 'Curfew: 10:00 PM (Mon-Sun)',
      details: 'Air-conditioned common rooms, in-house night mess till 1:00 AM, biometric gate entry, laundry room on ground floor.',
      tags: ['Hostel', 'Girls', 'AC Lounge', 'Night Mess'],
    },
    {
      id: 'm1',
      category: 'mess',
      title: 'Central Mess (Block A & B)',
      location: 'Adjacent to Student Activity Center',
      contact: 'Mess Supervisor: Ext 4021',
      timings: 'Breakfast: 7:30-9:30 AM | Lunch: 12:00-2:00 PM | Dinner: 7:30-9:30 PM',
      details: 'Serves North & South Indian meals. Special meal menu on Wednesday dinner & Sunday lunch. Guest coupons available at gate counter.',
      tags: ['Mess', 'Dining', 'Vegetarian', 'Non-Veg Option'],
    },
    {
      id: 'm2',
      category: 'mess',
      title: 'Night Canteen & Coffee Hub',
      location: 'Ground Floor, Student Plaza',
      contact: 'Ext 4099',
      timings: '4:00 PM - 2:00 AM Daily',
      details: 'Snacks, tea, coffee, sandwiches, quick bites, and printout facility. Ideal for late-night exam prep.',
      tags: ['Canteen', 'Late Night', 'Snacks', 'Coffee'],
    },
    {
      id: 'f1',
      category: 'facilities',
      title: 'Central Library & Digital Resource Center',
      location: 'Main Academic Block (3rd Floor)',
      contact: 'Librarian Desk: lib-desk@silentcampus.edu',
      timings: '8:00 AM - 11:00 PM (Extends to 2:00 AM during mid-terms & end-sems)',
      details: 'Over 80,000 physical volumes, silence zones, computer lab with IEEE/ACM access, group study rooms (reservation required).',
      tags: ['Library', 'Study Zone', 'Computers', 'Digital Access'],
    },
    {
      id: 'f2',
      category: 'facilities',
      title: 'Student Health & Wellness Center',
      location: 'Near West Gate Gate 2',
      contact: 'Emergency Line: +1 (555) 911-0000',
      timings: 'Doctor OPD: 9:00 AM - 5:00 PM | Ambulance: 24x7',
      details: 'Free general consultation, basic medicine dispensary, first-aid, emergency ambulance support, and mental health counselor on appointment.',
      tags: ['Medical', '24x7 Emergency', 'OPD', 'Counseling'],
    },
    {
      id: 'a1',
      category: 'academic',
      title: 'Computer Science & IT Block',
      location: 'East Wing Academic Complex',
      contact: 'Department Admin: cs-dept@silentcampus.edu',
      timings: 'Labs open 8:30 AM - 8:00 PM',
      details: 'High-performance AI/ML labs, Linux labs, Cisco Networking lab, Dean office clearance desk.',
      tags: ['Academic', 'CS Dept', 'Computer Labs', 'Dean Office'],
    },
    {
      id: 'a2',
      category: 'academic',
      title: 'Mechanical & Electrical Engineering Workshop',
      location: 'South Engineering Yard',
      contact: 'Workshop In-charge: Ext 5012',
      timings: '9:00 AM - 5:00 PM (Closed Sundays)',
      details: 'CNC machines, 3D printing lab, robotics arena, project fabrication tools for capstone projects.',
      tags: ['Academic', 'Workshop', '3D Printing', 'Robotics'],
    },
  ];

  const filteredGuides = guides.filter((item) => {
    const matchesTab = activeTab === 'all' || item.category === activeTab;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.details.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesTab && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Header Banner */}
      <div className="rounded-3xl bg-gradient-to-r from-blue-950 via-slate-900 to-slate-900 border border-slate-800 p-6 sm:p-10">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-semibold border border-blue-500/20">
            <Compass className="w-3.5 h-3.5" />
            <span>Official & Peer Verified Guides</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Campus Information Directory
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Find essential timings, location maps, warden contacts, mess menus, library hours, and departmental guidebooks for your campus.
          </p>
        </div>

        {/* Search bar inside header */}
        <div className="mt-8 max-w-xl relative">
          <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search hostels, mess schedule, health center, library..."
            className="w-full bg-slate-950/80 border border-slate-700/80 rounded-xl pl-12 pr-4 py-3 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Tabs Filter */}
      <div className="flex flex-wrap items-center gap-2 border-b border-slate-800 pb-4">
        {[
          { id: 'all', label: 'All Campus Guides', icon: Compass },
          { id: 'hostels', label: 'Hostels & Resident Halls', icon: Building2 },
          { id: 'mess', label: 'Mess & Dining Timings', icon: Utensils },
          { id: 'facilities', label: 'Library & Health Facilities', icon: BookOpen },
          { id: 'academic', label: 'Academic Blocks & Labs', icon: Info },
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as 'all' | 'hostels' | 'mess' | 'facilities' | 'academic')}
              className={`inline-flex items-center space-x-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                isActive
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20 font-semibold'
                  : 'bg-slate-900 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-800'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Guides Grid */}
      {filteredGuides.length === 0 ? (
        <div className="text-center py-16 rounded-2xl border border-slate-800 bg-slate-900/40 p-8">
          <Info className="w-12 h-12 text-slate-500 mx-auto mb-3" />
          <h3 className="text-lg font-semibold text-white">No campus guides found</h3>
          <p className="text-slate-400 text-sm mt-1">Try adjusting your search query or filter tab.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredGuides.map((guide) => (
            <div
              key={guide.id}
              className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6 hover:border-slate-700 transition-all space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex flex-wrap items-center gap-2">
                  {guide.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-slate-800 text-blue-400 border border-slate-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-lg font-bold text-white leading-snug">{guide.title}</h3>

                <p className="text-sm text-slate-300 leading-relaxed">{guide.details}</p>
              </div>

              <div className="pt-4 border-t border-slate-800/80 space-y-2 text-xs text-slate-400">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-slate-400 shrink-0" />
                  <span className="text-slate-200">{guide.location}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-blue-400 shrink-0" />
                  <span className="text-slate-300">{guide.timings}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="text-slate-300 font-mono">{guide.contact}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
