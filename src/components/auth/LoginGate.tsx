import React, { useState } from 'react';
import {
  Sparkles,
  BookOpen,
  Mail,
  Lock,
  User as UserIcon,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Volume2,
  Brain,
  Eye,
  EyeOff,
  Globe,
  Compass,
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const LoginGate: React.FC = () => {
  const { loginWithGoogle, loginWithEmail, signUpWithEmail } = useApp();

  const [mode, setMode] = useState<'signin' | 'signup'>('signin');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleGoogleSignIn = (data?: { name: string; email: string; avatarUrl: string }) => {
    setIsGoogleLoading(true);
    setErrorMsg(null);
    setTimeout(() => {
      setIsGoogleLoading(false);
      loginWithGoogle(data);
    }, 800);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (!email || !password) {
      setErrorMsg('Please enter your email and password.');
      return;
    }

    if (mode === 'signup' && !name) {
      setErrorMsg('Please enter your full name.');
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      if (mode === 'signup') {
        signUpWithEmail(email, password, name);
      } else {
        loginWithEmail(email, name || email.split('@')[0]);
      }
    }, 800);
  };

  const handleGuestLogin = () => {
    loginWithEmail('guest@noorverse.app', 'Guest Reciter');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0B1320] via-[#0D1B2A] to-[#08101C] text-white flex items-center justify-center p-4 relative overflow-hidden font-sans">
      
      {/* Background Subtle Ambient Circles */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-4xl grid grid-cols-1 lg:grid-cols-12 gap-6 bg-[#121E2E]/90 border border-emerald-500/20 rounded-3xl shadow-2xl backdrop-blur-xl overflow-hidden z-10 animate-fade-in my-6">
        
        {/* Left Side: Brand & Value Features */}
        <div className="lg:col-span-5 bg-gradient-to-br from-emerald-950 via-teal-950 to-[#0A1626] p-8 flex flex-col justify-between relative border-b lg:border-b-0 lg:border-r border-emerald-500/15">
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-amber-400 to-amber-500 flex items-center justify-center shadow-lg shadow-amber-500/20 text-emerald-950 font-black text-2xl">
                ن
              </div>
              <div>
                <h1 className="text-xl font-black text-white tracking-wide">NoorVerse</h1>
                <span className="text-[10px] font-bold text-amber-300 uppercase tracking-widest bg-amber-400/10 px-2 py-0.5 rounded-full border border-amber-400/30">
                  AI Quran & Companion
                </span>
              </div>
            </div>

            <div className="space-y-2">
              <h2 className="text-2xl font-black text-emerald-50 leading-tight">
                Unlock Your Quran Journey with AI
              </h2>
              <p className="text-xs text-emerald-200/70 leading-relaxed">
                Please sign in to access full Quranic recitations, Tajweed AI voice analysis, prayer times, and personalized Hifz progress.
              </p>
            </div>

            {/* Core Feature Highlights */}
            <div className="space-y-3 pt-2">
              <div className="flex items-start space-x-3 text-xs text-emerald-100">
                <div className="p-1.5 rounded-xl bg-emerald-800/40 text-amber-300 border border-emerald-500/30 shrink-0">
                  <Volume2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-emerald-50">AI Voice Tajweed Coach</div>
                  <div className="text-[11px] text-emerald-300/70">Instant feedback on your Quran recitation pronunciation</div>
                </div>
              </div>

              <div className="flex items-start space-x-3 text-xs text-emerald-100">
                <div className="p-1.5 rounded-xl bg-emerald-800/40 text-amber-300 border border-emerald-500/30 shrink-0">
                  <Brain className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-emerald-50">Deep Tafsir & Root Search</div>
                  <div className="text-[11px] text-emerald-300/70">Extract Arabic 3-letter roots & AI verse reflections</div>
                </div>
              </div>

              <div className="flex items-start space-x-3 text-xs text-emerald-100">
                <div className="p-1.5 rounded-xl bg-emerald-800/40 text-amber-300 border border-emerald-500/30 shrink-0">
                  <Compass className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-emerald-50">Prayer & Dhikr Tracker</div>
                  <div className="text-[11px] text-emerald-300/70">Accurate prayer times, Qibla compass & Tasbeeh counter</div>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-emerald-500/20 flex items-center justify-between text-[11px] text-emerald-300/60">
            <span className="flex items-center space-x-1">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
              <span>100% Secure & Privacy Focused</span>
            </span>
            <span>v2.5 Pro</span>
          </div>
        </div>

        {/* Right Side: Authentication Portal */}
        <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-center space-y-5">
          
          <div className="text-center sm:text-left space-y-1">
            <h3 className="text-xl font-extrabold text-white">
              {mode === 'signin' ? 'Sign In to Continue' : 'Create Your Free Account'}
            </h3>
            <p className="text-xs text-emerald-200/60">
              Choose Google Sign-In or your Email address to enter NoorVerse.
            </p>
          </div>

          {/* Primary Google Sign-In */}
          <button
            type="button"
            onClick={() => handleGoogleSignIn()}
            disabled={isGoogleLoading}
            className="w-full py-3.5 px-4 rounded-2xl bg-white hover:bg-gray-100 text-gray-900 font-bold text-sm shadow-xl transition-all flex items-center justify-center space-x-3 active:scale-98 border border-white/20"
          >
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
            <span>{isGoogleLoading ? 'Signing in with Google...' : 'Sign In with Google'}</span>
          </button>

          {/* Divider */}
          <div className="relative flex items-center justify-center my-1">
            <div className="border-t border-emerald-500/20 w-full" />
            <span className="bg-[#121E2E] px-3 text-[11px] font-bold text-emerald-300/60 uppercase shrink-0">
              Or Sign In via Email
            </span>
          </div>

          {/* Tab Switcher */}
          <div className="flex bg-[#0A121D] p-1 rounded-2xl border border-emerald-500/20">
            <button
              type="button"
              onClick={() => setMode('signin')}
              className={`flex-1 py-2 text-xs font-bold rounded-xl transition-all ${
                mode === 'signin'
                  ? 'bg-emerald-700 text-amber-300 shadow'
                  : 'text-emerald-300/70 hover:text-white'
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
                  : 'text-emerald-300/70 hover:text-white'
              }`}
            >
              Register Account
            </button>
          </div>

          {errorMsg && (
            <div className="p-3 rounded-xl bg-red-950/60 text-red-300 text-xs font-medium border border-red-500/30">
              {errorMsg}
            </div>
          )}

          {/* Email Form */}
          <form onSubmit={handleSubmit} className="space-y-3">
            {mode === 'signup' && (
              <div>
                <label className="block text-[11px] font-bold text-emerald-200 mb-1">
                  Full Name
                </label>
                <div className="relative">
                  <UserIcon className="w-4 h-4 text-emerald-400/50 absolute left-3.5 top-3" />
                  <input
                    type="text"
                    placeholder="e.g. Reciter Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#0B1320] border border-emerald-500/20 text-xs text-white placeholder-emerald-400/30 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
              </div>
            )}

            <div>
              <label className="block text-[11px] font-bold text-emerald-200 mb-1">
                Email Address
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-emerald-400/50 absolute left-3.5 top-3" />
                <input
                  type="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#0B1320] border border-emerald-500/20 text-xs text-white placeholder-emerald-400/30 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-bold text-emerald-200 mb-1">
                Password
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-emerald-400/50 absolute left-3.5 top-3" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-10 py-2.5 rounded-xl bg-[#0B1320] border border-emerald-500/20 text-xs text-white placeholder-emerald-400/30 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-3 text-emerald-400/50 hover:text-white"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-700 hover:brightness-110 text-amber-300 font-extrabold text-xs shadow-lg transition-all flex items-center justify-center space-x-2"
            >
              {isLoading ? (
                <span>Logging in...</span>
              ) : (
                <>
                  <span>{mode === 'signin' ? 'Sign In & Access App' : 'Create Account & Access App'}</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          {/* Quick Guest Access */}
          <div className="text-center pt-1">
            <button
              onClick={handleGuestLogin}
              className="text-xs text-emerald-300/70 hover:text-amber-300 transition-colors font-medium underline"
            >
              Continue with Quick Guest Mode
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
