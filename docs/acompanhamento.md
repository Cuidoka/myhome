# Acompanhamento do projeto

Última atualização: 01/11/2026. Este arquivo é a fonte principal do estado das tarefas. A sequência e os critérios estão no [guia](guia-do-projeto.md); a autorização de cada decisão está no [registro de decisões](decisoes.md).

## Situação atual e retomada

**Fase atual:** revisão R-009 implementada e enviada em main no commit 4c70688, com CI aprovado: largura total sem margens externas, navegação no fluxo e polimento responsivo. Check de 32 arquivos sem erros/avisos/hints; build de sete páginas e 98 destinos; 84 testes Chromium passaram (13 de produção e 71 de prévia), com dez tamanhos de janela de 320 a 3440 px. Conteúdo real e hospedagem continuam pendentes.

**Revisão do autor:** menu lateral aprovado em R-010. Preservar esse componente e sua adaptação para celular. A revisão final das demais composições, conteúdo e mídia continua pendente.

**Prévia para análise do autor:** servidor de desenvolvimento iniciado em `http://127.0.0.1:4321/`, com resposta HTTP 200 conferida na sessão de implementação. Mantido em execução por solicitação do usuário; esta revisão documental não repetiu a conferência HTTP.

**Próximo passo:** P-02 e C-03: reunir nome público, apresentação, contatos e uma primeira seleção de trabalhos reais, conforme o [inventário de conteúdo](conteudo.md). Sugestão de início: apresentação da Entrada/Sobre e um trabalho completo de um cômodo, expandindo a seleção em seguida. Com o inventário, definir a estreia em P-01. A base visual/técnica já validada permite essa integração; sitemap/feed, revisão final e hospedagem vêm depois, conforme as dependências do guia.

**Etapa R-008:** arquitetura, fontes oficiais e critérios de fidelidade registrados em [arquitetura-visual.md](arquitetura-visual.md). Foram adaptados filtros e 28 SVGs selecionados; 28 registros de amostra validam a composição e são excluídos da produção. Não confundir ativos decorativos compartilhados com registros de portfólio.

**Revisão R-009:** enquadramento externo de 1440 px substituído por página fluida, sem proporção obrigatória. Grade da navegação, escalas, estante, quadros e tabelas refinados conforme [arquitetura-visual.md](arquitetura-visual.md).

**Ambiente atual:** acesso local e rede liberados. Node 24.22.1; npm 11.21.1 executado via `pnpm dlx npm@11` a partir do runtime fornecido, sem instalação global. Dependências e lockfile criados; origem configurada para `Cuidoka/myhome`. O erro 403 do conector permanece apenas como histórico; integração por Git local confirmada.

## Estados usados

| Estado | Significado |
| --- | --- |
| Concluído | Entrega e verificação descritas ocorreram |
| Em andamento | Trabalho iniciado, com parte restante explicitada |
| Implementado, não validado | Código escrito; critérios que dependem de build, navegador ou revisão ainda não comprovados |
| Pendente | Trabalho não iniciado, aguardando a sequência ou dependências |
| Aguardando definição | Escolha ou informação identificada ainda falta |
| Adiado | Retirado do lançamento por decisão registrada; não usar sem registrar a decisão |

Uma dependência não resolvida em uma tarefa não impede automaticamente as demais. Manutenção recorrente não é uma pendência que impeça encerrar o lançamento.

## Etapas realizadas

| ID | Etapa | Estado | Evidência e limite |
| --- | --- | --- | --- |
| A-01 | Inventariar e analisar a referência | Concluído | `analise-reference.md`: 38 arquivos originais, comparação textual de 12 pares HTML/canvas e inspeção visual das 12 capturas |
| A-02 | Recomendar stack e caminho de deploy | Concluído | Recomendação registrada e documentação oficial consultada; início autorizado pelo pedido “Do it” |
| A-03 | Preparar exclusão de `reference/` | Concluído | `.gitignore` contém `/reference/`; `git check-ignore` confirmou a regra e nenhum arquivo da pasta está rastreado. Conferência do envio/build permanece em P-04 e Q-03 |
| A-04 | Criar e verificar os documentos de continuidade | Concluído | README, AGENTS, guia, decisões, acompanhamento, conteúdo e operação criados; conferidos links locais, UTF-8, IDs de tarefas/decisões e regra de exclusão |

