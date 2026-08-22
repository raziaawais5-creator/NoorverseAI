import React from 'react';
import { SeoHead } from '../common/SeoHead';
import { PrayerScreen } from '../prayer/PrayerScreen';
import { PublicFooter } from '../common/PublicFooter';

export const PublicPrayerPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F7F9FC] dark:bg-[#0B1320] text-[#1F3A5F] dark:text-[#F7F9FC]">
      <SeoHead
        title="Accurate Prayer Times & Qibla Compass | NoorVerse AI"
        description="Check accurate local prayer times for Fajr, Dhuhr, Asr, Maghrib, and Isha with real-time countdowns and an interactive digital Qibla compass."
        canonicalUrl="https://noorverse-ai.vercel.app/prayer"
        keywords="prayer times, Namaz timing, Qibla compass, Salah times, Fajr, Dhuhr, Asr, Maghrib, Isha, Islamic prayer app, NoorVerse AI"
      />
      <div className="pt-2">
        <PrayerScreen />
      </div>
      <PublicFooter />
    </div>
  );
};
