# Inventário e preparação do conteúdo

Este documento reúne o que precisamos para trocar exemplos por conteúdo real. Nada na referência deve ser tratado automaticamente como biografia, obra ou projeto do autor. Estados de execução ficam no acompanhamento; escolhas de publicação ficam no registro de decisões.

## Modelo já implementado

A coleção `trabalhos` é definida em `src/content.config.ts`; os arquivos ficam em `src/content/trabalhos/`. Um único modelo privado foi criado, com `draft: true`, sem publicação. Não foram adicionados trabalhos fictícios. Os cômodos mostram estados vazios enquanto não há conteúdo real.

Campos implementados: `title`, `summary`, `room`, `draft`, `featured`, `publishedAt`, `updatedAt`, `tags`, `maturity`, `related`, `image`, `imageAlt`, `audio`, `technologies`, `status`, `source` e `demo`. A URL é derivada do nome/caminho do arquivo: `/<room>/<id>/`. Não há campo `slug` separado nesta primeira versão. Um `id` não deve mudar depois de publicado sem tratar redirecionamento.

`publishedAt` é obrigatório em trabalhos públicos. Datas de revisão anteriores à publicação e imagens sem descrição falham na validação. Relações para itens inexistentes ou rascunhos fazem o build falhar. Áudio usa controles nativos; imagens e áudio opcionais são arquivos públicos locais. Rascunhos são excluídos em todas as consultas públicas.

As ilustrações decorativas da entrada foram desenhadas em SVG no código e são identificadas como ilustrações da casa. Não são apresentadas como obras do portfólio. O texto da apresentação é uma base provisória, sem profissão ou histórico inventados; o autor ainda deve revisá-lo. O perfil `github.com/Cuidoka` é o único contato inicial, derivado do repositório fornecido.

## Material pessoal necessário — P-02

| Material | Situação inicial | Uso |
| --- | --- | --- |
| Nome público e confirmação do nome Cuidoka | A confirmar; Cuidoka é o nome da pasta e do protótipo | Título do site, apresentação e metadados |
| Apresentação curta | Não fornecida | Boas-vindas e área sobre |
| Apresentação ampliada e interesses | Não fornecidos | Sobre e contexto dos trabalhos |
| Contato público e perfis escolhidos | Não fornecidos | Rodapé e contato |
| Retrato ou representação pessoal | Não fornecido; opcional | Sobre, se fizer sentido para o autor |
| Seleção de trabalhos para estreia | Não fornecida | Destaques e definição dos cômodos do lançamento |
| Imagens, capas e áudios finais | Não fornecidos | Conteúdo de produção; capturas das páginas não substituem esses arquivos |
| Domínio desejado | Não fornecido; domínio próprio é opcional | Configuração de produção |

Essas informações podem ser reunidas em um único lote. Ausência de um item não bloqueia planejamento ou componentes independentes. A publicação depende de completar os dados usados na versão final.

## Modelo editorial proposto — C-01

Os nomes exatos dos campos serão consolidados na implementação. Separar campos obrigatórios comuns de metadados opcionais; não exigir áudio ou imagem para tipos que não os utilizam.

| Campo | Finalidade | Regra proposta |
| --- | --- | --- |
| `slug` | Identificador da URL | Único e estável dentro do tipo |
| `title` | Nome público do item | Obrigatório |
| `summary` | Resumo para listas e destaques | Obrigatório para itens listados |
| `publishedAt` / `updatedAt` | Publicação e revisão | Datas reais; atualização não pode anteceder publicação quando ambas existirem |
| `draft` | Separar rascunho de publicação | Rascunhos fora de listas, rotas públicas, feed e sitemap de produção |
| `tags` | Assuntos | Vocabulário consistente, sem grafias duplicadas |
| `maturity` | Semente, broto ou árvore | Quando aplicável; não é o estado funcional do projeto |
| `featured` | Seleção da entrada | Destaque editorial explícito ou regra definida, sem destaque automático indiscriminado |
| `related` | Relações entre trabalhos | Identificadores existentes e publicáveis |
| `image` / `imageAlt` | Capa e descrição | Obrigação depende do tipo; decoração tem tratamento distinto de obra |
| Corpo em Markdown/MDX | Descrição, história ou texto | Markdown como base; MDX quando houver necessidade concreta de componente |

