# Cuidoka — análise da referência

Levantamento inicial de 01/11/2026. Para o estado atual e a sequência de trabalho, consultar o [guia do projeto](guia-do-projeto.md), o [acompanhamento](acompanhamento.md) e o [registro de decisões](decisoes.md). O texto abaixo descreve a referência e o estado inicial; a implementação foi autorizada posteriormente pelo pedido “Do it”.

## Material analisado

A pasta contém 38 arquivos originais: LEIA-ME, 12 páginas HTML, 12 capturas PNG, 12 fontes `.dc.html` e o `canvas.json`. Os textos das páginas exportadas coincidem com os respectivos arquivos do canvas. As capturas foram inspecionadas visualmente. Os arquivos de referência permanecem locais, ignorados por `/reference/` no `.gitignore`.

Na análise inicial, a pasta raiz continha somente `reference`: ainda não há aplicação, dependências ou repositório Git inicializado.

## Conceito e navegação

Uma casa pessoal na internet que mostra trabalhos, interesses e processos. A entrada é uma parede de objetos clicáveis, com navegação explícita por cômodos. As relações entre trabalhos são parte central da experiência: uma música pode levar a uma campanha, que leva a um texto ou desenho.

| Página | Papel |
| --- | --- |
| Entrada (`index`) | Nome da casa, boas-vindas, fotos, destaques de música, código, RPG, desenho, atualizações e livros/textos |
| Estúdio | Faixa em destaque, coleções em fitas, lista de músicas e notas de processo |
| Oficina | Projeto interativo em destaque, catálogo de projetos, tecnologias, estados e anotações técnicas |
| Sótão | Campanhas, mapas, lore, personagens, sessões e outros mundos |
| Sala | Texto em destaque, assuntos, maturidade e arquivo por ano |
| Galeria | Desenhos em molduras, caderno de estudos e varal de fotografias |
| Texto | Leitura longa, metadados, sumário, notas, áudio opcional, referências e navegação |
| Template | Especificação da anatomia de páginas individuais para música, projeto, campanha e obra |
| Sistema | Especificação visual; documento de trabalho, sem necessidade de virar página pública |
| MobileHome, MobileSotao, MobileTexto | Referências de composição para celular |

O site precisa também de uma apresentação pessoal e contato reais: a entrada tem links para essas áreas, mas o conteúdo correspondente ainda não está definido. O rodapé prevê feed RSS.

## Linguagem visual a preservar

- Parede creme, papéis claros, terracota, madeira e verde sálvia. Cores principais: `#F3E7D6`, `#FFF8ED`, `#B9633C`, `#DA925F`, `#382A22`, `#7B6557`, `#899073`, `#B98563`.
- Fraunces para lettering pintado; Shantell Sans para a escrita principal; Kalam para anotações; IBM Plex Mono para código; Alegreya Sans como apoio. O sistema considera o lettering provisório até existir uma versão autoral.
- Ilustrações SVG, bordas irregulares, texturas, papéis sobrepostos, fitas, alfinetes, molduras, polaroids e lombadas.
- Objetos têm significado: fita é música, mapa é RPG, código impresso é projeto, moldura é arte e lombada é texto.
- Abas laterais com nome e descrição no desktop; fileira horizontal no topo no celular.
- Movimento breve ao interagir, sem animação constante. Respeitar preferência por movimento reduzido.
- Maturidade editorial: semente, broto e árvore. Separar isso do estado funcional dos projetos, como pronto, protótipo e parado.

## O que o protótipo entrega e o que falta

Os HTMLs possuem navegação entre arquivos, âncoras e efeitos CSS. Não possuem scripts. Player, sorteador, filtros e outras ações desenhadas não constituem funcionalidades implementadas. Vários links são `#`, âncoras sem destino ou levam ao template de demonstração.

As páginas desktop usam largura fixa de 1440 px, muitos posicionamentos absolutos e estilos repetidos. O celular está em arquivos separados; não há um sistema responsivo integrado. Somente entrada, sótão e texto possuem composição mobile explícita. As demais telas e os tamanhos intermediários exigem adaptação.

As imagens e obras mostradas são ilustrações em SVG embutidas no HTML. Os PNGs são capturas de página, não os arquivos finais de obras para publicar. Textos, títulos, personagens, datas, contagens e projetos são demonstrativos, conforme o LEIA-ME.

Na implementação, usar componentes compartilhados, tokens e layouts fluidos. Reservar posicionamento absoluto para detalhes decorativos dentro de objetos. Garantir leitura, foco de teclado e ordem de navegação coerentes; os objetos clicáveis precisam de nomes claros. Avaliar o custo dos filtros SVG no celular e manter texturas discretas para não prejudicar a leitura.

## Stack recomendada

**Astro + TypeScript + CSS nativo + Markdown/MDX, com deploy estático na Vercel e código no GitHub.**

Astro combina com um site predominantemente editorial, com páginas de trabalhos e interações localizadas. CSS com propriedades customizadas permite reproduzir esta identidade específica. Markdown para textos e descrições; MDX somente onde componentes dentro do conteúdo forem úteis. Content Collections para validar metadados e gerar páginas.

Começar com interações em TypeScript e áudio HTML nativo. Adicionar um componente React somente se uma ferramenta futura justificar. A primeira versão pode funcionar sem servidor próprio, banco de dados ou painel administrativo. Um formulário que envie mensagens exigiria serviço ou endpoint; contato por e-mail/link pode começar simples.

Modelo de conteúdo sugerido: textos, projetos, músicas, obras e campanhas. Campos comuns: identificador, título, resumo, data de criação/atualização, tags, maturidade, destaque e trabalhos relacionados. Campos específicos para áudio/capa, tecnologia/repositório/demo, técnica/imagem e dados de campanha. O histórico da entrada pode ser derivado das publicações ou registrado editorialmente.

Deploy: conectar o repositório à Vercel e publicar a saída estática. GitHub Pages é uma alternativa compatível, com publicação por GitHub Actions. Não depender de arquivos dentro de `reference` na aplicação: os ativos escolhidos para produção devem ter localização própria e ser revisados para publicação.

Documentação consultada:

- https://docs.astro.build/en/concepts/islands/
- https://docs.astro.build/en/guides/content-collections/
- https://vercel.com/docs/frameworks/frontend/astro
- https://docs.astro.build/en/guides/deploy/github/

## Sequência proposta

1. Implementar a entrada responsiva, navegação, tokens e componentes de objetos; incluir apresentação pessoal e contato.
2. Estruturar conteúdo e páginas individuais; validar o fluxo com trabalhos reais escolhidos pelo autor.
3. Expandir para os cinco cômodos, conforme o conteúdo disponível, e implementar as interações necessárias.
4. Revisar acessibilidade, leitura mobile, mídias, metadados, links e build; publicar.

Antes de substituir conteúdo demonstrativo, definir a apresentação pessoal, os primeiros trabalhos, contatos públicos e se todos os cômodos devem estrear juntos. A referência permite começar pela estrutura sem inventar esses dados.
