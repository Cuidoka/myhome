# Auditoria da implementação e caminho de refinamento

Data: 02/11/2026. Pedido R-012; tarefas V-05, C-02, V-03 e F-01 a F-07. Este documento compara a base implementada com as referências e orienta os próximos lotes. Estados de execução e resultados ficam no [acompanhamento](acompanhamento.md); decisões em [decisoes.md](decisoes.md).

## Diagnóstico

O site está em desenvolvimento inicial. A stack, os componentes fundamentais, a navegação e vários fluxos já funcionam. Ainda há diferenças relevantes de composição, detalhes gráficos, anatomia editorial, mídia e funcionalidades. Aprovar o menu e passar nos testes não significa concluir todas as telas.

A versão de produção contém sete páginas de estrutura e nenhum trabalho real. As 28 amostras só permitem revisar o desenho e os fluxos em desenvolvimento. Integrar conteúdo real é necessário para lançar, mas sua ausência não impede melhorar os componentes e os layouts agora.

## Escopo da revisão da pasta

Inventário do repositório antes deste lote: 113 arquivos rastreados, distribuídos em 12 da raiz, um workflow, oito documentos em docs, 30 arquivos públicos, dois scripts, 57 arquivos em src e três de testes. Os novos arquivos deste lote são descritos abaixo. O inventário não inclui dependências ou resultados gerados como se fossem código do projeto.

| Área | O que foi conferido | Resultado e limite |
| --- | --- | --- |
| Raiz e configuração | Git, exclusões, engines, scripts, lockfile presente, Astro, TypeScript, env de exemplo e atributos de texto | Astro estático e fontes locais já configurados; nenhum serviço ou dependência nova necessário para este lote |
| reference | 38 arquivos: LEIA-ME, 12 HTMLs, 12 fontes de canvas, JSON e 12 capturas | Todas as capturas revisitadas nesta auditoria; comparados papéis, objetos, tipografia, conteúdo e relações com a implementação. Pasta permanece exclusivamente local |
| src/pages e layouts | Entrada, índices, detalhe dinâmico, 404, navegação e rodapé | Rotas funcionam; detalhe genérico estava incompleto para a anatomia do Template e foi reaberto em C-02 |
| src/components | Objetos, filtros, sorteador, cenas, efeitos e movimento | Estrutura reutilizável existe. Notas/cenas ainda simplificam partes da referência; preservar ações reais e evitar transformar decoração em botão falso |
| src/content e lib | Schema, consultas, rascunhos, previewOnly, relações, ordenação e 28 registros de amostra | Todos os registros de amostra mantêm previewOnly. Nenhum conteúdo real recebido. A política de publicação já separa as consultas |
| public | Catálogo, SVGs, favicon e robots | 28 SVGs, total de 56.864 bytes, analisados como XML sem erro. Isso comprova sintaxe, não fidelidade gráfica ou desempenho dos filtros |
| src/styles | Tokens, layout fluido, cenas, detalhes e movimento | Largura total e menu aprovado preservados. Há regras antigas e linhas comprimidas a consolidar; nova folha details.css separa a anatomia editorial |
| tests, scripts e CI | Cobertura existente, conferência de links/build/documentação e workflow | Testes eram bons para a base, mas cobriam detalhes principalmente de texto e obra. Lote amplia as composições para os cinco tipos e inclui casos sem mídia/notas |
| Pastas geradas | node_modules, .astro, dist, test-results, playwright-report e .qa | Ignoradas e fora do envio. .qa mantém a cópia histórica cuja remoção foi recusada pelo ambiente; nenhuma limpeza foi tentada |

O lockfile e as pastas de dependências não receberam uma nova auditoria de vulnerabilidades nesta etapa. O trabalho se concentra no código da aplicação, na comparação visual e nos fluxos já autorizados.

## O que já foi feito e deve ser preservado

- Astro, TypeScript, CSS nativo, Markdown, dependências resolvidas e CI de verificação.
- Estrutura de Entrada, cinco cômodos, detalhes e 404, com rotas geradas pelo conteúdo.
- Menu lateral aprovado pelo autor, faixa horizontal no celular e página sem moldura externa de 1440 px.
- Tokens de cor, três famílias tipográficas locais, textura, papel, lápis e lettering com desgaste.
- Seleção de SVGs decorativos em public/illustrations, sem dependência de reference no build.
- Coleções, schema, ordenação, relacionamentos, exclusão de rascunhos e amostras em produção.
- Filtros de assunto/maturidade, categorias e fitas, sumário, backlinks e sorteador de demonstração.
- Entradas e microinterações nativas, equivalência de foco/hover, toque emulado, redução de movimento e acesso sem JavaScript.
- Documentação de decisões, operação e histórico de verificações. A implementação anterior de movimento foi enviada em ddfdcb9 e o fechamento documental em 774605c; ambos estavam no remoto quando este pedido chegou.

