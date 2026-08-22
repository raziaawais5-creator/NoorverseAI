import React from 'react';
import { SeoHead } from '../common/SeoHead';
import { DhikrScreen } from '../dhikr/DhikrScreen';
import { PublicFooter } from '../common/PublicFooter';

export const PublicDhikrPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F7F9FC] dark:bg-[#0B1320] text-[#1F3A5F] dark:text-[#F7F9FC]">
      <SeoHead
        title="Interactive Tasbeeh Counter & Daily Adhkar | NoorVerse AI"
        description="Engage in mindful remembrance of Allah with our interactive digital Tasbeeh counter, morning & evening Adhkar, and prophetic Duas."
        canonicalUrl="https://noorverse-ai.vercel.app/dhikr"
        keywords="digital Tasbeeh, online Tasbeeh counter, daily Adhkar, morning evening Dhikr, SubhanAllah, Alhamdulillah, Allahu Akbar, NoorVerse AI"
      />
      <div className="pt-2">
        <DhikrScreen />
      </div>
      <PublicFooter />
    </div>
  );
};
