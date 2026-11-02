import { getCollection, type CollectionEntry } from 'astro:content';

export type Work = CollectionEntry<'trabalhos'>;
export const workHref = (work: Work) => `/${work.data.room}/${work.id}/`;

export async function getPublishedWorks() {
  const works = await getCollection('trabalhos', ({ data }) => !data.draft);
  const ids = new Set(works.map((work) => work.id));
  for (const work of works) {
    for (const related of work.data.related) {
      if (!ids.has(related)) {
        throw new Error(`Relação inválida em ${work.id}: ${related} não é um trabalho público.`);
      }
    }
  }
  return works.sort((a, b) => (b.data.publishedAt?.getTime() ?? 0) - (a.data.publishedAt?.getTime() ?? 0));
}
