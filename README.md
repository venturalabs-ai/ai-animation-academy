# AI Animation Academy

[![Next.js](https://img.shields.io/badge/Next.js-16-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6)](https://www.typescriptlang.org/)

Laboratório educacional para criação de experiências de **animação com IA**, estudo de workflows multimodais e experimentação com arquitetura de software orientada a eficiência de contexto.

> **Status atual:** base técnica inicial. A aplicação ainda está em fase de scaffold e evolução; recursos de academia, geração e edição serão adicionados incrementalmente.

## Stack

- Next.js 16
- React 19
- TypeScript 5
- Tailwind CSS 4
- ESLint 9

## Executar localmente

```bash
npm ci
npm run dev
```

Abra `http://localhost:3000`.

## Verificações de qualidade

```bash
npm run lint
npm run build
```

O pipeline de CI executa as mesmas verificações em pushes e pull requests para `main`.

## Direção do projeto

A evolução planejada inclui:

- organização de módulos didáticos sobre geração de imagem, vídeo e animação;
- biblioteca de prompts, workflows e estudos de caso;
- comparação de modelos e pipelines multimodais;
- exemplos reproduzíveis com foco em consistência de personagem, storyboard e continuidade entre cenas;
- documentação de custos, limitações, segurança e conformidade de conteúdo gerado por IA.

## Arquitetura Token-Efficient & Regenerative

O projeto adota quatro fases para tarefas recorrentes de IA:

**Explore → Compile → Replay → Regenerate**

| Fase | Objetivo |
|---|---|
| Explore | descobrir uma solução quando o problema ainda é novo |
| Compile | transformar um caminho validado em regra, template ou skill reutilizável |
| Replay | executar novamente com menos contexto e menos decisões repetidas |
| Regenerate | revisar a solução quando requisitos, ferramentas ou domínio mudarem |

Princípios complementares:

- budget explícito de contexto e tokens;
- context compaction;
- isolamento de contexto entre especialistas;
- prefixos estáveis quando houver benefício de cache;
- transformação de procedimentos validados em artefatos reutilizáveis.

## Estado de maturidade

Este repositório **não deve ser interpretado como produto finalizado**. A base Next.js está funcional, mas a experiência principal da academia ainda está em desenvolvimento.

## Contribuição

Contribuições devem manter:

- TypeScript tipado;
- lint sem erros;
- build reproduzível;
- documentação atualizada quando houver mudança de comportamento.

## Autor

Wemerson Mota de Oliveira — Ventura Labs AI

[LinkedIn](https://www.linkedin.com/in/wemerson-mota-de-oliveira-81aa8226/) · [GitHub](https://github.com/venturalabs-ai)
