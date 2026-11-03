import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen } from 'lucide-react';
import { guideIndex, isPublished, serviceIdToHub } from '../../data/guides';
import { localisePath } from './RichText';

// "Detailed guides" block shown on an existing service (hub) page.
// Only guides that Dr. Saumika has signed off (reviewedOn set in index.json) are listed.
export default function GuideLinks({ serviceId, language }: { serviceId: string; language: string }) {
  const hub = serviceIdToHub[serviceId];
  if (!hub) return null;
  const items = guideIndex.filter((g) => isPublished(g) && (g.hub === hub || (hub !== 'surgeon' && g.slug === 'oculoplasty-surgery-cost-in-lucknow')));
  if (items.length === 0) return null;
  const hi = language === 'hi';
  return (
    <section id="detailed-guides" aria-labelledby="detailed-guides-heading" className="mb-12 border border-gold/20 bg-ivory-dark/20 p-6 md:p-8 rounded-sm">
      <h2 id="detailed-guides-heading" className="text-xl md:text-2xl font-bold text-navy mb-4 flex items-center gap-2">
        <BookOpen className="w-5 h-5 text-gold" aria-hidden="true" />
        {hi ? 'विस्तृत मार्गदर्शिकाएँ' : 'Detailed guides'}
      </h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {items.map((g) => (
          <li key={g.slug}>
            <Link
              to={localisePath(`/${g.slug}`, language)}
              className="group flex items-center justify-between gap-2 p-4 bg-white/70 border border-gold/15 rounded-sm hover:border-gold/50 transition-colors"
            >
              <span className="font-semibold text-navy group-hover:text-gold transition-colors">{hi ? g.title.hi : g.title.en}</span>
              <ArrowRight className="w-4 h-4 text-gold flex-shrink-0" aria-hidden="true" />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
