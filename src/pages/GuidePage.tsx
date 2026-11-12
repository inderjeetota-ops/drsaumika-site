import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Phone, MessageCircle, CalendarCheck, AlertTriangle, Info } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import SEO from '../components/SEO';
import SurgicalCaseCard from '../components/SurgicalCaseCard';
import RichText, { localisePath, stripMarkup } from '../components/guide/RichText';
import { getGuideEntry, loadGuide, getLoadedGuide, hubs, isPublished, guideIndex } from '../data/guides';
import type { Guide, GuideBlock, L } from '../data/guides';
import { getCaseBySlug } from '../data/surgicalOutcomes';
import { trackEvent } from '../lib/analytics';
import NotFoundPage from './NotFoundPage';

const SITE_URL = 'https://drsaumika.in';
const PHONE_TEL = 'tel:+917460088838';
const PHONE_DISPLAY = '+91 74600 88838';
const WHATSAPP = 'https://wa.me/917460088838';

export default function GuidePage({ slug }: { slug: string }) {
  const { language } = useLanguage();
  // undefined = still loading, null = no content file for this slug
  const [guide, setGuide] = useState<Guide | null | undefined>(() => getLoadedGuide(slug));
  const entry = getGuideEntry(slug);

  useEffect(() => {
    const cached = getLoadedGuide(slug);
    if (cached !== undefined) { setGuide(cached); return; }
    let alive = true;
    setGuide(undefined);
    loadGuide(slug).then((g) => { if (alive) setGuide(g); }).catch(() => { if (alive) setGuide(null); });
    return () => { alive = false; };
  }, [slug]);

  if (!entry || guide === null) return <NotFoundPage />;
  if (!guide) return <div className="min-h-[60vh]" aria-hidden="true" />;

  const hi = language === 'hi';
  const T = (s: L) => (hi ? s.hi : s.en);
  const P = (path: string) => localisePath(path, language);
  const R = (s: L) => <RichText text={T(s)} language={language} />;

  const published = isPublished(entry);
  const pagePath = P(`/${guide.slug}`);
  const pageUrl = `${SITE_URL}${pagePath}`;
  const hub = hubs[entry.hub];
  const fmtDate = (iso: string) =>
    new Date(`${iso}T12:00:00Z`).toLocaleDateString(hi ? 'hi-IN' : 'en-IN', { day: 'numeric', month: 'long', year: 'numeric' });

  // Related guides: once a page is published, only link to other published guides.
  const related = guide.related.filter((r) => {
    const target = guideIndex.find((g) => `/${g.slug}` === r.path);
    return !target || !published || isPublished(target);
  });
  const cases = entry.cases.map((s) => getCaseBySlug(s)).filter(Boolean);

  const waText = hi
    ? `नमस्ते, मैं "${T(guide.h1)}" के बारे में डॉ. सौमिका सिंह से परामर्श बुक करना चाहता/चाहती हूँ।`
    : `Hello, I would like to book a consultation with Dr Saumika Singh about "${T(guide.h1)}".`;
  const track = (method: string) => () => trackEvent('contact_click', { method, page: guide.slug });

  // ---------- Structured data ----------
  const physicianRef = { '@type': 'Physician', '@id': `${SITE_URL}/#physician`, name: 'Dr. Saumika Singh', url: `${SITE_URL}${P('/about')}` };
  const about =
    guide.schema.type === 'Physician'
      ? physicianRef
      : guide.schema.type === 'MedicalWebPage'
      ? { '@type': 'Thing', name: guide.schema.name }
      : {
          '@type': guide.schema.type,
          name: guide.schema.name,
          ...(guide.schema.alternateName ? { alternateName: guide.schema.alternateName } : {}),
          ...(guide.schema.procedureType ? { procedureType: `https://schema.org/${guide.schema.procedureType}` } : {}),
          ...(guide.schema.bodyLocation ? { bodyLocation: guide.schema.bodyLocation } : {}),
        };
  const crumbs = [
    { name: hi ? 'होम' : 'Home', item: `${SITE_URL}${P('/')}` },
    ...(hub.path ? [{ name: T(hub.label), item: `${SITE_URL}${P(hub.path)}` }] : []),
    { name: T(guide.h1), item: pageUrl },
  ];
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'MedicalWebPage',
        '@id': `${pageUrl}#webpage`,
        url: pageUrl,
        name: T(guide.metaTitle),
        description: T(guide.metaDescription),
        inLanguage: hi ? 'hi-IN' : 'en-IN',
        about,
        audience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
        specialty: 'https://schema.org/Surgical',
        publisher: physicianRef,
        dateModified: entry.updated,
        ...(published ? { lastReviewed: entry.reviewedOn, reviewedBy: physicianRef } : {}),
        breadcrumb: { '@id': `${pageUrl}#breadcrumb` },
        ...(guide.references.length ? { citation: guide.references.map((r) => r.url) } : {}),
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${pageUrl}#breadcrumb`,
        itemListElement: crumbs.map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: c.name, item: c.item })),
      },
      {
        '@type': 'FAQPage',
        '@id': `${pageUrl}#faq`,
        mainEntity: guide.faqs.map((f) => ({
          '@type': 'Question',
          name: stripMarkup(T(f.q)),
          acceptedAnswer: { '@type': 'Answer', text: stripMarkup(T(f.a)) },
        })),
      },
    ],
  };

  const renderBlock = (b: GuideBlock) => (
    <section key={b.id} id={b.id} className="scroll-mt-24 space-y-4">
      <h2 className="text-2xl md:text-3xl font-bold text-navy border-b border-gold/20 pb-2">{T(b.h2)}</h2>
      {b.paras?.map((p, i) => (
        <p key={i} className="text-navy/80 text-lg leading-relaxed">{R(p)}</p>
      ))}
      {b.bullets && (
        <ul className="space-y-3 pl-1">
          {b.bullets.map((x, i) => (
            <li key={i} className="flex items-start text-navy/80 leading-relaxed">
              <span className="w-2 h-2 bg-gold rounded-full mr-3 mt-2.5 flex-shrink-0" aria-hidden="true"></span>
              <span>{R(x)}</span>
            </li>
          ))}
        </ul>
      )}
      {b.steps && (
        <ol className="space-y-3">
          {b.steps.map((x, i) => (
            <li key={i} className="flex items-start text-navy/80 leading-relaxed">
              <span className="mr-3 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-navy text-sm font-bold text-ivory">{i + 1}</span>
              <span className="pt-0.5">{R(x)}</span>
            </li>
          ))}
        </ol>
      )}
      {b.table && (
        <div className="overflow-x-auto rounded-sm border border-gold/20">
          <table className="w-full text-left text-sm md:text-base">
            {b.table.caption && <caption className="caption-bottom p-3 text-sm italic text-navy/60">{T(b.table.caption)}</caption>}
            <thead className="bg-navy text-ivory">
              <tr>{b.table.head.map((h, i) => <th key={i} scope="col" className="p-3 font-semibold">{T(h)}</th>)}</tr>
            </thead>
            <tbody>
              {b.table.rows.map((row, ri) => (
                <tr key={ri} className={ri % 2 ? 'bg-ivory/40' : 'bg-white/60'}>
                  {row.map((cell, ci) =>
                    ci === 0 ? (
                      <th key={ci} scope="row" className="p-3 align-top font-semibold text-navy">{R(cell)}</th>
                    ) : (
                      <td key={ci} className="p-3 align-top text-navy/80">{R(cell)}</td>
                    )
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {b.subsections?.map((s, i) => (
        <div key={i} className="space-y-2 pt-2">
          <h3 className="text-xl font-bold text-navy">{T(s.h3)}</h3>
          {s.paras?.map((p, j) => <p key={j} className="text-navy/80 leading-relaxed">{R(p)}</p>)}
          {s.bullets && (
            <ul className="space-y-2 pl-1">
              {s.bullets.map((x, j) => (
                <li key={j} className="flex items-start text-navy/80 leading-relaxed">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mr-3 mt-2.5 flex-shrink-0" aria-hidden="true"></span>
                  <span>{R(x)}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
      {b.callout && (
        <div
          role={b.callout.tone === 'urgent' ? 'alert' : 'note'}
          className={`flex gap-3 rounded-sm border p-5 ${b.callout.tone === 'urgent' ? 'border-red-300 bg-red-50' : 'border-navy/10 bg-navy/5'}`}
        >
          {b.callout.tone === 'urgent'
            ? <AlertTriangle className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-700" aria-hidden="true" />
            : <Info className="mt-0.5 h-5 w-5 flex-shrink-0 text-navy" aria-hidden="true" />}
          <div>
            <p className={`font-bold ${b.callout.tone === 'urgent' ? 'text-red-800' : 'text-navy'}`}>{T(b.callout.title)}</p>
            <p className="mt-1 text-navy/80 leading-relaxed">{R(b.callout.text)}</p>
          </div>
        </div>
      )}
    </section>
  );

  return (
    <div id="guide-root" className="flex flex-col">
      <SEO
        title={T(guide.metaTitle)}
        description={T(guide.metaDescription)}
        path={pagePath}
        image={guide.image?.src}
        jsonLd={jsonLd}
        noindex={!published}
      />
      <div className="w-full max-w-[1200px] mx-auto p-4 md:p-8">
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-navy/75">
          <ol className="flex flex-wrap items-center gap-1">
            {crumbs.map((c, i) => (
              <li key={i} className="flex items-center gap-1">
                {i > 0 && <span aria-hidden="true" className="mx-1 text-gold">›</span>}
                {i < crumbs.length - 1 ? (
                  <Link to={c.item.replace(SITE_URL, '')} className="hover:text-gold-dark transition-colors">{c.name}</Link>
                ) : (
                  <span aria-current="page" className="text-navy/80">{c.name}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>

        <article className="bento-card bg-white/80 backdrop-blur-md p-6 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none" aria-hidden="true"></div>
          <div className="relative z-10 max-w-4xl">
            <h1 className="text-3xl md:text-5xl font-bold text-navy mb-6 leading-tight">{T(guide.h1)}</h1>

            {published ? (
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1.5 mb-8 py-3 px-4 bg-ivory-dark/20 border border-gold/15 rounded-sm text-sm text-navy/70">
                <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0" aria-hidden="true" />
                <span>
                  {hi ? 'चिकित्सकीय समीक्षा: ' : 'Medically reviewed by '}
                  <Link to={P('/about')} className="font-semibold text-navy hover:text-gold underline underline-offset-2">
                    {hi ? 'डॉ. सौमिका सिंह' : 'Dr. Saumika Singh'}
                  </Link>
                  {hi ? ', MS (नेत्र विज्ञान), FICO' : ', MS (Ophthalmology), FICO'}
                  {` · ${hi ? 'अंतिम समीक्षा' : 'Last reviewed'} ${fmtDate(entry.reviewedOn as string)}`}
                </span>
              </div>
            ) : (
              <div className="mb-8 py-3 px-4 border border-amber-300 bg-amber-50 rounded-sm text-sm text-amber-900">
                {hi
                  ? 'यह मार्गदर्शिका डॉ. सौमिका सिंह की अंतिम चिकित्सकीय समीक्षा की प्रतीक्षा में है।'
                  : 'This guide is awaiting final medical review by Dr. Saumika Singh.'}
              </div>
            )}

            <p className="text-lg md:text-xl text-navy-light leading-relaxed mb-8">{R(guide.lead)}</p>

            <section aria-labelledby="at-a-glance" className="mb-10 bg-navy/5 border border-navy/10 p-6 rounded-sm">
              <h2 id="at-a-glance" className="text-xl font-bold text-navy mb-4">{hi ? 'संक्षेप में' : 'At a glance'}</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {guide.atAGlance.map((x, i) => (
                  <li key={i} className="flex items-start text-navy/80">
                    <CheckCircle2 className="w-5 h-5 text-gold mr-2.5 flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{R(x)}</span>
                  </li>
                ))}
              </ul>
            </section>

            <nav aria-label={hi ? 'इस पेज पर' : 'On this page'} className="mb-12 border-l-2 border-gold/40 pl-4">
              <p className="text-xs font-bold uppercase tracking-widest text-gold-dark mb-2">{hi ? 'इस पेज पर' : 'On this page'}</p>
              <ol className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-1.5 text-sm">
                {guide.sections.map((s) => (
                  <li key={s.id}><a href={`#${s.id}`} className="text-navy/70 hover:text-gold transition-colors">{T(s.h2)}</a></li>
                ))}
                <li><a href="#faqs" className="text-navy/70 hover:text-gold transition-colors">{hi ? 'अक्सर पूछे जाने वाले प्रश्न' : 'Frequently asked questions'}</a></li>
              </ol>
            </nav>

            <div className="space-y-12">
              {guide.sections.slice(0, 2).map(renderBlock)}

              {guide.image && (
                <figure className="overflow-hidden rounded-sm border border-gold/20 bg-white">
                  <img src={guide.image.src} width={guide.image.width} height={guide.image.height} alt={T(guide.image.alt)} loading="lazy" className="h-auto w-full" />
                  <figcaption className="bg-ivory-dark/30 px-4 py-3 text-sm text-navy/70">{T(guide.image.caption)}</figcaption>
                </figure>
              )}

              {guide.sections.slice(2).map(renderBlock)}

              <section id="why-dr-saumika" className="scroll-mt-24 bg-ivory-dark/20 border border-gold/20 p-6 md:p-8 rounded-sm">
                <h2 className="text-xl md:text-2xl font-bold text-navy mb-4">{hi ? 'डॉ. सौमिका सिंह से परामर्श क्यों लें?' : 'Why consult Dr. Saumika Singh?'}</h2>
                <ul className="space-y-3">
                  {guide.whyDrSaumika.map((x, i) => (
                    <li key={i} className="flex items-start text-navy/80 leading-relaxed">
                      <CheckCircle2 className="w-5 h-5 text-gold mr-2.5 flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <span>{R(x)}</span>
                    </li>
                  ))}
                </ul>
                <Link to={P('/about')} className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-gold-dark hover:text-navy">
                  {hi ? 'योग्यताएँ और अनुभव देखें' : 'See qualifications and experience'} <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </Link>
              </section>

              {cases.length > 0 && (
                <section id="case-studies" className="scroll-mt-24 space-y-4">
                  <h2 className="text-2xl font-bold text-navy border-b border-gold/20 pb-2">{hi ? 'डॉ. सिंह के उपचारित मामले (सहमति सहित)' : 'Case studies from Dr. Singh (shared with consent)'}</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {cases.map((c) => <SurgicalCaseCard key={c!.slug} c={c!} />)}
                  </div>
                  <p className="text-xs italic text-navy/50">{hi ? 'हर रोगी के परिणाम अलग होते हैं; ये मामले किसी परिणाम की गारंटी नहीं हैं।' : 'Every patient is different; these cases are not a guarantee of any particular result.'}</p>
                </section>
              )}

              <section id="faqs" className="scroll-mt-24 space-y-6">
                <h2 className="text-2xl md:text-3xl font-bold text-navy border-b border-gold/20 pb-2">{hi ? 'अक्सर पूछे जाने वाले प्रश्न' : 'Frequently asked questions'}</h2>
                <div className="space-y-4">
                  {guide.faqs.map((f, i) => (
                    <div key={i} className="border-b border-navy/10 pb-4">
                      <h3 className="font-bold text-navy text-lg mb-2 flex items-start"><span className="text-gold font-serif mr-2">Q.</span>{T(f.q)}</h3>
                      <p className="text-navy/70 pl-6 leading-relaxed">{R(f.a)}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section id="book" className="scroll-mt-24 bg-navy text-ivory p-6 md:p-10 rounded-sm">
                <h2 className="text-2xl md:text-3xl font-bold mb-3">{T(guide.cta.title)}</h2>
                <p className="text-ivory/80 leading-relaxed mb-2">{R(guide.cta.text)}</p>
                <p className="text-ivory/60 text-sm mb-6">
                  {hi
                    ? 'अलयंत्रा मेडिसिटी सुपरस्पेशलिटी हॉस्पिटल, विभूति खंड, गोमती नगर, लखनऊ · सोमवार–शनिवार, सुबह 10 – शाम 6 (पूर्व अपॉइंटमेंट द्वारा)'
                    : 'Alyantra Medicity Superspeciality Hospital, Vibhuti Khand, Gomti Nagar, Lucknow · Mon–Sat, 10 AM – 6 PM (by appointment)'}
                </p>
                <div className="flex flex-wrap gap-3">
                  <a href={PHONE_TEL} onClick={track('phone')} className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-navy font-bold uppercase tracking-wider text-sm hover:bg-gold-light transition-colors">
                    <Phone className="w-4 h-4" aria-hidden="true" /> {hi ? 'कॉल करें' : 'Call'} {PHONE_DISPLAY}
                  </a>
                  <a href={`${WHATSAPP}?text=${encodeURIComponent(waText)}`} target="_blank" rel="noopener noreferrer" onClick={track('whatsapp')} className="inline-flex items-center gap-2 px-6 py-3 border border-gold text-gold font-bold uppercase tracking-wider text-sm hover:bg-gold hover:text-navy transition-colors">
                    <MessageCircle className="w-4 h-4" aria-hidden="true" /> WhatsApp
                  </a>
                  <Link to={P('/contact')} onClick={track('contact_page')} className="inline-flex items-center gap-2 px-6 py-3 border border-ivory/40 text-ivory font-bold uppercase tracking-wider text-sm hover:bg-ivory hover:text-navy transition-colors">
                    <CalendarCheck className="w-4 h-4" aria-hidden="true" /> {hi ? 'अपॉइंटमेंट फ़ॉर्म' : 'Appointment form'}
                  </Link>
                </div>
              </section>

              {related.length > 0 && (
                <section id="related" className="space-y-4">
                  <h2 className="text-xl md:text-2xl font-bold text-navy">{hi ? 'संबंधित जानकारी' : 'Related guides & services'}</h2>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {related.map((r) => (
                      <li key={r.path}>
                        <Link to={P(r.path)} className="group flex items-center justify-between gap-2 p-4 bg-white/70 border border-gold/15 rounded-sm hover:border-gold/50 transition-colors">
                          <span className="font-semibold text-navy group-hover:text-gold transition-colors">{T(r.label)}</span>
                          <ArrowRight className="w-4 h-4 text-gold flex-shrink-0" aria-hidden="true" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {guide.references.length > 0 && (
                <section id="references" className="border border-gold/15 bg-white/40 p-6 rounded-sm">
                  <h2 className="text-xl md:text-2xl font-bold text-navy mb-1">{hi ? 'संदर्भ एवं अधिक जानकारी' : 'References & further reading'}</h2>
                  <p className="text-sm text-navy/60 mb-4">
                    {hi ? 'मान्यता प्राप्त चिकित्सा संस्थानों के संसाधन (नई विंडो में खुलते हैं)।' : 'Resources from recognised medical authorities (open in a new tab).'}
                  </p>
                  <ul className="space-y-3">
                    {guide.references.map((ref, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <ArrowRight className="w-4 h-4 text-gold flex-shrink-0 mt-1" aria-hidden="true" />
                        <span className="leading-relaxed">
                          <a href={ref.url} target="_blank" rel="noopener noreferrer" className="font-semibold text-navy hover:text-gold underline underline-offset-2">{ref.label}</a>
                          <span className="block text-xs text-navy/50 mt-0.5">{ref.source}</span>
                        </span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs text-navy/40 mt-4 italic">
                    {hi
                      ? 'यह जानकारी केवल सामान्य शिक्षा के लिए है और व्यक्तिगत चिकित्सकीय सलाह का विकल्प नहीं है।'
                      : 'This information is for general education only and is not a substitute for personalised medical advice.'}
                  </p>
                </section>
              )}
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
