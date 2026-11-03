// Data model for the patient-guide pages (one file per page in ./pages/<slug>.ts).
// Inline markup allowed inside any text string:
//   [anchor text](/internal-path)   -> internal link (auto-prefixed with /hi on Hindi pages)
//   [anchor text](https://...)      -> external link (opens in new tab)
//   **bold text**
export type L = { en: string; hi: string };

export interface GuideSubsection {
  h3: L;
  paras?: L[];
  bullets?: L[];
}

export interface GuideBlock {
  id: string;                 // anchor id, kebab-case English, unique within the page
  h2: L;                      // question-style where natural ("How is DCR surgery done?")
  paras?: L[];
  bullets?: L[];
  steps?: L[];                // rendered as an ordered list
  table?: { caption?: L; head: L[]; rows: L[][] };
  callout?: { tone: 'urgent' | 'info'; title: L; text: L };
  subsections?: GuideSubsection[];
}

export interface Guide {
  slug: string;               // must match index.json
  primaryKeyword: string;
  secondaryKeywords: string[];
  hindiKeywords: string[];
  metaTitle: L;               // <= 60 chars EN, starts with the primary query
  metaDescription: L;         // 140-160 chars EN
  h1: L;
  lead: L;                    // opening paragraph; first sentence restates + answers the query
  atAGlance: L[];             // 4-6 short key facts
  sections: GuideBlock[];
  whyDrSaumika: L[];          // verified credentials only
  faqs: { q: L; a: L }[];
  cta: { title: L; text: L };
  related: { path: string; label: L }[];   // EN paths only, e.g. '/ptosis-surgery-in-lucknow'
  image?: { src: string; width: number; height: number; alt: L; caption: L };
  references: { label: string; source: string; url: string }[];
  schema: {
    type: 'MedicalProcedure' | 'MedicalCondition' | 'Physician' | 'MedicalWebPage';
    name: string;
    alternateName?: string[];
    procedureType?: 'SurgicalProcedure' | 'NoninvasiveProcedure' | 'PercutaneousProcedure';
    bodyLocation?: string;
  };
  reviewerNotes?: string[];   // NOT rendered: items Dr Saumika must confirm before approval
}

export interface GuideIndexEntry {
  slug: string;
  hub: 'surgeon' | 'eyelid' | 'watering' | 'botox' | 'tumour' | 'orbit' | 'socket';
  title: L;                   // short card/link title
  cases: string[];            // related surgical-outcome slugs
  updated: string;            // ISO date, used as sitemap lastmod
  reviewedOn: string | null;  // ISO date once Dr Saumika approves; null => noindex + no reviewed byline
}
