import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const trabalhos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/trabalhos' }),
  schema: z.object({
    title: z.string().min(1),
    summary: z.string().min(1),
    room: z.enum(['estudio', 'oficina', 'sotao', 'sala', 'galeria']),
    draft: z.boolean().default(true),
    featured: z.boolean().default(false),
    publishedAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    maturity: z.enum(['semente', 'broto', 'árvore']).optional(),
    related: z.array(z.string()).default([]),
    image: z.string().startsWith('/').optional(),
    imageAlt: z.string().optional(),
    audio: z.string().startsWith('/').optional(),
    technologies: z.array(z.string()).default([]),
    status: z.string().optional(),
    source: z.url().optional(),
    demo: z.url().optional(),
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
  }),
});

export const collections = { trabalhos };
