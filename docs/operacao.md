# Operação, validação, deploy e manutenção

Procedimento da aplicação inicial em Astro. O ambiente foi liberado após os bloqueios iniciais: dependências instaladas, check/build e testes de navegador passaram localmente. A integração remota usa Git local; o CI executa as mesmas verificações no GitHub. Publicação do site ainda não realizada. O acompanhamento guarda o histórico e os resultados do envio/CI.

## Estado do ambiente

| Item | Verificação inicial em 01/11/2026 |
| --- | --- |
| Diretório | `C:\Users\siltu\Documents\PROJETOS\Cuidoka` |
| Shell | PowerShell |
| Git | Main enviado e sincronizado com Cuidoka/myhome; CI inicial aprovado. Exceção safe.directory restrita à pasta por propriedade da conta sandbox anterior |
| Node.js e npm | Node 24.22.1 e npm 11.21.1 via pnpm 11.25.0 do runtime fornecido. Sem instalação global. CI usa Node 24 com npm |
| Aplicação e dependências | Instaladas; lockfile gerado localmente. Astro 7.4.4; instalação final reportou zero vulnerabilidades |
| Hospedagem e domínio | Não definidos |

## Estrutura sugerida

Estrutura da implementação Astro aprovada. Diretórios adicionais devem surgir por necessidade, sem criar estruturas vazias.

```text
AGENTS.md                 instruções de continuidade
README.md                 entrada para a documentação
docs/                     guia, decisões, acompanhamento, conteúdo e operação
reference/                somente local, ignorada pelo Git
src/
  data/                   configuração da casa e cômodos
  components/             navegação e objetos visuais compartilhados
  content/trabalhos/      coleção única de trabalhos em Markdown, classificada por cômodo
  lib/                    consultas públicas e relações
  layouts/                layout base e páginas individuais
  pages/                  rotas e listagens
  styles/                 tokens e estilos compartilhados
public/                   arquivos que precisam ser servidos diretamente
scripts/                  verificação de documentos e build
tests/                    fluxos de navegador e responsividade
.github/workflows/        CI de verificação
```

Definir na implementação onde ficam áudio e demais mídias conforme tamanho e uso. Manter o código livre de dependências de `reference/`.

## Preparação local — P-03 e P-04

1. Confirmar runtime e gerenciador acessíveis. Se for necessário ajustar o ambiente, registrar o que falta sem presumir instalação concluída.
2. Com a stack definida e implementação autorizada, criar o projeto na pasta sem sobrescrever os documentos e a referência.
3. Definir versões compatíveis, lockfile e scripts reais; anotar a versão do runtime e do gerenciador usados.
4. Executar instalação, desenvolvimento e build. Só então promover os comandos previstos abaixo a comandos verificados.
5. Preparar Git quando essa etapa for executada e verificar a exclusão da referência antes do primeiro commit.

Comandos da aplicação. A disponibilidade dos scripts não significa que todos passaram; consultar o acompanhamento e a execução do CI:

| Comando | Uso | Situação |
| --- | --- | --- |
| `node --version` e `npm --version` | Conferir ferramentas | Node encontrado; npm disponível no CI ou em instalação padrão de Node |
| `npm install` | Atualização consciente das dependências e do lockfile | Executado localmente; usar npm ci em novas cópias sem alterar dependências |
| `npm ci` | Instalação reproduzível em checkout com lockfile | Lockfile incluído; usado pelo CI e na conferência de cópia limpa |
| `npm run dev` | Desenvolvimento local | Script criado; precisa de dependências instaladas |
| `npm run docs:check` | Links e consistência documental | Verificado localmente via Node diretamente, sem dependências |
| `npm run check` | Checagem de Astro/TypeScript | Passou localmente: zero erros/avisos/hints |
| `npm run build` | Gerar versão de produção em dist | Passou localmente: sete páginas |
| `npm run verify` | Links, âncoras, mídias e exclusão de rascunho/referência no build | Passou localmente: 93 destinos conferidos |
| `npm run preview` | Inspecionar build localmente | Serviu a entrada com HTTP 200 em localhost |
| `npm run test:browser` | Fluxos e screenshots no Chromium | Oito testes passaram; requer `npx playwright install chromium` antes do primeiro uso |

Manter somente `package-lock.json` para a aplicação. Ele foi gerado localmente. O CI usa `npm ci` com permissão somente de leitura; o job antigo que criaria commits de lockfile foi removido após a liberação do ambiente.

O workflow faz checagem documental, Astro/TypeScript, build, conferência de links e testes Playwright em 320, 390, 768, 1024 e 1440 px. Os testes registram screenshots; resultado verde não substitui a revisão visual humana das capturas. Build, lockfile e relatório ficam no artefato `verificacao-da-casa` por sete dias.

