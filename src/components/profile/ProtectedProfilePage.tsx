import React from 'react';
import { useApp } from '../../context/AppContext';
import { LoginGate } from '../auth/LoginGate';
import { ProfileScreen } from './ProfileScreen';
import { SeoHead } from '../common/SeoHead';

export const ProtectedProfilePage: React.FC = () => {
  const { user } = useApp();

  // If user is not authenticated, render LoginGate to protect private profile information
  if (!user) {
    return <LoginGate />;
  }

  return (
    <div className="min-h-screen bg-[#F7F9FC] dark:bg-[#0B1320] text-[#1F3A5F] dark:text-[#F7F9FC]">
      <SeoHead
        title="My Profile & Reading Statistics | NoorVerse AI"
        description="View your reading streaks, bookmarks, personalized notes, Tajweed badges, and subscription settings on NoorVerse AI."
        canonicalUrl="https://noorverse-ai.vercel.app/profile"
      />
      <div className="pt-2">
        <ProfileScreen />
      </div>
    </div>
  );
};