## Base e ambiente

| ID | Tarefa | Estado | Dependência | Critério de conclusão |
| --- | --- | --- | --- | --- |
| P-01 | Consolidar stack, conteúdo em arquivos e escopo do lançamento | Em andamento | D-001 a D-005 | Stack e início autorizados; seleção final dos cômodos de estreia depende do conteúdo real |
| P-02 | Reunir apresentação, contato e seleção inicial de trabalhos | Aguardando definição | E-001 a E-004 | Inventário preenchido; distinguir itens prontos, ausentes e adiados. Conteúdo restante pode ser integrado depois |
| P-03 | Verificar ambiente e criar aplicação mínima | Concluído | Base técnica definida em P-01 e autorização para implementação | Instalação, check, build e testes locais passaram; versões e comandos registrados |
| P-04 | Preparar Git e rotinas locais | Concluído | P-03; remoto definido em D-008 | Lockfile local, scripts validados, Git configurado e commit 704def5 enviado em main; origem sincronizada e CI inicial aprovado |

## Visual e entrada

| ID | Tarefa | Estado | Dependência | Critério de conclusão |
| --- | --- | --- | --- | --- |
| V-01 | Criar tokens e tipografia | Concluído | P-03 | Tokens centralizados e fontes locais renderizados; capturas revisadas |
| V-02 | Criar layout, navegação e objetos compartilhados | Concluído | V-01 e R-009 | Largura total sem moldura externa, navegação em coluna própria e adaptação para janela baixa. Links, foco, aba atual e separação entre conteúdo/abas verificados no Chromium. Menu lateral aprovado pelo autor em R-010 |
| V-03 | Implementar entrada, sobre e contato | Em andamento | V-02; conteúdo final depende de P-02 | Implementação responsiva validada; apresentação provisória e contato GitHub ainda precisam da revisão de conteúdo do autor |
| V-04 | Revisar entrada em desktop e mobile | Concluído | V-03 e R-009 | Entrada testada em dez janelas entre 320 e 3440 px; largura total e ausência de overflow verificadas, capturas representativas revisadas. Teclado, redimensionamento e movimento reduzido passaram. Toque físico e outros motores não verificados |

## Conteúdo e páginas individuais

| ID | Tarefa | Estado | Dependência | Critério de conclusão |
| --- | --- | --- | --- | --- |
| C-01 | Definir coleções, metadados, relações e URLs | Concluído | P-03 e escopo P-01 | Coleção validada, política pública/prévia, ordenação determinística, metadados por cômodo e regras documentadas; exclusão de rascunhos/amostras e relações exercitadas. Seleção editorial real permanece em C-03 |
| C-02 | Implementar layouts individuais | Concluído | C-01 e V-02 | Anatomia de etiqueta, folha e notas; objeto principal conforme tipo, Markdown, sumário e relações. Rotas de projeto/texto/faixa/campanha/obra exercitadas com amostras; mídia real pendente nas tarefas dos cômodos |
| C-03 | Integrar conteúdo real inicial | Pendente | P-02 e C-02 | Apresentação, contato e seleção de trabalhos revisados; sem autoria ou contagens fictícias |

## Cômodos e interações

Estrutura dos cinco cômodos criada como parte do início autorizado. Isso não equivale à conclusão do conteúdo ou das funcionalidades de cada área. Uma área excluída da estreia deve ser marcada como adiada com decisão vinculada.

