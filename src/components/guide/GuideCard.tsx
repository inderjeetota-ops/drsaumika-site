import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { guideIndex, hubs, isPublished, type GuideIndexEntry } from '../../data/guides';

// Shared by the /patient-guides index page and the home-page teaser.
export const GUIDES_STR = {
  title: { en: 'Patient Guides', hi: 'रोगी मार्गदर्शिकाएँ' },
  metaTitle: { en: 'Patient Guides on Eyelid & Eye Surgery | Dr Saumika Singh', hi: 'पलक व आंख सर्जरी पर रोगी मार्गदर्शिकाएँ | डॉ. सौमिका सिंह' },
  intro: {
    en: 'Plain-language guides to eyelid, tear-duct, orbit and eye-tumour conditions and their treatment, written for patients and families. Every guide listed here has been medically reviewed by Dr. Saumika Singh, oculoplasty surgeon in Lucknow.',
    hi: 'पलक, आंसू नली, ऑर्बिट और आंख के ट्यूमर से जुड़ी समस्याओं और उनके इलाज पर सरल भाषा में मार्गदर्शिकाएँ, रोगियों और उनके परिवारों के लिए। यहां दी गई हर मार्गदर्शिका की चिकित्सकीय समीक्षा लखनऊ की ओकुलोप्लास्टी सर्जन डॉ. सौमिका सिंह ने की है।',
  },
  more: {
    en: 'More guides will be added here as Dr. Saumika completes her review of each one.',
    hi: 'डॉ. सौमिका की समीक्षा पूरी होते ही और मार्गदर्शिकाएँ यहां जोड़ी जाएंगी।',
  },
  reviewed: { en: 'Medically reviewed', hi: 'चिकित्सकीय समीक्षा' },
  read: { en: 'Read guide', hi: 'पढ़ें' },
};

// Only guides Dr. Saumika has signed off (reviewedOn set in index.json) are listed.
export const publishedGuides = (): GuideIndexEntry[] => guideIndex.filter((g) => isPublished(g));

const fmtDate = (iso: string, hi: boolean) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString(hi ? 'hi-IN' : 'en-GB', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' });

export function GuideCard({ g, language }: { g: GuideIndexEntry; language: string }) {
  const hi = language === 'hi';
  return (
    <Link
      to={`${hi ? '/hi' : ''}/${g.slug}`}
      className="group flex h-full flex-col justify-between gap-4 p-6 bg-white/80 border border-gold/20 rounded-sm shadow-sm hover:shadow-md hover:border-gold/50 transition-all"
    >
      <div>
        <span className="text-[11px] font-semibold uppercase tracking-widest text-gold-dark">{hi ? hubs[g.hub].label.hi : hubs[g.hub].label.en}</span>
        <h3 className="mt-2 text-lg font-bold text-navy group-hover:text-gold-dark transition-colors leading-snug">{hi ? g.title.hi : g.title.en}</h3>
      </div>
      <div className="flex items-center justify-between gap-2 text-xs text-navy/65">
        <span className="inline-flex items-center gap-1.5">
          <CheckCircle2 className="w-3.5 h-3.5 text-gold" aria-hidden="true" />
          {hi ? GUIDES_STR.reviewed.hi : GUIDES_STR.reviewed.en} · {fmtDate(g.reviewedOn as string, hi)}
        </span>
        <span className="inline-flex items-center gap-1 font-semibold text-navy group-hover:text-gold-dark">
          {hi ? GUIDES_STR.read.hi : GUIDES_STR.read.en}
          <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" aria-hidden="true" />
        </span>
      </div>
    </Link>
  );
}

