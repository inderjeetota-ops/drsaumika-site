import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { cn } from '../lib/utils';
import { useLanguage, getLocalizedPath } from '../context/LanguageContext';

type Lang = 'en' | 'hi';

/**
 * English / हिंदी segmented switch.
 * Works by tapping either half, by dragging/swiping the white thumb (mouse, touch or pen),
 * and by keyboard (arrow keys, or Tab + Enter/Space on a label).
 */
export function LanguageSwitch() {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();
  const thumbRef = useRef<HTMLDivElement>(null);
  const drag = useRef<{ id: number; startX: number; base: number; max: number; x: number; moved: boolean } | null>(null);
  const justDragged = useRef(false);
  const [dragX, setDragX] = useState<number | null>(null);
  // Optimistic position so the thumb doesn't jump back while the route changes.
  const [pending, setPending] = useState<Lang | null>(null);

  useEffect(() => setPending(null), [language]);

  const shown: Lang = pending ?? (language as Lang);

  const go = (lang: Lang) => {
    if (lang === language) return;
    setPending(lang);
    navigate(getLocalizedPath(location.pathname, lang));
  };

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType === 'mouse' && e.button !== 0) return;
    const max = thumbRef.current?.offsetWidth ?? 0;
    drag.current = { id: e.pointerId, startX: e.clientX, base: shown === 'hi' ? max : 0, max, x: shown === 'hi' ? max : 0, moved: false };
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const d = drag.current;
    if (!d || d.id !== e.pointerId) return;
    const dx = e.clientX - d.startX;
    if (!d.moved) {
      if (Math.abs(dx) < 4) return;
      d.moved = true;
      e.currentTarget.setPointerCapture(e.pointerId);
    }
    d.x = Math.min(d.max, Math.max(0, d.base + dx));
    setDragX(d.x);
  };

  const endDrag = (e: React.PointerEvent<HTMLDivElement>, cancelled = false) => {
    const d = drag.current;
    if (!d || d.id !== e.pointerId) return;
    drag.current = null;
    if (!d.moved) return; // a plain tap: the label's onClick handles it
    // Swallow the click that follows a drag so it can't flip the result back.
    justDragged.current = true;
    setTimeout(() => { justDragged.current = false; }, 0);
    setDragX(null);
    if (!cancelled) go(d.x > d.max / 2 ? 'hi' : 'en');
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') { e.preventDefault(); go('hi'); }
    if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') { e.preventDefault(); go('en'); }
  };

  const dragging = dragX !== null;
  // While dragging, highlight whichever side the thumb is mostly over.
  const highlighted: Lang = dragging && drag.current ? (dragX > drag.current.max / 2 ? 'hi' : 'en') : shown;
  const option = (lang: Lang, label: string, aria: string) => (
    <button
      type="button"
      role="radio"
      aria-checked={language === lang}
      aria-label={aria}
      tabIndex={language === lang ? 0 : -1}
      // Tapping the other side selects it; tapping the active thumb flips it, like a switch.
      onClick={() => !justDragged.current && go(lang === shown ? (lang === 'en' ? 'hi' : 'en') : lang)}
      className={cn(
        'relative z-10 w-20 py-1 text-xs font-bold transition-colors duration-300 rounded-full text-center',
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/70',
        highlighted === lang ? 'text-navy font-extrabold' : 'text-ivory/70 hover:text-ivory'
      )}
    >
      <span className="relative z-10 pointer-events-none">{label}</span>
    </button>
  );

  return (
    <div
      role="radiogroup"
      aria-label="Language"
      onKeyDown={onKeyDown}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={(e) => endDrag(e)}
      onPointerCancel={(e) => endDrag(e, true)}
      className={cn(
        'relative flex bg-white/5 border border-white/10 rounded-full p-0.5 shadow-inner select-none touch-pan-y',
        dragging ? 'cursor-grabbing' : 'cursor-pointer'
      )}
    >
      {/* Sliding thumb */}
      <div
        ref={thumbRef}
        aria-hidden="true"
        className={cn(
          'absolute top-0.5 bottom-0.5 left-0.5 w-[calc(50%-2px)] rounded-full bg-ivory shadow-sm z-0',
          dragging ? 'transition-none' : 'transition-transform duration-300 ease-out'
        )}
        style={{ transform: dragging ? `translateX(${dragX}px)` : shown === 'hi' ? 'translateX(100%)' : 'translateX(0)' }}
      />
      {option('en', 'English', 'Switch language to English')}
      {option('hi', 'हिंदी', 'Switch language to Hindi')}
    </div>
  );
}
