import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import {
  Sun,
  Moon,
  Search,
  Compass,
  Sparkles,
  User as UserIcon,
  LogIn,
  Menu,
  X,
  BookOpen,
  GraduationCap,
  Volume2,
  Heart,
  Info,
  Mail,
  ArrowRight,
} from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { useApp } from '../../context/AppContext';

export const Header: React.FC<{
  onOpenSearch?: () => void;
}> = ({ onOpenSearch }) => {
  const { isDarkMode, toggleDarkMode } = useTheme();
  const { isPremium, openUpgradeModal, userCurrency, user, openAuthModal, setActiveTab } = useApp();
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { to: '/', label: 'Home', tab: 'home' as const, icon: Sparkles },
    { to: '/quran', label: 'Noble Quran', tab: 'quran' as const, icon: BookOpen },
    { to: '/noorani-qaida', label: 'Noorani Qaida', tab: 'learn' as const, icon: GraduationCap },
    { to: '/tajweed', label: 'Tajweed Rules', tab: 'learn' as const, icon: GraduationCap },
    { to: '/quran-pronunciation', label: 'Voice Coach', tab: 'learn' as const, icon: Volume2 },
    { to: '/ai-quran', label: 'AI Quran Studio', tab: 'ai' as const, icon: Sparkles },
    { to: '/quran-tafsir', label: 'Verse Tafsir', tab: 'quran' as const, icon: BookOpen },
    { to: '/arabic-roots', label: 'Arabic Roots', tab: 'quran' as const, icon: Search },
    { to: '/islamic-learning', label: 'Learning Roadmap', tab: 'learn' as const, icon: GraduationCap },
    { to: '/prayer', label: 'Prayer & Qibla', tab: 'prayer' as const, icon: Compass },
    { to: '/dhikr', label: 'Tasbeeh & Dhikr', tab: 'dhikr' as const, icon: Heart },
    { to: '/about', label: 'About Us', tab: 'home' as const, icon: Info },
    { to: '/contact', label: 'Contact & Support', tab: 'home' as const, icon: Mail },
  ];

  return (
    <header className="sticky top-0 z-30 bg-[#F7F9FC]/95 dark:bg-[#0B1320]/95 backdrop-blur-md border-b border-[#C7CEDB]/40 dark:border-[#1F3A5F]/60 px-4 py-3 transition-colors duration-200">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        {/* Brand logo & Title with semantic Link */}
        <Link
          to="/"
          onClick={() => {
            setActiveTab('home');
            setIsMobileMenuOpen(false);
          }}
          className="flex items-center space-x-3 cursor-pointer group"
        >
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#1F3A5F] via-[#2C5282] to-[#6E8FB5] p-0.5 shadow-md flex items-center justify-center relative">
            <div className="w-full h-full bg-[#1F3A5F]/20 rounded-2xl flex items-center justify-center">
              <span className="text-[#F7F9FC] font-bold text-xl tracking-wider select-none font-serif">ن</span>
            </div>
            {/* Subtle Star icon overlay */}
            <Sparkles className="w-3.5 h-3.5 text-amber-300 absolute -top-1 -right-1 animate-pulse" />
          </div>

          <div>
            <div className="flex items-center space-x-1.5">
              <span className="text-lg font-bold tracking-tight text-[#1F3A5F] dark:text-[#F7F9FC]">
                NoorVerse
              </span>
              {isPremium ? (
                <span className="px-2 py-0.5 text-[10px] font-black tracking-wide bg-gradient-to-r from-amber-400 to-amber-500 text-emerald-950 rounded-full shadow-sm flex items-center space-x-1">
                  <Sparkles className="w-3 h-3 fill-emerald-950" />
                  <span>PRO ACTIVE</span>
                </span>
              ) : (
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    openUpgradeModal('NoorVerse AI Pro Pass');
                  }}
                  className="px-2 py-0.5 text-[10px] font-black tracking-wide bg-amber-400/20 text-amber-700 dark:text-amber-300 rounded-full border border-amber-400/50 hover:bg-amber-400/30 transition-all flex items-center space-x-1"
                >
                  <Sparkles className="w-3 h-3" />
                  <span>{userCurrency === 'PKR' ? 'PRO (PKR 990)' : 'PRO ($3.99)'}</span>
                </button>
              )}
            </div>
            <p className="text-xs text-[#6E8FB5] dark:text-[#C7CEDB]/70 font-medium">
              Peaceful Quran & Islamic Companion
            </p>
          </div>
        </Link>

        {/* Action Controls */}
        <div className="flex items-center space-x-2">
          {/* Quick Search */}
          <button
            onClick={() => {
              if (onOpenSearch) {
                onOpenSearch();
              } else {
                setActiveTab('quran');
                navigate('/quran');
              }
            }}
            className="p-2.5 rounded-full bg-[#6E8FB5]/10 dark:bg-[#1F3A5F]/40 text-[#1F3A5F] dark:text-[#C7CEDB] hover:bg-[#6E8FB5]/20 dark:hover:bg-[#1F3A5F]/60 transition-colors"
            title="Search Quran"
          >
            <Search className="w-4 h-4" />
          </button>

          {/* Quick Qibla & Prayer */}
          <button
            onClick={() => {
              setActiveTab('prayer');
              navigate('/prayer');
            }}
            className="p-2.5 rounded-full bg-[#6E8FB5]/15 text-[#1F3A5F] dark:text-[#C7CEDB] hover:bg-[#6E8FB5]/25 transition-colors"
            title="Qibla & Prayer"
          >
            <Compass className="w-4 h-4" />
          </button>

          {/* Dark / Light Toggle */}
          <button
            onClick={toggleDarkMode}
            className="p-2.5 rounded-full bg-[#6E8FB5]/10 dark:bg-[#1F3A5F]/40 text-[#1F3A5F] dark:text-[#C7CEDB] hover:bg-[#6E8FB5]/20 dark:hover:bg-[#1F3A5F]/60 transition-colors"
            title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {isDarkMode ? <Sun className="w-4 h-4 text-[#C7CEDB]" /> : <Moon className="w-4 h-4 text-[#1F3A5F]" />}
          </button>

          {/* User Account / Sign In */}
          {user ? (
            <button
              onClick={() => {
                setActiveTab('profile');
                navigate('/profile');
              }}
              className="flex items-center space-x-1.5 p-1 pl-1.5 pr-2.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-900/10 dark:border-emerald-500/20 hover:border-emerald-500/40 transition-all text-xs font-bold text-emerald-950 dark:text-emerald-100 shadow-sm"
              title="Account Settings"
            >
              <div className="w-5 h-5 rounded-full bg-emerald-700 text-amber-300 flex items-center justify-center">
                <UserIcon className="w-3 h-3 text-amber-300" />
              </div>
              <span className="hidden sm:inline max-w-[90px] truncate">{user.name.split(' ')[0]}</span>
            </button>
          ) : (
            <button
              onClick={openAuthModal}
              className="flex items-center space-x-1 px-3 py-1.5 rounded-full bg-gradient-to-r from-emerald-700 to-teal-800 text-amber-300 font-extrabold text-xs shadow hover:brightness-110 transition-all"
            >
              <LogIn className="w-3.5 h-3.5" />
              <span>Sign In</span>
            </button>
          )}

          {/* Mobile Navigation Drawer Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2.5 rounded-full bg-[#6E8FB5]/10 dark:bg-[#1F3A5F]/40 text-[#1F3A5F] dark:text-[#C7CEDB] hover:bg-[#6E8FB5]/20 dark:hover:bg-[#1F3A5F]/60 transition-colors"
            title={isMobileMenuOpen ? 'Close Menu' : 'Open Navigation Menu'}
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Slide-out Mobile & Tablet Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="max-w-5xl mx-auto mt-3 pt-3 border-t border-[#C7CEDB]/40 dark:border-[#1F3A5F]/60 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 py-2">
            {navLinks.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.to;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => {
                    setActiveTab(item.tab);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`flex items-center space-x-2 p-2.5 rounded-xl text-xs font-bold transition-all ${
                    isActive
                      ? 'bg-emerald-700 text-amber-300 shadow-sm'
                      : 'bg-white/80 dark:bg-[#132035]/80 text-[#1F3A5F] dark:text-[#C7CEDB] hover:bg-emerald-50 dark:hover:bg-[#18221D] border border-[#C7CEDB]/30 dark:border-[#1F3A5F]/40'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5 shrink-0 text-amber-500" />
                  <span className="truncate">{item.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
};