| ID | Tarefa | Estado | Dependência | Critério de conclusão |
| --- | --- | --- | --- | --- |
| F-01 | Implementar Oficina | Em andamento | C-01, C-02 e V-02; conteúdo depende de C-03 | Bancada, sorteador funcional de exemplo, tecnologias, prancheta e caderno validados; faltam projetos reais e demos escolhidas |
| F-02 | Implementar Sala | Em andamento | C-01, C-02 e V-02; conteúdo depende de C-03 | Estante, destaque, filtros combinados, arquivo anual e leitura validados; faltam textos reais e revisão editorial do autor |
| F-03 | Implementar Galeria | Em andamento | C-01, C-02 e V-02; imagens dependem de C-03 | Molduras, caderno, cavalete, varal e filtro de categorias validados; faltam obras/fotos reais e revisão com suas proporções |
| F-04 | Implementar Estúdio | Em andamento | C-01, C-02 e V-02; áudio depende de C-03 | Capa, ficha, fitas, filtro por coleção e lista validados; sem play falso na amostra. Faltam faixas reais e teste de áudio |
| F-05 | Implementar Sótão | Em andamento | C-01, C-02 e V-02; material depende de C-03 | Mapa, lore, mesa, fichas, sessões e baús implementados e validados com metadados; falta conteúdo real |
| F-06 | Completar interações e relações entre áreas | Em andamento | Áreas incluídas e E-006 | Filtros, sorteador, sumário, relações de entrada/saída e navegação testados com amostras; falta revisar relações e demos definitivas |
| F-07 | Implementar metadados, 404, sitemap e feed definido para estreia | Em andamento | C-01, URLs e E-006 | Metadados e 404 preparados; sitemap/feed e endereço final permanecem pendentes |

## Revisão, publicação e manutenção

| ID | Tarefa | Estado | Dependência | Critério de conclusão |
| --- | --- | --- | --- | --- |
| Q-01 | Revisar conteúdo e navegação completos | Pendente | C-03 e áreas incluídas | Sem destinos falsos, mídia ausente, marcadores públicos indevidos ou dados inconsistentes |
| Q-02 | Validar visual, acessibilidade e funcionalidades | Em andamento | V-04 e áreas incluídas | 84 testes locais, composições dos cinco cômodos em dez janelas e detalhes em quatro larguras; capturas representativas revisadas. Revisão final de conteúdo/mídia e outros motores/dispositivos físicos pendente |
| Q-03 | Validar build, Git e independência da referência | Em andamento | P-04, F-07 e áreas incluídas | Base atual validada em cópia sem referência com npm ci/build/verify e no CI; pasta ausente do índice, árvore remota e histórico inicial. Repetir revisão final quando o conteúdo/escopo estiver completo |
| L-01 | Preparar hospedagem, repositório e domínio | Em andamento | D-002 e E-005 | Repositório main e CI prontos; conta de hospedagem e domínio ainda a definir |
| L-02 | Publicar e conferir a versão pública | Pendente | Q-01 a Q-03 e L-01 | URL acessível; páginas, mídia e acesso direto conferidos; revisão publicada registrada |
| L-03 | Entregar instruções finais e pendências residuais | Pendente | L-02 | Operação e recuperação verificadas; resultado e backlog documentados |
| M-01 | Manter conteúdo e dependências | Pendente | L-03 | Rotina recorrente definida na entrega; cada ocorrência gera registro próprio |

## Dependências atuais e trabalho incompleto

- **Escolha técnica e lançamento:** implementação inicial autorizada; seleção de conteúdo e abrangência da estreia ainda não finalizadas.
- **Conteúdo:** não foram fornecidos apresentação final, contatos públicos ou seleção de trabalhos reais. Exemplos da referência continuam demonstrativos.
- **Ambiente:** instalação já validada; Astro check/build e 84 testes locais passam. Produção e desenvolvimento permanecem separados nas verificações.
- **Git:** revisão responsiva enviada em main, origem sincronizada e CI aprovado em 4c70688. O 403 anterior do conector não bloqueia o Git local. Fechamento apenas documental não representa novo teste da aplicação.
- **Publicação:** remoto confirmado; hospedagem e domínio ainda não configurados. Nenhum deploy realizado.
- **Desenvolvimento:** componentes e composições dos cômodos, detalhes, filtros e relações exercitados com amostras identificadas. Áudio/mídia e conteúdo reais ainda exigem revisão; não declarar o lançamento completo.

