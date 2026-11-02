import { getCollection, type CollectionEntry } from 'astro:content';

export type Work = CollectionEntry<'trabalhos'>;
export const workHref = (work: Work) => `/${work.data.room}/${work.id}/`;

export async function getPublishedWorks() {
  const works = await getCollection('trabalhos', ({ data }) => !data.draft && !data.previewOnly);
  return validateAndSort(works);
}

export async function getVisibleWorks() {
  const published = await getPublishedWorks();
  if (!import.meta.env.DEV) return published;
  return validateAndSort(await getCollection('trabalhos', ({ data }) => !data.draft));
}

function validateAndSort(works: Work[]) {
  const ids = new Set(works.map((work) => work.id));
  for (const work of works) {
    for (const related of work.data.related) {
      if (!ids.has(related)) {
        throw new Error(`Relação inválida em ${work.id}: ${related} não é um trabalho público.`);
      }
    }
  }
  return works.sort((a, b) => (b.data.publishedAt?.getTime() ?? 0) - (a.data.publishedAt?.getTime() ?? 0) || a.id.localeCompare(b.id, 'pt-BR'));
}

export const readingMinutes = (work: Work) => Math.max(1, Math.ceil((work.body?.split(/\s+/).length ?? 0) / 200));
export const shortDate = (date?: Date) => date ? new Intl.DateTimeFormat('pt-BR', { day: 'numeric', month: 'short', timeZone: 'UTC' }).format(date) : '';
export const duration = (seconds?: number) => seconds ? `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, '0')}` : '—';
