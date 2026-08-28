import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Sparkles, Volume2, Search, GraduationCap, Heart, Compass, ShieldCheck } from 'lucide-react';

export const PublicFooter: React.FC = () => {
  return (
    <footer className="mt-16 border-t border-[#C7CEDB]/40 dark:border-[#1F3A5F]/60 bg-[#F0F4F8] dark:bg-[#070D17] text-[#1F3A5F] dark:text-[#C7CEDB] py-12 px-4 transition-colors duration-200">
      <div className="max-w-5xl mx-auto space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="md:col-span-1 space-y-3">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-amber-400 to-amber-500 flex items-center justify-center text-emerald-950 font-black text-base shadow-sm">
                ن
              </div>
              <span className="font-extrabold text-base tracking-tight text-[#1F3A5F] dark:text-[#F7F9FC]">
                NoorVerse AI
              </span>
            </div>
            <p className="text-xs text-[#6E8FB5] dark:text-[#C7CEDB]/70 leading-relaxed">
              AI-powered Quran companion featuring real-time Voice Tajweed coaching, deep classical & modern Tafsir, 3-letter Arabic root search, and prayer tools.
            </p>
            <div className="flex items-center space-x-2 text-[11px] text-emerald-700 dark:text-emerald-400 font-semibold">
              <ShieldCheck className="w-4 h-4" />
              <span>100% Free & Privacy Respecting</span>
            </div>
          </div>

          {/* Quran & Tajweed Links */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-black uppercase tracking-wider text-[#1F3A5F] dark:text-[#F7F9FC]">
              Quran & Recitation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link
                  to="/quran"
                  className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors flex items-center space-x-1.5"
                >
                  <BookOpen className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  <span>Read Holy Quran</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/tajweed"
                  className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors flex items-center space-x-1.5"
                >
                  <GraduationCap className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  <span>AI Tajweed Learning</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/quran-pronunciation"
                  className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors flex items-center space-x-1.5"
                >
                  <Volume2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  <span>Voice Pronunciation Coach</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* AI & Linguistic Tools */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-black uppercase tracking-wider text-[#1F3A5F] dark:text-[#F7F9FC]">
              AI & Arabic Tools
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link
                  to="/ai-quran"
                  className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors flex items-center space-x-1.5"
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                  <span>AI Quran Assistant</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/quran-tafsir"
                  className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors flex items-center space-x-1.5"
                >
                  <BookOpen className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  <span>Deep Verse Tafsir</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/arabic-roots"
                  className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors flex items-center space-x-1.5"
                >
                  <Search className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  <span>3-Letter Arabic Roots</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/islamic-learning"
                  className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors flex items-center space-x-1.5"
                >
                  <GraduationCap className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  <span>Islamic Learning Roadmap</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Daily Worship & Tools */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-black uppercase tracking-wider text-[#1F3A5F] dark:text-[#F7F9FC]">
              Worship & Companion
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link
                  to="/prayer"
                  className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors flex items-center space-x-1.5"
                >
                  <Compass className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  <span>Prayer Times & Qibla</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/dhikr"
                  className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors flex items-center space-x-1.5"
                >
                  <Heart className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  <span>Tasbeeh & Daily Adhkar</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/noorani-qaida"
                  className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors flex items-center space-x-1.5"
                >
                  <GraduationCap className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  <span>Interactive Noorani Qaida</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-[#C7CEDB]/30 dark:border-[#1F3A5F]/40 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-[#6E8FB5] dark:text-[#C7CEDB]/60">
          <p>© {new Date().getFullYear()} NoorVerse AI. Dedicated to accessible Quranic & Islamic education.</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link to="/quran" className="hover:underline">Quran</Link>
            <Link to="/noorani-qaida" className="hover:underline">Noorani Qaida</Link>
            <Link to="/tajweed" className="hover:underline">Tajweed</Link>
            <Link to="/ai-quran" className="hover:underline">AI Assistant</Link>
            <Link to="/arabic-roots" className="hover:underline">Roots</Link>
            <Link to="/islamic-learning" className="hover:underline">Curriculum</Link>
            <Link to="/about" className="hover:underline">About</Link>
            <Link to="/contact" className="hover:underline">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
