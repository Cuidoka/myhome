# Registro de decisões e autorizações

Criado em 01/11/2026. Este registro diferencia requisitos explícitos, propostas técnicas e escolhas ainda abertas. O estado das tarefas fica em [acompanhamento.md](acompanhamento.md).

## Estados

- **Confirmado:** instrução ou aprovação explícita do usuário.
- **Proposto:** recomendação documentada, sem confirmação explícita.
- **Em aberto:** informação ou escolha ainda não fornecida.
- **Substituído:** decisão anterior alterada por instrução posterior, com vínculo para a nova decisão.

As evidências abaixo referem-se à conversa que iniciou o projeto. Recomendar uma ferramenta, analisar uma referência ou receber silêncio não equivale a uma aprovação de implementação, envio ao GitHub ou publicação.

## Requisitos confirmados

| ID | Data | Decisão | Origem e consequência |
| --- | --- | --- | --- |
| R-001 | 01/11/2026 | Criar uma home pessoal para mostrar trabalhos e falar sobre o autor | Pedido do usuário: “um lugar onde irei mostrar meus trabalhos, falar sobre mim”. Define o objetivo, sem detalhar todo o lançamento |
| R-002 | 01/11/2026 | Analisar todo o conteúdo de `reference/` antes do desenvolvimento | Pedido do usuário para analisar o material e preparar o início do trabalho; análise registrada |
| R-003 | 01/11/2026 | `reference/` não deve subir no GitHub | Restrição explícita: “A pasta reference não deverá subir no github”. Regra no `.gitignore`; índice, árvore remota, histórico inicial e build sem a pasta conferidos |
| R-004 | 01/11/2026 | Recomendar uma stack funcional com deploy simples | Pedido do usuário sobre a melhor stack. Autoriza análise e recomendação; não registra aceite automático da recomendação |
| R-005 | 01/11/2026 | Documentar continuamente etapas aprovadas, pendências, análise e caminho completo | Pedido do usuário para documentar o trabalho a partir deste ponto e manter um guia do início ao fim. Sustenta os registros e as instruções de continuidade |
| R-006 | 01/11/2026 | Responder em português | Pedido mais recente: “Me desponda em portugues”. Documentação mantida em português para acompanhar a comunicação |
| R-007 | 01/11/2026 | Iniciar a execução do plano e integrar ao remoto correto | “Do it, remote repository is https://github.com/Cuidoka/myhome.git”. Autoriza implementação e integração de código ao repositório; não resolve conteúdo final ou configuração de hospedagem |
| R-008 | 01/11/2026 | Estruturar o site seguindo documentação oficial e máxima fidelidade à referência | Pedido de continuar a implementação preservando especialmente traços e estética. Abrange componentes e composição própria de cada cômodo; manter registro contínuo |
| R-009 | 01/11/2026 | Remover margens externas e adaptar o site a diferentes computadores e proporções | Pedido: “Não crie as margens”, site convencional responsivo, sem exclusividade para Mac/16:10, com polimento dos elementos. Substitui o limite externo de 1440 px; preserva traços e conceito da casa de R-008 |

## Decisões técnicas e propostas

