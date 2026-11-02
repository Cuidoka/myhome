# Continuidade do projeto Cuidoka

## Contexto e leitura inicial

- Responder ao usuário em português e manter a documentação do projeto em português, salvo solicitação posterior.
- Antes de iniciar uma tarefa, ler `docs/acompanhamento.md`, `docs/decisoes.md` e a fase aplicável de `docs/guia-do-projeto.md`. Consultar `docs/analise-reference.md`, `docs/conteudo.md` e `docs/operacao.md` conforme necessário.
- A aplicação inicial em Astro já foi criada. Conferir o estado real dos arquivos e as verificações antes de executar instruções de setup.
- O pedido “Do it” autorizou iniciar a implementação e integrar ao repositório `https://github.com/Cuidoka/myhome.git`. Respeitar os estados e as evidências registrados em `docs/decisoes.md` e as instruções mais recentes do usuário. O endereço mnexo de uma mensagem interrompida foi substituído por myhome.

## Restrições e escopo

- Nunca adicionar, enviar ao GitHub ou publicar `reference/`. Preservar `/reference/` no `.gitignore`.
- Não criar dependência de build ou execução sobre `reference/`. Levar para o código somente os ativos de produção escolhidos, em local próprio, sem copiar o pacote de referência inteiro.
- Preservar a direção visual e o conceito da casa descritos na análise, sujeitos às escolhas posteriores do usuário.
- Não apresentar conteúdo demonstrativo como biografia ou trabalho real do autor. Usar marcadores claros durante o desenvolvimento e verificar o conteúdo antes de publicar.
- Não acrescentar serviços, banco, autenticação, CMS, analytics ou funcionalidades fora do escopo sem registrar a necessidade e a decisão correspondente.
- Não realizar envio ao remoto, conexão de contas ou publicação sem autorização aplicável. Autorizações já dadas continuam válidas; não pedir confirmação novamente para o mesmo ato.

## Registro obrigatório do trabalho

- No início do trabalho, identificar a tarefa do acompanhamento. Se não existir, registrá-la com objetivo e dependência; distinguir correção necessária de ampliação de escopo.
- Atualizar `docs/acompanhamento.md` em cada etapa significativa e antes de encerrar uma sessão: estado, alterações, verificações, limitações e próximo passo.
- Registrar novas decisões em `docs/decisoes.md`, com origem e estado. Aprovação exige evidência da instrução do usuário; silêncio e recomendação técnica não são aprovação.
- Atualizar guia, conteúdo e operação quando uma decisão alterar o caminho ou o procedimento. Evitar estados contraditórios entre documentos.
- Registrar resultados de verificações reais. Não afirmar que um teste, deploy, aprovação ou tarefa aconteceu sem evidência. Comandos planejados devem permanecer identificados como não executados.
- Marcar uma tarefa concluída somente quando seus critérios forem atendidos. Se restar parte do trabalho, registrar exatamente o que falta e a dependência.
- Ao encontrar impedimento, registrar seu impacto e continuar tarefas independentes autorizadas. Agrupar as informações que faltam em vez de interromper repetidamente.

## Mudanças e retomada

- Seguir a ordem de dependências do guia. Ajustes de implementação dentro do escopo podem ser feitos com julgamento técnico; justificar mudanças relevantes no registro.
- Se houver pedido novo do usuário, incorporá-lo ao plano e manter o histórico da decisão substituída. Não abandonar pendências silenciosamente.
- Em uma retomada, conferir arquivos, estado do Git e verificações registradas; continuar do próximo passo explícito sem reiniciar o projeto ou refazer trabalho válido.
- Ao encerrar, informar o que mudou, como foi verificado e o que permanece pendente, indicando os documentos atualizados.
