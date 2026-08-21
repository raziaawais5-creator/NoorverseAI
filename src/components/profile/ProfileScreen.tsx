import React from 'react';
import {
  User as UserIcon,
  Flame,
  BookOpen,
  Award,
  Sun,
  Moon,
  Volume2,
  Bookmark,
  Shield,
  Check,
  Target,
  Clock,
  Sparkles,
  CreditCard,
  Globe,
  CheckCircle2,
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { useTheme } from '../../context/ThemeContext';
import { RECITERS } from '../../data/quranData';

const ALL_BADGES = [
  { id: 'first_step', name: 'First Step', icon: '🌱', description: 'Started your Quran journey' },
  { id: '7_day_streak', name: '7-Day Streak', icon: '🔥', description: 'Read Quran 7 days in a row' },
  { id: 'night_owl', name: 'Night Reflection', icon: '🌙', description: 'Read during night hours' },
  { id: 'tajweed_novice', name: 'Tajweed Novice', icon: '📖', description: 'Completed first Tajweed lesson' },
  { id: 'dhikr_master', name: 'Dhikr Devotee', icon: '📿', description: 'Completed 1,000 Tasbeeh counts' },
  { id: 'hifz_starter', name: 'Hifz Starter', icon: '🧠', description: 'Memorized 10 Ayahs' },
];

export const ProfileScreen: React.FC = () => {
  const { userStats, bookmarks, notes, isPremium, setIsPremium, userCurrency, setUserCurrency, openUpgradeModal, user, openAuthModal, logout } = useApp();
  const { theme, toggleTheme, readerSettings, updateReaderSettings } = useTheme();

  const unlockedSet = new Set(userStats.unlockedBadges || []);

  return (
    <div className="space-y-6 pb-28 px-4 pt-4 max-w-4xl mx-auto">
      {/* Profile Banner */}
      <div className="rounded-3xl bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-950 p-6 text-white shadow-xl space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center space-x-4">
            <div className="w-14 h-14 rounded-2xl bg-amber-400/20 border border-amber-300/40 text-amber-300 flex items-center justify-center shadow-md shrink-0">
              <UserIcon className="w-7 h-7 text-amber-300" />
            </div>

            <div>
              <div className="flex items-center space-x-2">
                <h2 className="text-xl font-extrabold text-emerald-50">
                  {user ? user.name : 'Guest Reciter'}
                </h2>
                {isPremium ? (
                  <span className="px-2 py-0.5 rounded-full bg-amber-400 text-emerald-950 font-black text-[10px] uppercase tracking-wider flex items-center space-x-1 shadow-sm">
                    <Sparkles className="w-3 h-3 fill-emerald-950" />
                    <span>Pro Member</span>
                  </span>
                ) : (
                  <span className="px-2 py-0.5 rounded-full bg-white/10 text-emerald-200 font-semibold text-[10px] uppercase tracking-wider">
                    Free Member
                  </span>
                )}
              </div>
              <p className="text-xs text-emerald-200/80 font-medium">
                {user ? user.email : 'Not signed in • Local guest session'}
              </p>
            </div>
          </div>

          <div className="shrink-0">
            {user ? (
              <button
                onClick={openAuthModal}
                className="px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-emerald-100 font-bold text-xs border border-white/20 transition-all flex items-center space-x-1.5"
              >
                <span>Manage Account</span>
              </button>
            ) : (
              <button
                onClick={openAuthModal}
                className="px-4 py-2 rounded-xl bg-amber-400 text-emerald-950 font-black text-xs shadow hover:bg-amber-300 transition-all flex items-center space-x-1.5"
              >
                <Sparkles className="w-3.5 h-3.5 fill-emerald-950" />
                <span>Google Sign-In</span>
              </button>
            )}
          </div>
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-3 gap-3 pt-3 border-t border-emerald-700/40 text-center">
          <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
            <div className="flex items-center justify-center space-x-1 text-amber-300 font-extrabold text-lg">
              <Flame className="w-4 h-4" />
              <span>{userStats.streakDays || 7}</span>
            </div>
            <div className="text-[10px] text-emerald-200/70 font-semibold uppercase mt-0.5">
              Day Streak
            </div>
          </div>

          <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
            <div className="font-extrabold text-lg text-emerald-50 font-mono">
              {userStats.versesReadCount || 0}
            </div>
            <div className="text-[10px] text-emerald-200/70 font-semibold uppercase mt-0.5">
              Ayahs Read
            </div>
          </div>

          <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
            <div className="font-extrabold text-lg text-amber-300 font-mono">
              {userStats.totalReadingMinutes || 0}m
            </div>
            <div className="text-[10px] text-emerald-200/70 font-semibold uppercase mt-0.5">
              Time Spent
            </div>
          </div>
        </div>
      </div>

      {/* Subscription & Membership Card */}
      <div className="rounded-3xl bg-white dark:bg-[#18221D] p-6 border border-emerald-900/10 dark:border-emerald-500/15 shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <CreditCard className="w-5 h-5 text-amber-500" />
            <h3 className="text-base font-bold text-emerald-950 dark:text-emerald-50">
              Subscription & Membership Plan
            </h3>
          </div>
          {isPremium && (
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-1 rounded-full border border-emerald-500/30">
              Active Pro Pass
            </span>
          )}
        </div>

        <div className="p-4 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/40 border border-emerald-900/10 dark:border-emerald-500/20 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="space-y-1 text-center sm:text-left">
            <div className="text-sm font-black text-emerald-950 dark:text-emerald-100">
              {isPremium ? 'Noorverse Pro Pass (Unlimited AI Pass)' : 'Free Tier Member'}
            </div>
            <p className="text-xs text-emerald-800/70 dark:text-emerald-300/70">
              {isPremium
                ? 'Full access to AI Voice Tajweed, Deep Tafsir, Root Extraction & Hifz Coach.'
                : `Unlock all AI features for ${userCurrency === 'PKR' ? 'PKR 990/month' : '$3.99/month'}.`}
            </p>
          </div>

          <div className="flex items-center space-x-2 shrink-0">
            {isPremium ? (
              <button
                onClick={() => setIsPremium(false)}
                className="px-3.5 py-2 rounded-xl bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-bold text-xs hover:bg-gray-300 transition-colors"
              >
                Cancel Subscription
              </button>
            ) : (
              <button
                onClick={() => openUpgradeModal('Noorverse Pro Pass')}
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-emerald-950 font-black text-xs shadow hover:brightness-110 transition-all flex items-center space-x-1"
              >
                <Sparkles className="w-3.5 h-3.5 fill-emerald-950" />
                <span>Upgrade Plan</span>
              </button>
            )}
          </div>
        </div>

        {/* Currency Preference Toggle */}
        <div className="flex items-center justify-between p-3.5 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/40 border border-emerald-900/10 dark:border-emerald-500/20">
          <div className="flex items-center space-x-2.5">
            <Globe className="w-4 h-4 text-emerald-700 dark:text-emerald-300" />
            <span className="text-xs font-bold text-emerald-950 dark:text-emerald-100">
              Currency Preference
            </span>
          </div>

          <div className="flex items-center bg-white dark:bg-[#18221D] p-1 rounded-xl border border-emerald-900/10 dark:border-emerald-500/20">
            <button
              onClick={() => setUserCurrency('PKR')}
              className={`px-3 py-1 text-xs font-bold rounded-lg transition-all ${
                userCurrency === 'PKR'
                  ? 'bg-emerald-700 text-amber-300 shadow'
                  : 'text-emerald-800 dark:text-emerald-300'
              }`}
            >
              PKR (Rs.)
            </button>
            <button
              onClick={() => setUserCurrency('USD')}
              className={`px-3 py-1 text-xs font-bold rounded-lg transition-all ${
                userCurrency === 'USD'
                  ? 'bg-emerald-700 text-amber-300 shadow'
                  : 'text-emerald-800 dark:text-emerald-300'
              }`}
            >
              USD ($)
            </button>
          </div>
        </div>
      </div>

      {/* Badges Collection */}
      <div className="rounded-3xl bg-white dark:bg-[#18221D] p-6 border border-emerald-900/10 dark:border-emerald-500/15 shadow-sm space-y-4">
        <div className="flex items-center space-x-2">
          <Award className="w-5 h-5 text-amber-500" />
          <h3 className="text-base font-bold text-emerald-950 dark:text-emerald-50">
            Achievements & Badges
          </h3>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {ALL_BADGES.map((badge) => {
            const isUnlocked = unlockedSet.has(badge.id);
            return (
              <div
                key={badge.id}
                className={`p-3.5 rounded-2xl border text-center space-y-1.5 transition-all ${
                  isUnlocked
                    ? 'bg-emerald-50 dark:bg-emerald-900/30 border-emerald-500/30 shadow-sm'
                    : 'bg-gray-100 dark:bg-gray-800/20 border-gray-200 dark:border-gray-800 opacity-50'
                }`}
              >
                <div className="text-2xl">{badge.icon}</div>
                <div className="text-xs font-bold text-emerald-950 dark:text-emerald-100">
                  {badge.name}
                </div>
                <p className="text-[10px] text-emerald-800/60 dark:text-emerald-400/60 font-medium">
                  {badge.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Account Authentication & Google Sync Card */}
      <div className="rounded-3xl bg-white dark:bg-[#18221D] p-6 border border-emerald-900/10 dark:border-emerald-500/15 shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <UserIcon className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            <h3 className="text-base font-bold text-emerald-950 dark:text-emerald-50">
              User Account & Cloud Sync
            </h3>
          </div>
          {user && (
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-1 rounded-full border border-emerald-500/30 flex items-center space-x-1">
              <Check className="w-3 h-3" />
              <span>Signed In</span>
            </span>
          )}
        </div>

        {user ? (
          <div className="p-4 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/40 border border-emerald-900/10 dark:border-emerald-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-3">
              <img
                src={user.avatarUrl || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150'}
                alt={user.name}
                className="w-12 h-12 rounded-full border-2 border-amber-400 object-cover shrink-0"
              />
              <div className="min-w-0">
                <div className="text-sm font-black text-emerald-950 dark:text-emerald-100 truncate">
                  {user.name}
                </div>
                <div className="text-xs text-emerald-800/70 dark:text-emerald-300/70 truncate">
                  {user.email} • {user.authProvider === 'google' ? 'Google Account' : 'Email Account'}
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-2 shrink-0">
              <button
                onClick={openAuthModal}
                className="px-3.5 py-2 rounded-xl bg-emerald-700 text-amber-300 font-bold text-xs shadow hover:bg-emerald-800 transition-colors"
              >
                Switch / Edit Account
              </button>
              <button
                onClick={logout}
                className="px-3 py-2 rounded-xl bg-red-50 dark:bg-red-950/30 text-red-600 dark:text-red-400 font-bold text-xs hover:bg-red-100 transition-colors border border-red-500/20"
              >
                Sign Out
              </button>
            </div>
          </div>
        ) : (
          <div className="p-4 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/40 border border-emerald-900/10 dark:border-emerald-500/20 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="space-y-1 text-center sm:text-left">
              <div className="text-sm font-black text-emerald-950 dark:text-emerald-100">
                Connect with Google Account
              </div>
              <p className="text-xs text-emerald-800/70 dark:text-emerald-300/70">
                Sign in or create an account to back up bookmarks, notes, and study progress across devices.
              </p>
            </div>

            <button
              onClick={openAuthModal}
              className="px-4 py-2.5 rounded-xl bg-emerald-700 text-amber-300 font-extrabold text-xs shadow hover:brightness-110 transition-all shrink-0 flex items-center space-x-2"
            >
              <Sparkles className="w-4 h-4 fill-amber-300" />
              <span>Sign In / Sign Up</span>
            </button>
          </div>
        )}
      </div>

      {/* Preferences & Settings */}
      <div className="rounded-3xl bg-white dark:bg-[#18221D] p-6 border border-emerald-900/10 dark:border-emerald-500/15 shadow-sm space-y-4">
        <h3 className="text-base font-bold text-emerald-950 dark:text-emerald-50">
          App Preferences
        </h3>

        <div className="space-y-3">
          {/* Appearance Toggle */}
          <div className="flex items-center justify-between p-3.5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-900/10 dark:border-emerald-500/20">
            <div className="flex items-center space-x-2.5">
              {theme === 'dark' ? (
                <Moon className="w-5 h-5 text-amber-400" />
              ) : (
                <Sun className="w-5 h-5 text-amber-500" />
              )}
              <span className="text-xs font-bold text-emerald-950 dark:text-emerald-100">
                Theme Mode ({theme === 'dark' ? 'Dark Emerald' : 'Light Emerald'})
              </span>
            </div>

            <button
              onClick={toggleTheme}
              className="px-3 py-1.5 rounded-xl bg-emerald-700 text-amber-300 font-bold text-xs shadow hover:bg-emerald-800 transition-colors"
            >
              Switch to {theme === 'dark' ? 'Light' : 'Dark'}
            </button>
          </div>

          {/* Preferred Reciter */}
          <div className="space-y-1.5 p-3.5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-900/10 dark:border-emerald-500/20">
            <label className="text-xs font-bold text-emerald-950 dark:text-emerald-100 flex items-center space-x-2">
              <Volume2 className="w-4 h-4 text-amber-500" />
              <span>Audio Reciter</span>
            </label>
            <select
              value={readerSettings.selectedReciter}
              onChange={(e) => updateReaderSettings({ selectedReciter: e.target.value })}
              className="w-full rounded-xl bg-white dark:bg-[#18221D] border border-emerald-900/10 dark:border-emerald-500/20 p-2 text-xs text-emerald-950 dark:text-emerald-100 font-medium focus:outline-none"
            >
              {RECITERS.map((r) => (
                <option key={r.id} value={r.id}>
                  {r.name} ({r.style})
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Bookmarks & Notes Counter Overview */}
      <div className="grid grid-cols-2 gap-3">
        <div className="p-4 rounded-2xl bg-white dark:bg-[#18221D] border border-emerald-900/10 dark:border-emerald-500/15 shadow-sm space-y-1">
          <div className="flex items-center space-x-2 text-xs font-bold text-emerald-800 dark:text-emerald-300">
            <Bookmark className="w-4 h-4 text-amber-500" />
            <span>Saved Bookmarks</span>
          </div>
          <div className="text-xl font-extrabold text-emerald-950 dark:text-emerald-50">
            {bookmarks.length} Verses
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-white dark:bg-[#18221D] border border-emerald-900/10 dark:border-emerald-500/15 shadow-sm space-y-1">
          <div className="flex items-center space-x-2 text-xs font-bold text-emerald-800 dark:text-emerald-300">
            <Shield className="w-4 h-4 text-emerald-600" />
            <span>Personal Notes</span>
          </div>
          <div className="text-xl font-extrabold text-emerald-950 dark:text-emerald-50">
            {Object.keys(notes).length} Reflections
          </div>
        </div>
      </div>
    </div>
  );
};