| ID | Proposta | Justificativa | Situação |
| --- | --- | --- | --- |
| D-001 | Astro + TypeScript + CSS nativo + Markdown; MDX somente quando necessário | Site predominantemente editorial, identidade visual própria e interações localizadas | Confirmado para iniciar: “Do it” após a apresentação do plano; execução com essa base |
| D-002 | GitHub para código e Vercel para hospedagem estática | Caminho de deploy recomendado na análise; GitHub Pages permanece alternativa | GitHub confirmado: `https://github.com/Cuidoka/myhome.git`, fornecido no pedido atual; Vercel segue como destino recomendado, sem conta conectada |
| D-003 | Começar pela entrada responsiva e componentes visuais; depois conteúdo e cômodos | Estabelece a experiência central e reduz retrabalho de layout | Confirmado para iniciar pelo pedido “Do it” |
| D-004 | Usar os cinco cômodos da referência como organização do site | Preserva a relação entre música, código, RPG, textos e artes | Estrutura dos cinco cômodos criada; seleção de conteúdo e lançamento completo ou progressivo ainda dependem do autor |
| D-005 | Conteúdo em arquivos, com coleções validadas e sem painel na primeira versão | Mantém a base proposta simples de manter e publicar | Confirmado como base inicial pelo pedido de executar o plano; pode ser revisto por necessidade posterior |
| D-006 | Contato por link/e-mail na primeira versão | Evita dependência de um serviço de envio antes de existir necessidade definida | Proposto; dados públicos e preferência do autor ainda ausentes |
| D-007 | Sequência, critérios de conclusão e rotina descritos no guia | Permite acompanhar e retomar do planejamento à manutenção | Confirmado como caminho inicial pelo pedido de execução; continuar registrando conteúdo ausente e verificações reais |
| D-008 | Repositório de trabalho `Cuidoka/myhome` | URL corrigida pelo usuário; substitui o endereço mnexo da mensagem interrompida | Confirmado. Inicialmente vazio. Código enviado via Git local em main; conector havia recusado a escrita, apesar da permissão de usuário mostrada na consulta |
| D-009 | npm e Node 24 no CI; lockfile inicial gerado após verificação | Solução proposta quando a rede local estava bloqueada | Substituído por D-011 após liberação do ambiente; job de escrita automática do lockfile removido |
| D-010 | Cômodos sem conteúdo exibem estado vazio honesto; rascunhos não geram páginas | Nenhum trabalho real ou mídia final foi fornecido | Decisão de implementação. Não criar projetos fictícios nem player sem áudio. Contato inicial usa apenas o perfil GitHub associado ao remoto informado |
| D-011 | Lockfile gerado localmente e CI somente de leitura com npm ci | Ambiente local liberado na retomada; dependências puderam ser instaladas e verificadas | Implementado: package-lock.json gerado pelo npm 11.21.1; CI não precisa criar commits. Substitui D-009 |
| D-012 | Atualizar Astro para 7.4.4 e usar importações atuais de Zod | Auditoria da primeira instalação apontou problemas nas versões resolvidas de Astro 6/esbuild/sharp; checagem também apontou ausência de tipos Node | Correção técnica dentro da stack aprovada. Astro 7.4.4, tipos Node e APIs de Zod ajustados; instalação final sem vulnerabilidades reportadas; check/build passaram |
| D-013 | Usar Git local autenticado após liberação do ambiente | Sessão passou a permitir rede e escrita. O 403 anterior pertence ao conector e não deve ser tratado como falta de autorização do usuário | Commit 704def5 enviado e origem sincronizada; CI inicial aprovado. Exceção safe.directory restrita à pasta adicionada, pois `.git` foi criado pela conta sandbox anterior; sem alteração de outros repositórios |
| D-014 | Exemplos identificados somente no desenvolvimento para revisar as composições | Decisão de implementação para atender R-008 sem inventar trabalhos do autor; documentação oficial de coleções e import.meta.env.DEV consultada | Implementado e validado: 28 amostras, aviso no início/rodapé, rascunhos privados e produção sem páginas das amostras; controles e relações verificados em desenvolvimento |
| D-015 | Preservar filtros e adaptar SVGs selecionados da referência como ativos próprios | Traços irregulares, tinta desgastada e objetos desenhados são parte do sistema original | Implementado: filtros centralizados, 28 SVGs selecionados, composições por cômodo e CSS responsivo. Sem copiar páginas inteiras, capturas ou criar dependência de reference no build; fontes oficiais e critérios em arquitetura-visual.md |
| D-016 | Página com largura total, grade fluida e espaçamento interno adaptável | Correção de V-02/V-04 para R-009: retirar moldura externa, reservar a coluna da navegação no fluxo e impedir sobreposições por posicionamento fixo. Limites locais de leitura e tamanho dos objetos continuam necessários | Implementado dentro do escopo autorizado. Matriz ampliada para celulares, telas 4:3, 16:9, 16:10 e ultrawide, sem detecção de sistema operacional; resultados de verificação no acompanhamento |

## Escolhas abertas e dependências

| ID | Informação necessária | Impacto | Trabalho que pode avançar sem ela |
| --- | --- | --- | --- |
| E-001 | Nome público, apresentação, interesses e eventual retrato | Finalização da área sobre e identidade textual | Planejamento; estrutura visual quando a implementação for autorizada |
| E-002 | Trabalhos iniciais e quais cômodos entram no lançamento | Escopo público, conteúdo e navegação | Modelo de conteúdo e componentes compartilhados |
| E-003 | Arquivos finais de imagens/áudio e links de projetos | Player, galeria, demos e conteúdo real | Layouts com marcadores claramente identificados |
| E-004 | Contato e perfis destinados à publicação | Links e dados pessoais visíveis | Layout do contato |
| E-005 | Conta de hospedagem, domínio e versão final de conteúdo | Repositório confirmado em D-008; hospedagem pública ainda não configurada | Implementação, validação e integração com o GitHub informado |
| E-006 | Feed e filtros necessários na primeira versão | Tarefas editoriais e interativas do lançamento | Conteúdo base e navegação |

## Como registrar a próxima decisão

Usar o próximo identificador livre e registrar: data, estado, escolha, origem da autorização, motivo, tarefas afetadas e eventual decisão substituída. Aprovação de uma decisão técnica não implica automaticamente autorização para operações externas em contas do usuário.

Agrupar escolhas relacionadas quando precisarem de resposta do usuário. Não criar confirmações repetidas para ações já autorizadas ou decisões rotineiras dentro do escopo acordado.
