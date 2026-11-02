# Cuidoka

Casa pessoal na internet para apresentar trabalhos, compartilhar processos e falar sobre quem mora aqui. A referência organiza o conteúdo em Entrada, Estúdio, Oficina, Sótão, Sala e Galeria.

**Estado atual:** implementação inicial em Astro, TypeScript, CSS nativo e Markdown. Entrada ilustrada responsiva, páginas dos cinco cômodos, modelo editorial e página 404 criados. Os primeiros trabalhos reais e a apresentação final ainda precisam ser fornecidos. Não há site publicado.

Código enviado para [Cuidoka/myhome](https://github.com/Cuidoka/myhome), branch `main`. A [verificação inicial no GitHub Actions](https://github.com/Cuidoka/myhome/actions/runs/41371821212) passou. Hospedagem recomendada: Vercel, com build estático; conta e domínio ainda não configurados. Envio de código não equivale a deploy do site.

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

Os oito testes de navegador passaram localmente em Chromium. Para executá-los, instalar o Chromium de teste com `npx playwright install chromium` e usar `npm run test:browser`. O workflow executa essas verificações no GitHub. O [guia de operação](docs/operacao.md) registra resultados reais e limitações do ambiente.

## Adicionar um trabalho

Criar um Markdown em `src/content/trabalhos/` usando o modelo privado existente. Selecionar `room`, preencher metadados e texto, e manter `draft: true` até a revisão. Um trabalho público precisa de `publishedAt` e `draft: false`. Ele passa a aparecer no cômodo correspondente; `featured: true` também o destaca na entrada. Imagens e áudio opcionais ficam em `public/`, com caminhos locais a partir de `/`.

Nome, descrição e links gerais ficam em `src/data/site.ts`. A apresentação atual é provisória e não inventa profissão, formação ou trabalhos do autor.

## Por onde começar

1. Leia o [guia do projeto](docs/guia-do-projeto.md) para conhecer o escopo, a sequência e os critérios de conclusão.
2. Consulte o [acompanhamento](docs/acompanhamento.md) para saber o que foi concluído, o que falta e de onde retomar.
3. Confira o [registro de decisões](docs/decisoes.md) antes de tratar uma proposta como aprovada.
4. Use o [inventário de conteúdo](docs/conteudo.md) para preparar a apresentação pessoal e os trabalhos reais.
5. Siga o [guia de operação](docs/operacao.md) para desenvolvimento, validação, publicação e manutenção, após a definição da stack.

A [análise da referência](docs/analise-reference.md) registra as telas, o sistema visual e as limitações do protótipo. O arquivo [AGENTS.md](AGENTS.md) orienta a continuidade do trabalho e a atualização destes documentos.

## Referência local

A pasta `reference/` é material local e está excluída pelo `.gitignore`. Ela **não deve ser enviada ao GitHub nem publicada com o site**. O futuro código de produção deve funcionar sem depender dela.

## Como acompanhar

`docs/acompanhamento.md` é a fonte principal dos estados das tarefas. `docs/decisoes.md` guarda o histórico de aprovações e propostas. O guia explica a sequência, sem duplicar o controle de estados.

Check de Astro/TypeScript, build, links e oito testes de navegador passaram localmente. A entrada foi revisada nas larguras de 320, 390, 768, 1024 e 1440 px. Conteúdo real, demais fluxos editoriais e publicação continuam no acompanhamento.
