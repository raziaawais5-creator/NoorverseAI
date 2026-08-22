import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Sun, Moon, Search, Compass, Sparkles, User as UserIcon, LogIn } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { useApp } from '../../context/AppContext';

export const Header: React.FC<{
  onOpenSearch?: () => void;
}> = ({ onOpenSearch }) => {
  const { isDarkMode, toggleDarkMode } = useTheme();
  const { isPremium, openUpgradeModal, userCurrency, user, openAuthModal, setActiveTab } = useApp();
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-30 bg-[#F7F9FC]/90 dark:bg-[#0B1320]/90 backdrop-blur-md border-b border-[#C7CEDB]/40 dark:border-[#1F3A5F]/60 px-4 py-3 transition-colors duration-200">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        {/* Brand logo & Title with semantic Link */}
        <Link
          to="/"
          onClick={() => setActiveTab('home')}
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
        </div>
      </div>
    </header>
  );
};
