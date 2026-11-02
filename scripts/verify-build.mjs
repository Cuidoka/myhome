import { readdir, readFile, stat } from 'node:fs/promises';
import { resolve, join, dirname, relative } from 'node:path';
import assert from 'node:assert/strict';

const root = resolve('dist');
async function walk(dir) {
  return (await Promise.all((await readdir(dir, { withFileTypes: true })).map((entry) => entry.isDirectory() ? walk(join(dir, entry.name)) : [join(dir, entry.name)]))).flat();
}
const files = await walk(root);
const pages = files.filter((file) => file.endsWith('.html'));
assert(pages.length >= 7, 'Faltam páginas da casa.');
assert(!files.some((file) => /(?:^|[/\\])reference(?:[/\\]|$)/.test(relative(root, file))), 'Referência encontrada no build.');
let links = 0;
for (const page of pages) {
  const html = await readFile(page, 'utf8');
  assert(!html.includes('modelo-privado'), `Rascunho apareceu em ${page}`);
  assert(!/(?:href|src)=["'][^"']*reference\//.test(html), 'Dependência pública da referência.');
  assert(html.includes('lang="pt-BR"'), `Idioma ausente: ${page}`);
  for (const [, raw] of html.matchAll(/(?:href|src)="([^"\s]*)"/g)) {
    if (/^(?:[a-z][a-z\d+.-]*:|\/\/)/i.test(raw)) continue;
    assert(raw !== '' && raw !== '#', `Link sem destino em ${page}`);
    const [path, anchor] = raw.split('#');
    const decoded = decodeURIComponent(path.split('?')[0]);
    let target = decoded ? resolve(decoded.startsWith('/') ? root : dirname(page), `.${decoded.startsWith('/') ? decoded : `/${decoded}`}`) : page;
    assert(target.startsWith(`${root}/`) || target.startsWith(`${root}\\`) || target === root, `Destino fora do build: ${raw}`);
    const info = await stat(target).catch(() => null);
    assert(info, `Destino ausente em ${page}: ${raw}`);
    if (info.isDirectory()) target = join(target, 'index.html');
    assert((await stat(target)).isFile(), `Arquivo ausente: ${target}`);
    if (anchor && target.endsWith('.html')) {
      const destination = await readFile(target, 'utf8');
      assert(destination.includes(`id="${decodeURIComponent(anchor)}"`), `Âncora ausente em ${page}: ${raw}`);
    }
    links++;
  }
}
console.log(`Build OK: ${pages.length} páginas e ${links} destinos locais conferidos; rascunhos e referência ausentes.`);
