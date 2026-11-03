/// <reference types="vite/client" />
import data from './index.json';
import type { Guide, GuideIndexEntry, L } from './types';

export type { Guide, GuideBlock, GuideIndexEntry, L } from './types';

export const guideIndex: GuideIndexEntry[] = data as GuideIndexEntry[];
export const getGuideEntry = (slug?: string) => guideIndex.find((g) => g.slug === slug);
export const isPublished = (g?: GuideIndexEntry) => !!(g && g.reviewedOn);

// Each guide's full content lives in its own chunk, loaded only when that page is visited.
const loaders = import.meta.glob<{ default: Guide }>('./pages/*.ts');
export async function loadGuide(slug: string): Promise<Guide | null> {
  const loader = loaders[`./pages/${slug}.ts`];
  if (!loader) return null;
  const mod = await loader();
  return mod.default;
}

// Existing umbrella service pages that act as hubs for the guides.
export const hubs: Record<GuideIndexEntry['hub'], { path: string | null; label: L }> = {
  surgeon: { path: null, label: { en: 'Oculoplasty', hi: 'ओकुलोप्लास्टी' } },
  eyelid: { path: '/services/eyelid-disorders-eyelid-surgery', label: { en: 'Eyelid Surgery', hi: 'पलक सर्जरी' } },
  watering: { path: '/services/watering-eyes-tear-drainage-disorders/dcr', label: { en: 'Watering Eyes Treatment', hi: 'आंखों से पानी आने का इलाज' } },
  botox: { path: '/services/botox-eyelid-cosmetic-surgery-periocular-aesthetics', label: { en: 'Botox & Periocular Aesthetics', hi: 'बोटॉक्स और पेरिओकुलर एस्थेटिक्स' } },
  tumour: { path: '/services/eye-tumours-ocular-oncology', label: { en: 'Eye Tumours', hi: 'आंखों के ट्यूमर' } },
  orbit: { path: '/services/orbital-disorders-orbital-surgery', label: { en: 'Orbital Disorders', hi: 'ऑर्बिटल विकार' } },
  socket: { path: '/services/socket-reconstruction-artificial-eye-rehabilitation', label: { en: 'Artificial Eye & Socket', hi: 'कृत्रिम आंख और सॉकेट' } },
};

// Service-page id (ServiceDetail :id) -> hub key
export const serviceIdToHub: Record<string, GuideIndexEntry['hub']> = {
  'eyelid-disorders-eyelid-surgery': 'eyelid',
  'watering-eyes-tear-drainage-disorders': 'watering',
  'botox-eyelid-cosmetic-surgery-periocular-aesthetics': 'botox',
  'eye-tumours-ocular-oncology': 'tumour',
  'orbital-disorders-orbital-surgery': 'orbit',
  'socket-reconstruction-artificial-eye-rehabilitation': 'socket',
  'why-choose-an-oculoplasty-ocular-oncology-specialist': 'surgeon',
};
