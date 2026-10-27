'use client';

import React, { useState } from 'react';
import {
  MessageSquare,
  ThumbsUp,
  MessageCircle,
  HelpCircle,
  Search,
  PlusCircle,
  UserCheck,
  Clock,
  CheckCircle2,
  AlertCircle,
  X,
} from 'lucide-react';

interface Question {
  id: string;
  title: string;
  description: string;
  author: string;
  isAnonymous: boolean;
  department: string;
  upvotes: number;
  answersCount: number;
  tags: string[];
  createdAt: string;
  isResolved: boolean;
}

export default function PeerHelpPage() {
  const [questions, setQuestions] = useState<Question[]>([
    {
      id: 'q1',
      title: 'How to register for elective courses in 4th Semester without timetable collision?',
      description: 'The academic portal gives a prerequisite warning for Machine Learning (CS402) when paired with Cloud Computing. Has anyone resolved this with the HOD signature?',
      author: 'Rahul S. (CSE 3rd Year)',
      isAnonymous: false,
      department: 'Computer Science',
      upvotes: 18,
      answersCount: 5,
      tags: ['Academics', 'Electives', 'Course Registration'],
      createdAt: '2 hours ago',
      isResolved: true,
    },
    {
      id: 'q2',
      title: 'What are the rules regarding overnight library access during end-semester exams?',
      description: 'Do we need a separate hall ticket printout or works with normal RFID student ID card? Is the ground floor tea stall open past midnight?',
      author: 'Anonymous Student',
      isAnonymous: true,
      department: 'General',
      upvotes: 24,
      answersCount: 8,
      tags: ['Library', 'Exams', 'Campus Life'],
      createdAt: '5 hours ago',
      isResolved: false,
    },
    {
      id: 'q3',
      title: 'Which mess has the best vegetarian food options on weekends?',
      description: 'First year hosteller here in BH-1. Looking for mess transfer recommendations for next month.',
      author: 'Priya Verma (ECE 1st Year)',
      isAnonymous: false,
      department: 'Electronics',
      upvotes: 12,
      answersCount: 6,
      tags: ['Mess', 'Hostel Life', 'Food'],
      createdAt: '1 day ago',
      isResolved: true,
    },
    {
      id: 'q4',
      title: 'Where can I submit original Medical Certificate for attendance shortage waiver?',
      description: 'Missed 2 weeks of Signal Processing lab due to viral fever. Should I submit at Student Section counter or directly to Dean Academics?',
      author: 'Aman Deep (EE 2nd Year)',
      isAnonymous: false,
      department: 'Electrical',
      upvotes: 9,
      answersCount: 3,
      tags: ['Attendance', 'Medical', 'Academic Office'],
      createdAt: '2 days ago',
      isResolved: false,
    },
  ]);

  const [filterDepartment, setFilterDepartment] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // Form state
  const [newTitle, setNewTitle] = useState('');
  const [newDesc, setNewDesc] = useState('');
  const [newDept, setNewDept] = useState('Computer Science');
  const [newTagInput, setNewTagInput] = useState('Academics');
  const [isAnon, setIsAnon] = useState(false);

  const handleUpvote = (id: string) => {
    setQuestions((prev) =>
      prev.map((q) => (q.id === id ? { ...q, upvotes: q.upvotes + 1 } : q))
    );
  };

  const handleAddQuestion = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim() || !newDesc.trim()) return;

    const newQ: Question = {
      id: `q-${Date.now()}`,
      title: newTitle,
      description: newDesc,
      author: isAnon ? 'Anonymous Student' : 'You (Student)',
      isAnonymous: isAnon,
      department: newDept,
      upvotes: 1,
      answersCount: 0,
      tags: newTagInput.split(',').map((t) => t.trim()).filter(Boolean),
      createdAt: 'Just now',
      isResolved: false,
    };

    setQuestions([newQ, ...questions]);
    setNewTitle('');
    setNewDesc('');
    setIsModalOpen(false);
  };

  const departments = ['All', 'Computer Science', 'Electronics', 'Electrical', 'Mechanical', 'General'];

  const filteredQuestions = questions.filter((q) => {
    const matchesDept = filterDepartment === 'All' || q.department === filterDepartment;
    const matchesSearch =
      q.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesDept && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Header Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 rounded-3xl bg-gradient-to-r from-indigo-950 via-slate-900 to-slate-900 border border-slate-800 p-6 sm:p-10">
        <div className="space-y-3 max-w-2xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-semibold border border-indigo-500/20">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Peer-to-Peer Student Q&A</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Peer Help & Discussions
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Got a doubt about exams, hostelling, registration, or campus rules? Ask your seniors & peers anonymously or publicly.
          </p>
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm shadow-lg shadow-blue-500/20 transition-all shrink-0"
        >
          <PlusCircle className="w-5 h-5" />
          <span>Ask a Question</span>
        </button>
      </div>

      {/* Filter and Search Bar */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Search */}
        <div className="md:col-span-2 relative">
          <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search questions by topic, course, or keywords..."
            className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-12 pr-4 py-3 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Department Filter */}
        <div className="flex items-center space-x-2 overflow-x-auto">
          <span className="text-xs font-semibold text-slate-400 shrink-0">Dept:</span>
          <div className="flex gap-1.5 overflow-x-auto">
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setFilterDepartment(dept)}
                className={`px-3 py-2 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
                  filterDepartment === dept
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-white'
                }`}
              >
                {dept}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Questions Feed */}
      <div className="space-y-4">
        {filteredQuestions.length === 0 ? (
          <div className="text-center py-16 rounded-2xl border border-slate-800 bg-slate-900/40 p-8">
            <HelpCircle className="w-12 h-12 text-slate-500 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-white">No questions found</h3>
            <p className="text-slate-400 text-sm mt-1">Be the first to post a query for fellow campus students!</p>
          </div>
        ) : (
          filteredQuestions.map((q) => (
            <div
              key={q.id}
              className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6 hover:border-slate-700 transition-all flex flex-col md:flex-row md:items-start gap-6"
            >
              {/* Upvote column */}
              <div className="flex md:flex-col items-center justify-between md:justify-center bg-slate-950/60 border border-slate-800 rounded-xl p-3 shrink-0 md:w-20">
                <button
                  onClick={() => handleUpvote(q.id)}
                  className="flex items-center md:flex-col space-x-1 md:space-x-0 text-slate-400 hover:text-blue-400 transition-colors"
                  aria-label="Upvote Question"
                >
                  <ThumbsUp className="w-5 h-5" />
                  <span className="text-sm font-bold text-white md:mt-1">{q.upvotes}</span>
                </button>
                <span className="text-[10px] text-slate-500 uppercase font-semibold md:mt-1">Upvotes</span>
              </div>

              {/* Main content */}
              <div className="flex-grow space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-md bg-blue-500/10 text-blue-400 border border-blue-500/20">
                      {q.department}
                    </span>
                    {q.isResolved ? (
                      <span className="inline-flex items-center space-x-1 text-xs font-semibold px-2.5 py-0.5 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Answered</span>
                      </span>
                    ) : (
                      <span className="inline-flex items-center space-x-1 text-xs font-semibold px-2.5 py-0.5 rounded-md bg-amber-500/10 text-amber-400 border border-amber-500/20">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>Open Query</span>
                      </span>
                    )}
                  </div>
                  <span className="text-xs text-slate-500 flex items-center space-x-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{q.createdAt}</span>
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white hover:text-blue-400 cursor-pointer transition-colors leading-snug">
                  {q.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed">{q.description}</p>

                {/* Footer info: tags, author, answers */}
                <div className="pt-3 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3 text-xs">
                  <div className="flex flex-wrap items-center gap-1.5">
                    {q.tags.map((tag, idx) => (
                      <span key={idx} className="text-[11px] text-slate-400 bg-slate-800 px-2 py-0.5 rounded">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center space-x-4 text-slate-400">
                    <span className="flex items-center space-x-1">
                      <UserCheck className="w-3.5 h-3.5 text-blue-400" />
                      <span>{q.author}</span>
                    </span>
                    <span className="flex items-center space-x-1 text-slate-300 font-medium">
                      <MessageCircle className="w-4 h-4 text-indigo-400" />
                      <span>{q.answersCount} Answers</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Ask Question Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-lg w-full p-6 space-y-5 shadow-2xl relative">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <h3 className="text-xl font-bold text-white flex items-center space-x-2">
                <HelpCircle className="w-5 h-5 text-blue-400" />
                <span>Ask the Campus Community</span>
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleAddQuestion} className="space-y-4 text-sm">
              <div>
                <label className="block text-slate-300 font-medium mb-1">Question Title</label>
                <input
                  type="text"
                  required
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  placeholder="e.g., What is the syllabus breakdown for CSE 3rd sem Mid-term?"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-medium mb-1">Details & Context</label>
                <textarea
                  rows={4}
                  required
                  value={newDesc}
                  onChange={(e) => setNewDesc(e.target.value)}
                  placeholder="Provide details about your query so peers can give accurate answers..."
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-300 font-medium mb-1">Department</label>
                  <select
                    value={newDept}
                    onChange={(e) => setNewDept(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-blue-500"
                  >
                    <option value="Computer Science">Computer Science</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Electrical">Electrical</option>
                    <option value="Mechanical">Mechanical</option>
                    <option value="General">General Campus</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-300 font-medium mb-1">Tags (comma separated)</label>
                  <input
                    type="text"
                    value={newTagInput}
                    onChange={(e) => setNewTagInput(e.target.value)}
                    placeholder="e.g. PYQs, Lab, Exam"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              <div className="flex items-center space-x-2 pt-2">
                <input
                  type="checkbox"
                  id="anonCheck"
                  checked={isAnon}
                  onChange={(e) => setIsAnon(e.target.checked)}
                  className="rounded bg-slate-950 border-slate-800 text-blue-600 focus:ring-blue-500"
                />
                <label htmlFor="anonCheck" className="text-slate-300 text-xs">
                  Post anonymously (protects student privacy)
                </label>
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
                  className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-md shadow-blue-500/20"
                >
                  Post Question
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
