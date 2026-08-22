import React, { useEffect } from 'react';

export interface SeoProps {
  title: string;
  description: string;
  canonicalUrl: string;
  keywords?: string;
  ogType?: 'website' | 'article';
  ogImage?: string;
  structuredData?: object | object[];
}

export const SeoHead: React.FC<SeoProps> = ({
  title,
  description,
  canonicalUrl,
  keywords,
  ogType = 'website',
  ogImage = 'https://noorverse-ai.vercel.app/icon-512.svg',
  structuredData,
}) => {
  useEffect(() => {
    // 1. Document Title
    document.title = title;

    // Helper to update or create meta tag
    const setMetaTag = (attrName: 'name' | 'property', attrValue: string, content: string) => {
      let element = document.querySelector(`meta[${attrName}="${attrValue}"]`) as HTMLMetaElement | null;
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attrName, attrValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // 2. Standard Meta Tags
    setMetaTag('name', 'description', description);
    if (keywords) {
      setMetaTag('name', 'keywords', keywords);
    }
    setMetaTag('name', 'robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');

    // 3. Canonical Link
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);

    // 4. Open Graph Tags
    setMetaTag('property', 'og:title', title);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:url', canonicalUrl);
    setMetaTag('property', 'og:type', ogType);
    setMetaTag('property', 'og:site_name', 'NoorVerse AI');
    setMetaTag('property', 'og:image', ogImage);

    // 5. Twitter Card Tags
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', title);
    setMetaTag('name', 'twitter:description', description);
    setMetaTag('name', 'twitter:image', ogImage);

    // 6. JSON-LD Structured Data
    const scriptId = 'noorverse-structured-data';
    let scriptTag = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = scriptId;
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }

    const defaultSchemas: object[] = [
      {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'NoorVerse AI',
        url: 'https://noorverse-ai.vercel.app/',
        description: 'AI-powered Quran learning platform with Voice Tajweed Coach, Deep Tafsir, Arabic root search, and Islamic learning tools.',
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: 'https://noorverse-ai.vercel.app/quran?q={search_term_string}',
          },
          'query-input': 'required name=search_term_string',
        },
      },
      {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'NoorVerse AI',
        url: 'https://noorverse-ai.vercel.app/',
        logo: 'https://noorverse-ai.vercel.app/icon.svg',
        sameAs: ['https://noorverse-ai.vercel.app/'],
      },
      {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: title,
        url: canonicalUrl,
        description: description,
        inLanguage: 'en',
        isPartOf: {
          '@type': 'WebSite',
          name: 'NoorVerse AI',
          url: 'https://noorverse-ai.vercel.app/',
        },
      },
    ];

    if (structuredData) {
      if (Array.isArray(structuredData)) {
        defaultSchemas.push(...structuredData);
      } else {
        defaultSchemas.push(structuredData);
      }
    }

    scriptTag.textContent = JSON.stringify(defaultSchemas);
  }, [title, description, canonicalUrl, keywords, ogType, ogImage, structuredData]);

  return null;
};