## Diário de execução

### 01/11/2026 — análise inicial

- **Pedido:** analisar a referência e recomendar uma stack com deploy tranquilo; impedir envio de `reference/` ao GitHub.
- **Trabalho:** inventário, leitura dos HTMLs e fontes, comparação textual e inspeção das capturas; análise registrada; `.gitignore` criado.
- **Verificação:** apenas material de referência existia inicialmente; comando Git confirmou ausência de repositório. Tentativa de conferir a regra com `git check-ignore` não pôde validar a exclusão porque não havia repositório.
- **Resultado:** análise e recomendação entregues. Aplicação e publicação não iniciadas.

### 01/11/2026 — documentação de continuidade

- **Pedido:** documentar etapas aprovadas, pendências e guia completo; manter respostas em português.
- **Trabalho:** criação do README, instruções em AGENTS, guia, decisões, acompanhamento, inventário de conteúdo e operação.
- **Verificação:** conferência automatizada dos oito documentos Markdown passou: links locais, leitura UTF-8, blocos de código, 29 IDs de tarefa únicos, 19 registros de requisitos/propostas/escolhas e referências válidas às decisões. Regra `/reference/` presente. Revisão textual distingue propostas de aprovações e comandos previstos de verificações realizadas. Isso não valida build, índice Git ou deploy, que ainda não existem.
- **Resultado:** A-04 concluída; planejamento e procedimento de continuidade entregues. Nenhuma implementação, configuração de conta ou publicação realizada.
- **Próximo passo:** retomar P-01 e P-02; resolver acesso ao runtime em P-03 quando a base técnica estiver definida e a implementação for iniciada.

### 01/11/2026 — primeira implementação

- **Pedido e autorização:** R-007; iniciar o plano e usar `https://github.com/Cuidoka/myhome.git`. A URL substitui mnexo, informada na mensagem interrompida.
- **Trabalho:** aplicação Astro/TypeScript, tokens CSS, fontes via dependências, navegação responsiva, parede ilustrada, estante, apresentação provisória e contato GitHub. Rotas dos cinco cômodos, estados vazios, coleção Markdown, filtro de tags e template de trabalho com mídia opcional. Nenhum trabalho demonstrativo publicado.
- **Qualidade preparada:** scripts de conferência de documentos e build; testes Playwright para cinco larguras, navegação, teclado, rascunhos e movimento reduzido. Workflow de CI e registro inicial de lockfile preparados, ainda sem envio.
- **Verificação local:** Node confirmou sintaxe de oito módulos JS/TS; checagem documental passou com oito documentos, 29 tarefas, 23 registros de decisão/requisito/escolha e 17 links locais. JSONs de configuração válidos. Seleção de 34 arquivos-fonte conferida sem referência/metadados Git; os 38 arquivos originais de referência permanecem preservados. `git check-ignore` confirmou a exclusão de páginas e imagens da referência; `git ls-files -- reference` vazio. Parsers de YAML/CSS não disponíveis nessa verificação. Nada disso compila arquivos Astro ou resolve tipos/imports.
- **Impedimentos observados:** registry npm EACCES, Git HTTPS sem conexão, configuração/índice local com Permission denied, criação remota de arquivo com 403 Resource not accessible by integration. Consulta remota confirmou repositório público vazio e permissão de usuário para escrita, mas a integração não conseguiu escrever. Não presumir que metadata de permissão equivale a token apto a enviar.
- **Resultado:** código local preservado. Sem dependências instaladas, lockfile, build, execução de testes de navegador, commit remoto ou deploy. Pedido de liberação da integração apresentado ao usuário enquanto o trabalho local continuava.
- **Retomada:** resolver acesso, enviar os arquivos de fonte e documentação sem referência; acompanhar CI, corrigir eventuais falhas e revisar screenshots. Depois integrar conteúdo real e configurar hospedagem. Não recomeçar o scaffold nem repetir a análise da referência.

