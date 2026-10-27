'use client';

import React, { useState } from 'react';
import {
  Search,
  MapPin,
  Clock,
  PlusCircle,
  CheckCircle2,
  Phone,
  X,
  FileCheck2,
} from 'lucide-react';

interface LostFoundItem {
  id: string;
  type: 'Lost' | 'Found';
  title: string;
  description: string;
  location: string;
  date: string;
  contactName: string;
  contactDetail: string;
  status: 'Open' | 'Resolved';
  category: string;
}

export default function LostFoundPage() {
  const [items, setItems] = useState<LostFoundItem[]>([
    {
      id: 'lf-1',
      type: 'Lost',
      title: 'Black Lenovo ThinkPad Laptop Charger (65W Type-C)',
      description: 'Left near the Central Library 2nd floor silent reading room bench around 4:00 PM.',
      location: 'Central Library (2nd Floor)',
      date: 'Yesterday',
      contactName: 'Siddharth (CS 3rd Yr)',
      contactDetail: 'sid-cs@silentcampus.edu',
      status: 'Open',
      category: 'Electronics',
    },
    {
      id: 'lf-2',
      type: 'Found',
      title: 'College Blue Lanyard ID Card (Name: Rohan Gupta)',
      description: 'Found on the ground near South Mess entrance table. Handed over to security desk.',
      location: 'South Mess Security Post',
      date: 'Today, 10:15 AM',
      contactName: 'Mess Security Guard Desk',
      contactDetail: 'Security Post Ext: 104',
      status: 'Open',
      category: 'ID Cards & Keys',
    },
    {
      id: 'lf-3',
      type: 'Lost',
      title: 'Silver Titan Wristwatch with Leather Strap',
      description: 'Misplaced near the Badminton Court in Student Sports Complex during evening practice.',
      location: 'Sports Complex Badminton Court',
      date: '2 days ago',
      contactName: 'Ananya (ECE)',
      contactDetail: '+1 (555) 019-2834',
      status: 'Resolved',
      category: 'Personal Belongings',
    },
    {
      id: 'lf-4',
      type: 'Found',
      title: 'Set of 3 Keys on a Metal Keychain with Car Logo',
      description: 'Found under desk B-12 in Electronics Lab 3. Kept safely with lab assistant.',
      location: 'ECE Lab 3 Desk B-12',
      date: 'Yesterday',
      contactName: 'Mr. Verma (Lab Asst.)',
      contactDetail: 'ECE Dept Office Desk',
      status: 'Open',
      category: 'ID Cards & Keys',
    },
  ]);

  const [activeTab, setActiveTab] = useState<'All' | 'Lost' | 'Found' | 'Resolved'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Form State
  const [reportType, setReportType] = useState<'Lost' | 'Found'>('Lost');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [category, setCategory] = useState('Electronics');
  const [contactName, setContactName] = useState('');
  const [contactDetail, setContactDetail] = useState('');

  const handleCreateReport = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !location.trim()) return;

    const newItem: LostFoundItem = {
      id: `lf-${Date.now()}`,
      type: reportType,
      title,
      description,
      location,
      date: 'Just now',
      contactName: contactName || 'Anonymous Student',
      contactDetail: contactDetail || 'Contact via Peer Help',
      status: 'Open',
      category,
    };

    setItems([newItem, ...items]);
    setTitle('');
    setDescription('');
    setLocation('');
    setContactName('');
    setContactDetail('');
    setIsModalOpen(false);
  };

  const handleMarkResolved = (id: string) => {
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, status: 'Resolved' } : item))
    );
  };

  const filteredItems = items.filter((item) => {
    const matchesTab =
      activeTab === 'All'
        ? true
        : activeTab === 'Resolved'
        ? item.status === 'Resolved'
        : item.type === activeTab && item.status !== 'Resolved';

    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesTab && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Header Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 rounded-3xl bg-gradient-to-r from-amber-950 via-slate-900 to-slate-900 border border-slate-800 p-6 sm:p-10">
        <div className="space-y-3 max-w-2xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-semibold border border-amber-500/20">
            <Search className="w-3.5 h-3.5" />
            <span>Campus Community Notice Board</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Lost & Found Belongings
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Lost something on campus or found someone else&apos;s item? Post a quick report to help reunite belongings with their owners.
          </p>
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-semibold text-sm shadow-lg shadow-amber-600/20 transition-all shrink-0"
        >
          <PlusCircle className="w-5 h-5" />
          <span>Report Item</span>
        </button>
      </div>

      {/* Search & Filter Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="sm:col-span-2 relative">
          <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search lost items by name, location (e.g. library, mess, lab)..."
            className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-12 pr-4 py-3 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-amber-500"
          />
        </div>

        <div className="flex items-center gap-2 overflow-x-auto">
          {['All', 'Lost', 'Found', 'Resolved'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as 'All' | 'Lost' | 'Found' | 'Resolved')}
              className={`px-4 py-2.5 rounded-xl text-xs font-semibold transition-colors shrink-0 ${
                activeTab === tab
                  ? 'bg-amber-600 text-white shadow-md shadow-amber-600/20'
                  : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-white'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Items Grid */}
      {filteredItems.length === 0 ? (
        <div className="text-center py-16 rounded-2xl border border-slate-800 bg-slate-900/40 p-8">
          <Search className="w-12 h-12 text-slate-500 mx-auto mb-3" />
          <h3 className="text-lg font-semibold text-white">No items found</h3>
          <p className="text-slate-400 text-sm mt-1">Try searching with a different keyword or filter tab.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className={`rounded-2xl border p-6 transition-all flex flex-col justify-between space-y-4 ${
                item.status === 'Resolved'
                  ? 'bg-slate-900/40 border-slate-800/60 opacity-75'
                  : item.type === 'Lost'
                  ? 'bg-slate-900/90 border-amber-500/30 hover:border-amber-500/60'
                  : 'bg-slate-900/90 border-blue-500/30 hover:border-blue-500/60'
              }`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span
                      className={`text-[11px] font-bold px-2.5 py-0.5 rounded-md ${
                        item.type === 'Lost'
                          ? 'bg-rose-500/10 text-rose-400 border border-rose-500/20'
                          : 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                      }`}
                    >
                      {item.type.toUpperCase()} ITEM
                    </span>
                    <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                      {item.category}
                    </span>
                  </div>

                  {item.status === 'Resolved' ? (
                    <span className="inline-flex items-center space-x-1 text-xs font-semibold text-slate-400">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span>Returned / Resolved</span>
                    </span>
                  ) : (
                    <button
                      onClick={() => handleMarkResolved(item.id)}
                      className="text-xs text-slate-400 hover:text-emerald-400 transition-colors flex items-center space-x-1"
                      title="Mark as reunited"
                    >
                      <FileCheck2 className="w-3.5 h-3.5" />
                      <span>Mark Resolved</span>
                    </button>
                  )}
                </div>

                <h3 className="text-lg font-bold text-white leading-snug">{item.title}</h3>

                <p className="text-sm text-slate-300 leading-relaxed">{item.description}</p>
              </div>

              <div className="pt-4 border-t border-slate-800/80 space-y-2 text-xs text-slate-400">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                  <span className="text-slate-200">{item.location}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-slate-500 shrink-0" />
                  <span>Reported: {item.date}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                  <span className="text-slate-200 font-medium">Contact: {item.contactName} ({item.contactDetail})</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Report Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-lg w-full p-6 space-y-5 shadow-2xl relative">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <h3 className="text-xl font-bold text-white flex items-center space-x-2">
                <PlusCircle className="w-5 h-5 text-amber-400" />
                <span>Report Campus Belonging</span>
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCreateReport} className="space-y-4 text-sm">
              <div>
                <label className="block text-slate-300 font-medium mb-1">Notice Type</label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setReportType('Lost')}
                    className={`py-2 rounded-xl text-xs font-bold border transition-all ${
                      reportType === 'Lost'
                        ? 'bg-rose-500/20 border-rose-500 text-rose-300'
                        : 'bg-slate-950 border-slate-800 text-slate-400'
                    }`}
                  >
                    I LOST AN ITEM
                  </button>
                  <button
                    type="button"
                    onClick={() => setReportType('Found')}
                    className={`py-2 rounded-xl text-xs font-bold border transition-all ${
                      reportType === 'Found'
                        ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300'
                        : 'bg-slate-950 border-slate-800 text-slate-400'
                    }`}
                  >
                    I FOUND AN ITEM
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-slate-300 font-medium mb-1">Item Title & Description</label>
                <input
                  type="text"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="e.g. Blue Boat Earbuds Case in Library"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-medium mb-1">Item Details & Context</label>
                <textarea
                  rows={3}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Mention key details like color, brand, distinct marks..."
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-300 font-medium mb-1">Campus Location</label>
                  <input
                    type="text"
                    required
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="e.g. Central Library 2nd Floor"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-medium mb-1">Category</label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-amber-500"
                  >
                    <option value="Electronics">Electronics</option>
                    <option value="ID Cards & Keys">ID Cards & Keys</option>
                    <option value="Personal Belongings">Personal Belongings</option>
                    <option value="Books & Notes">Books & Notes</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-300 font-medium mb-1">Your Name / Office</label>
                  <input
                    type="text"
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    placeholder="e.g. Rahul S. (CSE)"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-medium mb-1">Contact Phone / Email</label>
                  <input
                    type="text"
                    value={contactDetail}
                    onChange={(e) => setContactDetail(e.target.value)}
                    placeholder="e.g. email@campus.edu or mobile"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-amber-600 hover:bg-amber-500 text-white text-xs font-semibold shadow-md shadow-amber-600/20"
                >
                  Submit Notice
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
