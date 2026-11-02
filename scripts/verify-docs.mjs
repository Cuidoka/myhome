import { readFile, readdir, stat } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import assert from 'node:assert/strict';

const files = ['README.md', 'AGENTS.md', ...(await readdir('docs')).filter((name) => name.endsWith('.md')).map((name) => `docs/${name}`)];
const tracker = await readFile('docs/acompanhamento.md', 'utf8');
const decisions = await readFile('docs/decisoes.md', 'utf8');
const tasks = [...tracker.matchAll(/^\| ([APVCFQLM]-\d{2}) \|/gm)].map((match) => match[1]);
const ids = [...decisions.matchAll(/^\| ([RDE]-\d{3}) \|/gm)].map((match) => match[1]);
assert.equal(tasks.length, new Set(tasks).size, 'IDs de tarefas duplicados');
assert.equal(ids.length, new Set(ids).size, 'IDs de decisões duplicados');
let links = 0;
for (const file of files) {
  const text = await readFile(file, 'utf8');
  assert(!text.includes('\uFFFD'), `UTF-8 inválido: ${file}`);
  assert.equal((text.match(/^```/gm) ?? []).length % 2, 0, `Bloco de código aberto: ${file}`);
  for (const match of text.matchAll(/\b(?:[RDE]-\d{3}|[APVCFQLM]-\d{2})\b/g)) {
    assert([...tasks, ...ids].includes(match[0]), `ID desconhecido em ${file}: ${match[0]}`);
  }
  for (const match of text.matchAll(/(?<!!)\[[^\]]+\]\(([^)]+)\)/g)) {
    if (/^[a-z]+:/i.test(match[1]) || match[1].startsWith('#')) continue;
    const target = resolve(dirname(file), match[1].split('#')[0]);
    assert((await stat(target)).isFile(), `Link quebrado em ${file}: ${target}`);
    links++;
  }
}
assert((await readFile('.gitignore', 'utf8')).split(/\r?\n/).includes('/reference/'));
console.log(`Documentação OK: ${files.length} arquivos, ${tasks.length} tarefas, ${ids.length} decisões e ${links} links locais.`);
