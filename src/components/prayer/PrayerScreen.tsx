import React, { useState } from 'react';
import { Clock, MapPin, Volume2, VolumeX, CheckCircle, Circle, ArrowRight, Heart, Sparkles } from 'lucide-react';
import { generatePrayerTimesForToday, CITIES_LIST, LocationInfo } from '../../data/prayersData';
import { QiblaCompass } from './QiblaCompass';
import { useApp } from '../../context/AppContext';

export const PrayerScreen: React.FC = () => {
  const { userStats, togglePrayerLog, setActiveTab } = useApp();
  const [selectedLocation, setSelectedLocation] = useState<LocationInfo>(CITIES_LIST[0]);
  const [prayers] = useState(generatePrayerTimesForToday());
  const [adhanEnabled, setAdhanEnabled] = useState<{ [key: string]: boolean }>({
    Fajr: true,
    Dhuhr: true,
    Asr: true,
    Maghrib: true,
    Isha: true,
  });

  const toggleAdhan = (name: string) => {
    setAdhanEnabled((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  const loggedCount = Object.values(userStats.prayersLoggedToday).filter(Boolean).length;

  return (
    <div className="space-y-6 pb-28 px-4 pt-4 max-w-4xl mx-auto">
      {/* Header & Location Picker */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <h2 className="text-2xl font-black text-emerald-950 dark:text-emerald-50">
            Prayer Times & Qibla
          </h2>
          <p className="text-xs text-emerald-800/60 dark:text-emerald-400/60 font-medium">
            Accurate Solar Schedules & Makkah Direction
          </p>
        </div>

        {/* City Dropdown */}
        <div className="flex items-center space-x-2 bg-white dark:bg-[#18221D] p-2 rounded-2xl border border-emerald-900/10 dark:border-emerald-500/20 shadow-sm self-start sm:self-auto">
          <MapPin className="w-4 h-4 text-amber-500 shrink-0 ml-1" />
          <select
            value={selectedLocation.city}
            onChange={(e) => {
              const loc = CITIES_LIST.find((c) => c.city === e.target.value);
              if (loc) setSelectedLocation(loc);
            }}
            className="bg-transparent text-xs font-bold text-emerald-950 dark:text-emerald-50 focus:outline-none pr-2 cursor-pointer"
          >
            {CITIES_LIST.map((loc) => (
              <option key={loc.city} value={loc.city} className="dark:bg-[#18221D]">
                {loc.city}, {loc.country}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Qibla Compass Visualizer */}
      <QiblaCompass qiblaDegrees={selectedLocation.qiblaDegrees} cityName={selectedLocation.city} />

      {/* Digital Tasbeeh Quick Banner */}
      <div
        onClick={() => setActiveTab('dhikr')}
        className="group relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-800 via-teal-900 to-emerald-950 p-5 text-white shadow-md hover:shadow-lg transition-all cursor-pointer border border-amber-400/30 flex items-center justify-between"
      >
        <div className="flex items-center space-x-3.5">
          <div className="w-12 h-12 rounded-2xl bg-amber-400/20 text-amber-300 flex items-center justify-center border border-amber-400/30 group-hover:scale-110 transition-transform">
            <Heart className="w-6 h-6 fill-amber-400/40" />
          </div>
          <div>
            <div className="flex items-center space-x-1.5 text-xs font-bold text-amber-300">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Digital Tasbeeh & Daily Adhkar</span>
            </div>
            <h3 className="text-lg font-black text-white mt-0.5">
              Open Interactive Tasbeeh Counter
            </h3>
            <p className="text-xs text-emerald-200/80">
              Count SubhanAllah, Alhamdulillah, Allahu Akbar & Custom Dhikr
            </p>
          </div>
        </div>

        <div className="hidden sm:flex items-center space-x-1 px-3 py-1.5 rounded-xl bg-amber-400 text-emerald-950 font-bold text-xs shadow group-hover:translate-x-1 transition-transform">
          <span>Open Counter</span>
          <ArrowRight className="w-4 h-4" />
        </div>
      </div>

      {/* Daily Prayer Tracker Card */}
      <div className="rounded-3xl bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-950 p-6 text-white shadow-lg space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-extrabold text-emerald-50">Daily Prayer Tracker</h3>
            <p className="text-xs text-emerald-200/80 mt-0.5">
              Logged {loggedCount} of 5 Obligatory Prayers Today
            </p>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-amber-400/20 text-amber-300 font-bold flex items-center justify-center text-sm border border-amber-400/30">
            {Math.round((loggedCount / 5) * 100)}%
          </div>
        </div>

        {/* Prayer Checkboxes */}
        <div className="grid grid-cols-5 gap-2 pt-2">
          {['Fajr', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'].map((pName) => {
            const isDone = !!userStats.prayersLoggedToday[pName];
            return (
              <button
                key={pName}
                onClick={() => togglePrayerLog(pName)}
                className={`p-2.5 rounded-2xl border flex flex-col items-center justify-center space-y-1 transition-all ${
                  isDone
                    ? 'bg-amber-400 text-emerald-950 border-amber-400 font-bold shadow-md'
                    : 'bg-white/10 text-emerald-100 border-white/20 hover:bg-white/20'
                }`}
              >
                {isDone ? <CheckCircle className="w-4 h-4" /> : <Circle className="w-4 h-4 text-emerald-200/50" />}
                <span className="text-[11px] font-semibold">{pName}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Prayer Schedule Cards */}
      <div className="space-y-3">
        <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-900 dark:text-emerald-200">
          Today's Schedule ({selectedLocation.city})
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {prayers.map((prayer) => {
            const isNotificationOn = adhanEnabled[prayer.name] ?? true;

            return (
              <div
                key={prayer.name}
                className={`p-4 rounded-2xl border transition-all flex items-center justify-between ${
                  prayer.isNext
                    ? 'bg-amber-500/10 dark:bg-amber-400/10 border-amber-500/40 shadow-md ring-2 ring-amber-400/30'
                    : 'bg-white dark:bg-[#18221D] border-emerald-900/10 dark:border-emerald-500/15 shadow-sm'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div
                    className={`w-10 h-10 rounded-2xl flex items-center justify-center font-bold text-xs ${
                      prayer.isNext
                        ? 'bg-amber-400 text-emerald-950 shadow'
                        : 'bg-emerald-50 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300'
                    }`}
                  >
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <h4 className="text-sm font-bold text-emerald-950 dark:text-emerald-50">
                        {prayer.name}
                      </h4>
                      <span className="font-serif text-sm font-bold text-emerald-800 dark:text-emerald-300 dir-rtl">
                        {prayer.arabicName}
                      </span>
                    </div>
                    {prayer.isNext && (
                      <span className="text-[10px] font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider">
                        Next Prayer
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <span className="text-sm font-bold font-mono text-emerald-950 dark:text-emerald-50">
                    {prayer.time}
                  </span>

                  {prayer.name !== 'Sunrise' && (
                    <button
                      onClick={() => toggleAdhan(prayer.name)}
                      className={`p-2 rounded-xl transition-colors ${
                        isNotificationOn
                          ? 'text-amber-500 bg-amber-500/15'
                          : 'text-emerald-800/40 dark:text-emerald-400/40 bg-emerald-50 dark:bg-emerald-900/30'
                      }`}
                      title="Adhan Alert"
                    >
                      {isNotificationOn ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
