import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';
import { artwork, type ArtworkName } from './data/art';

const trabalhos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/trabalhos' }),
  schema: z.object({
    title: z.string().min(1),
    spineTitle: z.string().max(45).optional(),
    summary: z.string().min(1),
    room: z.enum(['estudio', 'oficina', 'sotao', 'sala', 'galeria']),
    draft: z.boolean().default(true),
    previewOnly: z.boolean().default(false),
    featured: z.boolean().default(false),
    publishedAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    maturity: z.enum(['semente', 'broto', 'árvore']).optional(),
    related: z.array(z.string()).default([]),
    image: z.string().startsWith('/').optional(),
    imageAlt: z.string().optional(),
    imageWidth: z.number().int().positive().optional(),
    imageHeight: z.number().int().positive().optional(),
    audio: z.string().startsWith('/').optional(),
    technologies: z.array(z.string()).default([]),
    status: z.string().optional(),
    source: z.url().optional(),
    demo: z.url().optional(),
    artwork: z.enum(Object.keys(artwork) as [ArtworkName, ...ArtworkName[]]).optional(),
    collection: z.string().optional(),
    durationSeconds: z.number().int().positive().optional(),
    category: z.enum(['Desenhos', 'Estudos', 'Fotografias']).optional(),
    medium: z.string().optional(),
    snippet: z.string().optional(),
    interactive: z.enum(['tavern-name']).optional(),
    notes: z.array(z.string()).default([]),
    campaign: z.object({
      players: z.number().int().positive().optional(),
      lore: z.array(z.object({ kind: z.string(), title: z.string(), text: z.string() })).default([]),
      characters: z.array(z.object({ name: z.string(), role: z.string(), stats: z.record(z.string(), z.number()).optional(), note: z.string().optional() })).default([]),
      sessions: z.array(z.object({ number: z.number().int().positive(), title: z.string(), summary: z.string(), date: z.coerce.date() })).default([]),
    }).optional(),
  }).superRefine((entry, context) => {
    if (!entry.draft && !entry.publishedAt) {
      context.addIssue({ code: 'custom', message: 'Trabalho público precisa de publishedAt.' });
    }
    if (entry.image && !entry.imageAlt?.trim()) {
      context.addIssue({ code: 'custom', message: 'Imagem de trabalho precisa de imageAlt.' });
    }
    if (entry.updatedAt && entry.publishedAt && entry.updatedAt < entry.publishedAt) {
      context.addIssue({ code: 'custom', message: 'updatedAt não pode anteceder publishedAt.' });
    }
    if ((entry.imageWidth === undefined) !== (entry.imageHeight === undefined)) {
      context.addIssue({ code: 'custom', message: 'Informe imageWidth e imageHeight juntos.' });
    }
  }),
});

export const collections = { trabalhos };