### 01/11/2026 — retomada após liberação do ambiente

- **Contexto:** usuário perguntou como conceder permissão; a sessão já havia passado a permitir rede e acesso a arquivos. Autorização R-007 mantida, sem solicitar novamente aprovação do trabalho.
- **Tarefas:** P-03/P-04, V-01 a V-04, verificações parciais de Q-02/Q-03 e integração remota.
- **Ambiente:** instalação local retomada com Node 24.22.1 e npm 11.21.1 via pnpm dlx. Remoto local configurado para myhome. Git detectou proprietário da conta sandbox anterior; adicionada somente a pasta exata a safe.directory.
- **Correções:** auditoria inicial apontou três dependências com avisos; Astro atualizado de 6.4.8 para 7.4.4. Tipos Node adicionados e importações Zod atualizadas. Auditoria da instalação final reportou zero vulnerabilidades. Lockfile gerado localmente e job de escrita automática removido do CI.
- **Falhas encontradas e corrigidas:** check inicial teve dois erros por tipos Node ausentes; primeira rodada de navegador encontrou overflow em 320 px e uma captura falhou com seis workers. Título passou a respeitar seu contêiner, fotos reservaram espaço para as abas e testes passaram a usar dois workers. Espaços do título sobre ajustados para celular.
- **Verificações concluídas:** check com zero erros/avisos/hints; build de sete páginas; 93 destinos locais; oito testes Chromium cobrindo cinco larguras, navegação, teclado, rascunhos e movimento reduzido. Capturas das cinco larguras revisadas. Abertura na aba integrada indisponível por falha do host de navegador; revisão visual feita pelas capturas reais dos testes.
- **Cópia limpa:** 36 arquivos de fonte/documentação copiados sem referência, Git ou dependências. npm ci, build de sete páginas e conferência dos 93 destinos passaram, com auditoria sem vulnerabilidades reportadas. A política do ambiente recusou a remoção recursiva dessa cópia temporária, sem justificativa adicional; ela permanece ignorada em `.qa/`, fora do índice/remoto. Nenhuma tentativa de contornar essa recusa foi feita.
- **Integração concluída:** commit [704def5](https://github.com/Cuidoka/myhome/commit/704def56d08c5e79f138bf2302e70c6e22be0c24) enviado por Git local, fetch configurado e origin/main sincronizado. `git ls-tree` da origem e histórico inicial conferidos sem `reference/`. A [execução CI 41371821212](https://github.com/Cuidoka/myhome/actions/runs/41371821212) terminou com success, incluindo os testes de navegador no Linux.
- **Encerramento desta etapa:** preview temporário encerrado. Documentação de fechamento verificada localmente; commit somente documental usa `[skip ci]` para evitar repetir testes de aplicação sem mudança de código. Conteúdo final, fluxos com dados reais e hospedagem continuam pendentes. Próximo ponto de retomada: P-02/C-03 e definição final de P-01.

### 01/11/2026 — servidor local para análise do autor

- **Pedido:** “Rode o projeto para que eu analise”. Continuação de V-03/Q-02, sem alteração do conteúdo ou do escopo.
- **Execução:** Astro iniciado em modo de desenvolvimento, restrito a `127.0.0.1:4321`, com atualização automática ao editar arquivos.
- **Verificação:** entrada respondeu HTTP 200, com título da casa e boas-vindas presentes no HTML. Não foi necessário reinstalar dependências ou gerar outro build.
- **Estado:** servidor mantido em execução por solicitação do usuário, disponível em `http://127.0.0.1:4321/`. Não é um deploy público. A análise visual do autor continua pendente; aguardar suas observações.

### 01/11/2026 — estrutura fiel à referência e documentação oficial

- **Pedido:** R-008; seguir o guia e documentação oficial, preservando traços e estética. Tarefas C-01/C-02 e avanço de F-01 a F-06, com refinamento de V-01/V-02.
- **Fontes e arquitetura:** componentes, layouts, coleções, Zod, CSS e ambiente do Astro, mais documentação SVG da MDN. Aplicações e links reunidos em arquitetura-visual.md. Sem novos serviços, banco ou framework de interface.
- **Visual:** filtros de papel/lápis/tinta, lettering desgastado e SVGs selecionados adaptados. Oficina com bancada/prancheta, Sala com estante/arquivo, Galeria com molduras/caderno/varal, Estúdio com fitas e Sótão com mapas/mesa/baús. Ajustes após inspeção: lombadas curtas, posição da estante, espaço entre título e bilhete, mapa tático e dados sobre a mesa. Toolbar do Astro desativada na prévia para não cobrir a composição.
- **Conteúdo:** 28 amostras com previewOnly, sem atribuição de autoria, para revisar fluxos apenas em astro dev. Aviso inicial e no rodapé. Produção mantém estados vazios até haver conteúdo real. Rascunhos continuam sem rota em ambos os ambientes; relações públicas não podem apontar a amostras ou rascunhos.
- **Estrutura editorial:** metadados específicos, leitura derivada do corpo, arquivo por ano, filtros combinados, coleções, lore/fichas/sessões, detalhe com etiqueta/sumário/notas e backlinks. Sorteador evita repetição imediata. Sem áudio fictício ou links de código inexistentes.
- **Validação local:** check de 31 arquivos com zero erros/avisos/hints; build de sete páginas e 98 destinos locais; oito testes de produção e 38 de prévia passaram. Capturas em cinco larguras para cada cômodo e em 390/1440 para entrada, texto e obra. Comparação visual realizada com as capturas originais, incluindo revisão de celular. Inferência de imagem no teste foi ajustada após erro inicial de TypeScript. Produção e prévia usam portas separadas para evitar validar o modo errado.
- **Pendências preservadas:** conteúdo e contato finais, mídia/áudio reais, decisão de estreia, revisão do autor, outros motores/toque físico, sitemap/feed/endereço e deploy. A pasta reference permanece local e ignorada; só ativos escolhidos estão no código.
- **Integração concluída:** commit [b2b4060](https://github.com/Cuidoka/myhome/commit/b2b406001c30d05673d0a59e304937518dc69d33) enviado a main. A [execução CI 41375494516](https://github.com/Cuidoka/myhome/actions/runs/41375494516) terminou com success. Índice e histórico continuam sem reference/. As quebras de linha dos novos arquivos foram normalizadas conforme .gitattributes; verificação documental passou. A mudança final de espaçamento na Sala foi conferida novamente por teste direcionado e build antes do envio.
- **Retomada:** servidor do autor mantido em `http://127.0.0.1:4321/`; Galeria respondeu HTTP 200 com nova composição e aviso de prévia conferidos. Fechamento somente documental usa `[skip ci]` após docs:check; não houve mudança de código depois do commit validado. Prosseguir com revisão visual e P-02/C-03, sem refazer a estrutura.

### 01/11/2026 — largura total e polimento responsivo

- **Pedido e tarefas:** R-009, revisão de V-02/V-04 e Q-02. Correção dentro do escopo autorizado; preserva estética e substitui o limite externo de 1440 px. D-016 e guia atualizados.
- **Implementação:** casa em 100% da largura, sem margens de centralização/bordas externas; abas em coluna da grade, com posição sticky e adaptação a janela baixa. Respiros internos fluidos, tipografia e objetos com limites locais. Nenhuma regra de sistema operacional ou proporção obrigatória.
- **Polimento:** cabeçalho da Sala incorpora a estante sem margem negativa; quadros se redistribuem sem deixar cinco peças e uma isolada em 1920 px. Ajustados espaçamentos, escalas de objetos e legibilidade. Tabelas/cadernos empilham antes de ficar estreitos; rolagem das tabelas recebe região focável por teclado.
- **Fontes:** guias de responsividade e CSS Grid da MDN consultados e vinculados em arquitetura-visual.md. Sem dependências ou serviços novos.
- **Verificação real:** check de 32 arquivos, zero erros/avisos/hints; build de sete páginas; verify com 98 destinos locais e exclusão de rascunhos, amostras e referência. Passaram 13 testes de produção e 71 de prévia. Matriz de dez janelas, entre 320×740 e 3440×1440; verificadas largura total, ausência de overflow, separação conteúdo/abas, janela baixa, redimensionamento, tabela por teclado e fluxos existentes. Capturas representativas da entrada, cinco cômodos e detalhes revisadas, com atenção a celular, tablet, desktop e ultrawide.
- **Ocorrência do ambiente:** chamar Playwright diretamente não iniciou o servidor de produção porque npm não está no PATH padrão. A execução pelo script npm via runtime fornecido resolveu; os 13 testes passaram. Não foi necessário mudar a aplicação nem instalar ferramentas globais.
- **Integração concluída:** commit [4c70688](https://github.com/Cuidoka/myhome/commit/4c706887da01390c76352cdffb2890a77f7891d9) enviado em main e confirmado no remoto. A [execução CI 41377380717](https://github.com/Cuidoka/myhome/actions/runs/41377380717) passou, incluindo ambas as suítes. Documentação conferida: nove arquivos, 29 tarefas, 31 decisões e 23 links locais. Índice e histórico Git sem reference. Fechamento documental usa `[skip ci]`, sem alterar o código validado.
- **Limites e continuidade:** revisão do autor, conteúdo/contato e mídia reais, áudio, outros motores/toque físico e publicação continuam pendentes. Servidor 4321 mantido e Galeria com HTTP 200, composição e aviso de prévia conferidos. Retomar da revisão do autor e P-02/C-03.

### 01/11/2026 — aprovação do menu e definição do próximo passo

- **Retorno e tarefas:** usuário aprovou a aparência do menu lateral e perguntou sobre pendências e sequência. Registro R-010 vinculado a V-02/Q-02. Aprovação específica do menu; não encerra a revisão final do site.
- **Conferência:** lidos acompanhamento, decisões, fases de conteúdo/revisão/publicação do guia, inventário editorial e operação. Git iniciou limpo e sincronizado. Não foi identificada necessidade de refazer a arquitetura para iniciar o conteúdo; a base anterior continua com 84 testes e CI aprovados, sem nova execução da aplicação nesta etapa.
- **Próximo passo recomendado:** P-02/C-03, começando pela apresentação pessoal, contatos e um trabalho real completo. A abrangência do lançamento em P-01 permanece a definir com o inventário. Depois completar mídia/interações correspondentes, F-07, Q-01 a Q-03 e L-01 a L-03, respeitando as dependências.
- **Documentos e verificação:** aprovação, ponto de retomada e primeiro lote editorial registrados. O primeiro lote é uma sugestão de organização, sem aprovação presumida da seleção ou do número de trabalhos da estreia. Conferência documental passou: nove arquivos, 29 tarefas, 32 decisões e 25 links locais; diff sem erros de espaços. Nenhum código da aplicação alterado; fechamento documental com `[skip ci]`, sem atribuir novos testes da aplicação a esta etapa.

## Modelo de registro futuro

Copiar a estrutura abaixo para cada sessão ou entrega significativa. Relacionar tarefas pelo ID, sem registrar cada ação trivial.

```text
Data e objetivo:
Tarefas envolvidas:
Autorização/decisões aplicáveis:
Arquivos e comportamento alterados:
Verificações executadas e resultados:
Pendências/impedimentos e impacto:
Próxima ação e ponto de retomada:
```
