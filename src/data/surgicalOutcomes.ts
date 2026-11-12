import data from './surgicalOutcomes.json';

export type LocalizedString = { en: string; hi: string };
export interface CaseStage {
  label: LocalizedString;
  image: string;
  width: number;
  height: number;
  alt: LocalizedString;
  caption: LocalizedString;
}
export interface SurgicalCase {
  slug: string;
  title: LocalizedString;
  metaTitle?: LocalizedString;
  technique: LocalizedString;
  relatedService: string;
  relatedServiceName: LocalizedString;
  tags: LocalizedString[];
  metaDescription: LocalizedString;
  stages: CaseStage[];
  narrative: LocalizedString;
  takeaway?: LocalizedString;
  collageImage: string;
  year: number;
  consent: boolean;
  featured?: boolean;
}

// Only cases with consent === true are ever rendered.
export const surgicalCases: SurgicalCase[] = (data as SurgicalCase[]).filter((c) => c.consent);
export const getCaseBySlug = (slug?: string): SurgicalCase | undefined =>
  surgicalCases.find((c) => c.slug === slug);

// Responsive versions of a stage photo: <name>-480.webp and <name>-960.webp sit next to
// the original (made with .agents/artifacts/scripts/ds-resize-images.py). A size is only
// listed when the original is wider than it.
export function stageSrcSet(slug: string, stage: Pick<CaseStage, 'image' | 'width'>): string {
  const base = `/surgical-outcomes/${slug}/`;
  const stem = stage.image.replace(/\.webp$/, '');
  return [480, 960]
    .filter((w) => stage.width > w)
    .map((w) => `${base}${stem}-${w}.webp ${w}w`)
    .concat(`${base}${stage.image} ${stage.width}w`)
    .join(', ');
}
