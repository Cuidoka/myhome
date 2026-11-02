# Movimento, hovers e respostas de interação

Etapa F-08, solicitada em R-011 e implementada conforme D-017. Preservar a largura total de R-009 e o menu aprovado em R-010. Resultados efetivos das verificações ficam no [acompanhamento](acompanhamento.md).

## Auditoria da referência local

Foram lidos os estilos e scripts das 12 páginas HTML e dos 12 arquivos `.dc.html`, além das propriedades do canvas.json. A busca também conferiu eventos de mouse/rolagem, requestAnimationFrame, IntersectionObserver, keyframes e animação SVG. Capturas PNG não registram movimento; o inventário abaixo deriva do código.

| Área | Movimento encontrado |
| --- | --- |
| Entrada | Objetos e polaroids endireitam e sobem 4 px em 250 ms; livros sobem 10 px em 200 ms |
| Abas compartilhadas | Deslocamento de 8 px à esquerda em 200 ms; foco por teclado compartilha o estado de hover |
| Galeria | Molduras e polaroids endireitam e sobem 4 px em 250 ms; categorias mudam o fundo |
| Estúdio | Fitas endireitam e sobem 4 px em 250 ms; botão de reprodução muda o fundo |
| Sótão | Bilhetes sobem 3 px; fichas e baús sobem 4 px, em 250 ms |
| Texto | Notas relacionadas sobem 3 px em 250 ms; links e sumário mudam de cor |
| Oficina | Botões mudam de fundo; navegação usa a transição comum |
| Mobile e sistema | Entrada mobile mantém o hover das lombadas; outras composições mobile são essencialmente estáticas |

Não foram encontradas sequências de keyframes, animações SVG ou lógica JavaScript de movimento nos arquivos fornecidos. Os scripts `.dc.html` são o carregamento de support.js e uma classe de canvas com renderVals vazio; support.js não está no pacote local. O JSON não contém propriedades de animação/movimento. Não atribuir a esse arquivo ausente comportamentos que não puderam ser analisados.

Sete das 12 páginas exportadas incluem redução de transições por preferência do sistema. A aplicação estende essa proteção a todos os cômodos e às APIs de animação usadas nesta etapa. Os filtros SVG de papel, lápis e tinta são estáticos e permanecem sem animação contínua.

## Pesquisa em fontes primárias

| Fonte consultada | Evidência e aplicação |
| --- | --- |
| [Josh W. Comeau — CSS Transitions](https://www.joshwcomeau.com/animation/css-transitions/) | Explica timing, transformações, preferência de movimento e oscilação do hover na borda. Aplicados transições curtas e respiro na área do ponteiro |
| [Josh W. Comeau — A Million Little Secrets](https://www.joshwcomeau.com/blog/whimsical-animations/) | Descreve microinterações finitas e pivôs de elementos ilustrados. Inspiração para movimentos pequenos, acionados pela interação, sem importar sua implementação |
| [Brittany Chiang — portfólio](https://brittanychiang.com/) | HTML atual consultado; usa transições em links/cartões e pequenos deslocamentos nas setas. Aplicado deslocamento discreto em links com seta |
| [Brittany Chiang — código do portfólio v4](https://github.com/bchiang7/v4/blob/main/src/styles/TransitionStyles.js) | Fonte histórica: fade e deslocamento vertical de entrada. A adaptação local usa distância menor e APIs nativas; não é uma descrição da versão atual do site |
| [Emil Kowalski — Good vs Great Animations](https://emilkowal.ski/ui/good-vs-great-animations) | Discute easing e origem coerente das animações. Aplicada curva de desaceleração suave e resposta localizada no controle/resultado |
| [MDN — IntersectionObserver](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) | Observação de entrada na área visível, sem listener contínuo de scroll |
| [MDN — Element.animate](https://developer.mozilla.org/en-US/docs/Web/API/Element/animate) | Animações pontuais canceláveis, sem alterar o layout dos elementos |
| [MDN — prefers-reduced-motion](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion) | Preferência consultada em CSS e JavaScript; mudanças durante a sessão também são respeitadas |

As referências externas orientam a adaptação; não foram copiados seus componentes, marcas ou bibliotecas. A pesquisa não altera a identidade da casa.

## Comportamentos implementados

| Situação | Resultado |
| --- | --- |
| Entrar na página ou rolar até uma seção | Entrada única de 10 px, opacidade de 0,7 a 1, duração de 420 ms e intervalo de até 80 ms entre elementos visíveis |
| Objetos, quadros e fitas com mouse ou foco visível | Endireitam e sobem 4 px, com retorno suave em 280 ms |
| Livros com mouse ou teclado | Sobem 8 px; a área inferior do link acompanha o movimento para reduzir oscilação na borda |
| Polaroids | Na Entrada, endireitam dentro do varal; na Galeria, a imagem amplia discretamente dentro do objeto |
| Abas do menu | Mantêm posição e seleção aprovadas, com timing compartilhado e resposta equivalente ao teclado |
| Botões e filtros | Fundo/borda respondem em 160 ms; pressão tem escala de 0,98 quando movimento é permitido |
| Resultado do sorteio | Texto novo recebe uma resposta de 200 ms e 3 px, sem atrasar a atualização ou o anúncio acessível |
| Restaurar resultados de filtros | Itens que voltam recebem uma passagem de opacidade de 200 ms; foco permanece no controle e o layout filtra imediatamente |
| Links com seta, caderno e baús | Pequeno deslocamento do desenho ou da seta, preservando o texto e o destino do link |

Não há loops decorativos, parallax, cursor substituído ou controle da rolagem. As entradas usam a propriedade translate, independente da rotação dos objetos, e não animam largura, margem ou posição de layout. Foco e âncoras têm prioridade: elementos já focados e páginas abertas com hash não recebem a entrada automática.

Bilhetes e fichas sem ação permanecem estáticos no hover para não sugerir links inexistentes; participam da entrada da seção. Onda decorativa sem áudio também permanece estática, sem simular reprodução.

## Arquivos e manutenção

- `src/styles/motion.css`: tokens, transições, estados de mouse/teclado/pressão e limites por tipo de ponteiro.
- `src/lib/motion.ts`: API compartilhada, animações em curso, cancelamento e resposta de resultados.
- `src/components/Motion.astro`: seleção dos elementos de entrada, observação única e preferência de movimento.
- `BaseLayout.astro`: inclui os estilos e o componente uma vez por documento.
- Filtros e sorteador usam a mesma função de resposta; novos efeitos devem reutilizar esses limites antes de criar variações.

O conteúdo permanece visível no HTML e no CSS padrão. JavaScript indisponível ou API ausente não esconde seções. Redução de movimento cancela animações nativas em andamento, desconecta o observador e remove transições; os controles continuam funcionando. Hovers com deslocamento só atuam em ponteiro fino com hover; o teclado recebe estados próprios e o toque não depende deles.

## Verificação necessária

Check, build, verify e ambas as suítes passaram localmente: 14 testes de produção e 77 de prévia. Os testes acrescentados cobrem equivalência de mouse/teclado, entrada única, cancelamento dinâmico, resposta de filtros/sorteio, toque sem hover persistente e conteúdo/navegação sem JavaScript. A suíte responsiva existente continua passando. Capturas representativas foram revisadas. Aprovação visual final do autor e testes em outros motores/dispositivos físicos permanecem separados da implementação; envio/CI registrados no acompanhamento.
