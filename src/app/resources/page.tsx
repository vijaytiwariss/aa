'use client';

import React, { useState } from 'react';
import {
  FileText,
  Download,
  Search,
  BookOpen,
  Filter,
  GraduationCap,
} from 'lucide-react';

interface AcademicResource {
  id: string;
  title: string;
  subject: string;
  category: 'PYQ' | 'Lecture Notes' | 'Lab Manual' | 'Syllabus';
  semester: string;
  department: string;
  author: string;
  fileSize: string;
  year: string;
  downloads: number;
  format: 'PDF' | 'DOCX';
}

export default function ResourcesPage() {
  const [resources, setResources] = useState<AcademicResource[]>([
    {
      id: 'res-1',
      title: 'Data Structures & Algorithms - End Semester Question Paper (2023-24)',
      subject: 'Data Structures (CS201)',
      category: 'PYQ',
      semester: 'Semester 3',
      department: 'Computer Science',
      author: 'Prof. A. K. Sharma',
      fileSize: '2.4 MB',
      year: '2023',
      downloads: 480,
      format: 'PDF',
    },
    {
      id: 'res-2',
      title: 'Complete Operating Systems Lecture Handwritten Notes (Unit 1 to 5)',
      subject: 'Operating Systems (CS302)',
      category: 'Lecture Notes',
      semester: 'Semester 4',
      department: 'Computer Science',
      author: 'Topper Notes (Neha R.)',
      fileSize: '14.8 MB',
      year: '2024',
      downloads: 1250,
      format: 'PDF',
    },
    {
      id: 'res-3',
      title: 'Analog Electronics Mid-Term Previous Year Questions with Solutions',
      subject: 'Analog Circuits (EC202)',
      category: 'PYQ',
      semester: 'Semester 3',
      department: 'Electronics',
      author: 'ECE Student Association',
      fileSize: '4.1 MB',
      year: '2023',
      downloads: 390,
      format: 'PDF',
    },
    {
      id: 'res-4',
      title: 'Microprocessors & Microcontrollers Lab Manual & Assembly Programs',
      subject: 'Microprocessors (EC301)',
      category: 'Lab Manual',
      semester: 'Semester 5',
      department: 'Electronics',
      author: 'Lab Instructor Staff',
      fileSize: '5.6 MB',
      year: '2024',
      downloads: 620,
      format: 'PDF',
    },
    {
      id: 'res-5',
      title: 'Thermodynamics & Heat Transfer Formula Sheet & PYQ Solutions',
      subject: 'Thermodynamics (ME201)',
      category: 'Lecture Notes',
      semester: 'Semester 3',
      department: 'Mechanical',
      author: 'Mech Club',
      fileSize: '3.2 MB',
      year: '2022',
      downloads: 510,
      format: 'PDF',
    },
    {
      id: 'res-6',
      title: 'Official Academic Curriculum & Syllabus Guide (2024 Batch Update)',
      subject: 'General Curriculum',
      category: 'Syllabus',
      semester: 'All Semesters',
      department: 'General',
      author: 'Academic Cell',
      fileSize: '1.1 MB',
      year: '2024',
      downloads: 980,
      format: 'PDF',
    },
  ]);

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedSemester, setSelectedSemester] = useState<string>('All');
  const [selectedDept, setSelectedDept] = useState<string>('All');

  const categories = ['All', 'PYQ', 'Lecture Notes', 'Lab Manual', 'Syllabus'];
  const semesters = ['All', 'Semester 1', 'Semester 2', 'Semester 3', 'Semester 4', 'Semester 5', 'Semester 6', 'Semester 7', 'Semester 8'];
  const departments = ['All', 'Computer Science', 'Electronics', 'Mechanical', 'General'];

  const filteredResources = resources.filter((res) => {
    const matchesCategory = selectedCategory === 'All' || res.category === selectedCategory;
    const matchesSemester = selectedSemester === 'All' || res.semester === selectedSemester;
    const matchesDept = selectedDept === 'All' || res.department === selectedDept;
    const matchesSearch =
      res.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      res.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
      res.author.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSemester && matchesDept && matchesSearch;
  });

  const handleDownload = (resId: string) => {
    setResources((prev) =>
      prev.map((r) => (r.id === resId ? { ...r, downloads: r.downloads + 1 } : r))
    );
    alert('Simulated download: File generation started in background.');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Header Banner */}
      <div className="rounded-3xl bg-gradient-to-r from-teal-950 via-slate-900 to-slate-900 border border-slate-800 p-6 sm:p-10">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold border border-emerald-500/20">
            <FileText className="w-3.5 h-3.5" />
            <span>Open Academic Repository</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Academic Resources & PYQs
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Download free exam papers, topper handwritten notes, lab code manuals, and syllabus guides curated by seniors.
          </p>
        </div>

        {/* Main Search Input */}
        <div className="mt-8 max-w-xl relative">
          <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by subject code, topic, or paper title..."
            className="w-full bg-slate-950/80 border border-slate-700/80 rounded-xl pl-12 pr-4 py-3 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
          />
        </div>
      </div>

      {/* Filter Controls Bar */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 space-y-4">
        <div className="flex items-center space-x-2 text-xs font-semibold text-slate-400 uppercase tracking-wide">
          <Filter className="w-4 h-4 text-emerald-400" />
          <span>Filter Resources</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {/* Category Filter */}
          <div>
            <label className="block text-xs font-medium text-slate-400 mb-1">Type / Category</label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-emerald-500"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          {/* Department Filter */}
          <div>
            <label className="block text-xs font-medium text-slate-400 mb-1">Department</label>
            <select
              value={selectedDept}
              onChange={(e) => setSelectedDept(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-emerald-500"
            >
              {departments.map((dept) => (
                <option key={dept} value={dept}>
                  {dept}
                </option>
              ))}
            </select>
          </div>

          {/* Semester Filter */}
          <div>
            <label className="block text-xs font-medium text-slate-400 mb-1">Semester</label>
            <select
              value={selectedSemester}
              onChange={(e) => setSelectedSemester(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-emerald-500"
            >
              {semesters.map((sem) => (
                <option key={sem} value={sem}>
                  {sem}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Resource Cards Grid */}
      {filteredResources.length === 0 ? (
        <div className="text-center py-16 rounded-2xl border border-slate-800 bg-slate-900/40 p-8">
          <BookOpen className="w-12 h-12 text-slate-500 mx-auto mb-3" />
          <h3 className="text-lg font-semibold text-white">No academic resources found</h3>
          <p className="text-slate-400 text-sm mt-1">Try resetting your category or semester filters.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map((res) => (
            <div
              key={res.id}
              className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5 hover:border-slate-700 transition-all flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold px-2.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    {res.category}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400 bg-slate-800 px-2 py-0.5 rounded">
                    {res.format} • {res.fileSize}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white group-hover:text-emerald-400 transition-colors leading-snug">
                  {res.title}
                </h3>

                <div className="space-y-1 text-xs text-slate-400">
                  <div className="flex items-center space-x-1.5 text-slate-300">
                    <BookOpen className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{res.subject}</span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <GraduationCap className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                    <span>{res.department} • {res.semester}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs">
                <div className="text-slate-500">
                  <span>Uploaded by </span>
                  <span className="text-slate-300 font-medium">{res.author}</span>
                </div>

                <button
                  onClick={() => handleDownload(res.id)}
                  className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-medium shadow-md shadow-emerald-600/20 transition-all"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>({res.downloads})</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
