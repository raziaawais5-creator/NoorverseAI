import { PrayerTime } from '../types';

export interface LocationInfo {
  city: string;
  country: string;
  latitude: number;
  longitude: number;
  qiblaDegrees: number; // degrees clockwise from true North e.g. 58.5 for Dubai/South Asia
}

export const DEFAULT_LOCATION: LocationInfo = {
  city: 'London',
  country: 'United Kingdom',
  latitude: 51.5074,
  longitude: -0.1278,
  qiblaDegrees: 118.9, // Degrees clockwise from North towards Makkah (21.4225 N, 39.8262 E)
};

export const CITIES_LIST: LocationInfo[] = [
  { city: 'London', country: 'United Kingdom', latitude: 51.5074, longitude: -0.1278, qiblaDegrees: 118.9 },
  { city: 'New York', country: 'United States', latitude: 40.7128, longitude: -74.0060, qiblaDegrees: 58.5 },
  { city: 'Dubai', country: 'United Arab Emirates', latitude: 25.2048, longitude: 55.2708, qiblaDegrees: 258.2 },
  { city: 'Riyadh', country: 'Saudi Arabia', latitude: 24.7136, longitude: 46.6753, qiblaDegrees: 242.0 },
  { city: 'Istanbul', country: 'Turkey', latitude: 41.0082, longitude: 28.9784, qiblaDegrees: 153.6 },
  { city: 'Cairo', country: 'Egypt', latitude: 30.0444, longitude: 31.2357, qiblaDegrees: 136.2 },
  { city: 'Kuala Lumpur', country: 'Malaysia', latitude: 3.1390, longitude: 101.6869, qiblaDegrees: 292.5 },
  { city: 'Jakarta', country: 'Indonesia', latitude: -6.2088, longitude: 106.8456, qiblaDegrees: 295.1 },
  { city: 'Karachi', country: 'Pakistan', latitude: 24.8607, longitude: 67.0011, qiblaDegrees: 268.4 },
  { city: 'Toronto', country: 'Canada', latitude: 43.6532, longitude: -79.3832, qiblaDegrees: 55.4 },
];

// Helper to calculate Qibla direction given lat & long
export function calculateQiblaAngle(lat: number, lng: number): number {
  const makkahLat = 21.4225 * (Math.PI / 180);
  const makkahLng = 39.8262 * (Math.PI / 180);
  const userLat = lat * (Math.PI / 180);
  const userLng = lng * (Math.PI / 180);

  const dLng = makkahLng - userLng;
  const y = Math.sin(dLng);
  const x = Math.cos(userLat) * Math.tan(makkahLat) - Math.sin(userLat) * Math.cos(dLng);
  let qiblaRad = Math.atan2(y, x);
  let qiblaDeg = qiblaRad * (180 / Math.PI);
  if (qiblaDeg < 0) {
    qiblaDeg += 360;
  }
  return Math.round(qiblaDeg * 10) / 10;
}

export function generatePrayerTimesForToday(): PrayerTime[] {
  const now = new Date();
  const currentHour = now.getHours();
  const currentMin = now.getMinutes();

  // Simulated realistic times
  const timesRaw = [
    { name: 'Fajr', arabicName: 'الفجر', h: 5, m: 12, icon: 'Sunrise' },
    { name: 'Sunrise', arabicName: 'الشروق', h: 6, m: 45, icon: 'SunMedium' },
    { name: 'Dhuhr', arabicName: 'الظهر', h: 12, m: 30, icon: 'Sun' },
    { name: 'Asr', arabicName: 'العصر', h: 15, m: 50, icon: 'SunDim' },
    { name: 'Maghrib', arabicName: 'المغرب', h: 18, m: 25, icon: 'Sunset' },
    { name: 'Isha', arabicName: 'العشاء', h: 19, m: 55, icon: 'Moon' },
  ];

  let nextFound = false;

  return timesRaw.map((t) => {
    const pDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), t.h, t.m);
    const isPassed = now > pDate;
    let isNext = false;

    if (!isPassed && !nextFound) {
      isNext = true;
      nextFound = true;
    }

    const formattedTime = `${t.h > 12 ? t.h - 12 : t.h}:${t.m < 10 ? '0' : ''}${t.m} ${t.h >= 12 ? 'PM' : 'AM'}`;

    return {
      name: t.name,
      arabicName: t.arabicName,
      time: formattedTime,
      timestamp: pDate.getTime(),
      isPassed,
      isNext,
      iconName: t.icon,
    };
  });
}