## Comparação por referência

| Referência | Implementação existente e avanço deste lote | O que permanece |
| --- | --- | --- |
| Main / Entrada | Nome, varal, boas-vindas, objetos, novidades e estante. Lote acrescenta cena tática, desenho selecionado e datas nas novidades | Densidade/escala fina, desenho da madeira/lombadas/pregadores, relação entre objetos e destaques editoriais; apresentação/contato definitivos |
| MobileHome | Ordem principal, navegação horizontal e acesso aos mesmos destinos; cena tática adaptada ao fluxo | Rever ritmo vertical e proporção dos objetos após este primeiro acréscimo. Não replicar coordenadas absolutas do canvas |
| Oficina | Bancada, sorteador funcional, ferramentas, prancheta e caderno | Caderno de anotações da referência contém artigos com datas e links; hoje notas são simples. Refinar prancheta, estados, instrumentos e relações com textos técnicos reais |
| Sala | Estante, destaque, filtros e arquivo anual | Explicações visíveis de maturidade, marca de xícara, tratamento de trechos e paginação apenas se o volume justificar |
| Galeria | Molduras, categorias, caderno, cavalete e fotos; navegação entre peças acrescentada no detalhe | Molduras de formatos distintos, peça oval, cabos/ganchos, distribuição menos uniforme, luz, envelope/filme e proporções com mídia real |
| Estúdio | Capa, coleções, listagem e estados sem áudio; detalhe agora reúne capa e área de reprodução | Reproduzir/pausar/buscar áudio real, acesso às faixas pela lista, estados ativos coerentes, créditos/instrumentos e letra/partitura quando existirem |
| Sótão | Teto, mapa, lore, mesa, fichas e diário; detalhe agora reúne mapa e personagens | Conexões visuais mapa/lore, localização nomeada, navegação para sessões específicas, vínculos com trilhas e conteúdos de mundo. Não prometer rotas de bestiário/facções ainda inexistentes |
| Texto | Folha, etiqueta, sumário e relações; lote separa etiqueta/sumário, acrescenta trilha relacionada, cartões e navegação entre textos | Notas de rodapé e retorno ao trecho, figuras/legendas, notas contextualizadas, revisão de tipografia com texto longo e distribuição mobile da metadata |
| MobileTexto | Leitura em uma coluna, sumário agora recolhível e relações em cartões | Ajustar encaixe da metadata dentro/próxima do cabeçalho e notas junto aos trechos; sumário inicia aberto e pode ser fechado sem JS |
| MobileSotao | Mapa, premissa, lore rolável, mesa/fichas e diário | Ajustes finos de mesa, rótulos, luz e proporções; conteúdo/âncoras por sessão ainda em aberto |
| Template | Primeiro lote corrigiu alinhamento de objeto/etiqueta/folha e dados de projeto, música, campanha e obra | Revisar todos os tipos com mídia final e estados longos/vazios; campos específicos adicionais somente conforme necessidade real |
| Sistema | Cores, Fraunces/Shantell/Kalam, abas, objetos e movimentos estabelecidos | Traços de molduras/estantes/ícones, consistência de texturas, tipografia de código e apoio. IBM Plex Mono e Alegreya Sans da referência ainda não foram incorporadas |

## Primeiro lote executado nesta retomada