## Necessidades por tipo

| Tipo / cômodo | Dados e arquivos necessários | Funcionalidade dependente |
| --- | --- | --- |
| Texto / Sala | Título, resumo, corpo, datas, assuntos e maturidade quando usada | Arquivo, tempo estimado de leitura e sumário derivado dos títulos |
| Projeto / Oficina | Descrição, tecnologias, estado, links reais de código/demo e imagem quando houver | Links funcionais e demos somente para projetos escolhidos |
| Música / Estúdio | Nome, áudio publicável, capa quando houver, coleção, contexto e créditos aplicáveis | Player, duração real, letra/partitura somente se existirem |
| Campanha / Sótão | Premissa, estado, mapas, personagens e registros escolhidos | Ligações entre mundo, sessões e trilhas; quantidade de sessões derivada ou mantida de forma consistente |
| Obra ou foto / Galeria | Arquivo final, título ou legenda, descrição, categoria e técnica/data quando conhecidas | Visualização, categorias e detalhes de obra |

Se personagens e sessões precisarem de entidades próprias, detalhar a relação dentro de C-01. Não presumir um banco de dados ou sistema complexo antes de conhecer a quantidade e a organização do material real.

## Registro de itens a receber

Preencher uma linha por trabalho escolhido. Até agora, nenhum trabalho real foi selecionado na conversa.

| Identificador | Tipo / cômodo | Título | Arquivos e texto | Incluir no lançamento? | Pendência |
| --- | --- | --- | --- | --- | --- |
| A preencher | — | — | — | A definir | Seleção inicial do autor |

Usar estados simples para cada item: recebido, precisa completar, pronto para revisão, revisado ou adiado. Registrar a decisão de adiar uma área no acompanhamento quando afetar o escopo.

## Preparação das mídias

- Guardar originais de trabalho separados das versões otimizadas que o site usará.
- Escolher nomes de arquivo estáveis e descritivos; registrar legenda, texto alternativo e relação com o trabalho.
- Definir dimensões e compressão conforme o uso real. Uma imagem de galeria e uma miniatura não precisam carregar o mesmo arquivo pesado.
- Revisar SVGs que entrarem em produção e reutilizar componentes decorativos em vez de duplicar páginas inteiras.
- Para áudio, confirmar formato aceito nos navegadores escolhidos e registrar duração/controles com base no arquivo real.
- Não importar PNGs de página inteira para simular o site nem apontar arquivos de produção para dentro de `reference/`.

## Regras editoriais a consolidar

- Todos os cômodos devem consumir os mesmos dados em desktop e celular.
- Datas, durações, contagens e estados devem refletir o material real. Contagens podem ser derivadas das coleções.
- Links de relação precisam apontar a itens existentes; excluir rascunhos das relações públicas.
- Sem obra ou faixa disponível, retirar o controle correspondente ou apresentar uma mensagem honesta; não deixar controles que aparentam funcionar.
- A entrada pode destacar trabalhos e atualizações manualmente ou por dados; escolher uma regra em C-01 e evitar duplicação que gere divergência.
- Publicar revisão de conteúdo pelo fluxo de edição escolhido em D-005. Se o autor precisar de um painel, registrar a mudança e reavaliar a base antes de acrescentar serviço.

## Conferência editorial antes do lançamento — Q-01

- Apresentação e dados de contato correspondem ao que o autor escolheu tornar público.
- Títulos, imagens, arquivos, datas e links de cada item foram conferidos.
- Não restam contagens, campanhas, títulos ou biografia demonstrativos apresentados como reais.
- Descrições e textos alternativos acompanham as mídias em que são necessários.
- Conteúdo adiado, rascunhos e materiais locais não aparecem nas páginas públicas, feed ou sitemap.
