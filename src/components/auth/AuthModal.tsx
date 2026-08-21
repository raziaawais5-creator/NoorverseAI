import React, { useState } from 'react';
import {
  X,
  Mail,
  Lock,
  User as UserIcon,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Eye,
  EyeOff,
  LogOut,
  ShieldCheck,
  Globe,
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose }) => {
  const { user, loginWithGoogle, loginWithEmail, signUpWithEmail, logout } = useApp();

  const [mode, setMode] = useState<'signin' | 'signup'>('signin');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleGoogleLogin = (customData?: { name: string; email: string; avatarUrl: string }) => {
    setIsGoogleLoading(true);
    setErrorMsg(null);
    setTimeout(() => {
      setIsGoogleLoading(false);
      loginWithGoogle(customData);
      setSuccessMsg(`Signed in with Google successfully.`);
      setTimeout(() => {
        setSuccessMsg(null);
        onClose();
      }, 1400);
    }, 1000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (!email || !password) {
      setErrorMsg('Please enter both email and password.');
      return;
    }

    if (mode === 'signup' && !name) {
      setErrorMsg('Please enter your full name.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      if (mode === 'signup') {
        signUpWithEmail(email, password, name);
        setSuccessMsg('Account created successfully! Welcome to Noorverse.');
      } else {
        loginWithEmail(email, name || email.split('@')[0]);
        setSuccessMsg('Signed in successfully.');
      }

      setTimeout(() => {
        setSuccessMsg(null);
        onClose();
      }, 1400);
    }, 900);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fade-in">
      <div className="w-full max-w-md rounded-3xl bg-white dark:bg-[#18221D] border border-emerald-900/20 dark:border-emerald-500/20 shadow-2xl overflow-hidden animate-scale-up flex flex-col max-h-[92vh]">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-900 via-teal-900 to-emerald-950 p-6 text-white relative shrink-0">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-emerald-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center space-x-2 text-amber-300 font-extrabold text-xs uppercase tracking-wider mb-1">
            <Sparkles className="w-4 h-4 fill-amber-300" />
            <span>Noorverse Quran Account</span>
          </div>

          <h2 className="text-2xl font-black text-white">
            {user ? 'Your Profile Account' : mode === 'signin' ? 'Welcome Back' : 'Create an Account'}
          </h2>

          <p className="text-xs text-emerald-100/80 mt-1">
            {user
              ? 'Manage your Google Sign-In and Quran study progress synchronization.'
              : 'Sign in to save bookmarks, sync reading stats, and access AI features across devices.'}
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-5 flex-1">
          {successMsg ? (
            <div className="p-8 text-center space-y-3 my-auto">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center mx-auto border border-emerald-500/40">
                <CheckCircle2 className="w-10 h-10 animate-bounce" />
              </div>
              <h3 className="text-xl font-black text-emerald-950 dark:text-emerald-50">
                {successMsg}
              </h3>
            </div>
          ) : user ? (
            /* Logged in view inside Modal */
            <div className="space-y-5">
              <div className="p-4 rounded-2xl bg-emerald-50/80 dark:bg-emerald-950/50 border border-emerald-900/15 dark:border-emerald-500/20 flex items-center space-x-3">
                <img
                  src={user.avatarUrl || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150'}
                  alt={user.name}
                  className="w-14 h-14 rounded-full border-2 border-amber-400 object-cover shadow"
                />
                <div className="min-w-0 flex-1">
                  <div className="text-sm font-black text-emerald-950 dark:text-emerald-50 truncate">
                    {user.name}
                  </div>
                  <div className="text-xs text-emerald-800/70 dark:text-emerald-300/70 truncate">
                    {user.email}
                  </div>
                  <div className="mt-1 flex items-center space-x-1.5">
                    <span className="px-2 py-0.5 rounded-full bg-emerald-700 text-amber-300 text-[10px] font-bold uppercase tracking-wider flex items-center space-x-1">
                      <ShieldCheck className="w-3 h-3" />
                      <span>{user.authProvider === 'google' ? 'Google Account' : 'Email User'}</span>
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white dark:bg-[#121A16] border border-emerald-900/10 dark:border-emerald-500/15 text-xs space-y-2 text-emerald-900 dark:text-emerald-200">
                <div className="flex justify-between py-1 border-b border-emerald-900/10 dark:border-emerald-500/10">
                  <span className="font-semibold text-emerald-800/70 dark:text-emerald-400">Account ID:</span>
                  <span className="font-mono text-[11px]">{user.id}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-emerald-900/10 dark:border-emerald-500/10">
                  <span className="font-semibold text-emerald-800/70 dark:text-emerald-400">Joined:</span>
                  <span>{new Date(user.createdAt).toLocaleDateString()}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="font-semibold text-emerald-800/70 dark:text-emerald-400">Cloud Sync Status:</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold flex items-center space-x-1">
                    <Globe className="w-3 h-3" />
                    <span>Active Sync</span>
                  </span>
                </div>
              </div>

              <button
                onClick={() => {
                  logout();
                  onClose();
                }}
                className="w-full py-3.5 rounded-2xl bg-red-50 dark:bg-red-950/30 text-red-600 dark:text-red-400 hover:bg-red-100 font-bold text-xs border border-red-500/20 transition-all flex items-center justify-center space-x-2"
              >
                <LogOut className="w-4 h-4" />
                <span>Sign Out of Account</span>
              </button>
            </div>
          ) : (
            /* Logged out: Google Sign In + Email Form */
            <div className="space-y-4">
              
              {/* Google Sign-In Main Button */}
              <button
                type="button"
                onClick={() => handleGoogleLogin()}
                disabled={isGoogleLoading}
                className="w-full py-3.5 px-4 rounded-2xl bg-white dark:bg-[#121A16] hover:bg-gray-50 dark:hover:bg-[#1c2923] text-gray-800 dark:text-white font-bold text-sm border-2 border-gray-200 dark:border-emerald-500/30 shadow-md transition-all flex items-center justify-center space-x-3 active:scale-98"
              >
                {/* Official Google G Logo */}
                <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                  />
                </svg>
                <span>{isGoogleLoading ? 'Connecting Google Account...' : 'Continue with Google'}</span>
              </button>

              {/* Divider */}
              <div className="relative flex items-center justify-center my-2">
                <div className="border-t border-emerald-900/10 dark:border-emerald-500/20 w-full" />
                <span className="bg-white dark:bg-[#18221D] px-3 text-[11px] font-bold text-emerald-800/60 dark:text-emerald-400/60 uppercase shrink-0">
                  Or use email address
                </span>
              </div>

              {/* Toggle Sign In / Sign Up Tabs */}
              <div className="flex bg-emerald-50 dark:bg-emerald-950/60 p-1 rounded-2xl border border-emerald-900/10 dark:border-emerald-500/20">
                <button
                  type="button"
                  onClick={() => setMode('signin')}
                  className={`flex-1 py-2 text-xs font-bold rounded-xl transition-all ${
                    mode === 'signin'
                      ? 'bg-emerald-700 text-amber-300 shadow'
                      : 'text-emerald-900 dark:text-emerald-300 hover:text-emerald-950'
                  }`}
                >
                  Sign In
                </button>
                <button
                  type="button"
                  onClick={() => setMode('signup')}
                  className={`flex-1 py-2 text-xs font-bold rounded-xl transition-all ${
                    mode === 'signup'
                      ? 'bg-emerald-700 text-amber-300 shadow'
                      : 'text-emerald-900 dark:text-emerald-300 hover:text-emerald-950'
                  }`}
                >
                  Create Account
                </button>
              </div>

              {errorMsg && (
                <div className="p-3 rounded-xl bg-red-50 dark:bg-red-950/40 text-red-600 dark:text-red-400 text-xs font-medium border border-red-500/30">
                  {errorMsg}
                </div>
              )}

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-3">
                {mode === 'signup' && (
                  <div>
                    <label className="block text-[11px] font-bold text-emerald-950 dark:text-emerald-200 mb-1">
                      Full Name
                    </label>
                    <div className="relative">
                      <UserIcon className="w-4 h-4 text-emerald-800/50 dark:text-emerald-400/50 absolute left-3.5 top-3" />
                      <input
                        type="text"
                        placeholder="e.g. Reciter Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white dark:bg-[#121A16] border border-emerald-900/15 dark:border-emerald-500/20 text-xs text-emerald-950 dark:text-emerald-50 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                      />
                    </div>
                  </div>
                )}

                <div>
                  <label className="block text-[11px] font-bold text-emerald-950 dark:text-emerald-200 mb-1">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-emerald-800/50 dark:text-emerald-400/50 absolute left-3.5 top-3" />
                    <input
                      type="email"
                      placeholder="you@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white dark:bg-[#121A16] border border-emerald-900/15 dark:border-emerald-500/20 text-xs text-emerald-950 dark:text-emerald-50 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-emerald-950 dark:text-emerald-200 mb-1">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="w-4 h-4 text-emerald-800/50 dark:text-emerald-400/50 absolute left-3.5 top-3" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full pl-10 pr-10 py-2.5 rounded-xl bg-white dark:bg-[#121A16] border border-emerald-900/15 dark:border-emerald-500/20 text-xs text-emerald-950 dark:text-emerald-50 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3.5 top-3 text-emerald-800/50 dark:text-emerald-400/50 hover:text-emerald-950"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-2xl bg-emerald-700 hover:bg-emerald-800 text-amber-300 font-extrabold text-xs shadow-md transition-all flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <span>Processing...</span>
                  ) : (
                    <>
                      <span>{mode === 'signin' ? 'Sign In' : 'Complete Sign Up'}</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>

              {/* Guest option */}
              <div className="pt-2 text-center">
                <button
                  onClick={onClose}
                  className="text-xs text-emerald-800/70 dark:text-emerald-400/70 hover:underline font-medium"
                >
                  Continue as Guest Reader
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
