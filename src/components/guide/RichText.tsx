import React from 'react';
import { Link } from 'react-router-dom';

// Renders guide text with two inline markups:
//   [anchor](/internal-path) or [anchor](https://external)   and   **bold**
// Internal paths are written in English form and are prefixed with /hi on Hindi pages.
const TOKEN = /\[([^\]]+)\]\(([^)\s]+)\)|\*\*([^*]+)\*\*/g;

export function localisePath(path: string, language: string) {
  if (language !== 'hi' || !path.startsWith('/') || path.startsWith('/hi')) return path;
  return path === '/' ? '/hi' : `/hi${path}`;
}

export default function RichText({ text, language }: { text: string; language: string }) {
  const out: React.ReactNode[] = [];
  let last = 0;
  let m: RegExpExecArray | null;
  TOKEN.lastIndex = 0;
  while ((m = TOKEN.exec(text)) !== null) {
    if (m.index > last) out.push(text.slice(last, m.index));
    const key = `${m.index}`;
    if (m[3]) {
      out.push(<strong key={key} className="font-semibold text-navy">{m[3]}</strong>);
    } else if (m[2].startsWith('/')) {
      out.push(
        <Link key={key} to={localisePath(m[2], language)} className="font-medium text-navy underline decoration-gold/60 underline-offset-2 hover:text-gold">
          {m[1]}
        </Link>
      );
    } else {
      out.push(
        <a key={key} href={m[2]} target="_blank" rel="noopener noreferrer" className="font-medium text-navy underline decoration-gold/60 underline-offset-2 hover:text-gold">
          {m[1]}
        </a>
      );
    }
    last = m.index + m[0].length;
  }
  if (last < text.length) out.push(text.slice(last));
  return <>{out}</>;
}

// Plain-text version (for JSON-LD and meta): strips the markup.
export function stripMarkup(text: string) {
  return text.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, '$1').replace(/\*\*([^*]+)\*\*/g, '$1');
}
