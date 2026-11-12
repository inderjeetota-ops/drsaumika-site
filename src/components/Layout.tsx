import React, { useEffect, useLayoutEffect, useRef, Suspense } from 'react';
import { Outlet, useLocation, useNavigationType } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { AnimatePresence, m } from 'motion/react';
import { scrollToSection } from '../lib/scrollToSection';

function PageScrollManager() {
  const location = useLocation();
  const navType = useNavigationType();
  const prevPathnameRef = useRef(location.pathname);
  const prevHashRef = useRef(location.hash);
  const isFirstRenderRef = useRef(true);

  useLayoutEffect(() => {
    const { pathname, hash, state } = location;
    const isFirstRender = isFirstRenderRef.current;
    isFirstRenderRef.current = false;

    // If navigation is a 'POP' (e.g. browser back button), let browser handle scroll restoration
    if (navType === 'POP') {
      prevPathnameRef.current = pathname;
      prevHashRef.current = hash;
      return;
    }

    const isSamePage = prevPathnameRef.current === pathname;
    const isHashChanging = prevHashRef.current !== hash;
    const fromNavbar = (state as any)?.fromNavbar;

    prevPathnameRef.current = pathname;
    prevHashRef.current = hash;

    // Same-page click from the navbar: the navbar has already started the smooth
    // scroll. Starting a second one here interrupted it and caused a visible jerk.
    if (isSamePage && fromNavbar) {
      return;
    }

    if (hash) {
      const id = hash.replace('#', '');
      // Opening a link like /#conditions directly jumps straight there; clicking a
      // menu link (from this or another page) scrolls smoothly, once.
      const behavior: ScrollBehavior = isFirstRender ? 'instant' : 'smooth';
      if (scrollToSection(id, behavior) === null) {
        // Element not rendered yet: try once more on the next frame
        requestAnimationFrame(() => scrollToSection(id, behavior));
      }
    } else if (!isSamePage) {
      // New page: start at the top straight away
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    } else if (isHashChanging) {
      // Same page, hash cleared
      window.scrollTo({ top: 0, left: 0, behavior: isFirstRender ? 'instant' : 'smooth' });
    }
  }, [location, navType]);

  return null;
}

export function Layout() {
  const location = useLocation();
  // No fade on the first page load: the prerendered page is already visible,
  // and fading it from opacity 0 delayed LCP. In-site navigation still fades.
  const isFirstPageRef = useRef(true);
  useEffect(() => {
    isFirstPageRef.current = false;
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-ivory text-navy font-sans">
      <Navbar />
      <main className="flex-grow relative">
        <PageScrollManager />
        <m.div
          key={location.pathname}
          initial={isFirstPageRef.current ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="h-full"
        >
          <Suspense fallback={<div className="min-h-[60vh]" aria-hidden="true" />}>
            <Outlet />
          </Suspense>
        </m.div>
      </main>
      <Footer />
    </div>
  );
}
