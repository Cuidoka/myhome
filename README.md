# Cuidoka

Casa pessoal na internet para apresentar trabalhos, compartilhar processos e falar sobre quem mora aqui. A referência organiza o conteúdo em Entrada, Estúdio, Oficina, Sótão, Sala e Galeria.

**Estado atual:** estrutura em Astro, TypeScript, CSS nativo e Markdown. Entrada e cinco cômodos com composições próprias, filtros, páginas individuais, sumário, notas e relações. Traços, papéis, lettering e objetos seguem a referência. Os primeiros trabalhos reais e a apresentação final ainda precisam ser fornecidos. Não há site publicado.

Código enviado para [Cuidoka/myhome](https://github.com/Cuidoka/myhome), branch `main`. A [verificação da etapa de movimento no GitHub Actions](https://github.com/Cuidoka/myhome/actions/runs/41379953708) passou. Hospedagem recomendada: Vercel, com build estático; conta e domínio ainda não configurados. Envio de código não equivale a deploy do site.

## Executar e verificar

Requer Node.js 22.23.4 ou superior; o projeto usa Node 24 no CI. Com Node e npm disponíveis:

```sh
npm ci
npm run dev
```

O lockfile já está incluído. Scripts disponíveis:

```sh
npm run docs:check
npm run check
npm run build
npm run verify
npm run preview
```

Os testes de navegador passaram localmente em Chromium: 14 para produção e 77 para a prévia. Instalar o navegador com `npx playwright install chromium`, executar `npm run test:browser` após o build e `npm run test:preview` para o desenvolvimento. As duas suítes usam portas distintas; o CI executa ambas. O [guia de operação](docs/operacao.md) registra resultados reais e limitações.

Em `npm run dev`, 28 amostras identificadas permitem revisar a composição completa. Elas usam `previewOnly: true` e **não geram páginas no build público**. O modelo privado continua sem rota. Os SVGs decorativos adaptados são ativos próprios do site; `reference/` não é dependência de execução ou build.

## Adicionar um trabalho

Criar um Markdown em `src/content/trabalhos/` usando o modelo privado existente. Selecionar `room`, preencher metadados e texto, e manter `draft: true` até a revisão. Um trabalho público precisa de `publishedAt` e `draft: false`. Ele passa a aparecer no cômodo correspondente; `featured: true` também o destaca na entrada. Imagens e áudio opcionais ficam em `public/`, com caminhos locais a partir de `/`.

Nome, descrição e links gerais ficam em `src/data/site.ts`. A apresentação atual é provisória e não inventa profissão, formação ou trabalhos do autor.

## Por onde começar

1. Leia o [guia do projeto](docs/guia-do-projeto.md) para conhecer o escopo, a sequência e os critérios de conclusão.
2. Consulte o [acompanhamento](docs/acompanhamento.md) para saber o que foi concluído, o que falta e de onde retomar.
3. Confira o [registro de decisões](docs/decisoes.md) antes de tratar uma proposta como aprovada.
4. Use o [inventário de conteúdo](docs/conteudo.md) para preparar a apresentação pessoal e os trabalhos reais.
5. Siga o [guia de operação](docs/operacao.md) para desenvolvimento, validação, publicação e manutenção, após a definição da stack.

A [arquitetura visual e técnica](docs/arquitetura-visual.md) reúne a organização dos componentes, os critérios de fidelidade e as fontes oficiais aplicadas.

A [análise da referência](docs/analise-reference.md) registra as telas, o sistema visual e as limitações do protótipo. O arquivo [AGENTS.md](AGENTS.md) orienta a continuidade do trabalho e a atualização destes documentos.

## Referência local

A pasta `reference/` é material local e está excluída pelo `.gitignore`. Ela **não deve ser enviada ao GitHub nem publicada com o site**. O futuro código de produção deve funcionar sem depender dela.

## Como acompanhar

`docs/acompanhamento.md` é a fonte principal dos estados das tarefas. `docs/decisoes.md` guarda o histórico de aprovações e propostas. O guia explica a sequência, sem duplicar o controle de estados.

Página com largura total, sem margens externas nem proporção obrigatória; navegação e elementos se adaptam à janela. R-011 acrescenta entradas discretas e microinterações, com pesquisa e critérios em [movimento.md](docs/movimento.md). Check de Astro/TypeScript, build, links e 91 testes de navegador passaram localmente, com dez tamanhos de janela entre 320 e 3440 px. Capturas representativas revisadas; conteúdo/mídia reais e publicação continuam no acompanhamento.