1. **Detalhes por tipo:** objeto principal agora integra a mesma coluna da folha, alinhado à etiqueta. Música mostra capa e área de áudio; projeto mostra janela/demonstração ou imagem; campanha mostra mapa/fichas; obra recebe moldura e técnica.
2. **Dados coerentes:** etiquetas usam informações existentes de tecnologia/estado, coleção/duração, jogadores/sessões e categoria/técnica. Datas usam “Publicado em”; contagens vêm do conteúdo.
3. **Estados vazios:** sem objeto, não renderizar uma caixa vazia; sem notas, não inventar uma frase atribuída ao trabalho nem manter um painel desnecessário.
4. **Leitura e navegação:** sumário nativo com details/summary, trilha relacionada a partir das relações reais, cartões de backlinks e anterior/próximo dentro do mesmo cômodo. Nenhum player aparece sem áudio.
5. **Mídia:** WorkVisual centraliza imagem/ilustração nos detalhes, Galeria, capa do Estúdio e mapa do Sótão. imageWidth/imageHeight opcionais precisam ser informados juntos. A amostra de Mapas com ruído exercita uma imagem de proporção conhecida; permanece excluída da produção.
6. **Entrada:** cena tática reaproveita battlemap já selecionado; quadro reaproveita profile. Novidades incluem data. Nenhum pacote ou novo ativo foi copiado de reference.
7. **Manutenção:** CharacterCard compartilhado entre cena e detalhe; DetailObject, WorkNavigation e details.css separam responsabilidades antes concentradas no arquivo de rota.

Fontes técnicas consultadas: [MDN — imagem e dimensões](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/img), [MDN — details e summary](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/details). Os componentes continuam seguindo o modelo Astro já documentado em [arquitetura-visual.md](arquitetura-visual.md).

## Fila de trabalho priorizada

| Ordem | Trabalho restante | Tarefas | Dependência |
| --- | --- | --- | --- |
| 1 | Refinar Galeria: formatos de moldura, cabos, peça oval, escala e varal/envelope; conferir desktop e celular | V-05 / F-03 | Pode avançar com amostras identificadas |
| 2 | Completar leitura: metadata mobile, notas contextualizadas, figuras/legendas e tipografia de texto longo | C-02 / F-02 / V-05 | Estrutura pode avançar; conteúdo final é validado depois |
| 3 | Refinar Oficina: prancheta, estados e caderno de artigos relacionados | F-01 / F-06 / V-05 | Aparência pode avançar; projetos/artigos finais dependem de C-03 |
| 4 | Refinar Sótão: conexões do mapa, fichas, diário e âncoras por sessão/trilha | F-05 / F-06 / V-05 | Não criar páginas ou dados de mundo sem conteúdo correspondente |
| 5 | Completar Estúdio: controles reais, comportamento da lista, ficha e materiais complementares | F-04 / C-02 | Layout pode avançar; reprodução depende de áudio e créditos fornecidos |
| 6 | Fechar Entrada, objetos e sistema gráfico; consolidar CSS e conferir o custo dos filtros | V-01 / V-03 / V-05 / Q-02 | Preservar menu; apresentação e contato final dependem de P-02 |
| 7 | Integrar apresentação, contatos e primeiros trabalhos e definir quais áreas estreiam | P-01 / P-02 / C-03 | Seleção e arquivos do autor |
| 8 | Metadados finais, imagem de compartilhamento, sitemap e decisão sobre feed | F-07 | Escopo e endereço público; feed continua decisão aberta |
| 9 | Revisão editorial, acessibilidade, desempenho, outros navegadores e dispositivos reais | Q-01 a Q-03 | Fazer verificações proporcionais a cada lote; repetir revisão final com o conteúdo completo |
| 10 | Hospedagem, deploy, validação pública e operação/recuperação | L-01 a L-03 | Conteúdo e candidato aprovados, provedor/endereço definidos e autorização aplicável |

Essa fila incorpora a correção do usuário: conteúdo real não é a única pendência. V-05 e C-02 permanecem em andamento depois do primeiro lote. Não marcar todo o site pronto por atingir uma contagem de testes.

## Verificações e limites

Check de 38 arquivos passou sem erros/avisos/hints. A ampliação dos testes encontrou overflow no novo grid do detalhe de projeto em 390 px; a coluna interna passou a usar minmax(0, 1fr), e o caso direcionado passou. A suíte ampliada de prévia passou com 111 testes, incluindo os cinco tipos em sete larguras; os 14 testes de produção também passaram. Build gerou sete páginas, com 113 destinos locais conferidos. O ajuste final de alinhamento das datas foi conferido novamente em 320/1440/3440. Envio e CI desta retomada ficam registrados no acompanhamento.

Permanecem sem comprovação: reprodução de áudio final, mídia real em todas as proporções, leitores de tela e dispositivos físicos, outros motores de navegador, medição de desempenho em hardware modesto e fidelidade final aprovada pelo autor. A proteção de reference deve ser conferida em cada envio.
