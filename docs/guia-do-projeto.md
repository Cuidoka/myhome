# Guia do projeto — do início à manutenção

Criado em 01/11/2026. Este guia descreve o caminho proposto para o projeto. Os estados atuais ficam em [acompanhamento.md](acompanhamento.md); aprovações e propostas ficam em [decisoes.md](decisoes.md).

## Objetivo e requisitos confirmados

Construir uma home pessoal para mostrar trabalhos e falar sobre o autor, usando o material fornecido como referência. A pasta `reference/` não pode subir no GitHub. Todo o trabalho futuro deve ter decisões, etapas aprovadas, tarefas pendentes e verificações documentadas. A comunicação deve ser em português.

A facilidade de deploy é um critério pedido pelo usuário. O pedido posterior “Do it” autorizou começar com Astro + TypeScript + CSS nativo + Markdown e integrar ao repositório `Cuidoka/myhome`. MDX será acrescentado se necessário. Vercel continua como hospedagem recomendada; conta e domínio ainda não configurados.

## Como usar este guia

1. Localizar a próxima tarefa no acompanhamento e conferir suas dependências.
2. Verificar a autorização e as decisões aplicáveis, sem repetir pedidos já resolvidos.
3. Executar o trabalho, verificar o resultado e atualizar os registros.
4. Se faltar informação, apontar a dependência específica e avançar no que for independente.
5. Ao encerrar, deixar um ponto claro de retomada.

O objetivo é reduzir interrupções e desvios evitáveis. Não é possível garantir ausência de imprevistos de conteúdo, ambiente ou serviços externos; o procedimento de retomada existe para preservar a continuidade nesses casos.

## Escopo proposto da primeira versão

| Área | Entrega prevista | Limite inicial |
| --- | --- | --- |
| Entrada | Parede responsiva com boas-vindas, destaques, atualizações e acesso aos trabalhos | A apresentação e o contato devem ser encontráveis sem adivinhar a metáfora |
| Sobre e contato | Apresentação pessoal, interesses, links públicos e forma de contato | Pode começar como seção; formato final depende do conteúdo |
| Estúdio | Coleções, músicas e detalhes de faixa | Player somente para áudio disponível e destinado à publicação |
| Oficina | Projetos, detalhes, tecnologias e links | Uma demonstração interativa somente quando existir projeto escolhido para isso |
| Sótão | Campanhas, mundos, personagens e registros | Escopo acompanha os materiais reais fornecidos |
| Sala | Textos, arquivo, assuntos, maturidade e página de leitura | Recursos editoriais devem corresponder ao conteúdo existente |
| Galeria | Obras, estudos, fotos e páginas individuais | Imagens reais, com metadados e descrição adequada |
| Estrutura pública | Metadados, página não encontrada, sitemap e feed se mantido no lançamento | Sem links ou contagens fictícias |

Os cinco cômodos são a organização da referência, ainda não uma obrigação de lançar todos juntos. A escolha entre lançamento completo e progressivo é D-004. Caso um cômodo fique para depois, registrar a decisão e ajustar a navegação de forma coerente.

Não fazem parte da base proposta: login, painel administrativo, banco de dados, comentários, loja, newsletter, estatísticas de visitantes e infraestrutura de servidor própria. Novas necessidades podem alterar esse limite pelo procedimento de mudança.

## Direção visual e comportamento

Preservar a casa acolhedora, a parede creme, os papéis, o terracota, a madeira e o sálvia. Manter objetos com significado: fita para música, mapa para RPG, código impresso para projetos, molduras e polaroids para artes e fotos, lombadas para textos.

Transformar os HTMLs em componentes reutilizáveis e layouts fluidos. Não usar capturas de tela como página final. No desktop, a composição pode ser espacial; no celular, a ordem de leitura e o acesso aos mesmos conteúdos devem ser claros. Não manter versões de conteúdo divergentes por dispositivo.

