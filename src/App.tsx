/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { LazyMotion, domAnimation } from 'motion/react';
import { Layout } from './components/Layout';
import { LanguageProvider } from './context/LanguageContext';
import Home from './pages/Home'; // eager — primary landing page, keep it instant
import guideList from './data/guides/index.json';
import { lazyWithPreload } from './lib/lazyWithPreload';
import { loadGuide } from './data/guides';

// Lazy routes: each becomes its own chunk, downloaded only when the route is visited.
const GalleryPage = lazyWithPreload(() => import('./pages/GalleryPage'));
const ContactPage = lazyWithPreload(() => import('./pages/ContactPage'));
const ServiceDetail = lazyWithPreload(() => import('./pages/ServiceDetail'));
const SurgicalOutcomes = lazyWithPreload(() => import('./pages/SurgicalOutcomes'));
const SurgicalOutcomeDetail = lazyWithPreload(() => import('./pages/SurgicalOutcomeDetail'));
const Publications = lazyWithPreload(() => import('./pages/Publications'));
const PrivacyPolicy = lazyWithPreload(() => import('./pages/PrivacyPolicy'));
const About = lazyWithPreload(() => import('./pages/About'));
const NotFoundPage = lazyWithPreload(() => import('./pages/NotFoundPage'));
const GuidePage = lazyWithPreload(() => import('./pages/GuidePage'));

// Patient guides (flat, query-matched URLs such as /ptosis-surgery-in-lucknow), English + Hindi.
const guideSlugs: string[] = (guideList as { slug: string }[]).map((g) => g.slug);

// Fetch the code for the page being opened before the first render, so React
// draws the full page straight away instead of a blank placeholder.
// In-site navigation after that still loads pages lazily.
export function preloadForPath(pathname: string): Promise<unknown> {
  const base = (pathname.replace(/^\/hi(?=\/|$)/, '') || '/').replace(/\/+$/, '') || '/';
  if (base === '/' || base === '/conditions') return Promise.resolve();
  const [first, second] = base.slice(1).split('/');
  if (first === 'gallery') return GalleryPage.preload();
  if (first === 'contact') return ContactPage.preload();
  if (first === 'services') return ServiceDetail.preload();
  if (first === 'surgical-outcomes') return second ? SurgicalOutcomeDetail.preload() : SurgicalOutcomes.preload();
  if (first === 'publications') return Publications.preload();
  if (first === 'privacy') return PrivacyPolicy.preload();
  if (first === 'about') return About.preload();
  if (!second && guideSlugs.includes(first)) return Promise.all([GuidePage.preload(), loadGuide(first)]);
  return NotFoundPage.preload();
}

export default function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <LazyMotion features={domAnimation} strict>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="conditions" element={<Navigate to="/#conditions" replace />} />
              <Route path="gallery" element={<GalleryPage />} />
              <Route path="contact" element={<ContactPage />} />
              <Route path="services/:id" element={<ServiceDetail />} />
              <Route path="services/:id/dcr" element={<ServiceDetail />} />
              <Route path="services/:id/DCR" element={<ServiceDetail />} />
              <Route path="services/dcr" element={<Navigate to="/services/watering-eyes-tear-drainage-disorders/dcr" replace />} />
              <Route path="surgical-outcomes" element={<SurgicalOutcomes />} />
              <Route path="surgical-outcomes/:slug" element={<SurgicalOutcomeDetail />} />
              <Route path="publications" element={<Publications />} />
              <Route path="privacy" element={<PrivacyPolicy />} />
              <Route path="about" element={<About />} />

              <Route path="hi" element={<Home />} />
              <Route path="hi/gallery" element={<GalleryPage />} />
              <Route path="hi/contact" element={<ContactPage />} />
              <Route path="hi/services/:id" element={<ServiceDetail />} />
              <Route path="hi/services/:id/dcr" element={<ServiceDetail />} />
              <Route path="hi/services/:id/DCR" element={<ServiceDetail />} />
              <Route path="hi/services/dcr" element={<Navigate to="/hi/services/watering-eyes-tear-drainage-disorders/dcr" replace />} />
              <Route path="hi/surgical-outcomes" element={<SurgicalOutcomes />} />
              <Route path="hi/surgical-outcomes/:slug" element={<SurgicalOutcomeDetail />} />
              <Route path="hi/publications" element={<Publications />} />
              <Route path="hi/privacy" element={<PrivacyPolicy />} />
              <Route path="hi/about" element={<About />} />
              {guideSlugs.map((slug) => (
                <React.Fragment key={slug}>
                  <Route path={slug} element={<GuidePage slug={slug} />} />
                  <Route path={`hi/${slug}`} element={<GuidePage slug={slug} />} />
                </React.Fragment>
              ))}
              <Route path="404" element={<NotFoundPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </LazyMotion>
      </LanguageProvider>
    </BrowserRouter>
  );
}
