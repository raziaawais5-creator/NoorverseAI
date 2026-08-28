import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Mail,
  MessageSquare,
  Send,
  CheckCircle2,
  HelpCircle,
  Sparkles,
  BookOpen,
  GraduationCap,
  ShieldCheck,
  AlertCircle,
} from 'lucide-react';
import { SeoHead } from '../common/SeoHead';
import { PublicFooter } from '../common/PublicFooter';

export const PublicContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [category, setCategory] = useState('feedback');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      setError('Please fill in all required fields (Name, Email, Message).');
      return;
    }

    if (!email.includes('@') || !email.includes('.')) {
      setError('Please enter a valid email address.');
      return;
    }

    setError(null);
    setSubmitted(true);
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setCategory('feedback');
    setMessage('');
    setSubmitted(false);
    setError(null);
  };

  return (
    <div className="min-h-screen bg-[#F7F9FC] dark:bg-[#0B1320] text-[#1F3A5F] dark:text-[#F7F9FC] transition-colors duration-200">
      <SeoHead
        title="Contact Us & Support | NoorVerse AI"
        description="Contact the NoorVerse AI team for support, feature suggestions, Tajweed feedback, bug reports, and academic partnerships."
        canonicalUrl="https://noorverse-ai.vercel.app/contact"
        keywords="Contact NoorVerse AI, Quran app support, Tajweed feedback, Islamic learning contact"
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'ContactPage',
          name: 'Contact NoorVerse AI Support',
          description:
            'Get in touch with the NoorVerse AI team for app feedback, recitation corrections, and feature support.',
          url: 'https://noorverse-ai.vercel.app/contact',
          mainEntity: {
            '@type': 'Organization',
            name: 'NoorVerse AI',
            url: 'https://noorverse-ai.vercel.app/',
            email: 'support@noorverse-ai.com',
          },
        }}
      />

      {/* Header Banner */}
      <section className="bg-gradient-to-br from-[#0F281E] via-[#16382B] to-[#0A1A14] text-white py-12 px-4 border-b border-emerald-500/20">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold border border-amber-400/40">
            <Mail className="w-3.5 h-3.5" />
            <span>Community Support & Feedback</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-emerald-50">
            Get in Touch with NoorVerse AI
          </h1>

          <p className="text-sm sm:text-base text-emerald-200/90 max-w-2xl leading-relaxed">
            Whether you have a suggestion for improving our Tajweed engine, need assistance navigating lessons, or want to report an issue, our dedicated team is here to help.
          </p>
        </div>
      </section>

      {/* Main Content & Form Grid */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Info Side Column */}
          <div className="md:col-span-1 space-y-6">
            <div className="p-6 rounded-3xl bg-white dark:bg-[#18221D] border border-emerald-900/10 dark:border-emerald-500/15 shadow-sm space-y-4">
              <h2 className="text-base font-bold text-emerald-950 dark:text-emerald-50">
                Direct Contact
              </h2>
              <div className="space-y-3 text-xs text-emerald-800/80 dark:text-emerald-300/80">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-xl bg-emerald-50 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-emerald-950 dark:text-emerald-100">Email Inquiries</div>
                    <div>support@noorverse-ai.com</div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-xl bg-emerald-50 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-emerald-950 dark:text-emerald-100">Privacy & Security</div>
                    <div>100% confidential & zero spam</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Explore Links */}
            <div className="p-6 rounded-3xl bg-emerald-50/60 dark:bg-[#18221D] border border-emerald-900/10 dark:border-emerald-500/15 space-y-3">
              <h3 className="text-xs font-black uppercase tracking-wider text-emerald-950 dark:text-emerald-100">
                Quick Learning Links
              </h3>
              <ul className="space-y-2 text-xs">
                <li>
                  <Link to="/noorani-qaida" className="text-emerald-800 dark:text-emerald-300 hover:underline flex items-center space-x-1.5">
                    <GraduationCap className="w-3.5 h-3.5 text-amber-500" />
                    <span>Interactive Noorani Qaida</span>
                  </Link>
                </li>
                <li>
                  <Link to="/tajweed" className="text-emerald-800 dark:text-emerald-300 hover:underline flex items-center space-x-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                    <span>Tajweed Rules Hub</span>
                  </Link>
                </li>
                <li>
                  <Link to="/ai-quran" className="text-emerald-800 dark:text-emerald-300 hover:underline flex items-center space-x-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                    <span>AI Quran Study Studio</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form Column */}
          <div className="md:col-span-2">
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#18221D] border border-emerald-900/10 dark:border-emerald-500/15 shadow-sm space-y-6">
              {submitted ? (
                <div className="py-10 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle2 className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-bold text-emerald-950 dark:text-emerald-50">
                    JazakAllah Khair! Message Received
                  </h3>
                  <p className="text-xs sm:text-sm text-emerald-800/70 dark:text-emerald-300/70 max-w-md mx-auto">
                    Thank you for reaching out to NoorVerse AI. Your message has been recorded and our team will review it shortly.
                  </p>
                  <button
                    onClick={handleReset}
                    className="px-5 py-2.5 rounded-xl bg-emerald-700 text-amber-300 hover:bg-emerald-800 font-bold text-xs shadow transition-all"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-1">
                    <h2 className="text-xl font-bold text-emerald-950 dark:text-emerald-50">
                      Send a Message
                    </h2>
                    <p className="text-xs text-emerald-800/70 dark:text-emerald-300/70">
                      We typically respond within 24–48 hours.
                    </p>
                  </div>

                  {error && (
                    <div className="p-3 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800/40 text-rose-700 dark:text-rose-300 text-xs flex items-center space-x-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{error}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-emerald-950 dark:text-emerald-100">
                        Your Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Ahmad Tariq"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-emerald-50/50 dark:bg-emerald-950/30 border border-emerald-900/10 dark:border-emerald-500/20 text-xs text-emerald-950 dark:text-emerald-100 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        required
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-emerald-950 dark:text-emerald-100">
                        Email Address <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="e.g. user@example.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-emerald-50/50 dark:bg-emerald-950/30 border border-emerald-900/10 dark:border-emerald-500/20 text-xs text-emerald-950 dark:text-emerald-100 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-emerald-950 dark:text-emerald-100">
                      Topic / Category
                    </label>
                    <select
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-emerald-50/50 dark:bg-emerald-950/30 border border-emerald-900/10 dark:border-emerald-500/20 text-xs text-emerald-950 dark:text-emerald-100 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    >
                      <option value="feedback">General Feedback</option>
                      <option value="tajweed">Tajweed & Recitation Feedback</option>
                      <option value="qaida">Noorani Qaida Question</option>
                      <option value="bug">Report a Bug / Technical Issue</option>
                      <option value="feature">Feature Suggestion</option>
                      <option value="partnership">Educational Partnership</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-emerald-950 dark:text-emerald-100">
                      Message <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Write your message or inquiry here..."
                      rows={5}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-emerald-50/50 dark:bg-emerald-950/30 border border-emerald-900/10 dark:border-emerald-500/20 text-xs text-emerald-950 dark:text-emerald-100 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-2xl bg-gradient-to-r from-emerald-800 to-teal-900 hover:from-emerald-700 hover:to-teal-800 text-amber-300 font-extrabold text-xs shadow-md flex items-center justify-center space-x-2 transition-all active:scale-[0.99]"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>

      <PublicFooter />
    </div>
  );
};