Abas precisam de nomes explícitos e indicação da página atual. Elementos interativos precisam funcionar com teclado, toque e ponteiro. Decorações não devem disputar o foco com o conteúdo. O movimento deve respeitar a preferência por redução de animação.

As fontes e cores estão detalhadas na análise. O lettering autoral é uma possibilidade futura, sem impedir o início com a tipografia de referência. Adaptações de legibilidade e desempenho devem preservar o caráter visual e ter justificativa registrada quando forem relevantes.

## Fase 0 — análise e planejamento

**Tarefas:** A-01 a A-04.

- Inventariar os arquivos e comparar capturas, páginas e fontes do canvas.
- Mapear navegação, conteúdo demonstrativo, sistema visual e recursos ainda sem implementação.
- Proteger a referência no `.gitignore` e registrar a ausência inicial de aplicação e repositório.
- Criar o guia, o controle de tarefas, o registro de decisões e as instruções de continuidade.

**Saída:** documentação consultável e estado inicial verdadeiro. Nenhuma implementação ou publicação é presumida como feita.

## Fase 1 — definir a base e preparar o ambiente

**Tarefas:** P-01 a P-04.

- Consolidar stack, lançamento completo ou progressivo e forma de publicação de conteúdo.
- Preparar o inventário inicial de apresentação, trabalhos, mídia e contatos. Conteúdo ainda ausente pode ser marcado durante desenvolvimento.
- Verificar runtime e gerenciador; definir versões compatíveis e registrar os comandos reais.
- Criar a base do projeto e, quando aplicável, o repositório, preservando a exclusão de `reference/` desde o primeiro commit.
- Definir scripts e lockfile; documentar instalação, desenvolvimento, verificação e build.

**Saída:** aplicação mínima executando e compilando, com estrutura documentada. A criação da aplicação depende da definição técnica. O fluxo de conteúdo deve estar claro, mas todos os trabalhos finais não precisam estar prontos para iniciar o layout.

## Fase 2 — fundações visuais e entrada

**Tarefas:** V-01 a V-04.

- Definir tokens de cor, tipografia, espaços, bordas, sombras e movimento.
- Construir layout, navegação, rodapé e objetos reutilizáveis: papel, fita, alfinete, quadro, polaroid e livro, conforme uso real.
- Implementar a entrada com composição desktop e mobile, incluindo apresentação, contato e acesso aos trabalhos.
- Comparar com a referência e revisar tamanhos intermediários, leitura, foco e toque.

**Saída:** entrada navegável e responsiva, com direção visual revisável. Marcadores de conteúdo devem ser identificados como provisórios. Ajustes posteriores de conteúdo não invalidam a estrutura já verificada.

## Fase 3 — estrutura editorial e páginas individuais

**Tarefas:** C-01 a C-03.

- Definir coleções e metadados a partir de [conteudo.md](conteudo.md), incluindo relações entre trabalhos.
- Criar URLs estáveis, regras para rascunhos, destaques, tags, datas e itens relacionados.
- Criar layouts de texto e trabalho, com variações necessárias para projeto, faixa, campanha e obra.
- Integrar apresentação, contato e uma primeira seleção de conteúdo real. Usar amostras identificadas somente enquanto os materiais não chegam.

**Saída:** conteúdo e apresentação separados; páginas de detalhes geradas de forma consistente, com validação dos dados. Rascunhos e conteúdo de demonstração não entram por engano na versão pública.

## Fase 4 — cômodos e funcionalidades

**Tarefas:** F-01 a F-07.

Ordem proposta: Oficina, Sala, Galeria, Estúdio e Sótão. A ordem pode acompanhar os trabalhos disponíveis sem mudar o objetivo do projeto.

- Implementar cada cômodo e conectá-lo às páginas individuais e à entrada.
- Implementar filtros ou categorias quando houver conteúdo suficiente para justificá-los.
- Implementar áudio com controles acessíveis, se houver músicas; evitar reprodução automática.
- Implementar demos que pertençam aos projetos selecionados; não transformar exemplos da referência em trabalhos fictícios do autor.
- Implementar feed, metadados, compartilhamento e sitemap conforme o escopo do lançamento.
- Revisar relações entre trabalhos e remover destinos demonstrativos.

