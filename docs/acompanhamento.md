# Acompanhamento do projeto

Última atualização: 01/11/2026. Este arquivo é a fonte principal do estado das tarefas. A sequência e os critérios estão no [guia](guia-do-projeto.md); a autorização de cada decisão está no [registro de decisões](decisoes.md).

## Situação atual e retomada

**Fase atual:** base instalada e validada localmente: check sem erros/avisos/hints, sete páginas estáticas, 93 destinos locais verificados e oito testes Chromium aprovados. Capturas da entrada revisadas nas cinco larguras previstas. Integração pelo Git local em andamento; sem hospedagem pública.

**Próximo passo:** concluir conferência em cópia limpa sem referência e enviar pelo Git local; verificar o CI do remoto. Depois, reunir apresentação final e trabalhos reais em P-02/C-03. Não recriar o scaffold ou voltar a tratar as dependências como bloqueadas.

**Ambiente atual:** acesso local e rede liberados. Node 24.22.1; npm 11.21.1 executado via `pnpm dlx npm@11` a partir do runtime fornecido, sem instalação global. Dependências e lockfile criados; origem configurada para `Cuidoka/myhome`. O erro 403 do conector permanece apenas como histórico; envio local será verificado separadamente.

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
| P-04 | Preparar Git e rotinas locais | Em andamento | P-03; remoto definido em D-008 | Remoto configurado e lockfile gerado localmente; conferir índice, cópia limpa e envio. CI usa npm ci |

## Visual e entrada

| ID | Tarefa | Estado | Dependência | Critério de conclusão |
| --- | --- | --- | --- | --- |
| V-01 | Criar tokens e tipografia | Concluído | P-03 | Tokens centralizados e fontes locais renderizados; capturas revisadas |
| V-02 | Criar layout, navegação e objetos compartilhados | Concluído | V-01 | Componentes renderizados, links, foco e aba atual verificados no Chromium; mesma fonte de conteúdo por dispositivo |
| V-03 | Implementar entrada, sobre e contato | Em andamento | V-02; conteúdo final depende de P-02 | Implementação responsiva validada; apresentação provisória e contato GitHub ainda precisam da revisão de conteúdo do autor |
| V-04 | Revisar entrada em desktop e mobile | Concluído | V-03 | Capturas em 320/390/768/1024/1440 px revisadas; overflow do título em 320 px e sobreposição das fotos/abas corrigidos; testes de teclado e movimento passaram. Toque físico e outros motores não verificados |

## Conteúdo e páginas individuais

| ID | Tarefa | Estado | Dependência | Critério de conclusão |
| --- | --- | --- | --- | --- |
| C-01 | Definir coleções, metadados, relações e URLs | Em andamento | P-03 e escopo P-01 | Schema sincronizado e rascunho excluído no build; faltam exercitar páginas públicas/relações com dados de trabalho e consolidar regras editoriais finais |
| C-02 | Implementar layouts individuais | Implementado, não validado | C-01 e V-02 | Template com Markdown, sumário, imagens, áudio opcional, links e relacionados; aguarda renderização e dados reais |
| C-03 | Integrar conteúdo real inicial | Pendente | P-02 e C-02 | Apresentação, contato e seleção de trabalhos revisados; sem autoria ou contagens fictícias |

## Cômodos e interações

Estrutura dos cinco cômodos criada como parte do início autorizado. Isso não equivale à conclusão do conteúdo ou das funcionalidades de cada área. Uma área excluída da estreia deve ser marcada como adiada com decisão vinculada.

| ID | Tarefa | Estado | Dependência | Critério de conclusão |
| --- | --- | --- | --- | --- |
| F-01 | Implementar Oficina | Em andamento | C-01, C-02 e V-02; conteúdo depende de C-03 | Rota, estado vazio, listagem e detalhe genéricos criados; faltam trabalhos reais, demos escolhidas e validação |
| F-02 | Implementar Sala | Em andamento | C-01, C-02 e V-02; conteúdo depende de C-03 | Rota, listagem e leitura preparadas; faltam textos, arquivo editorial completo e validação |
| F-03 | Implementar Galeria | Em andamento | C-01, C-02 e V-02; imagens dependem de C-03 | Rota e suporte a imagens preparados; faltam obras, composição final com mídia real e validação |
| F-04 | Implementar Estúdio | Em andamento | C-01, C-02 e V-02; áudio depende de C-03 | Rota e suporte a áudio nativo preparados; faltam faixas, coleções e validação do player |
| F-05 | Implementar Sótão | Em andamento | C-01, C-02 e V-02; material depende de C-03 | Rota e conteúdo por cômodo preparados; faltam campanhas, relações de sessões/personagens e composição final |
| F-06 | Completar interações e relações entre áreas | Em andamento | Áreas incluídas e E-006 | Filtros por tags e relacionados implementados; comportamento com conteúdo e demos ainda não verificado |
| F-07 | Implementar metadados, 404, sitemap e feed definido para estreia | Em andamento | C-01, URLs e E-006 | Metadados e 404 preparados; sitemap/feed e endereço final permanecem pendentes |

## Revisão, publicação e manutenção

| ID | Tarefa | Estado | Dependência | Critério de conclusão |
| --- | --- | --- | --- | --- |
| Q-01 | Revisar conteúdo e navegação completos | Pendente | C-03 e áreas incluídas | Sem destinos falsos, mídia ausente, marcadores públicos indevidos ou dados inconsistentes |
| Q-02 | Validar visual, acessibilidade e funcionalidades | Pendente | V-04 e áreas incluídas | Cenários do guia de operação executados e resultados registrados; problemas essenciais resolvidos |
| Q-03 | Validar build, Git e independência da referência | Pendente | P-04, F-07 e áreas incluídas | Verificações passam; `reference/` fora do índice e artefatos; build reproduzível sem a pasta |
| L-01 | Preparar hospedagem, repositório e domínio | Aguardando definição | D-002 e E-005 | Configuração pronta e ação externa coberta por autorização; domínio opcional resolvido |
| L-02 | Publicar e conferir a versão pública | Pendente | Q-01 a Q-03 e L-01 | URL acessível; páginas, mídia e acesso direto conferidos; revisão publicada registrada |
| L-03 | Entregar instruções finais e pendências residuais | Pendente | L-02 | Operação e recuperação verificadas; resultado e backlog documentados |
| M-01 | Manter conteúdo e dependências | Pendente | L-03 | Rotina recorrente definida na entrega; cada ocorrência gera registro próprio |

## Dependências atuais e trabalho incompleto

- **Escolha técnica e lançamento:** implementação inicial autorizada; seleção de conteúdo e abrangência da estreia ainda não finalizadas.
- **Conteúdo:** não foram fornecidos apresentação final, contatos públicos ou seleção de trabalhos reais. Exemplos da referência continuam demonstrativos.
- **Ambiente:** instalação, Astro check, build e oito testes Playwright passaram após liberação; bloqueios anteriores resolvidos para execução local.
- **Git:** inicializado, origem configurada e regra de exclusão conferida; envio local e CI em andamento. O 403 anterior do conector não foi tomado como evidência de falha do Git local.
- **Publicação:** remoto confirmado; hospedagem e domínio ainda não configurados. Nenhum deploy realizado.
- **Desenvolvimento:** base/entrada executadas e aparência da entrada revisada. Templates de trabalho com conteúdo real, áudio, filtros e relações ainda exigem dados e revisão; não declarar o lançamento completo.

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
- **Ainda em execução:** conferência de cópia limpa, commit/envio e leitura do resultado CI. Conteúdo final e hospedagem continuam pendentes.

## Modelo de registro para próximas sessões

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
