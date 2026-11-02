---
title: "Gerador de nomes de taverna"
summary: "Junta um bicho e um adjetivo e devolve um nome para usar na mesa."
room: "oficina"
draft: false
previewOnly: true
publishedAt: "2026-10-12"
featured: true
interactive: "tavern-name"
technologies: ["JavaScript","HTML","CSS"]
status: "pronto"
tags: ["código","rpg"]
snippet: "function nomeDeTaverna() {\n  const bicho = sortear(bichos);\n  const jeito = sortear(adjetivos);\n  return `O ${bicho} ${jeito}`;\n}"
notes: ["Sortear sem repetir o nome anterior.","Separar os dados da apresentação.","A interface deve funcionar também pelo teclado."]
---

Amostra de composição baseada na referência fornecida. Este conteúdo serve para revisar o site em desenvolvimento e não é uma publicação do autor.

## Uma ideia pequena

A demonstração combina um animal e um adjetivo. O botão atualiza o nome e anuncia o resultado para leitores de tela.

## Como funciona

Os nomes possíveis são combinados em uma lista. Antes de sortear, a opção que já está na tela é removida.

```js
const opções = nomes.filter((nome) => nome !== nomeAtual);
const próximo = opções[Math.floor(Math.random() * opções.length)];
```

## O que fica para os projetos reais

Este exemplo valida a bancada e a página individual. Os projetos pessoais serão selecionados e documentados pelo autor.
