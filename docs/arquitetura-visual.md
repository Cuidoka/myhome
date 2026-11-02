# Arquitetura técnica e fidelidade visual

Etapa vinculada a R-008, V-01/V-02, C-01/C-02 e F-01 a F-06. A estrutura preserva a casa e os objetos do protótipo; conteúdo, componentes e aparência ficam separados. Estados e resultados reais estão no [acompanhamento](acompanhamento.md).

## Fontes oficiais aplicadas

| Fonte | Aplicação no projeto |
| --- | --- |
| [Componentes Astro](https://docs.astro.build/en/basics/astro-components/) | Componentes de apresentação com props tipadas e HTML estático; scripts pequenos somente para interações necessárias |
| [Layouts](https://docs.astro.build/en/basics/layouts/) | BaseLayout reúne documento, fontes, navegação, efeitos, rodapé e identificação da prévia |
| [Coleções de conteúdo](https://docs.astro.build/en/guides/content-collections/) | Loader glob, schema Zod, consulta tipada, render de Markdown e rotas geradas pelos IDs |
| [Zod do Astro](https://docs.astro.build/en/reference/modules/astro-zod/) | Importação de astro/zod e validação do mesmo conjunto de tipos usado pelo framework |
| [Estilos e CSS](https://docs.astro.build/en/guides/styling/) | CSS compartilhado por responsabilidade e camadas explícitas para controlar precedência e adaptação |
| [Variáveis de ambiente](https://docs.astro.build/en/guides/environment-variables/) | import.meta.env.DEV permite amostras somente no servidor de desenvolvimento; SITE_URL permanece o endereço final de produção |
| [MDN: feTurbulence](https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Element/feTurbulence) | Ruído estável para papel, lápis e tinta; sementes constantes evitam mudanças aleatórias entre renderizações |
| [MDN: feDisplacementMap](https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Element/feDisplacementMap) | Deslocamento discreto para tirar a regularidade geométrica dos contornos |
| [MDN: design responsivo](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Responsive_Design) | Adaptação à largura disponível, imagens flexíveis e pontos de quebra definidos pela composição |
| [MDN: fundamentos de CSS Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Grid_layout/Basic_concepts) | Colunas flexíveis e navegação no fluxo, sem reservar espaço com posicionamento absoluto |

Não foi introduzido framework de interface adicional, banco de dados ou serviço externo. O site continua gerando arquivos estáticos com Astro.

## Organização implementada

| Arquivo ou pasta | Responsabilidade |
| --- | --- |
| src/layouts/BaseLayout.astro | Estrutura do documento e elementos comuns |
| src/components/DesignEffects.astro | Definições SVG únicas de papel, lápis, traço pequeno e lettering |
| src/components/Navigation.astro | Abas com indicação do cômodo atual |
| src/components/Art.astro e src/data/art.ts | Catálogo tipado das ilustrações selecionadas, dimensões e descrições quando necessárias |
| public/illustrations/ | SVGs adaptados para produção, independentes da referência local |
| src/components/Bookshelf.astro | Lombadas com títulos curtos opcionais e nome completo acessível |
| src/components/TavernGenerator.astro | Demonstração interativa reutilizável na bancada e no detalhe |
| src/components/FilterControls.astro | Botões de categoria, assunto e maturidade |
| src/components/CollectionFilters.astro | Comportamento dos filtros, contagens e anúncio do resultado |
| src/components/rooms/ | Composição específica de cada um dos cinco cômodos |
| src/styles/global.css | Tokens, regras gerais e estrutura da entrada |
| src/styles/rooms.css | Tratamento dos traços, composição dos cômodos e anatomia dos detalhes |
| src/content.config.ts | Schema de trabalhos e metadados opcionais de cada tipo |
| src/lib/content.ts | Política de publicação/prévia, relações, ordenação e formatação de dados |
| src/pages/[room]/index.astro | Seleção do cômodo, dados e estado vazio honesto |
| src/pages/[room]/[...id].astro | Detalhe do trabalho com Markdown, metadados, objeto, notas e relações |

## O que torna cada cômodo diferente

| Cômodo | Composição da referência implementada | Comportamento |
| --- | --- | --- |
| Oficina | Bancada perfurada, janela de ferramenta, código em papel escuro, ferramentas desenhadas, prancheta e caderno espiral | Sorteador sem repetição imediata, lista de projetos e detalhe; links de código somente quando informados |
| Sala | Estante com lombadas, folha de leitura, assuntos, estágios de maturidade, xícara e arquivo por ano | Assunto e maturidade combinam filtros; anos sem resultado somem; tempo de leitura deriva do texto |
| Galeria | Trilho, molduras, etiquetas de papel, caderno aberto, cavalete, varal e negativos | Filtro por categoria, legenda e detalhe; imagens preservam descrição e proporção |
| Estúdio | Capa, ficha da faixa, coleções em fitas, listagem e notas de processo | Fitas filtram a lista; áudio nativo aparece apenas com arquivo real; sem áudio, informação explícita em vez de play fictício |
| Sótão | Viga e luminária, mapa, bilhetes de lore, mesa, mapa tático, dados, fichas e baús | Campanhas, personagens e sessões vêm dos metadados; contagens derivam dos dados e os links levam ao conteúdo correspondente |

A estrutura também atende a produção quando não há trabalho real: o cômodo apresenta um estado vazio coerente, sem prometer que um controle falso funciona.

## Sistema de traços e estética

As cores continuam sendo parede creme, papel claro, terracota, madeira e sálvia. Os tokens principais permanecem os da análise inicial. Fraunces 720, com eixos SOFT e WONK, recebe máscara de desgaste de tinta. Shantell Sans mantém a escrita principal e Kalam as anotações.

Os efeitos foram adaptados dos parâmetros encontrados nos HTMLs locais:

- **Papel:** deslocamento 6 com ruído de baixa frequência e granulação fina. Aplicado no pseudo-elemento de fundo, preservando a leitura do texto e o foco dos links.
- **Lápis:** dois traços deslocados, um deles translúcido, nas ilustrações. Mantém a aparência de risco repetido da referência.
- **Traço pequeno:** deslocamento 1,6 nos ícones e detalhes pequenos, evitando distorção excessiva.
- **Tinta:** contorno levemente irregular e falhas na pintura do título, com sementes fixas.

Papéis e fitas têm pequenas rotações; sombras são discretas e duras. A composição não usa cartões modernos genéricos para representar todos os tipos de trabalho. O movimento continua restrito à interação e respeita redução de movimento.

As camadas CSS seguem a ordem reset, base, components, pages, rooms e responsive. Essa ordem é importante: as adaptações de celular precisam prevalecer sobre as composições de desktop.

## Largura total e adaptação das telas

R-009 e D-016 substituem o enquadramento externo de 1440 px. A casa ocupa 100% da largura disponível, sem margens de centralização ou bordas laterais. Não há proporção de tela obrigatória nem detecção de Mac ou de outro sistema operacional.

No desktop, a grade principal reserva uma coluna para as abas, encostadas à borda direita. O conteúdo ocupa a coluna flexível restante. A navegação acompanha a rolagem; em janelas baixas suas abas ficam mais compactas. Até 760 px, a navegação passa para a faixa horizontal superior e as cenas se reorganizam.

Os respiros internos usam `--page-gutter`, entre 28 e 96 px no desktop, e ajustes próprios para celular. Eles separam textos e objetos das bordas sem limitar a largura da página. Parágrafos e objetos têm limites locais de leitura e escala, evitando linhas excessivamente longas ou desenhos ampliados sem controle em ultrawide.

A estante da Sala integra a grade do cabeçalho, sem margem negativa. Quadros se redistribuem em duas, três ou mais colunas conforme o espaço. Em telas intermediárias, listas e cadernos passam para uma coluna antes de prejudicar a leitura. As tabelas possuem rolagem interna e região focável por teclado; a página não deve ganhar rolagem horizontal.

A matriz compartilhada em `tests/viewports.ts` cobre 320×740, 390×844, 768×1024, 1024×768, 1280×1024, 1366×768, 1440×900, 1920×1080, 2560×1440 e 3440×1440. Ela inclui diferentes larguras e proporções, sem vincular a interface a um modelo de computador.

## Origem dos ativos escolhidos

Foram adaptados **28 SVGs selecionados**: fitas e capa do Estúdio; ferramentas e clipe da Oficina; xícara da Sala; desenhos, caderno, cavalete, fotos ilustrativas e filme da Galeria; mapa, mesa, teto e baús do Sótão; mapa tático da Entrada.

Somente esses desenhos necessários foram levados para public/illustrations/. Seus atributos de posicionamento fixo foram removidos; o enquadramento usa viewBox e dimensões registradas em src/data/art.ts. Os filtros são centralizados no documento. Não foram copiados HTMLs inteiros, PNGs de páginas ou o pacote do canvas.

A pasta reference permanece ignorada e não é lida em execução ou build. Os SVGs selecionados são ativos decorativos do sistema visual e podem estar no build. Isso é diferente dos registros de trabalhos demonstrativos, que não geram páginas públicas.

## Conteúdo real, amostras e rascunhos

| Estado | astro dev | Build público |
| --- | --- | --- |
| draft: true | Não listado e sem rota de trabalho | Não listado e sem rota |
| draft: false, previewOnly: true | Visível com aviso de demonstração | Excluído de consultas, listas, destaque e rotas |
| draft: false, previewOnly: false | Visível | Publicável após a revisão editorial |

As **28 amostras** ficam em src/content/trabalhos/amostras/. São conteúdo de demonstração baseado na referência, não obras atribuídas ao autor. O aviso aparece no início da prévia e é explicado novamente no rodapé. A visibilidade não é ativada por query string ou por uma variável pública; depende do modo de desenvolvimento do Astro. Um deploy de preview que execute astro build continua excluindo amostras.

`getPublishedWorks()` valida somente trabalhos públicos. `getVisibleWorks()` acrescenta as amostras em desenvolvimento, mantendo a validação das relações. Um trabalho público que aponte a rascunho, amostra ou ID inexistente faz a consulta falhar. As listas são ordenadas por data e, em empate, por ID para consistência entre sistemas.

Campos novos estão detalhados no [inventário editorial](conteudo.md). Os arquivos demonstrativos são versionados como exemplos de desenvolvimento; reference/ continua excluída do GitHub. Nenhum arquivo de áudio real foi fornecido.

## Anatomia do detalhe

O nome do cômodo continua pintado na parede. Quando apropriado, o objeto principal aparece antes da leitura: janela de ferramenta, mapa, capa ou moldura. Depois vêm etiqueta de dados e sumário, folha de texto e notas ao lado.

O Markdown é renderizado pelo Astro. Os títulos de nível 2 alimentam o sumário. Os dados de publicação, revisão, assuntos e maturidade ficam na etiqueta. “Quem aponta pra cá” deriva das relações recebidas, e os trabalhos relacionados mostram as relações de saída; não há lista duplicada mantida manualmente.

No celular a etiqueta antecede a folha e as notas vêm depois. A fonte de conteúdo é a mesma, sem arquivos paralelos para desktop e mobile.

## Validação e limites

Os testes separam produção e prévia em portas distintas para impedir que uma sessão de desenvolvimento em andamento masque o resultado do build. Produção usa 4322; desenvolvimento continua em 4321 para análise do autor. Os resultados efetivos ficam no acompanhamento, sem tratar teste escrito como teste executado.

Cobertura preparada: composições dos cinco cômodos em dez tamanhos de janela, entrada e detalhes em celular/desktop/ultrawide, imagens carregadas, largura total da casa, separação entre conteúdo e navegação, ausência de overflow da página, janela baixa e redimensionamento, rolagem de tabela por teclado, geração de nomes, combinação de filtros, coleções, sumário, detalhe, relações e exclusão de amostras/rascunhos da produção.

Limites que permanecem: revisão final do autor, trabalhos e mídia reais, teste do áudio com arquivo final, outros motores de navegador, toque em dispositivo físico, sitemap/feed com endereço final e deploy. A referência só fornece layouts de celular para Entrada, Sótão e Texto; os demais cômodos foram adaptados mantendo seus objetos e hierarquia.
