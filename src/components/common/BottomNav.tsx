import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, BookOpen, GraduationCap, Sparkles, Clock, Heart, User } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { TabType } from '../../types';

export const BottomNav: React.FC = () => {
  const { activeTab, setActiveTab } = useApp();
  const location = useLocation();
  const path = location.pathname;

  const navItems: { id: TabType; path: string; label: string; icon: React.FC<{ className?: string }> }[] = [
    { id: 'home', path: '/', label: 'Home', icon: Home },
    { id: 'quran', path: '/quran', label: 'Quran', icon: BookOpen },
    { id: 'dhikr', path: '/dhikr', label: 'Tasbeeh', icon: Heart },
    { id: 'learn', path: '/learn', label: 'Learn', icon: GraduationCap },
    { id: 'ai', path: '/ai-quran', label: 'AI Study', icon: Sparkles },
    { id: 'prayer', path: '/prayer', label: 'Prayer', icon: Clock },
    { id: 'profile', path: '/profile', label: 'Profile', icon: User },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-[#F7F9FC]/95 dark:bg-[#0B1320]/95 backdrop-blur-lg border-t border-[#C7CEDB]/40 dark:border-[#1F3A5F]/60 pt-1.5 pb-[calc(0.5rem+env(safe-area-inset-bottom,0px))] px-3 transition-colors duration-200 shadow-lg">
      <div className="max-w-md mx-auto flex items-center justify-around">
        {navItems.map((item) => {
          const Icon = item.icon;
          
          // Determine active status based on URL path or activeTab
          const isActive =
            path === item.path ||
            (item.id === 'home' && path === '/') ||
            (item.id === 'quran' && (path === '/quran' || path === '/quran-tafsir' || path === '/arabic-roots')) ||
            (item.id === 'learn' && (path === '/learn' || path === '/noorani-qaida' || path === '/interactive-noorani-qaida' || path === '/tajweed' || path === '/quran-pronunciation' || path === '/islamic-learning')) ||
            (item.id === 'ai' && (path === '/ai' || path === '/ai-quran')) ||
            (item.id === 'prayer' && path === '/prayer') ||
            (item.id === 'dhikr' && path === '/dhikr') ||
            (item.id === 'profile' && path === '/profile');

          return (
            <Link
              key={item.id}
              to={item.path}
              onClick={() => setActiveTab(item.id)}
              className="flex flex-col items-center group relative px-2 py-1 focus:outline-none transition-all duration-200"
            >
              {/* Material 3 Active Pill Indicator */}
              <div
                className={`flex items-center justify-center rounded-full px-3.5 py-1 transition-all duration-300 ${
                  isActive
                    ? 'bg-[#1F3A5F] text-[#F7F9FC] shadow-md scale-105'
                    : 'text-[#6E8FB5] dark:text-[#C7CEDB]/70 group-hover:text-[#1F3A5F] dark:group-hover:text-[#F7F9FC]'
                }`}
              >
                <Icon className={`w-4 h-4 sm:w-5 sm:h-5 ${isActive ? 'text-[#F7F9FC]' : ''}`} />
              </div>
              <span
                className={`text-[10px] sm:text-[11px] font-medium mt-1 tracking-tight transition-colors whitespace-nowrap ${
                  isActive
                    ? 'text-[#1F3A5F] dark:text-[#F7F9FC] font-bold'
                    : 'text-[#6E8FB5] dark:text-[#C7CEDB]/70'
                }`}
              >
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};
