This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Arquitetura Token-Efficient & Regenerative

Este sistema foi projetado sob três princípios fundamentais:

1. **Economia de Tokens** — maximizar valor por token gasto  
2. **Loop de Alto Rendimento** — cada ciclo deve justificar o consumo  
3. **Comportamento Regenerativo** — o sistema se reconstrói melhor a cada execução

### Ciclo Principal: Explore → Compile → Replay

| Fase | Descrição | Consumo de Tokens |
|------|-----------|-------------------|
| **Explore** | Modelo forte descobre o melhor caminho | Alto (único) |
| **Compile** | Transforma o caminho em skill determinística | Baixo |
| **Replay** | Executa a skill sem raciocínio completo | Mínimo / Zero |
| **Regenerate** | Quando o domínio muda, regenera a skill | Sob demanda |

### Regras de Engenharia

- **Token Budget** explícito por especialista e por etapa
- **Context Engineering** + **Context Compaction** em todas as passagens
- **Context Firewall** entre sub-agentes (cada um só recebe o necessário)
- **Prefix Caching** com system prompt estável
- **Yield-based Stop Condition** (para quando o valor não justifica mais tokens)
- **Skill Distillation** após caminhos bem-sucedidos

### Resultado esperado

- Redução drástica de tokens em execuções recorrentes
- Qualidade mantida ou superior
- Sistema que se auto-otimiza com o uso