**Saída:** todas as áreas incluídas no lançamento funcionam de ponta a ponta, no desktop e no celular. Áreas adiadas ficam registradas com sua consequência para a navegação.

## Fase 5 — revisão de lançamento

**Tarefas:** Q-01 a Q-03.

- Verificar todo conteúdo público, links, imagens, áudio, datas e dados pessoais escolhidos para publicação.
- Revisar páginas em celular, tablet e desktop; considerar 390 px e 1440 px como referências, além de 320 px, 768 px e 1024 px para adaptação.
- Revisar navegação por teclado, foco visível, títulos, textos alternativos, controles e movimento reduzido.
- Executar build e verificações definidas para o projeto. Testes automatizados devem cobrir comportamentos relevantes; mudanças cosméticas não exigem testes que apenas repitam o código.
- Conferir carregamento de mídia e fontes, erros de execução, metadados e acesso direto às URLs.
- Comprovar que `reference/` não está no índice Git nem no resultado publicado e que o build não depende dela.

**Saída:** candidato a publicação com verificações e limitações registradas. Problemas que impeçam uso, exponham material indevido ou quebrem build devem ser resolvidos antes do deploy público.

## Fase 6 — deploy e entrega

**Tarefas:** L-01 a L-03.

- Preparar repositório, configuração de hospedagem, URL e decisão sobre domínio. Confirmar custos e condições do serviço escolhido no momento de contratá-lo, se houver contratação.
- Antes da ação externa, conferir a autorização aplicável. Deixar o resultado local revisável pronto; não repetir uma aprovação já concedida.
- Publicar, validar a URL pública, navegação, mídia e acesso direto às páginas; corrigir configurações de base e URLs caso necessário.
- Registrar URL, provedor, revisão publicada, data, verificações e procedimento de recuperação.
- Entregar um guia reproduzível para editar conteúdo, executar localmente, publicar e reverter uma versão.

**Saída:** versão aprovada acessível publicamente e manutenção documentada. Sem publicação efetiva, o projeto não deve ser chamado de publicado.

## Fase 7 — manutenção

**Tarefa:** M-01, recorrente depois da entrega.

Registrar correções, novas publicações e mudanças de dependências. Manter procedimentos coerentes com o projeto real. Melhorias futuras ficam no backlog e não passam a fazer parte retroativamente dos critérios do lançamento concluído.

## Critérios propostos de conclusão do projeto

- Apresentação pessoal e trabalhos reais escolhidos estão publicados, com contato funcional.
- Todas as áreas aprovadas para o lançamento estão acessíveis, sem atalhos falsos ou destinos de demonstração.
- Composição responsiva e identidade visual foram verificadas; leitura e controles essenciais funcionam com teclado e toque.
- Interações incluídas funcionam, com mídia disponível e sem erros conhecidos que impeçam o uso.
- Conteúdo de referência, rascunhos e informações não escolhidas para publicação ficam fora do site.
- Build e verificações acordadas passam; resultados e pendências residuais estão registrados.
- Deploy autorizado foi concluído e conferido; operação e recuperação estão documentadas.

## Como lidar com mudanças

1. Registrar a solicitação e o objetivo, com origem no pedido do usuário ou em evidência técnica.
2. Distinguir ajuste necessário dentro do escopo de mudança de funcionalidade, serviço ou lançamento.
3. Descrever impacto em tarefas, conteúdo e dependências; atualizar o registro de decisões quando relevante.
4. Incorporar aprovações recebidas e marcar decisões substituídas sem apagar o histórico.
5. Atualizar acompanhamento e guia. Continuar trabalho independente quando uma escolha permanecer pendente.

O usuário pode alterar o plano. Este guia preserva o contexto dessas mudanças e não cria uma obrigação de seguir decisões que ele tenha substituído.