A [execução inicial](https://github.com/Cuidoka/myhome/actions/runs/41371821212) terminou com sucesso para a implementação 704def5. A entrada também foi revisada visualmente pelas capturas locais. Atualizações exclusivamente documentais podem usar `[skip ci]` após `docs:check`, sem declarar um novo teste da aplicação para esse commit.

O modelo privado é intencionalmente excluído da produção. Player e filtros só aparecem quando existem dados reais que os justifiquem. Sem áudio e trabalhos reais, esses fluxos permanecem sem revisão funcional completa.

## Conferência de Git e referência

O repositório local existe e a origem aponta para `https://github.com/Cuidoka/myhome.git`. A regra foi conferida com `git check-ignore`; `git ls-files -- reference` não listou arquivos. Dependências, build e relatórios também são ignorados. Conferir o índice antes do commit e a árvore remota após o envio.

Em uma sessão com escrita e rede Git disponíveis, os comandos de conferência na raiz são:

```powershell
git status --short
git check-ignore -v -- reference/paginas/index.html
git ls-files -- reference
```

Resultados esperados: a regra `/reference/` explica a exclusão e `git ls-files -- reference` não lista arquivos. O `.gitignore` sozinho não remove arquivos já rastreados. Se o estado futuro revelar referência rastreada, corrigir o índice e verificar o histórico antes de qualquer envio; não apagar a pasta local para resolver isso.

Conferir o resultado do build para garantir que a pasta e seus arquivos não são publicados. Para demonstrar independência, instalar e compilar uma cópia limpa do código versionado sem `reference/`. Não mover ou excluir a referência do autor para fazer esse teste.

Na versão inicial, essa conferência passou em cópia de 36 arquivos com `npm ci`, build e verify; nenhuma referência foi copiada. Árvore remota e histórico inicial também foram conferidos. A cópia temporária permaneceu em `.qa/` porque a política do ambiente recusou sua remoção; a pasta é ignorada e não foi enviada. Preview de QA encerrado ao final da sessão.

## Validação por tipo de mudança

| Mudança | Verificação mínima adequada |
| --- | --- |
| Documentação | Links locais, IDs das tarefas, coerência de decisões/estados e ausência de alegações sem evidência |
| Tipografia, layout ou decoração | Revisão visual nas larguras pertinentes; leitura, foco e movimento quando afetados |
| Coleções, metadados ou rotas | Validação dos dados, build, rascunhos excluídos e destinos gerados corretamente |
| Filtro, player ou demonstração | Fluxo relevante executado, teclado/toque e estados sem conteúdo; teste automatizado quando acrescentar proteção útil |
| Dependência ou configuração | Instalação reproduzível, checagem/build e comportamento afetado |
| Publicação | Candidato local verificado e nova conferência na URL pública |

Executar verificações proporcionais ao trabalho. Ampliar os testes quando uma mudança, falha ou dúvida justificar; não repetir testes sem necessidade.

## Matriz de revisão — Q-01 a Q-03

| Área | Cenário | Evidência a registrar |
| --- | --- | --- |
| Responsividade | 320, 390, 768, 1024 e 1440 px; sem rolagem horizontal acidental da página | Páginas conferidas e eventuais exceções; rolagem intencional das abas é separada da página |
| Navegação | Entrada, abas, links de detalhes, retorno e acesso direto a URL | Fluxos realizados e destinos corrigidos |
| Teclado | Ordem do Tab, foco visível, ativação e acesso ao conteúdo | Resultado dos fluxos essenciais |
| Leitura | Hierarquia de títulos, contraste e largura de texto | Problemas encontrados e correções |
| Movimento | Preferência por movimento reduzido | Efeitos pertinentes respeitam a preferência |
| Imagens | Carregamento, proporção, descrição e tamanho de arquivo | Obras/fotos reais verificadas |
| Áudio, se incluído | Tocar, pausar, buscar e trocar faixa conforme controles implementados; sem autoplay | Arquivos e navegadores verificados |
| Filtros/demos, se incluídos | Resultado esperado, limpar filtro e estado vazio | Fluxos e dados usados |
| Conteúdo | Apresentação, contato, datas, contagens e rascunhos | Revisão editorial concluída |
| Descoberta | Título/descrição por página, URL pública, sitemap, feed se incluído e 404 | Recursos gerados e conferidos |
| Produção | Build, console/recursos e carregamento de mídia/fontes | Comandos, resultados e observações |
| Referência | Exclusão Git, artefatos limpos e build sem a pasta | Resultados de Git e da cópia limpa |

Definir e registrar os navegadores de validação conforme o ambiente disponível; buscar cobertura de desktop e celular. Se alguma verificação não puder ser feita, marcá-la como pendente ou limitada, sem inferir resultado positivo.

## Publicação proposta — L-01 e L-02

Fluxo recomendado: código no GitHub e build estático na Vercel. A hospedagem ainda não foi escolhida. Adaptar o procedimento se a decisão mudar; não duplicar deploys em vários provedores sem necessidade.

O remoto confirmado é `https://github.com/Cuidoka/myhome.git`; o endereço mnexo da mensagem interrompida foi substituído. O pedido “Do it” autoriza implementação e integração do código. A versão atual é uma base de desenvolvimento, sem conteúdo final ou configuração de hospedagem.

### Histórico de acesso e retomada

A primeira tentativa pelo conector retornou `403 — Resource not accessible by integration`. Segundo a [documentação de diagnóstico do GitHub](https://docs.github.com/en/rest/using-the-rest-api/troubleshooting-the-rest-api#resource-not-accessible), essa resposta indica permissões insuficientes do token/integração, mesmo quando a conta possui acesso ao repositório. Após liberação local, o trabalho passou a usar Git por HTTPS com a autenticação existente, sem solicitar ou gravar tokens no projeto.

Conferir o estado remoto antes de enviar, pois ele pode ter mudado desde a inspeção anterior. Não repetir o scaffold nem remover a referência para validar. Registrar separadamente sucesso do push, resultado CI e eventual deploy: um não comprova os outros. O resultado atual fica no acompanhamento.

1. Finalizar os dados públicos e as verificações da fase Q. Preparar o resultado local para revisão.
2. Identificar conta de hospedagem, domínio e versão aprovada para publicação. Repositório público e autorização de integração do código já estão registrados; não pedir novamente essa autorização.
3. Confirmar scripts, versão do runtime, diretório raiz e saída do build real. Na recomendação estática, a saída esperada é `dist/`, a confirmar no projeto criado.
4. Configurar a hospedagem e a URL final; ajustar metadados, sitemap e feed para o endereço escolhido. Domínio próprio não é obrigatório para uma primeira publicação.
5. Enviar/publicar somente quando coberto pela autorização do usuário. Se ela já existir, continuar sem pedir novamente.
6. Conferir a URL pública: abertura inicial, navegação direta, atualização da página, mídia, contato, 404 e recursos editoriais incluídos.
7. Registrar a revisão publicada e eventuais limitações. Se houver falha, documentar o diagnóstico e corrigir antes de declarar o lançamento concluído.

Publicação automática após push depende da configuração efetiva da hospedagem. Documentar o comportamento escolhido quando estiver funcionando, sem presumir que toda alteração já publica automaticamente.

## Recuperação de uma publicação

Antes de encerrar L-03, registrar um procedimento testado ou conferido no provedor escolhido para voltar à última versão válida.

- Identificar a versão atual e a última versão validada por revisão Git e identificador do deploy, quando disponíveis.
- Usar o mecanismo de restauração do provedor ou um novo deploy da revisão válida, conforme o procedimento efetivo.
- Evitar reescrever histórico compartilhado como rotina de recuperação; registrar a correção no código e na documentação.
- Conferir a URL pública após a recuperação e anotar a causa, a versão restaurada e o trabalho ainda pendente.

Ainda não existe versão pública para restaurar. Os detalhes finais dependerão do serviço escolhido.

## Publicação de novos trabalhos e manutenção — L-03 e M-01

1. Criar ou atualizar o arquivo do trabalho usando o modelo de conteúdo validado.
2. Adicionar os ativos destinados à publicação e preencher os metadados necessários.
3. Revisar rascunho, destaques e relações. Conferir a página local e os arquivos.
4. Executar as verificações adequadas e atualizar o acompanhamento.
5. Publicar pelo fluxo autorizado e conferir o resultado.

Na entrega final, acrescentar um exemplo real de inclusão de conteúdo com os caminhos e campos da aplicação criada. Para mudanças de dependências, registrar motivo, escopo e verificações; não alterar a stack apenas porque surgiu uma alternativa.

## Registro a preencher na entrega

| Item | Situação atual |
| --- | --- |
| Stack e versões usadas | Astro 7.4.4, TypeScript, CSS nativo, Markdown; Node 24 no CI. Versões resolvidas em package-lock.json |
| Comandos verificados | Instalação, docs:check, check, build, verify, preview e oito testes Chromium passaram localmente |
| URL e repositório | `https://github.com/Cuidoka/myhome`; não há URL pública do site |
| Provedor e configuração | Propostos, sem configuração |
| Revisão e data do lançamento | Não há lançamento |
| Resultado das verificações | Base atual passou localmente e no CI inicial; cópia limpa sem referência validada. Revisão final com trabalhos reais ainda pendente |
| Procedimento real de recuperação | A validar em L-03 |
| Pendências pós-lançamento aceitas | Nenhuma definida |
