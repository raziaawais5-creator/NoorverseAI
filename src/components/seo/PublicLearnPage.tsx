import React from 'react';
import { SeoHead } from '../common/SeoHead';
import { LearnScreen } from '../learn/LearnScreen';
import { PublicFooter } from '../common/PublicFooter';

export const PublicLearnPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F7F9FC] dark:bg-[#0B1320] text-[#1F3A5F] dark:text-[#F7F9FC]">
      <SeoHead
        title="Learn Noorani Qaida & Tajweed Rules | NoorVerse AI"
        description="Master Arabic letter pronunciations, Noorani Qaida lessons, and foundational Tajweed rules with interactive audio practice."
        canonicalUrl="https://noorverse-ai.vercel.app/learn"
        keywords="learn Noorani Qaida, Tajweed hub, learn Arabic alphabets, Quran recitation lessons, NoorVerse AI"
      />
      <div className="pt-2">
        <LearnScreen />
      </div>
      <PublicFooter />
    </div>
  );
};
