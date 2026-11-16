import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import SEO from '../components/SEO';
import { hubs, type GuideIndexEntry } from '../data/guides';
import { GuideCard, GUIDES_STR, publishedGuides } from '../components/guide/GuideCard';

const SITE = 'https://drsaumika.in';

export default function PatientGuides() {
  const { language } = useLanguage();
  const hi = language === 'hi';
  const prefix = hi ? '/hi' : '';
  const L = (s: { en: string; hi: string }) => (hi ? s.hi : s.en);
  const pageUrl = `${SITE}${prefix}/patient-guides`;
  const guides = publishedGuides();

  // Group by hub, in the order the hubs are declared.
  const groups = (Object.keys(hubs) as GuideIndexEntry['hub'][])
    .map((hub) => ({ hub, items: guides.filter((g) => g.hub === hub) }))
    .filter((grp) => grp.items.length > 0);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': `${pageUrl}#page`,
        url: pageUrl,
        name: L(GUIDES_STR.title),
        description: L(GUIDES_STR.intro),
        inLanguage: hi ? 'hi-IN' : 'en-IN',
        author: { '@type': 'Physician', '@id': `${SITE}/#physician`, name: 'Dr. Saumika Singh' },
        reviewedBy: { '@type': 'Physician', '@id': `${SITE}/#physician`, name: 'Dr. Saumika Singh' },
        mainEntity: {
          '@type': 'ItemList',
          itemListElement: guides.map((g, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            url: `${SITE}${prefix}/${g.slug}`,
            name: L(g.title),
          })),
        },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: hi ? 'मुख्य पृष्ठ' : 'Home', item: `${SITE}${prefix || '/'}` },
          { '@type': 'ListItem', position: 2, name: L(GUIDES_STR.title), item: pageUrl },
        ],
      },
    ],
  };

  return (
    <>
      <SEO path={`${prefix}/patient-guides`} title={L(GUIDES_STR.metaTitle)} description={L(GUIDES_STR.intro)} jsonLd={jsonLd} />
      <main className="mx-auto max-w-6xl px-4 py-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/20 text-gold-dark text-xs font-semibold tracking-widest uppercase mb-4">
          <BookOpen className="h-3 w-3" aria-hidden="true" />
          <span>{hi ? 'रोगी शिक्षा' : 'Patient education'}</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-[#002147]">{L(GUIDES_STR.title)}</h1>
        <p className="mt-3 max-w-3xl text-gray-700">{L(GUIDES_STR.intro)}</p>

        {groups.map((grp) => (
          <section key={grp.hub} className="mt-10" aria-labelledby={`guides-${grp.hub}`}>
            <h2 id={`guides-${grp.hub}`} className="text-xl md:text-2xl font-bold text-navy border-b border-gold/20 pb-2 mb-5">
              {hubs[grp.hub].path ? (
                <Link to={`${prefix}${hubs[grp.hub].path}`} className="hover:text-gold-dark transition-colors">{L(hubs[grp.hub].label)}</Link>
              ) : (
                L(hubs[grp.hub].label)
              )}
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {grp.items.map((g) => (
                <li key={g.slug}><GuideCard g={g} language={language} /></li>
              ))}
            </ul>
          </section>
        ))}

        <p className="mt-10 text-sm italic text-gray-500">{L(GUIDES_STR.more)}</p>
      </main>
    </>
  );
}
