import React, { useState } from 'react';
import {
  X,
  Sparkles,
  CheckCircle2,
  Zap,
  ShieldCheck,
  CreditCard,
  Globe,
  Star,
  Check,
  Award,
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

interface PricingModalProps {
  isOpen: boolean;
  onClose: () => void;
  featureTitle?: string;
}

export const PricingModal: React.FC<PricingModalProps> = ({
  isOpen,
  onClose,
  featureTitle,
}) => {
  const { isPremium, setIsPremium, userCurrency, setUserCurrency } = useApp();
  const [selectedPlan, setSelectedPlan] = useState<'monthly' | 'yearly' | 'lifetime'>('yearly');
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'easypaisa' | 'jazzcash'>('card');
  const [isProcessing, setIsProcessing] = useState(false);
  const [successMsg, setSuccessMsg] = useState(false);

  if (!isOpen) return null;

  const pricing = {
    monthly: {
      usd: '$3.99',
      pkr: 'PKR 990',
      period: 'per month',
      savings: null,
    },
    yearly: {
      usd: '$29.99',
      pkr: 'PKR 7,500',
      period: 'per year ($2.49/mo)',
      savings: 'Save 35%',
    },
    lifetime: {
      usd: '$59.99',
      pkr: 'PKR 14,900',
      period: 'one-time payment',
      savings: 'Best Value',
    },
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsPremium(true);
      setSuccessMsg(true);
      setTimeout(() => {
        setSuccessMsg(false);
        onClose();
      }, 1800);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-fade-in">
      <div className="w-full max-w-xl rounded-3xl bg-white dark:bg-[#18221D] border border-amber-400/30 shadow-2xl overflow-hidden animate-scale-up max-h-[90vh] flex flex-col">
        
        {/* Header Banner */}
        <div className="bg-gradient-to-r from-emerald-900 via-teal-900 to-emerald-950 p-6 text-white relative shrink-0">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-emerald-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center space-x-2 text-amber-300 font-bold text-xs uppercase tracking-wider mb-1">
            <Sparkles className="w-4 h-4 fill-amber-300" />
            <span>Noorverse Pro AI Pass</span>
          </div>

          <h2 className="text-2xl font-black text-white">
            {featureTitle ? `Unlock Premium AI: ${featureTitle}` : 'Upgrade to Noorverse AI Pro'}
          </h2>

          <p className="text-xs text-emerald-100/80 mt-1 max-w-md">
            Unlock unlimited AI Tajweed Voice Coaching, Deep Tafsir Insights, Root Morphological Analysis & Custom Hifz Planning.
          </p>

          {/* Currency Switcher Pill */}
          <div className="mt-4 flex items-center space-x-2 bg-emerald-950/80 p-1.5 rounded-2xl w-fit border border-amber-400/30">
            <span className="text-[11px] font-bold text-emerald-200 flex items-center space-x-1 px-1">
              <Globe className="w-3.5 h-3.5" />
              <span>Currency:</span>
            </span>
            <button
              onClick={() => setUserCurrency('PKR')}
              className={`px-3 py-1 text-xs font-black rounded-xl transition-all ${
                userCurrency === 'PKR'
                  ? 'bg-amber-400 text-emerald-950 shadow'
                  : 'text-emerald-300 hover:text-white'
              }`}
            >
              🇵🇰 PKR (Rs.)
            </button>
            <button
              onClick={() => setUserCurrency('USD')}
              className={`px-3 py-1 text-xs font-black rounded-xl transition-all ${
                userCurrency === 'USD'
                  ? 'bg-amber-400 text-emerald-950 shadow'
                  : 'text-emerald-300 hover:text-white'
              }`}
            >
              🌐 USD ($)
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          {successMsg ? (
            <div className="p-8 text-center space-y-3 my-auto">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center mx-auto border border-emerald-500/40">
                <CheckCircle2 className="w-10 h-10 animate-bounce" />
              </div>
              <h3 className="text-2xl font-black text-emerald-950 dark:text-emerald-50">
                Welcome to Noorverse Pro!
              </h3>
              <p className="text-xs text-emerald-800/80 dark:text-emerald-200/80">
                Your AI features have been successfully unlocked across all devices.
              </p>
            </div>
          ) : (
            <>
              {/* Plans Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {/* Monthly */}
                <div
                  onClick={() => setSelectedPlan('monthly')}
                  className={`p-4 rounded-2xl border cursor-pointer transition-all relative flex flex-col justify-between ${
                    selectedPlan === 'monthly'
                      ? 'bg-emerald-50/80 dark:bg-emerald-950/60 border-emerald-600 dark:border-amber-400 ring-2 ring-emerald-600/30 shadow-md'
                      : 'bg-white dark:bg-[#121A16] border-emerald-900/10 dark:border-emerald-500/15 hover:border-emerald-500/30'
                  }`}
                >
                  <div>
                    <div className="text-xs font-bold text-emerald-900 dark:text-emerald-200">
                      Monthly
                    </div>
                    <div className="text-xl font-black text-emerald-950 dark:text-emerald-50 mt-1">
                      {userCurrency === 'PKR' ? pricing.monthly.pkr : pricing.monthly.usd}
                    </div>
                    <div className="text-[10px] text-emerald-800/60 dark:text-emerald-400/60 font-medium">
                      {pricing.monthly.period}
                    </div>
                  </div>
                </div>

                {/* Yearly - Popular */}
                <div
                  onClick={() => setSelectedPlan('yearly')}
                  className={`p-4 rounded-2xl border cursor-pointer transition-all relative flex flex-col justify-between ${
                    selectedPlan === 'yearly'
                      ? 'bg-emerald-50/80 dark:bg-emerald-950/60 border-amber-400 dark:border-amber-400 ring-2 ring-amber-400/40 shadow-lg scale-105 z-10'
                      : 'bg-white dark:bg-[#121A16] border-emerald-900/10 dark:border-emerald-500/15 hover:border-emerald-500/30'
                  }`}
                >
                  <span className="absolute -top-2.5 right-3 bg-amber-400 text-emerald-950 text-[9px] font-black uppercase px-2 py-0.5 rounded-full shadow">
                    Most Popular
                  </span>
                  <div>
                    <div className="text-xs font-bold text-emerald-900 dark:text-emerald-200 flex items-center space-x-1">
                      <span>Annual Pass</span>
                    </div>
                    <div className="text-xl font-black text-emerald-950 dark:text-emerald-50 mt-1">
                      {userCurrency === 'PKR' ? pricing.yearly.pkr : pricing.yearly.usd}
                    </div>
                    <div className="text-[10px] text-amber-600 dark:text-amber-300 font-bold">
                      {pricing.yearly.period}
                    </div>
                  </div>
                </div>

                {/* Lifetime */}
                <div
                  onClick={() => setSelectedPlan('lifetime')}
                  className={`p-4 rounded-2xl border cursor-pointer transition-all relative flex flex-col justify-between ${
                    selectedPlan === 'lifetime'
                      ? 'bg-emerald-50/80 dark:bg-emerald-950/60 border-emerald-600 dark:border-amber-400 ring-2 ring-emerald-600/30 shadow-md'
                      : 'bg-white dark:bg-[#121A16] border-emerald-900/10 dark:border-emerald-500/15 hover:border-emerald-500/30'
                  }`}
                >
                  <div>
                    <div className="text-xs font-bold text-emerald-900 dark:text-emerald-200">
                      Lifetime
                    </div>
                    <div className="text-xl font-black text-emerald-950 dark:text-emerald-50 mt-1">
                      {userCurrency === 'PKR' ? pricing.lifetime.pkr : pricing.lifetime.usd}
                    </div>
                    <div className="text-[10px] text-emerald-800/60 dark:text-emerald-400/60 font-medium">
                      {pricing.lifetime.period}
                    </div>
                  </div>
                </div>
              </div>

              {/* Included Premium Features List */}
              <div className="space-y-2.5 bg-emerald-50/50 dark:bg-emerald-950/30 p-4 rounded-2xl border border-emerald-900/10 dark:border-emerald-500/15">
                <div className="text-xs font-bold text-emerald-950 dark:text-emerald-100 uppercase tracking-wider">
                  Everything Included in Pro:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-emerald-900 dark:text-emerald-200">
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-emerald-600 dark:text-amber-400 shrink-0" />
                    <span>Unlimited AI Voice Tajweed Coach</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-emerald-600 dark:text-amber-400 shrink-0" />
                    <span>AI Quranic Reflection & Tafsir Generator</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-emerald-600 dark:text-amber-400 shrink-0" />
                    <span>3-Letter Arabic Root Extraction</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-emerald-600 dark:text-amber-400 shrink-0" />
                    <span>Custom AI Hifz Schedule Planner</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-emerald-600 dark:text-amber-400 shrink-0" />
                    <span>HD Offline Audio Downloads</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-emerald-600 dark:text-amber-400 shrink-0" />
                    <span>Ad-Free & Priority Cloud Sync</span>
                  </div>
                </div>
              </div>

              {/* Payment Method Selector (For PKR/USD) */}
              <form onSubmit={handleSubscribe} className="space-y-3">
                <div className="text-xs font-bold text-emerald-950 dark:text-emerald-100">
                  Select Payment Method:
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    className={`p-3 rounded-2xl border text-xs font-bold transition-all flex flex-col items-center space-y-1 ${
                      paymentMethod === 'card'
                        ? 'bg-emerald-700 text-white border-amber-400 shadow'
                        : 'bg-white dark:bg-[#121A16] text-emerald-900 dark:text-emerald-200 border-emerald-900/10 dark:border-emerald-500/15'
                    }`}
                  >
                    <CreditCard className="w-4 h-4" />
                    <span>Debit/Credit Card</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('easypaisa')}
                    className={`p-3 rounded-2xl border text-xs font-bold transition-all flex flex-col items-center space-y-1 ${
                      paymentMethod === 'easypaisa'
                        ? 'bg-emerald-700 text-white border-amber-400 shadow'
                        : 'bg-white dark:bg-[#121A16] text-emerald-900 dark:text-emerald-200 border-emerald-900/10 dark:border-emerald-500/15'
                    }`}
                  >
                    <span>🟢 EasyPaisa</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('jazzcash')}
                    className={`p-3 rounded-2xl border text-xs font-bold transition-all flex flex-col items-center space-y-1 ${
                      paymentMethod === 'jazzcash'
                        ? 'bg-emerald-700 text-white border-amber-400 shadow'
                        : 'bg-white dark:bg-[#121A16] text-emerald-900 dark:text-emerald-200 border-emerald-900/10 dark:border-emerald-500/15'
                    }`}
                  >
                    <span>🔴 JazzCash</span>
                  </button>
                </div>

                <button
                  type="submit"
                  disabled={isProcessing}
                  className="w-full py-4 rounded-2xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 hover:brightness-110 text-emerald-950 font-black text-sm shadow-xl transition-all flex items-center justify-center space-x-2"
                >
                  {isProcessing ? (
                    <span>Activating Pro Plan...</span>
                  ) : (
                    <>
                      <Zap className="w-4 h-4 fill-emerald-950" />
                      <span>
                        Subscribe Now ({userCurrency === 'PKR' ? pricing[selectedPlan].pkr : pricing[selectedPlan].usd})
                      </span>
                    </>
                  )}
                </button>

                <div className="flex items-center justify-center space-x-1 text-[11px] text-emerald-800/60 dark:text-emerald-400/60">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>7-Day Money Back Guarantee • Cancel Anytime</span>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
